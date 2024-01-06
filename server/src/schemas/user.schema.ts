import Joi from "joi";

export const registerSchema = Joi.object({
  username: Joi.string().trim().min(8).required(),
  email: Joi.string().trim().email().required(),
  password: Joi.string()
    .min(8)
    .pattern(new RegExp("^(?=.*[!@#$])(?=.*[A-Z])(?=.*[0-9]).{8,}$"))
    .required(),
  repeat_password: Joi.ref("password"),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().trim().required(),
  password: Joi.string().min(8).required(),
});
