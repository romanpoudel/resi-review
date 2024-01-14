import bcrypt from "bcrypt";
import { TUser } from "../types/user";
import UserModel from "../models/user.model";
import { ApiError } from "../utils/ApiError";
import generateAccessAndRefreshToken from "../utils/tokenGenerator";

const SALT_ROUNDS = 10;

export const registerUser = async (body: TUser) => {
  const hashedPassword = await bcrypt.hash(body.password, SALT_ROUNDS);
  const userExists =
    (await UserModel.getByEmail(body.email)) ||
    (await UserModel.getByUsername(body.username));
  if (userExists) {
    throw new ApiError(400, "User already exists");
  }
  await UserModel.addUser({ ...body, password: hashedPassword });
  const user=await UserModel.getByUsername(body.username);
  if (!user) {
    throw new ApiError(500, "Something went wrong while registering user");
  }
  user.password = undefined;
  user.refreshToken = undefined;

  return user;
};

export const loginUser = async (body: TUser) => {
  const { accessToken, refreshToken } = generateAccessAndRefreshToken(body);
  const user = await UserModel.getByEmail(body.email);
  if (!user) {
    throw new ApiError(400, "Invalid email");
  }
  const validPassword = await bcrypt.compare(body.password, user.password);
  if (!validPassword) {
    throw new ApiError(400, "Invalid password");
  }
  await UserModel.updateUser(user.username, { ...user, refreshToken });
  user.refreshToken = refreshToken;
  user.accessToken = accessToken;
  user.password = undefined;
  return user;
};

export const logoutUser = async (username: string) => {
  await UserModel.clearRefreshToken(username);
  return;
};
