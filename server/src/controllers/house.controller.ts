import asyncHandler from "../utils/asyncHandler";
import { Request, Response } from "express";
import { houseSchema } from "../schemas/house.schema";
import { ApiError } from "../utils/ApiError";
import { uploadOnCloudinary } from "../utils/cloudinary";
import * as reviewService from "../services/house.services";
import { ApiResponse } from "../utils/ApiResponse";
import HouseModel from "../models/house.model";

export const houseDetail = asyncHandler(async (req: Request, res: Response) => {
  const houseimageLocalpath = await (
    req.files as { [fieldname: string]: Express.Multer.File[] }
  ).houseimage?.[0]?.path;

  const locationimageLocalpath = await (
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

  const houseExists = await HouseModel.getHouseByNumber(value.housenumber);
  if (houseExists) {
    throw new ApiError(400, "House already exists");
  }
  //upload images to cloudinary
  const houseimageResponse = await uploadOnCloudinary(houseimageLocalpath);
  let locationimageResponse;
  if (locationimageLocalpath) {
    locationimageResponse = await uploadOnCloudinary(locationimageLocalpath);
  }

  const housedata = {
    ...value,
    houseimage: houseimageResponse?.url,
    locationimage: locationimageResponse?.url,
  };
  await reviewService.houseDetail(housedata);
  res.status(201).json(new ApiResponse(201, null, "Review added successfully"));
});

export const getAllHouseWithReviews = asyncHandler(
  async (req: Request, res: Response) => {
    const houses = await reviewService.getAllHouseWithReviews();
    res
      .status(200)
      .json(new ApiResponse(200, houses, "All houses with reviews"));
  }
);
