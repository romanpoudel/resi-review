import { Router } from "express";
import { houseDetail,getAllHouseWithReviews } from "../controllers/house.controller";
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
  houseDetail
);

router.get("/all-house-reviews", getAllHouseWithReviews);

export default router;
