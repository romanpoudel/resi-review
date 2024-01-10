import jwt from "jsonwebtoken";
import config from "../config";
import { User } from "../types/user";
import asyncHandler from "./asyncHandler";
import { Request, Response } from "express";
import { ApiError } from "./ApiError";
import  UserModel from "../models/user.model";
import { ApiResponse } from "./ApiResponse";
import { options } from "./cookieOption";

const generateAccessAndRefreshToken = (user: User) => {
  const accessToken = jwt.sign(user, config.jwt.accessTokenSecret!, {
    expiresIn: config.jwt.accessTokenExpiresIn,
  });
  const refreshToken = jwt.sign(
    { username: user.username },
    config.jwt.refreshTokenSecret!,
    {
      expiresIn: config.jwt.refreshTokenExpiresIn,
    }
  );
  return { accessToken, refreshToken };
};

export const refreshAccessToken = asyncHandler(
  async (req: Request, res: Response) => {
    const incomingRefreshToken =
      req.cookies.refreshToken || req.body.refreshToken;
    if (!incomingRefreshToken) {
      throw new ApiError(401, "Unauthorized Request");
    }
    try {
      const decodedToken = jwt.verify(
        incomingRefreshToken,
        config.jwt.refreshTokenSecret!
      ) as jwt.JwtPayload;
      
      if (!decodedToken || !decodedToken.exp) {
        throw new ApiError(401, "Refresh token has expired");
      }
      const user =await UserModel.getByUsername(decodedToken.username);
      if (!user) {
        throw new ApiError(401, "Invalid refresh token");
      }
      if (user.refreshToken !== incomingRefreshToken) {
        throw new ApiError(401, "Invalid refresh token");
      }
      const { accessToken, refreshToken } =
        generateAccessAndRefreshToken(user);

      res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
          new ApiResponse(
            200,
            { accessToken, refreshToken },
            "Access token refreshed"
          )
        );
    } catch (error: unknown) {
      throw new ApiError(401, (error as Error)?.message || "Invalid refresh token");
    }
  }
);


export default generateAccessAndRefreshToken;