import knex from "knex";
import { TUser } from "../types/user";
import db from "../db";
import { ApiError } from "../utils/ApiError";
import logger from "../logger";

export default class UserModel {
  static async getAllUsers() {
    return knex("users").select("username", "email", "role", "image_url");
  }

  static async addUser(user: TUser) {
    try {
      const result =await db("users").insert(user);
      return result;
    } catch (err) {
      logger.error(err);
      throw new ApiError(400,"Database error. Please check your input and try again");
    }
  }

  static async getUserById(id: number) {
    return db("users").where({ id }).first();
  }
  
  static async getByEmail(email: string) {
    return db("users").where({ email }).first();
  }

  static async getByUsername(username: string) {
    return db("users").where({ username }).first();
  }

  static async updateUser(username: string, user: TUser) {
    return db("users").where({ username }).update(user);
  }

  static async deleteUser(username: string) {
    return db("users").where({ username }).del();
  }

  static async updateRefreshToken(username: string, refreshToken: string) {
    return db("users").where({ username }).update({ refreshToken });
  }

  static async clearRefreshToken(username: string) {
    return db("users").where({ username }).update({ refreshToken: null });
  }
}
