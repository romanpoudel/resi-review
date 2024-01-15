import { THouse } from "../types/house";
import HouseModel from "../models/house.model";
import FacilityModel from "../models/facility.model";
import GuidelineModel from "../models/guideline.model";
import logger from "../logger";
import { ApiError } from "../utils/ApiError";
import db from "../db";
import ReviewModel from "../models/reviews.model";

export const addHouseDetail = async (data: THouse) => {
  const houseData = {
    housenumber: data.housenumber,
    houseimage: data.houseimage,
    location: data.location.toLocaleLowerCase(),
    locationimage: data.locationimage,
    price: data.price,
    category: data.category,
    contact: data.contact,
    rating: data.rating,
  };
  const facilities = data.facilities;
  let guidelines: string[] = [];
  if (data.guidelines) {
    guidelines = data.guidelines.includes(".")
      ? data.guidelines.split(".")
      : data.guidelines.trim() !== ""
        ? [data.guidelines]
        : [];
  }

  try {
    //start transaction
    await db.transaction(async () => {
      const [id]: number[] = await HouseModel.addHouse(houseData);
      const hid = JSON.parse(JSON.stringify(id));

      await FacilityModel.addFacility(facilities!, hid.id);

      if (guidelines) {
        await Promise.all(
          guidelines.map(async (guideline) => {
            await GuidelineModel.addGuidlines(guideline, hid.id);
          })
        );
      }
      // trx.commit();
    });
    return;
  } catch (err) {
    logger.error(err);
    throw new ApiError(
      400,
      "Database error. Error in review service. Please check your input and try again"
    );
  }
  return;
};

export const getAllHouseWithReviews = async () => {
  try {
    const houses = await HouseModel.getAllHouseWithReviews();
    return houses;
  } catch (err) {
    logger.error(err);
    throw new ApiError(
      400,
      "Database error. Error in getting all houses with reviews."
    );
  }
};

export const getAllHouseWithReviewsByLocation=async (location:string)=>{
  try {
    const houses = await HouseModel.getAllHouseWithReviewsByLocation(location);
    return houses;
  } catch (err) {
    logger.error(err);
    throw new ApiError(
      400,
      "Database error. Error in getting all houses with reviews by location."
    );
  }
};

export const getHouseDetail = async (id:number) => {
  try {
    const houses = await HouseModel.getHouseById(id);
    return houses;
  } catch (err) {
    logger.error(err);
    throw new ApiError(
      400,
      "Database error. Error in getting house with id."
    );
  }
};

export const getReviewsOfHouse = async (id:number) => {
  try {
    const reviews = await ReviewModel.getReviewByHouseId(id);
    return reviews;
  } catch (err) {
    logger.error(err);
    throw new ApiError(
      400,
      "Database error. Error in getting reviews of house."
    );
  }
};