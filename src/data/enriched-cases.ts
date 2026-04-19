import { casePlaceholders } from "./case-placeholders";
import { caseOverrides } from "./case-overrides";
import { caseStudies } from "./cases";

export function getEnrichedCaseStudies() {
  const categoryOverrides: Record<string, string> = {
    "po-pyatam": "Медицина",
    "divina-podology": "Медицина",
  };

  return caseStudies.map((item) => ({
    ...casePlaceholders[item.id],
    ...item,
    ...caseOverrides[item.id],
    category: (categoryOverrides[item.id] ?? item.category) as typeof item.category,
  }));
}
