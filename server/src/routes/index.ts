import { Router } from "express";

import authRoutes from "./auth.route";
import userRoutes from "./user.route";
import writeRoutes from "./write.route";
import { verifyJWT } from "../middlewares/auth.middleware";

const router = Router();

router.use("/auth", authRoutes);

router.use("/users", verifyJWT, userRoutes);

router.use("/create-review", verifyJWT, writeRoutes);


export default router;