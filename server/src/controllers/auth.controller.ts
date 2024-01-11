import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import * as authService from "../services/auth.services";
import { ApiResponse } from "../utils/ApiResponse";
import { registerSchema, loginSchema } from "../schemas/user.schema";
import { ApiError } from "../utils/ApiError";
import { RequestWithUser } from "../interfaces/requestUser";
import { options } from "../utils/cookieOption";

export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { error, value } = registerSchema.validate(req.body);
    if (error) {
      throw new ApiError(400, error.message);
    }
    delete value.confirmPassword;
    const user = await authService.registerUser(value);
    res.status(201).json(new ApiResponse(201, user, "User created"));
  }
);

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { error, value } = loginSchema.validate(req.body);
  if (error) {
    throw new ApiError(400, error.message);
  }
  const response = await authService.loginUser(value);
  res
    .status(200)
    .cookie("accessToken", response.accessToken, options)
    .cookie("refreshToken", response.refreshToken, options)
    .json(new ApiResponse(200, response, "User logged in"));
});

export const logoutUser = asyncHandler(
  async (req: RequestWithUser, res: Response) => {
    if (req.user) {
      await authService.logoutUser(req.user.username);
    }
    res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json(new ApiResponse(200, {}, "User logged out"));
  }
);
