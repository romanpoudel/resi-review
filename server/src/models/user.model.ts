import knex from "knex";
import { User } from "../types/user";
import db from "../db";
import { ApiError } from "../utils/ApiError";

export default class UserModel {
  static async getAllUsers() {
    return knex("users").select("username", "email", "role", "image_url");
  }

  static async addUser(user: User) {
    try {
      console.log("Instering user");
      const result =await db("users").insert(user);
      console.log("Insert result", result);
      return result;
    } catch (err) {
      console.log(err);
      throw new ApiError(400,"Database error. Please check your input and try again");
    }
  }

  static async getByEmail(email: string) {
    return db("users").where({ email }).first();
  }

  static async getByUsername(username: string) {
    return db("users").where({ username }).first();
  }

  static async updateUser(username: string, user: User) {
    return db("users").where({ username }).update(user);
  }

  static async deleteUser(username: string) {
    return db("users").where({ username }).del();
  }

  static async clearRefreshToken(username: string) {
    return db("users").where({ username }).update({ refreshToken: null });
  }
}
