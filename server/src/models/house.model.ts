import db from "../db";
import { ApiError } from "../utils/ApiError";
import logger from "../logger";
import { THouse } from "../types/house";

export default class HouseModel {
  static async getAllHouses() {
    return db("houses").select("*");
  }

  static async addHouse(house: THouse) {
    try {
      const result = await db("houses").insert(house).returning("id");
      return result;
    } catch (err) {
      logger.error(err);
      throw new ApiError(
        400,
        "Database error. Error updating house. Please check your input and try again"
      );
    }
  }

  static async getHouseByNumber(housenumber: string) {
    return db("houses").where({ housenumber }).first();
  }

  static async getAllHouseWithReviews() {
    return db("houses")
      .leftJoin("reviews", "houses.id", "=", "reviews.house_id")
      .select("houses.*")
      .avg({ rating: "reviews.rating" })
      .avg({ price: "reviews.price" })
      .count({ total_reviews: "reviews.rating" })
      .groupBy("houses.id");
  }

  static async getHouseById(id: number) {
    return db("houses")
      .leftJoin("reviews", "houses.id", "=", "reviews.house_id")
      .select("houses.*")
      .avg({ rating: "reviews.rating" })
      .avg({ price: "reviews.price" })
      .count({ total_reviews: "reviews.rating" })
      .groupBy("houses.id")
      .where("houses.id", id).first();
  }

  static async getAllHouseWithReviewsByLocation(location:string){
    return db("houses")
      .leftJoin("reviews", "houses.id", "=", "reviews.house_id")
      .select("houses.*")
      .avg({ rating: "reviews.rating" })
      .avg({ price: "reviews.price" })
      .count({ total_reviews: "reviews.rating" })
      .groupBy("houses.id")
      .whereILike("houses.location", `%${location}%`);
  }

  static async getHouseAccordingToCategory(category:string){
    return db("houses")
      .leftJoin("reviews", "houses.id", "=", "reviews.house_id")
      .select("houses.*")
      .avg({ rating: "reviews.rating" })
      .avg({ price: "reviews.price" })
      .count({ total_reviews: "reviews.rating" })
      .groupBy("houses.id")
      .whereILike("houses.category", category);

  }
}
