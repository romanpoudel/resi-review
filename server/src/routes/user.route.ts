import { Router } from "express";
import { loggedInUser } from "../controllers/user.controller";

const router = Router();

router.get("/me", loggedInUser);


export default router;
