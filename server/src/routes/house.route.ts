import { Router } from "express";
import { addHouseDetail,getAllHouseWithReviews, getHouseAccordingToCategory, getHouseDetail, getReviewsOfHouse } from "../controllers/house.controller";
import { upload } from "../middlewares/multer.middleware";
import { verifyJWT } from "../middlewares/auth.middleware";

const router = Router();

router.post(
  "/create-review",verifyJWT,
  upload.fields([
    {
      name: "houseimage",
      maxCount: 1,
    },
    {
      name: "locationimage",
      maxCount: 1,
    },
  ]),
  addHouseDetail
);

router.get("/all-house-reviews", getAllHouseWithReviews);

router.get("/house-detail/:id", getHouseDetail);

router.get("/reviews/:id",getReviewsOfHouse);

router.get("/filter",getHouseAccordingToCategory);

export default router;
