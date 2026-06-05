"use client";

import { SourceBadge } from "../../components/ui/SourceBadge";
import { ExternalLink, Shield, Code, Users } from "lucide-react";

const dataProvenance = [
  {
    feature: "SQU Undergraduate Enrollment (2000-2026)",
    featureAr: "التحاق الطلاب الجامعيين",
    dataset: "Growth of Undergraduate",
    publisher: "Sultan Qaboos University (SQU)",
    publisherAr: "جامعة السلطان قابوس",
    portal: "opendata.gov.om",
  },
  {
    feature: "SQU Students by College (2025)",
    featureAr: "الطلاب حسب الكلية",
    dataset: "Admitted Registered Graduated",
    publisher: "Sultan Qaboos University (SQU)",
    publisherAr: "جامعة السلطان قابوس",
    portal: "opendata.gov.om",
  },
  {
    feature: "SQU Employees (2021-2025)",
    featureAr: "موظفو الجامعة",
    dataset: "# employees at the university",
    publisher: "Sultan Qaboos University (SQU)",
    publisherAr: "جامعة السلطان قابوس",
    portal: "opendata.gov.om",
  },
  {
    feature: "SQU Research Papers (2021-2025)",
    featureAr: "الأوراق البحثية",
    dataset: "SQU Research Publications",
    publisher: "Sultan Qaboos University (SQU)",
    publisherAr: "جامعة السلطان قابوس",
    portal: "opendata.gov.om",
  },
  {
    feature: "SQU Scholarships",
    featureAr: "البعثات الدراسية",
    dataset: "SQU Scholarships by College",
    publisher: "Sultan Qaboos University (SQU)",
    publisherAr: "جامعة السلطان قابوس",
    portal: "opendata.gov.om",
  },
  {
    feature: "UTAS Graduates by Branch (2024-25)",
    featureAr: "خريجو التقنية حسب الفرع",
    dataset: "UTAS Graduates 2024-2025",
    publisher: "University of Technology & Applied Sciences (UTAS)",
    publisherAr: "جامعة التقنية والعلوم التطبيقية",
    portal: "opendata.gov.om",
  },
  {
    feature: "UTAS HR by Branch (2025-26)",
    featureAr: "الموارد البشرية حسب الفرع",
    dataset: "UTAS HR 2025-2026",
    publisher: "University of Technology & Applied Sciences (UTAS)",
    publisherAr: "جامعة التقنية والعلوم التطبيقية",
    portal: "opendata.gov.om",
  },
  {
    feature: "Schools Directory (1,270 schools)",
    featureAr: "دليل المدارس",
    dataset: "Schools by Governorate (شعب حسب المدرسة)",
    publisher: "Ministry of Education (MOE)",
    publisherAr: "وزارة التربية والتعليم",
    portal: "opendata.gov.om",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          About & Data Provenance
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1" dir="rtl">
          حول المنصة ومصادر البيانات
        </p>
        <SourceBadge sources={["SQU", "UTAS", "MOE", "NCSI"]} />
      </div>

      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-indigo-600" />
            About OLearn
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-3">
            OLearn is an open-data education intelligence platform that transforms publicly available datasets
            from Oman&apos;s higher education institutions into interactive, bilingual dashboards.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-3" dir="rtl">
            OLearn هي منصة ذكاء تعليمي مفتوحة البيانات تحول مجموعات البيانات المتاحة للجمهور من مؤسسات التعليم العالي في عمان إلى لوحات تفاعلية ثنائية اللغة.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            All data is sourced exclusively from{" "}
            <a href="https://opendata.gov.om" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
              opendata.gov.om
            </a>
            , Oman&apos;s official open data portal, and used under the Open Government License - Sultanate of Oman.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-600" />
              Team
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Built by <strong>MedResearch Academy</strong> for the Open Data Lab 2026 initiative.
            </p>
            <p className="text-sm text-gray-400 mt-1" dir="rtl">
              أكاديمية البحث الطبي | مختبر البيانات المفتوحة 2026
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Code className="w-5 h-5 text-indigo-600" />
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Next.js 14", "TypeScript", "Tailwind CSS", "Recharts", "next-themes"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* License */}
      <div className="bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 rounded-xl p-6 mb-10">
        <h2 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
          Open Government License - Sultanate of Oman
        </h2>
        <p className="text-sm text-indigo-800 dark:text-indigo-200 mb-2" dir="rtl">
          رخصة الحكومة المفتوحة - سلطنة عمان
        </p>
        <p className="text-sm text-indigo-700 dark:text-indigo-300">
          All datasets used in this platform are published under the Open Government License by registered
          publishers on opendata.gov.om. This license permits free use, adaptation, and redistribution
          of public data with appropriate attribution.
        </p>
      </div>

      {/* Data Provenance Table */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <h2 className="text-xl font-semibold mb-1">Data Provenance</h2>
        <p className="text-sm text-gray-400 mb-4" dir="rtl">مصادر البيانات المستخدمة</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 text-left">
                <th className="py-3 px-3 font-medium text-gray-500">Feature</th>
                <th className="py-3 px-3 font-medium text-gray-500">Dataset</th>
                <th className="py-3 px-3 font-medium text-gray-500">Publisher</th>
                <th className="py-3 px-3 font-medium text-gray-500">Portal</th>
              </tr>
            </thead>
            <tbody>
              {dataProvenance.map((row, i) => (
                <tr key={i} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="py-3 px-3">
                    <p>{row.feature}</p>
                    <p className="text-xs text-gray-400" dir="rtl">{row.featureAr}</p>
                  </td>
                  <td className="py-3 px-3 text-gray-600 dark:text-gray-400">{row.dataset}</td>
                  <td className="py-3 px-3">
                    <p className="text-gray-600 dark:text-gray-400">{row.publisher}</p>
                    <p className="text-xs text-gray-400" dir="rtl">{row.publisherAr}</p>
                  </td>
                  <td className="py-3 px-3">
                    <a
                      href={`https://${row.portal}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-indigo-600 hover:underline"
                    >
                      {row.portal}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
