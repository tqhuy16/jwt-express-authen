import jwt from "jsonwebtoken";

//chưa cần quan tâm đến middle ware, có thể tìm hiều căn bản rồi tìm hiểu phần này sau.
export const middleware = (req, res, next) => {
  const token = req.headers.token;
  if (token) {
    const accessToken = token.split(" ")[1];
    jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (error, user) => {
      if (error) {
        return res.status(403).json("Token is not valid");
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("you're not authenticated");
  }
};
