import express from "express";
import userRouter from "./routes/user.route";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();

//middlwares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/users", userRouter);
app.use(errorHandler);

export { app };