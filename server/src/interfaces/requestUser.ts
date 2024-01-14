import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { TUser } from "../types/user";
import { Request } from "express";
export interface IRequestWithUser
  extends Request<ParamsDictionary, unknown, unknown, ParsedQs> {
  user?: TUser;
}
