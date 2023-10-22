import express from "express";

import {
  signUp,
  signIn,
  refreshToken,
  signOut,
} from "../controllers/authController/auth.js";
import { middleware } from "../controllers/middlewareController/middlewareController.js";

const authRouter = express.Router();

authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", signIn);
authRouter.post("/refresh-token", refreshToken);
authRouter.post("/sign-out", middleware, signOut);

export default authRouter;
