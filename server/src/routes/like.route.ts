import { setLike } from "../controllers/like.controller";
import { Router } from "express";

const router = Router();

router.post("/", setLike);

export default router;
