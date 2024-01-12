import { Router } from "express";
import { loggedInUser } from "../controllers/user.controller";
import { writeReview } from "../controllers/review.controller";

const router = Router();

router.get("/me", loggedInUser);
router.post("/create-review",writeReview);

export default router;
