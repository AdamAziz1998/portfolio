export interface Project {
  id: string;
  title: string;
  tagline: string;
  status: 'Done' | 'Ongoing' | 'Freelance' | 'Epic';
  summary: string;
  features: string[];
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
  caseStudy: {
    problem: string;
    role: string[];
    architecture?: string; // URL to an image
  };
}

export interface Skill {
  name: string;
  proficiency: 'Expert' | 'Advanced' | 'Familiar';
  category: 'Frontend' | 'Backend' | 'Mobile' | 'DevOps & Tooling' | 'AI/ML';
  logoSvg?: string;
}