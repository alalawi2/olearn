"use client";

import { useMemo } from "react";
import { TrendChart } from "../../components/charts/TrendChart";
import { BarCompare } from "../../components/charts/BarCompare";
import { SourceBadge } from "../../components/ui/SourceBadge";
import { getEnrollmentTrend, getCollegeTotals } from "../../data/squ";
import { utasGraduates } from "../../data/utas";
import { COLORS, formatNumber } from "../../data/constants";

export default function DashboardPage() {
  const enrollmentTrend = useMemo(() => getEnrollmentTrend(), []);
  const collegeTotals = useMemo(() => getCollegeTotals(), []);

  const totalStudents = enrollmentTrend[enrollmentTrend.length - 1]?.total || 0;
  const totalMale = enrollmentTrend[enrollmentTrend.length - 1]?.male || 0;
  const totalFemale = enrollmentTrend[enrollmentTrend.length - 1]?.female || 0;

  const collegeBarData = collegeTotals.slice(0, 10).map((c) => ({
    college: c.college,
    Male: c.male,
    Female: c.female,
  }));

  const genderData = [
    { label: "Male | ذكور", value: totalMale },
    { label: "Female | إناث", value: totalFemale },
  ];

  const utasBarData = utasGraduates.map((g) => ({
    branch: g.branch,
    Female: g.female,
    Male: g.male,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Higher Education Dashboard
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1" dir="rtl">
          لوحة التعليم العالي
        </p>
        <SourceBadge sources={["SQU", "UTAS"]} />
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">Current Enrollment (SQU)</p>
          <p className="text-sm text-gray-400" dir="rtl">الملتحقون حاليا</p>
          <p className="text-2xl font-bold text-indigo-600 mt-1">{formatNumber(totalStudents)}</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">Male Students</p>
          <p className="text-sm text-gray-400" dir="rtl">طلاب ذكور</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">{formatNumber(totalMale)}</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">Female Students</p>
          <p className="text-sm text-gray-400" dir="rtl">طالبات</p>
          <p className="text-2xl font-bold text-pink-600 mt-1">{formatNumber(totalFemale)}</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">UTAS Graduates 2024-25</p>
          <p className="text-sm text-gray-400" dir="rtl">خريجو التقنية</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">{formatNumber(utasGraduates.reduce((s, r) => s + r.total, 0))}</p>
        </div>
      </div>

      {/* Enrollment trend */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
        <h2 className="text-lg font-semibold mb-1">
          SQU Undergraduate Enrollment (2000-2026)
        </h2>
        <p className="text-sm text-gray-400 mb-4" dir="rtl">
          تطور أعداد الطلاب الجامعيين
        </p>
        <TrendChart
          data={enrollmentTrend.map((d) => ({ ...d, year: d.year.split("-")[0] }))}
          xKey="year"
          lines={[
            { key: "total", label: "Total | الإجمالي", color: COLORS.primary },
            { key: "male", label: "Male | ذكور", color: COLORS.male },
            { key: "female", label: "Female | إناث", color: COLORS.female },
          ]}
          height={380}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* College bar chart */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-semibold mb-1">
            Students by College (2025)
          </h2>
          <p className="text-sm text-gray-400 mb-4" dir="rtl">
            الطلاب حسب الكلية
          </p>
          <BarCompare
            data={collegeBarData}
            xKey="college"
            bars={[
              { key: "Male", label: "Male | ذكور", color: COLORS.male },
              { key: "Female", label: "Female | إناث", color: COLORS.female },
            ]}
            stacked
            height={400}
          />
        </div>

        {/* Gender ratio */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-semibold mb-1">
            Gender Ratio (2025-26)
          </h2>
          <p className="text-sm text-gray-400 mb-4" dir="rtl">
            نسبة الجنسين
          </p>
          <BarCompare
            data={genderData}
            xKey="label"
            bars={[
              { key: "value", label: "Students | الطلاب", color: COLORS.primary },
            ]}
            height={300}
          />
          <div className="mt-4 flex justify-center gap-8 text-sm">
            <div className="text-center">
              <p className="font-bold text-blue-600">{Math.round((totalMale / totalStudents) * 100)}%</p>
              <p className="text-gray-500">Male | ذكور</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-pink-600">{Math.round((totalFemale / totalStudents) * 100)}%</p>
              <p className="text-gray-500">Female | إناث</p>
            </div>
          </div>
        </div>
      </div>

      {/* UTAS Graduates */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <h2 className="text-lg font-semibold mb-1">
          UTAS Graduates by Branch (2024-25)
        </h2>
        <p className="text-sm text-gray-400 mb-4" dir="rtl">
          خريجو جامعة التقنية حسب الفرع
        </p>
        <BarCompare
          data={utasBarData}
          xKey="branch"
          bars={[
            { key: "Female", label: "Female | إناث", color: COLORS.female },
            { key: "Male", label: "Male | ذكور", color: COLORS.male },
          ]}
          stacked
          height={380}
        />
      </div>
    </div>
  );
}
