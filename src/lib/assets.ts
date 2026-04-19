export function createCaseLogoSources(basePath: string, caseId: string, customPath?: string) {
  return [
    customPath,
    `${basePath}assets/cases/${caseId}/logo.png`,
    `${basePath}assets/cases/${caseId}/logo.jpg`,
    `${basePath}assets/cases/${caseId}/logo.jpeg`,
    `${basePath}assets/cases/${caseId}/logo.svg`,
    `${basePath}assets/cases/${caseId}/logo.webp`,
  ].filter(Boolean) as string[];
}

export function createCaseReviewSources(basePath: string, caseId: string, customPath?: string) {
  return [
    customPath,
    `${basePath}assets/cases/${caseId}/review.png`,
    `${basePath}assets/cases/${caseId}/review.jpg`,
    `${basePath}assets/cases/${caseId}/review.jpeg`,
    `${basePath}assets/cases/${caseId}/review.webp`,
  ].filter(Boolean) as string[];
}

export function createBrandLogoSources(basePath: string) {
  return [
    `${basePath}assets/brand/logo-main.png`,
    `${basePath}assets/brand/logo-main.svg`,
    `${basePath}assets/brand/logo-main.webp`,
  ];
}

export function createFaviconSources(basePath: string) {
  return [
    `${basePath}favicon.png`,
    `${basePath}favicon-32.png`,
    `${basePath}favicon.svg`,
  ];
}
