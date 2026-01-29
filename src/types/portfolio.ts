export interface Project {
  id?: string;
  title: string;
  company: string;
  logo?: string;
  description: string;
  role: string;
  technologies: string[];
  highlights: string[];
  created_at?: string;
}

export interface Experience {
  id?: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  color?: string;
  created_at?: string;
}
