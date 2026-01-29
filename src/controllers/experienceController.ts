import { Request, Response } from "express";
import * as experienceService from "../services/experienceService";

export const getExperiences = async (req: Request, res: Response) => {
  try {
    const projects = await experienceService.getAllExperiences();
    res.json(projects);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const addExperience = async (req: Request, res: Response) => {
  try {
    const newExperience = await experienceService.createExperience(req.body);
    res.status(201).json(newExperience);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
