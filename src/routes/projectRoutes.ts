import { Router } from "express";
import { getProjects, addProject } from "../controllers/projectController";

const router = Router();

router.get("/getAllProjects", getProjects);
router.post("/addProject", addProject);

export default router;
