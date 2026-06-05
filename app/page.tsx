"use client";

import Link from "next/link";
import {
  GraduationCap,
  School,
  Users,
  BarChart3,
  BookOpen,
  Database,
  ArrowRight,
} from "lucide-react";
import { SourceBadge } from "../components/ui/SourceBadge";
import { formatNumber } from "../data/constants";

const stats = [
  { label: "SQU Students", labelAr: "طلاب جامعة السلطان قابوس", value: "~17,000", icon: GraduationCap },
  { label: "UTAS Graduates", labelAr: "خريجو جامعة التقنية", value: "6,500+", icon: BookOpen },
  { label: "Schools", labelAr: "المدارس", value: formatNumber(1270), icon: School },
  { label: "UTAS Staff", labelAr: "موظفو جامعة التقنية", value: formatNumber(4510), icon: Users },
];

const features = [
  {
    title: "Higher Education Dashboard",
    titleAr: "لوحة التعليم العالي",
    description: "SQU enrollment trends, college breakdowns, and UTAS graduate analytics",
    href: "/dashboard",
    icon: BarChart3,
    color: "bg-indigo-50 dark:bg-indigo-950 text-indigo-600",
  },
  {
    title: "Schools Explorer",
    titleAr: "مستكشف المدارس",
    description: "1,270 schools across all 11 governorates with education type and gender breakdowns",
    href: "/schools",
    icon: School,
    color: "bg-amber-50 dark:bg-amber-950 text-amber-600",
  },
  {
    title: "Workforce & Omanization",
    titleAr: "القوى العاملة والتعمين",
    description: "SQU & UTAS staff nationality trends, Omanization rates, and scholarship data",
    href: "/workforce",
    icon: Users,
    color: "bg-emerald-50 dark:bg-emerald-950 text-emerald-600",
  },
  {
    title: "About & Data Provenance",
    titleAr: "حول ومصادر البيانات",
    description: "Data sources, licensing, methodology, and technical architecture",
    href: "/about",
    icon: Database,
    color: "bg-purple-50 dark:bg-purple-950 text-purple-600",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-sm font-medium">Open Data Lab 2026</span>
              <span className="text-sm opacity-80">|</span>
              <span className="text-sm font-medium" dir="rtl">مختبر البيانات المفتوحة 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              OLearn
            </h1>
            <p className="text-xl md:text-2xl font-medium text-indigo-100 mb-2">
              Oman Education Intelligence Platform
            </p>
            <p className="text-lg md:text-xl text-indigo-200 mb-8" dir="rtl">
              منصة عمان للذكاء التعليمي
            </p>
            <p className="max-w-2xl mx-auto text-indigo-100 mb-10 text-base md:text-lg">
              Exploring Oman&apos;s education landscape through open data from SQU, UTAS, and the Ministry of Education.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-indigo-700 font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
              >
                Explore Dashboard
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors border border-white/20"
              >
                Data Sources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 p-5 text-center"
            >
              <stat.icon className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
              <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500" dir="rtl">{stat.labelAr}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-center mb-2">
          Explore the Data <span className="text-gray-400">|</span>{" "}
          <span dir="rtl">استكشف البيانات</span>
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-10 max-w-xl mx-auto">
          Interactive dashboards built from publicly available datasets on opendata.gov.om
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="group flex gap-4 p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800 transition-all"
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${f.color} flex items-center justify-center`}>
                <f.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {f.title}
                </h3>
                <p className="text-xs text-gray-400 mb-1" dir="rtl">{f.titleAr}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{f.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Data Sources */}
      <section className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Data Sources <span className="text-gray-400">|</span>{" "}
            <span dir="rtl">مصادر البيانات</span>
          </h2>
          <div className="flex justify-center">
            <SourceBadge sources={["SQU", "UTAS", "MOE", "NCSI"]} />
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
            All data is publicly available on{" "}
            <a href="https://opendata.gov.om" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">
              opendata.gov.om
            </a>{" "}
            under the Open Government License - Sultanate of Oman.
          </p>
        </div>
      </section>
    </div>
  );
}
