import { Response } from "express";
import asyncHandler from "../utils/asyncHandler";
// import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { IRequestWithUser } from "../interfaces/requestUser";

export const loggedInUser = asyncHandler(
  async (req: IRequestWithUser, res: Response) => {
    res.json(
      new ApiResponse(
        200,
        { username: req.user?.username, email: req.user?.email },
        "User logged in"
      )
    );
  }
);
