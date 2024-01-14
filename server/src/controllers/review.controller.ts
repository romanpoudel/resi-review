import asyncHandler from "../utils/asyncHandler";
import { Request, Response } from "express";
import { houseSchema } from "../schemas/house.schema";
import { ApiError } from "../utils/ApiError";
import { uploadOnCloudinary } from "../utils/cloudinary";
import * as reviewService from "../services/review.services";

export const writeReview = asyncHandler(async (req: Request, res: Response) => {
  const houseimageLocalpath = (
    req.files as { [fieldname: string]: Express.Multer.File[] }
  ).houseimage?.[0]?.path;

  const locationimageLocalpath = (
    req.files as { [fieldname: string]: Express.Multer.File[] }
  ).locationimage?.[0]?.path;

  const { error, value } = houseSchema.validate({
    ...req.body,
    houseimage: houseimageLocalpath,
    locationimage: locationimageLocalpath,
  });

  if (error) {
    throw new ApiError(400, error.message);
  }

  //upload images to cloudinary
  const houseimageResponse = await uploadOnCloudinary(houseimageLocalpath);
  const locationimageResponse = await uploadOnCloudinary(
    locationimageLocalpath
  );

  const housedata = {
    ...value,
    houseimage: houseimageResponse?.url,
    locationimage: locationimageResponse?.url,
  };
  await reviewService.writeReview(housedata);
  res.status(201).json({ value: housedata });
});
