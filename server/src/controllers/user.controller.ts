import { Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { IRequestWithUser } from "../interfaces/requestUser";
import { reviewSchema } from "../schemas/review.schema";
import * as reviewService from "../services/user.services";

export const loggedInUser = asyncHandler(
  async (req: IRequestWithUser, res: Response) => {
    res.json(
      new ApiResponse(
        200,
        { username: req.user?.username, email: req.user?.email },
        "User logged in"
      )
    );
  }
);

export const reviewHouse = asyncHandler(
  async (req: IRequestWithUser, res: Response) => {
    const { error, value } = reviewSchema.validate(req.body);
    if (error) {
      throw new ApiError(400, error.message);
    }
    const data = await reviewService.reviewHouse({
      ...value,
      user_id: req.user?.id,
    });
    res.status(201).json(new ApiResponse(201, data, "Review created"));
  }
);
