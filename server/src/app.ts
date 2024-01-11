import express from "express";
import routes from "./routes/index";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/error.middleware";
import db from "./db";
import logger from "./logger";
import cors from "cors";

const app = express();

//middlwares
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", routes);
app.use(errorHandler);

//check database connection
db.raw("SELECT 1").then(() => {
  logger.info("Database connected");
}).catch((err) => {
  logger.error("Error connecting to database",err);
});

export { app };