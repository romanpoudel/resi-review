import { Router } from "express";

import authRoutes from "./auth.route";
import userRoutes from "./user.route";
import createRoutes from "./house.route";
import { verifyJWT } from "../middlewares/auth.middleware";

const router = Router();

router.use("/auth", authRoutes);

router.use("/users", verifyJWT, userRoutes);

router.use("/create-review", verifyJWT, createRoutes);


export default router;