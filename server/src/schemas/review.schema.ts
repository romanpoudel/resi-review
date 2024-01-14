import Joi from "joi";


export const reviewSchema = Joi.object({
  rating: Joi.string().trim().min(1).required(),
  estimate: Joi.string().trim().min(1).required(),
  review: Joi.string().trim().min(1).required(),
  owner: Joi.string().optional().allow(""),
  likes: Joi.number().optional().allow(""),
  anonymous: Joi.string().optional().allow(""),
  user_id: Joi.number().optional().allow(""),
  house_id: Joi.string().required(),
});