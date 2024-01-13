import { Router } from "express";
import { writeReview } from "../controllers/review.controller";
import {upload} from "../middlewares/multer.middleware";

const router = Router();

router.post("/",upload.fields([{
  name:"houseimage",
  maxCount:1
},{
  name:"locationimage",
  maxCount:1
}]),writeReview);

export default router;
