// UTAS Graduates 2024-2025 by branch
export interface UTASGraduateRow {
  branch: string;
  branchAr: string;
  female: number;
  male: number;
  total: number;
}

export const utasGraduates: UTASGraduateRow[] = [
  { branch: "Muscat", branchAr: "مسقط", female: 1280, male: 850, total: 2130 },
  { branch: "Nizwa", branchAr: "نزوى", female: 620, male: 379, total: 999 },
  { branch: "Ibri", branchAr: "عبري", female: 385, male: 238, total: 623 },
  { branch: "Salalah", branchAr: "صلالة", female: 380, male: 239, total: 619 },
  { branch: "Al Musanna", branchAr: "المصنعة", female: 362, male: 228, total: 590 },
  { branch: "Ibra", branchAr: "إبراء", female: 298, male: 186, total: 484 },
  { branch: "Shinas", branchAr: "شناص", female: 272, male: 170, total: 442 },
  { branch: "Sohar", branchAr: "صحار", female: 248, male: 157, total: 405 },
  { branch: "Sur", branchAr: "صور", female: 195, male: 123, total: 318 },
  { branch: "Al Rustaq", branchAr: "الرستاق", female: 178, male: 112, total: 290 },
  { branch: "Khasab", branchAr: "خصب", female: 98, male: 62, total: 160 },
];

export const utasGraduatesTotal = utasGraduates.reduce((s, r) => s + r.total, 0);

// UTAS HR 2025-2026 by branch
export interface UTASHRRow {
  branch: string;
  branchAr: string;
  academicsOmani: number;
  academicsNonOmani: number;
  academicsTotal: number;
  techniciansOmani: number;
  techniciansNonOmani: number;
  techniciansTotal: number;
  adminsOmani: number;
  adminsNonOmani: number;
  adminsTotal: number;
  grandTotal: number;
}

export const utasHR: UTASHRRow[] = [
  { branch: "Muscat", branchAr: "مسقط", academicsOmani: 280, academicsNonOmani: 422, academicsTotal: 702, techniciansOmani: 95, techniciansNonOmani: 18, techniciansTotal: 113, adminsOmani: 185, adminsNonOmani: 12, adminsTotal: 197, grandTotal: 1012 },
  { branch: "Nizwa", branchAr: "نزوى", academicsOmani: 145, academicsNonOmani: 208, academicsTotal: 353, techniciansOmani: 52, techniciansNonOmani: 10, techniciansTotal: 62, adminsOmani: 98, adminsNonOmani: 8, adminsTotal: 106, grandTotal: 521 },
  { branch: "Ibri", branchAr: "عبري", academicsOmani: 110, academicsNonOmani: 165, academicsTotal: 275, techniciansOmani: 42, techniciansNonOmani: 8, techniciansTotal: 50, adminsOmani: 78, adminsNonOmani: 5, adminsTotal: 83, grandTotal: 408 },
  { branch: "Salalah", branchAr: "صلالة", academicsOmani: 105, academicsNonOmani: 160, academicsTotal: 265, techniciansOmani: 40, techniciansNonOmani: 7, techniciansTotal: 47, adminsOmani: 75, adminsNonOmani: 5, adminsTotal: 80, grandTotal: 392 },
  { branch: "Al Musanna", branchAr: "المصنعة", academicsOmani: 98, academicsNonOmani: 148, academicsTotal: 246, techniciansOmani: 38, techniciansNonOmani: 6, techniciansTotal: 44, adminsOmani: 70, adminsNonOmani: 4, adminsTotal: 74, grandTotal: 364 },
  { branch: "Ibra", branchAr: "إبراء", academicsOmani: 85, academicsNonOmani: 130, academicsTotal: 215, techniciansOmani: 34, techniciansNonOmani: 5, techniciansTotal: 39, adminsOmani: 62, adminsNonOmani: 4, adminsTotal: 66, grandTotal: 320 },
  { branch: "Shinas", branchAr: "شناص", academicsOmani: 78, academicsNonOmani: 120, academicsTotal: 198, techniciansOmani: 30, techniciansNonOmani: 5, techniciansTotal: 35, adminsOmani: 58, adminsNonOmani: 3, adminsTotal: 61, grandTotal: 294 },
  { branch: "Sohar", branchAr: "صحار", academicsOmani: 72, academicsNonOmani: 112, academicsTotal: 184, techniciansOmani: 28, techniciansNonOmani: 4, techniciansTotal: 32, adminsOmani: 55, adminsNonOmani: 3, adminsTotal: 58, grandTotal: 274 },
  { branch: "Sur", branchAr: "صور", academicsOmani: 60, academicsNonOmani: 95, academicsTotal: 155, techniciansOmani: 24, techniciansNonOmani: 4, techniciansTotal: 28, adminsOmani: 48, adminsNonOmani: 3, adminsTotal: 51, grandTotal: 234 },
  { branch: "Al Rustaq", branchAr: "الرستاق", academicsOmani: 55, academicsNonOmani: 88, academicsTotal: 143, techniciansOmani: 22, techniciansNonOmani: 3, techniciansTotal: 25, adminsOmani: 44, adminsNonOmani: 2, adminsTotal: 46, grandTotal: 214 },
  { branch: "Khasab", branchAr: "خصب", academicsOmani: 32, academicsNonOmani: 50, academicsTotal: 82, techniciansOmani: 14, techniciansNonOmani: 2, techniciansTotal: 16, adminsOmani: 28, adminsNonOmani: 2, adminsTotal: 30, grandTotal: 128 },
];

export const utasHRTotal = utasHR.reduce((s, r) => s + r.grandTotal, 0);

// Helper: Omanization rate per branch
export function getOmanizationByBranch() {
  return utasHR.map((r) => {
    const totalOmani = r.academicsOmani + r.techniciansOmani + r.adminsOmani;
    const rate = Math.round((totalOmani / r.grandTotal) * 100);
    return { branch: r.branch, branchAr: r.branchAr, omani: totalOmani, nonOmani: r.grandTotal - totalOmani, rate, total: r.grandTotal };
  });
}
