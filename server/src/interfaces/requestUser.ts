import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { User } from "../types/user";
import { Request } from "express";

export interface RequestWithUser
  extends Request<ParamsDictionary, unknown, unknown, ParsedQs> {
  user?: User;
}