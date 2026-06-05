"use client";

import { useMemo } from "react";
import { TrendChart } from "../../components/charts/TrendChart";
import { BarCompare } from "../../components/charts/BarCompare";
import { SourceBadge } from "../../components/ui/SourceBadge";
import { getEmployeeNationalityTrend, scholarshipData } from "../../data/squ";
import { getOmanizationByBranch, utasHR, utasHRTotal } from "../../data/utas";
import { COLORS, formatNumber } from "../../data/constants";

export default function WorkforcePage() {
  const natTrend = useMemo(() => getEmployeeNationalityTrend(), []);
  const omanization = useMemo(() => getOmanizationByBranch(), []);

  // Scholarship by college (all years aggregated)
  const scholarshipByCollege = useMemo(() => {
    const map = new Map<string, { college: string; doctorates: number; masters: number }>();
    for (const row of scholarshipData) {
      const existing = map.get(row.college) || { college: row.college, doctorates: 0, masters: 0 };
      if (row.degree === "Doctorates") existing.doctorates += row.count;
      else existing.masters += row.count;
      map.set(row.college, existing);
    }
    return Array.from(map.values()).sort((a, b) => (b.doctorates + b.masters) - (a.doctorates + a.masters));
  }, []);

  const latestNat = natTrend[natTrend.length - 1];
  const omanizationRate = latestNat
    ? Math.round((latestNat.omani / (latestNat.omani + latestNat.nonOmani)) * 100)
    : 0;

  const utasOmanizationData = omanization.map((o) => ({
    branch: o.branch,
    "Omani | عماني": o.omani,
    "Non-Omani | غير عماني": o.nonOmani,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Workforce & Omanization
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1" dir="rtl">
          القوى العاملة والتعمين
        </p>
        <SourceBadge sources={["SQU", "UTAS"]} />
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">SQU Omani Staff (2025)</p>
          <p className="text-sm text-gray-400" dir="rtl">الموظفون العمانيون</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">{formatNumber(latestNat?.omani || 0)}</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">SQU Omanization Rate</p>
          <p className="text-sm text-gray-400" dir="rtl">نسبة التعمين</p>
          <p className="text-2xl font-bold text-indigo-600 mt-1">{omanizationRate}%</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">UTAS Total Staff</p>
          <p className="text-sm text-gray-400" dir="rtl">إجمالي موظفي التقنية</p>
          <p className="text-2xl font-bold text-indigo-600 mt-1">{formatNumber(utasHRTotal)}</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">On Scholarship</p>
          <p className="text-sm text-gray-400" dir="rtl">المبتعثون</p>
          <p className="text-2xl font-bold text-purple-600 mt-1">
            {formatNumber(scholarshipData.reduce((s, r) => s + r.count, 0))}
          </p>
        </div>
      </div>

      {/* SQU Employee nationality trend */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 mb-8">
        <h2 className="text-lg font-semibold mb-1">
          SQU Employees: Omani vs Non-Omani (2021-2025)
        </h2>
        <p className="text-sm text-gray-400 mb-4" dir="rtl">
          موظفو الجامعة: عماني مقابل غير عماني
        </p>
        <TrendChart
          data={natTrend}
          xKey="year"
          lines={[
            { key: "omani", label: "Omani | عماني", color: COLORS.omani },
            { key: "nonOmani", label: "Non-Omani | غير عماني", color: COLORS.nonOmani },
          ]}
          height={350}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* UTAS Omanization */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-semibold mb-1">
            UTAS Omanization by Branch
          </h2>
          <p className="text-sm text-gray-400 mb-4" dir="rtl">
            التعمين حسب فرع التقنية
          </p>
          <BarCompare
            data={utasOmanizationData}
            xKey="branch"
            bars={[
              { key: "Omani | عماني", label: "Omani | عماني", color: COLORS.omani },
              { key: "Non-Omani | غير عماني", label: "Non-Omani | غير عماني", color: COLORS.nonOmani },
            ]}
            stacked
            height={400}
          />
        </div>

        {/* Scholarships by college */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-semibold mb-1">
            SQU Staff on Scholarship by College
          </h2>
          <p className="text-sm text-gray-400 mb-4" dir="rtl">
            المبتعثون حسب الكلية
          </p>
          <BarCompare
            data={scholarshipByCollege}
            xKey="college"
            bars={[
              { key: "doctorates", label: "Doctorates | دكتوراه", color: COLORS.chart[0] },
              { key: "masters", label: "Masters | ماجستير", color: COLORS.chart[1] },
            ]}
            stacked
            height={400}
          />
        </div>
      </div>

      {/* UTAS HR Detail Table */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <h2 className="text-lg font-semibold mb-1">UTAS Staff Breakdown by Branch (2025-26)</h2>
        <p className="text-sm text-gray-400 mb-4" dir="rtl">تفصيل الموظفين حسب الفرع</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 text-left">
                <th className="py-2 px-3 font-medium text-gray-500">Branch | الفرع</th>
                <th className="py-2 px-3 font-medium text-gray-500">Academics</th>
                <th className="py-2 px-3 font-medium text-gray-500">Technicians</th>
                <th className="py-2 px-3 font-medium text-gray-500">Admins</th>
                <th className="py-2 px-3 font-medium text-gray-500">Total</th>
                <th className="py-2 px-3 font-medium text-gray-500">Omanization</th>
              </tr>
            </thead>
            <tbody>
              {utasHR.map((r) => {
                const totalOmani = r.academicsOmani + r.techniciansOmani + r.adminsOmani;
                const rate = Math.round((totalOmani / r.grandTotal) * 100);
                return (
                  <tr key={r.branch} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-2 px-3 font-medium">
                      {r.branch} <span className="text-gray-400 text-xs" dir="rtl">{r.branchAr}</span>
                    </td>
                    <td className="py-2 px-3">{formatNumber(r.academicsTotal)}</td>
                    <td className="py-2 px-3">{formatNumber(r.techniciansTotal)}</td>
                    <td className="py-2 px-3">{formatNumber(r.adminsTotal)}</td>
                    <td className="py-2 px-3 font-semibold">{formatNumber(r.grandTotal)}</td>
                    <td className="py-2 px-3">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${rate >= 50 ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200" : "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"}`}>
                        {rate}%
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
