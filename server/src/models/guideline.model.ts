import db from "../db";
import { ApiError } from "../utils/ApiError";
import logger from "../logger";

export default class GuidelineModel {
  static async addGuidlines(guidline: string,id:number) {
    try {
      const result = await db("guidlines").returning("*").insert({rule:guidline,house_id:id});
      return result;
    } catch (err) {
      logger.error(err);
      throw new ApiError(
        400,
        "Database error. Error updating guidlines. Please check your input and try again"
      );
    }
  }

  static async getGuidlines(id:number) {
    try {
      const result = await db("guidlines").select("*").where({house_id:id});
      return result;
    } catch (err) {
      logger.error(err);
      throw new ApiError(
        400,
        "Database error. Error getting guidlines. Please check your input and try again"
      );
    }
  }

}
