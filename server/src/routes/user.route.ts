import { Router } from "express";
import { loggedInUser, reviewHouse ,uploadProfileImage} from "../controllers/user.controller";
import { upload } from "../middlewares/multer.middleware";

const router = Router();

router.get("/me", loggedInUser);

router.post("/house-review", reviewHouse);

router.post("/update-profile",upload.single("profileimage"),uploadProfileImage);

export default router;
