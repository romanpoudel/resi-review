import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import { ApiResponse } from "../utils/ApiResponse";
import * as likeService from "../services/like.services";
import jwt from "jsonwebtoken";
import config from "../config";

export const setLike = asyncHandler(async (req: Request, res: Response) => {
  const reviewId = req.query.review_id;
  const add = req.query.add;

  const token = req.cookies.accessToken;
  const decodedToken =await jwt.verify(
    token,
    config.jwt.accessTokenSecret!
  ) as jwt.JwtPayload;
  if (!reviewId) {
    res.status(400).json(new ApiResponse(400, null, "review_id is required"));
    return;
  }
  const guidelines = await likeService.setLike(
    Number(reviewId),
    decodedToken.email!,
    Boolean(add)
  );
  res
    .status(201)
    .json(new ApiResponse(200, guidelines, "Likes set successfully"));
});

export const checkUser = asyncHandler(async (req: Request, res: Response) => {
  const reviewId = req.query.review_id;
  const token = req.cookies.accessToken;
  const decodedToken = jwt.verify(
    token,
    config.jwt.accessTokenSecret!
  ) as jwt.JwtPayload;
  if (!reviewId) {
    res.status(400).json(new ApiResponse(400, null, "review_id is required"));
    return;
  }
  const user = await likeService.checkUser(Number(reviewId), decodedToken.email!);
  res
    .status(201)
    .json(new ApiResponse(200, { user }, "Checked like successfully"));
});
