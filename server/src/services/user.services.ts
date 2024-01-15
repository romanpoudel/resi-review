import ReviewModel from "../models/reviews.model";
import { TReview } from "../types/review";

export const reviewHouse = async(data: TReview) => {

  const review = {
    rating: parseInt(data.rating),
    price: parseInt(data.estimate),
    review: data.review,
    owner: data.owner? true : false,
    likes: data.likes || 0,
    anonymous: data.anonymous? true : false,
    user_id: data.user_id,
    house_id: 23,//data.house_id correct url client side,
  };
  const response=await ReviewModel.addReview(review);
  return response;
};
