import { Request, Response } from "express";
import * as projectService from "../services/projectService";

export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await projectService.getAllProjects();
    res.json(projects);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const addProject = async (req: Request, res: Response) => {
  try {
    const newProject = await projectService.createProject(req.body);
    res.status(201).json(newProject);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
