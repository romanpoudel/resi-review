import ReviewModel from "../models/reviews.model";
import UserModel from "../models/user.model";
import { TReview } from "../types/review";
import { TUser } from "../types/user";

export const reviewHouse = async (data: TReview) => {
  const review = {
    rating: parseInt(data.rating),
    price: parseInt(data.estimate),
    review: data.review,
    owner: data.owner ? true : false,
    likes: data.likes || 0,
    anonymous: data.anonymous ? true : false,
    user_id: data.user_id,
    house_id: parseInt(data.house_id!),
  };
  const response = await ReviewModel.addReview(review);
  return response;
};

export const uploadProfileImage = async (filename: string, user: TUser) => {
  const response = await UserModel.uploadProfileImage(filename, Number(user.id));
  return response;
};
