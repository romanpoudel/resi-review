import {getGuidelines} from "../controllers/guideline.controller";
import { Router } from "express";


const router = Router();

router.get("/", getGuidelines);

export default router;