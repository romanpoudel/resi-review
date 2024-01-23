import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import { ApiResponse } from "../utils/ApiResponse";
import * as likeService from "../services/like.services";

export const setLike = asyncHandler(async (req: Request, res: Response) => {
  const reviewId = req.query.review_id;
  const userId = req.query.user_id;
  const add = req.query.add;
  if (!reviewId) {
    res.status(400).json(new ApiResponse(400, null, "review_id is required"));
    return;
  }
  if (!userId) {
    res.status(400).json(new ApiResponse(400, null, "user_id is required"));
    return;
  }
  const guidelines = await likeService.setLike(
    Number(reviewId),
    Number(userId),
    Boolean(add)
  );
  res
    .status(201)
    .json(new ApiResponse(200, guidelines, "Likes set successfully"));
});
