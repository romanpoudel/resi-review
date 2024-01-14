import { ApiError } from "../utils/ApiError";
import asyncHandler from "../utils/asyncHandler";
import jwt from "jsonwebtoken";
import config from "../config";
import UserModel from "../models/user.model";
import { NextFunction, Response } from "express";
import { IRequestWithUser } from "../interfaces/requestUser";

export const verifyJWT = asyncHandler(
  async (req: IRequestWithUser, _res:Response, next: NextFunction) => {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new ApiError(401, "Unauthorized");
    }
    const decodedToken = jwt.verify(
      token,
      config.jwt.accessTokenSecret!
    ) as jwt.JwtPayload;
    
    const user = await UserModel.getByEmail(decodedToken?.email);
    if (!user) {
      throw new ApiError(401, "Invalid access token");
    }
    user.password = "";
    user.refreshToken = "";
    req.user = user;
    next();
  }
);
