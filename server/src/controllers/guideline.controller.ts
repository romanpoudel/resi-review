import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import { ApiResponse } from "../utils/ApiResponse";
import { getguidelines } from "../services/guideline.services";

export const getGuidelines = asyncHandler(
  async (req: Request, res: Response) => {
    const houseId = req.query.house_id;
    if (!houseId) {
      res.status(400).json(new ApiResponse(400, null, "house_id is required"));
      return;
    }
    const guidelines = await getguidelines(Number(houseId));
    res
      .status(200)
      .json(new ApiResponse(200, guidelines, "Guidelines fetched successfully"));
  }
);
