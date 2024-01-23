import { ApiError } from "../utils/ApiError";
import logger from "../logger";
import db from "../db";

export default class LikeModel {
  static async setLike(reviewId: number, userId: number, add: boolean) {
    try {
      if (add) {
        const result = await db("likes")
          .returning("*")
          .insert({ review_id: reviewId, user_id: userId });
        return result;
      } else {
        const result = await db("likes")
          .returning("*")
          .where({ review_id: reviewId, user_id: userId })
          .del();
        return result;
      }
    } catch (err) {
      logger.error(err);
      throw new ApiError(400, "Database error. Error updating like.");
    }
  }

  static async checkUser(reviewId: number, userId: number) {
    try {
      const result = await db("likes")
        .returning("*")
        .where({ review_id: reviewId, user_id: userId });
      return result;
    } catch (err) {
      throw new ApiError(
        400,
        "Database error. Error geting user in likes table"
      );
    }
  }
}
