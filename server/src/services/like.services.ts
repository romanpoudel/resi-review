import LikeModel from "../models/like.model";
import logger from "../logger";
import { ApiError } from "../utils/ApiError";

export const setLike = async (reviewId: number,userId:number,add:boolean) => {
  try {
    console.log(add);
    const result = await LikeModel.setLike(reviewId,userId,add);
    return result;
  } catch (err) {
    logger.error(err);
    throw new ApiError(
      400,
      "Database error. Error getting guidlines. Please check your input and try again"
    );
  }
};
