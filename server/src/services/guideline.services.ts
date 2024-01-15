import GuidelineModel from "../models/guideline.model";
import logger from "../logger";
import { ApiError } from "../utils/ApiError";


export const getguidelines = async (data: number) => {
  try{
    const result = await GuidelineModel.getGuidlines(data);
    return result;
  }catch(err){
    logger.error(err);
    throw new ApiError(
      400,
      "Database error. Error getting guidlines. Please check your input and try again"
    );
  }
};




