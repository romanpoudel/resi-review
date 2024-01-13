import { v2 as cloudinary } from "cloudinary";
import config from "../config";
import logger from "../logger";
import fs from "fs";

cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret,
});

export const uploadOnCloudinary = async (localFilePath: string) => {
  try {
    console.log("path", localFilePath);
    if (!localFilePath) {
      throw new Error("Please provide a valid path");
    }
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "image",
    });
    return response;
  } catch (err) {
    logger.error(err);
    fs.unlinkSync(localFilePath);
    return null;
  }
};
