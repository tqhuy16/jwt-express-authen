import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

import { UsersModel } from "../../models/UserModel.js";

dotenv.config();

let refreshTokens = [];

//genetrate accessToken
const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.JWT_ACCESS_KEY,
    {
      expiresIn: "30s",
    }
  );
};

//genetrate refreshToken
const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.JWT_REFRESH_KEY,
    {
      expiresIn: "10m",
    }
  );
};

export const signUp = async (req, res) => {
  try {
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    //Create a new user
    const newUser = await new UsersModel({
      username,
      password: hashed,
    });

    //Save the new user
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const signIn = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await UsersModel.findOne({ username: userName });
    if (!user) {
      return res.status(404).json("Wrong username!");
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(404).json("Wrong password!");
    }
    if (user && validPassword) {
      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);

      refreshTokens.push(refreshToken);

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      });
      const { password, ...others } = user._doc;
      return res.status(200).json({ ...others, accessToken });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const refreshToken = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.status(401).json("You're not authenticated!");
  }

  //check xem refresh token gui len co phai cua minh khong
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json("Refresh token is not valid");
  }
  jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (error, user) => {
    if (error) {
      console.log("error", error);
    }

    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

    //crete accessToken, refreshToken
    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    refreshTokens.push(newRefreshToken);

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: true,
      path: "/",
      sameSite: "strict",
    });
    return res.status(200).json({ accessToken: newAccessToken });
  });
};

export const signOut = async (req, res) => {
  res.clearCookie("refreshToken");
  refreshTokens = refreshTokens.filter(
    (token) => token !== req.cookies.refreshToken
  );
  return res.status(200).json("logged out!");
};
