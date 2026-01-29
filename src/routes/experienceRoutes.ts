import { Router } from "express";
import {
  getExperiences,
  addExperience,
} from "../controllers/experienceController";

const router = Router();

router.get("/getAllExperiences", getExperiences);
router.post("/createExperience", addExperience);

export default router;
