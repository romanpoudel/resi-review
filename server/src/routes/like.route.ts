import { setLike, checkUser } from "../controllers/like.controller";
import { Router } from "express";

const router = Router();

router.post("/", setLike);

router.post("/check-user", checkUser);

export default router;
