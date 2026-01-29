import { supabase } from "../config/supabase";
import { Experience } from "../types/portfolio";

export const getAllExperiences = async () => {
  const { data, error } = await supabase
    .from("experiences")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) throw new Error(error.message);

  return data;
};

export const createExperience = async (exp: Experience) => {
  const { data, error } = await supabase
    .from("experiences")
    .insert([exp])
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
};
