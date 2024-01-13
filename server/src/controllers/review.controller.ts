import asyncHandler from "../utils/asyncHandler";
import { Request, Response } from "express";
// import * as reviewService from "../services/review.services";
import { houseSchema } from "../schemas/house.schema";
import { ApiError } from "../utils/ApiError";
import { uploadOnCloudinary } from "../utils/cloudinary";

export const writeReview = asyncHandler(async (req: Request, res: Response) => {
  const houseimageLocalpath = (
    req.files as { [fieldname: string]: Express.Multer.File[] }
  ).houseimage?.[0]?.path;
  const locationimageLocalpath = (
    req.files as { [fieldname: string]: Express.Multer.File[] }
  ).locationimage?.[0]?.path;
  console.log("loc", req.files);
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

  //remove the locally saved temporary files
  const housedata = {
    ...value,
    houseimage: houseimageResponse?.url,
    locationimage: locationimageResponse?.url,
  };
  // await reviewService.writeReview(value);
  res.status(201).json({ value: housedata });
});
