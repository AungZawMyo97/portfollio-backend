// src/services/projectService.ts
import { supabase } from "../config/supabase";
import { Project } from "../types/portfolio";

export const getAllProjects = async () => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data;
};

export const createProject = async (project: Project) => {
  const { data, error } = await supabase
    .from("projects")
    .insert([project])
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
};
