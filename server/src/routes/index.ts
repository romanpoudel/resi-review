import { Router } from "express";

import authRoutes from "./auth.route";
import userRoutes from "./user.route";
import createRoutes from "./house.route";
import { verifyJWT } from "../middlewares/auth.middleware";
import guidelineRoutes from "./guideline.route";

const router = Router();

router.use("/auth", authRoutes);

router.use("/users", verifyJWT, userRoutes);

router.use("/house", createRoutes);

router.use("/guidelines",guidelineRoutes);


export default router;