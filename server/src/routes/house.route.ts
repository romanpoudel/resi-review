import { Router } from "express";
import { houseDetail } from "../controllers/house.controller";
import { upload } from "../middlewares/multer.middleware";

const router = Router();

router.post(
  "/",
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

export default router;
