import asyncHandler from "../utils/asyncHandler";
import { Request, Response } from "express";
// import * as reviewService from "../services/review.services";
import { houseSchema } from "../schemas/house.schema";
import { ApiError } from "../utils/ApiError";

export const writeReview = asyncHandler(async (req: Request, res: Response) => {
  const { error, value } = await houseSchema.validate(req.body);
  console.log(error);
  if (error) {
    throw new ApiError(400, error.message);
  }
  // await reviewService.writeReview(value);
  res.json({"value":value});
});
