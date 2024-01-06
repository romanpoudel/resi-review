import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
// import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
// import bcrypt from "bcrypt";
// import generateAccessAndRefreshToken from "../utils/tokenGenerator";
import { RequestWithUser } from "../interfaces/requestUser";
import { options } from "../utils/cookieOption";
import { loginSchema, registerSchema } from "../schemas/user.schema";

export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const {error,value} = await registerSchema.validateAsync(req.body);
    res.status(201).json(new ApiResponse(201,  "User created"));
  }
);

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const {error,value} = await loginSchema.validateAsync(req.body);
});

export const logoutUser = asyncHandler(
  async (req: RequestWithUser, res: Response) => {
    
    res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json(new ApiResponse(200, {}, "User logged out"));
  }
);