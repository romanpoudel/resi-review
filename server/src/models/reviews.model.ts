import db from "../db";
import { review } from "../types/review";
import { ApiError } from "../utils/ApiError";


export default class ReviewModel {
  static async getAllReviews() {
    return db("reviews").select("*");
  }

  static async addReview(review:review) {
    try {
      const result = await db("houses").returning("*").insert(review);
      return result;
    } catch (err) {
      throw new ApiError(
        400,
        "Database error. Error updating reviews. Please check your input and try again"
      );
    }
  }
}
