import knex from "knex";
import { TUser } from "../types/user";
import db from "../db";
import { ApiError } from "../utils/ApiError";
import logger from "../logger";
import { THouse } from "../types/house";

export default class UserModel {
  static async getAllUsers() {
    return knex("users").select("username", "email", "role", "image_url");
  }

  static async addUser(house: THouse) {
    try {
      const result =await db("houses").insert(house);
      return result;
    } catch (err) {
      logger.error(err);
      throw new ApiError(400,"Database error. Please check your input and try again");
    }
  }

  static async getHouseById(id: number) {
    return db("houses").where({ id }).first();
  }
  

}
