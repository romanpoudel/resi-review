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

  static async getHouseById(id: number) {
    return db("houses").where({ id }).first();
  }
}
