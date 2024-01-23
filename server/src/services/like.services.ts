import LikeModel from "../models/like.model";
import logger from "../logger";
import { ApiError } from "../utils/ApiError";
import UserModel from "../models/user.model";

export const setLike = async (
  reviewId: number,
  email: string,
  add: boolean
) => {
  try {
    const user = await UserModel.getByEmail(email);
    const result = await LikeModel.setLike(reviewId, user.id, add);
    return result;
  } catch (err) {
    logger.error(err);
    throw new ApiError(400, "Database error. Error setting like.");
  }
};

export const checkUser = async (reviewId: number, email: string) => {
  try {
    const user = await UserModel.getByEmail(email);
    const result = await LikeModel.checkUser(reviewId, user.id);
    if (result.length === 0) {
      return false;
    }
    return true;
  } catch (err) {
    logger.error(err);
    throw new ApiError(400, "Database error. Error checking user in likes.");
  }
};
