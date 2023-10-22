import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRouter from "./routers/auth.js";
const app = express();
const PORT = process.env.port || 8000;

const URI = process.env.DB;

//đọc thêm về 4 dòng này trong quá trình kết nối với mongo DB
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", authRouter);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`connected to DB on port ${PORT}`);
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
