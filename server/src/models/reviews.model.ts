import db from "../db";
import { TReviewDB } from "../types/review";
import { ApiError } from "../utils/ApiError";


export default class ReviewModel {
  static async getAllReviews() {
    return db("reviews").select("*");
  }

  static async addReview(review:TReviewDB) {
    try {
      const result = await db("reviews").insert(review).returning("*");
      return result;
    } catch (err) {
      console.log(err);
      throw new ApiError(
        400,
        "Database error. Error updating reviews. Please check your input and try again"
      );
    }
  }
}
