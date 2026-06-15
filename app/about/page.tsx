"use client";

import { SourceBadge } from "../../components/ui/SourceBadge";
import { ExternalLink, Shield, Code, Users } from "lucide-react";

const dataProvenance = [
  {
    feature: "Schools Directory (1,270 schools)",
    featureAr: "دليل المدارس (١,٢٧٠ مدرسة)",
    dataset: "All student data in the Ministry of Education for 2024",
    publisher: "Ministry of Education",
    publisherAr: "وزارة التربية والتعليم",
    portal: "opendata.gov.om",
    publisherUrl: "https://opendata.gov.om/en/publishers/09e6018f-d48f-44b0-8090-2b0d478774b9",
  },
  {
    feature: "Teaching staff ratios by governorate",
    featureAr: "نسب الهيئة التدريسية حسب المحافظة",
    dataset: "Teaching staff data for 2024",
    publisher: "Ministry of Education",
    publisherAr: "وزارة التربية والتعليم",
    portal: "opendata.gov.om",
    publisherUrl: "https://opendata.gov.om/en/publishers/09e6018f-d48f-44b0-8090-2b0d478774b9",
  },
  {
    feature: "SQU Undergraduate Enrollment (2000–2025)",
    featureAr: "التحاق الطلاب الجامعيين في جامعة السلطان قابوس",
    dataset: "Growth of undergraduate admitted, registered & graduated students according to category and gender (2000/2001 to 2024/2025)",
    publisher: "Sultan Qaboos University (SQU)",
    publisherAr: "جامعة السلطان قابوس",
    portal: "opendata.gov.om",
    publisherUrl: "https://opendata.gov.om/en/publishers/eb196b14-3f48-41bb-8279-de60a2a4907b",
  },
  {
    feature: "SQU Research Projects",
    featureAr: "المشاريع البحثية",
    dataset: "Growth in number of research projects by various types of grants",
    publisher: "Sultan Qaboos University (SQU)",
    publisherAr: "جامعة السلطان قابوس",
    portal: "opendata.gov.om",
    publisherUrl: "https://opendata.gov.om/en/publishers/eb196b14-3f48-41bb-8279-de60a2a4907b",
  },
  {
    feature: "SQU Research Papers (2021–2025)",
    featureAr: "الأوراق البحثية",
    dataset: "Growth in number of research papers published in journals and presented in conferences",
    publisher: "Sultan Qaboos University (SQU)",
    publisherAr: "جامعة السلطان قابوس",
    portal: "opendata.gov.om",
    publisherUrl: "https://opendata.gov.om/en/publishers/eb196b14-3f48-41bb-8279-de60a2a4907b",
  },
  {
    feature: "SQU Employees & Omanization (2021–2025)",
    featureAr: "موظفو الجامعة ونسب التعمين",
    dataset: "Growth of number of employees at the university according to employer and nationality",
    publisher: "Sultan Qaboos University (SQU)",
    publisherAr: "جامعة السلطان قابوس",
    portal: "opendata.gov.om",
    publisherUrl: "https://opendata.gov.om/en/publishers/eb196b14-3f48-41bb-8279-de60a2a4907b",
  },
  {
    feature: "SQU Scholarships",
    featureAr: "البعثات الدراسية",
    dataset: "Scholarships by college and degree type",
    publisher: "Sultan Qaboos University (SQU)",
    publisherAr: "جامعة السلطان قابوس",
    portal: "opendata.gov.om",
    publisherUrl: "https://opendata.gov.om/en/publishers/eb196b14-3f48-41bb-8279-de60a2a4907b",
  },
  {
    feature: "UTAS Active Students by Branch",
    featureAr: "الطلاب النشطون حسب الفرع",
    dataset: "Statistics of active students at UTAS by specialization, branch, academic year, and gender",
    publisher: "University of Technology & Applied Sciences (UTAS)",
    publisherAr: "جامعة التقنية والعلوم التطبيقية",
    portal: "opendata.gov.om",
    publisherUrl: "https://opendata.gov.om/en/publishers/402b311b-178a-40e1-85b0-dc1beb003ae0",
  },
  {
    feature: "UTAS Graduates by Branch (2024–2025)",
    featureAr: "خريجو التقنية حسب الفرع",
    dataset: "UTAS graduates by branch (2024–2025)",
    publisher: "University of Technology & Applied Sciences (UTAS)",
    publisherAr: "جامعة التقنية والعلوم التطبيقية",
    portal: "opendata.gov.om",
    publisherUrl: "https://opendata.gov.om/en/publishers/402b311b-178a-40e1-85b0-dc1beb003ae0",
  },
  {
    feature: "UTAS HR & Omanization (2025–2026)",
    featureAr: "الموارد البشرية ونسب التعمين",
    dataset: "HR statistics (2025–2026)",
    publisher: "University of Technology & Applied Sciences (UTAS)",
    publisherAr: "جامعة التقنية والعلوم التطبيقية",
    portal: "opendata.gov.om",
    publisherUrl: "https://opendata.gov.om/en/publishers/402b311b-178a-40e1-85b0-dc1beb003ae0",
  },
  {
    feature: "National HE Enrollment Overview (2025/2026)",
    featureAr: "نظرة شاملة على الالتحاق بالتعليم العالي",
    dataset: "Undergraduate & postgraduate students admitted, registered & graduated in scientific and humanities colleges (2025/2026)",
    publisher: "Ministry of Higher Education, Research & Innovation",
    publisherAr: "وزارة التعليم العالي والبحث العلمي والابتكار",
    portal: "opendata.gov.om",
    publisherUrl: "https://opendata.gov.om/en/publishers/5c648ffa-eeac-466b-8481-520158bf96bb",
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
                    <a
                      href={row.publisherUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline"
                    >
                      {row.publisher}
                    </a>
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
