import { Router } from "express";
import { loggedInUser, reviewHouse } from "../controllers/user.controller";

const router = Router();

router.get("/me", loggedInUser);

router.post("/house-review", reviewHouse);

export default router;
