export type CaseCategory =
  | "Стоматологии"
  | "Медицина"
  | "Недвижимость"
  | "Авто"
  | "Эксперты"
  | "B2B"
  | "Другое";

export type CaseMetric = {
  label: string;
  value: string;
};

export type CaseStudy = {
  id: string;
  name: string;
  shortName: string;
  category: CaseCategory;
  niche: string;
  badge: string;
  task: string;
  summary: string;
  solution: string;
  results: string;
  metrics: CaseMetric[];
  tools: string[];
  artifacts: string[];
  spotlight: string;
  logo: string;
  logoPath?: string;
  reviewQuote?: string;
  reviewAuthor?: string;
  reviewRole?: string;
  reviewImagePath?: string;
  accent: "ember" | "sand" | "paper";
  stats: {
    reach?: number;
    leads?: number;
  };
};

export type ContactLink = {
  label: string;
  href: string;
  note: string;
};
