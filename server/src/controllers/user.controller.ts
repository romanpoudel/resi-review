import { Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { IRequestWithUser } from "../interfaces/requestUser";
import { reviewSchema } from "../schemas/review.schema";
import * as userService from "../services/user.services";
import { uploadOnCloudinary } from "../utils/cloudinary";

export const loggedInUser = asyncHandler(
  async (req: IRequestWithUser, res: Response) => {
    res.json(new ApiResponse(200, req.user, "User logged in"));
  }
);

export const reviewHouse = asyncHandler(
  async (req: IRequestWithUser, res: Response) => {
    const { error, value } = reviewSchema.validate(req.body);
    if (error) {
      throw new ApiError(400, error.message);
    }
    const data = await userService.reviewHouse({
      ...value,
      user_id: req.user?.id,
    });
    res.status(201).json(new ApiResponse(201, data, "Review created"));
  }
);

export const uploadProfileImage = asyncHandler(
  async (req: IRequestWithUser, res: Response) => {
    console.log("files", req.file);
    if (!req.user) {
      throw new ApiError(400, "User is required");
    }
    const profileimageLocalpath = await req.file?.path;
    if (!profileimageLocalpath) {
      throw new ApiError(400, "Profile image is required");
    }
    const profileimageResponse = await uploadOnCloudinary(
      profileimageLocalpath
    );
    if (!profileimageResponse) {
      throw new ApiError(400, "Error uploading profile image");
    }
    const data = await userService.uploadProfileImage(
      profileimageResponse?.url,
      req.user
    );

    res.status(201).json(new ApiResponse(201, data, "Profile image uploaded"));
  }
);
