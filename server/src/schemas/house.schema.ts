import Joi from "joi";

const facilities = Joi.object({
  wifi: Joi.boolean(),
  water: Joi.boolean(),
  security: Joi.boolean(),
  parking: Joi.boolean(),
  furniture: Joi.boolean(),
  open247: Joi.boolean(),
  separatewashroom: Joi.boolean(),
  sunlight: Joi.boolean(),
});

export const houseSchema = Joi.object({
  housenumber: Joi.string().trim().min(4).required(),
  houseimage: Joi.string().required(),
  location: Joi.string().trim().min(3).message("Enter a valid location").required(),
  locationimage: Joi.string().optional().allow(""),
  guidelines: Joi.string().trim().optional().allow(""),
  price: Joi.number().optional().allow(""),
  category: Joi.string().valid("room", "flat", "house").required(),
  contact: Joi.string().trim().min(9).max(20).optional().allow(""),
  facilities: facilities,
});
