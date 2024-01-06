import { NextFunction, Request, Response } from "express";
import { ApiError } from "./ApiError";

type AsyncRequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

const asyncHandler = (fn: AsyncRequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      const err = error as ApiError;
      res.status(err.statusCode || 500).json({
        success: false,
        message: err.message,
      });
    }
  };
};

export default asyncHandler;
