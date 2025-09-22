export type JobExperience = {
  year: number;
  company: string;
  role: string;
  duration: string;
  isCurrent?: boolean;
  description?: string;
  skills: string[];
};

export type JobTimelineType = JobExperience[];