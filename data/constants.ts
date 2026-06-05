export const COLORS = {
  primary: "#4f46e5", // indigo-600
  primaryLight: "#818cf8", // indigo-400
  primaryDark: "#3730a3", // indigo-800
  male: "#3b82f6", // blue-500
  female: "#ec4899", // pink-500
  omani: "#10b981", // emerald-500
  nonOmani: "#f59e0b", // amber-500
  chart: [
    "#4f46e5", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6",
    "#06b6d4", "#f97316", "#84cc16", "#e11d48", "#6366f1",
    "#14b8a6", "#eab308",
  ],
};

export const formatNumber = (n: number): string =>
  n.toLocaleString("en-US");

export const DATA_SOURCES = {
  SQU: {
    name: "Sultan Qaboos University",
    nameAr: "جامعة السلطان قابوس",
    url: "https://opendata.gov.om",
    color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  },
  UTAS: {
    name: "University of Technology & Applied Sciences",
    nameAr: "جامعة التقنية والعلوم التطبيقية",
    url: "https://opendata.gov.om",
    color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
  },
  MOE: {
    name: "Ministry of Education",
    nameAr: "وزارة التربية والتعليم",
    url: "https://opendata.gov.om",
    color: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  },
  NCSI: {
    name: "National Centre for Statistics & Information",
    nameAr: "المركز الوطني للإحصاء والمعلومات",
    url: "https://opendata.gov.om",
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  },
} as const;
