"use client";

import { useMemo, useState } from "react";
import { BarCompare } from "../../components/charts/BarCompare";
import { SourceBadge } from "../../components/ui/SourceBadge";
import {
  schoolsData,
  getSchoolsByGovernorate,
  getSchoolsByEduType,
  getSchoolsByGender,
} from "../../data/moe";
import { COLORS, formatNumber } from "../../data/constants";
import { Search } from "lucide-react";

const PAGE_SIZE = 25;

export default function SchoolsPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  const byGov = useMemo(() => getSchoolsByGovernorate(), []);
  const byEdu = useMemo(() => getSchoolsByEduType(), []);
  const byGender = useMemo(() => getSchoolsByGender(), []);

  const filtered = useMemo(() => {
    if (!search.trim()) return schoolsData;
    const q = search.toLowerCase();
    return schoolsData.filter(
      (s) =>
        s.regionNameEn.toLowerCase().includes(q) ||
        s.regionNameAr.includes(q) ||
        s.wilaya.includes(q) ||
        s.nameAr.includes(q) ||
        s.educationTypeEn.toLowerCase().includes(q) ||
        s.schoolGenderEn.toLowerCase().includes(q)
    );
  }, [search]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const pageData = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const govBarData = byGov.map((g) => ({
    governorate: g.nameEn,
    Schools: g.count,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Schools Explorer
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1" dir="rtl">
          مستكشف المدارس
        </p>
        <SourceBadge sources={["MOE"]} />
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">Total Schools | إجمالي المدارس</p>
          <p className="text-2xl font-bold text-indigo-600 mt-1">{formatNumber(schoolsData.length)}</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">Governorates | المحافظات</p>
          <p className="text-2xl font-bold text-indigo-600 mt-1">{byGov.length}</p>
        </div>
        {byEdu.slice(0, 1).map((e) => (
          <div key={e.typeEn} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">{e.typeEn}</p>
            <p className="text-xs text-gray-400" dir="rtl">{e.type}</p>
            <p className="text-2xl font-bold text-amber-600 mt-1">{formatNumber(e.count)}</p>
          </div>
        ))}
        {byGender.slice(0, 1).map((g) => (
          <div key={g.genderEn} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">{g.genderEn} Schools</p>
            <p className="text-xs text-gray-400" dir="rtl">مدارس {g.gender}</p>
            <p className="text-2xl font-bold text-emerald-600 mt-1">{formatNumber(g.count)}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-semibold mb-1">Schools by Governorate</h2>
          <p className="text-sm text-gray-400 mb-4" dir="rtl">المدارس حسب المحافظة</p>
          <BarCompare
            data={govBarData}
            xKey="governorate"
            bars={[{ key: "Schools", label: "Schools | المدارس", color: COLORS.primary }]}
            height={400}
          />
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-semibold mb-1">By Education Type</h2>
          <p className="text-sm text-gray-400 mb-4" dir="rtl">حسب نوع التعليم</p>
          <BarCompare
            data={byEdu.map((e) => ({ type: e.typeEn, Count: e.count }))}
            xKey="type"
            bars={[{ key: "Count", label: "Schools | المدارس", color: COLORS.chart[1] }]}
            height={300}
          />
          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">By School Gender | حسب جنس المدرسة</h3>
            <div className="flex gap-4">
              {byGender.map((g) => (
                <div key={g.genderEn} className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{formatNumber(g.count)}</p>
                  <p className="text-xs text-gray-500">{g.genderEn}</p>
                  <p className="text-xs text-gray-400" dir="rtl">{g.gender}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* School table */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-lg font-semibold">School Directory</h2>
            <p className="text-sm text-gray-400" dir="rtl">دليل المدارس</p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search schools... | ابحث عن مدرسة"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(0); }}
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 text-left">
                <th className="py-2 px-3 font-medium text-gray-500">Governorate | المحافظة</th>
                <th className="py-2 px-3 font-medium text-gray-500">Wilaya | الولاية</th>
                <th className="py-2 px-3 font-medium text-gray-500">School | المدرسة</th>
                <th className="py-2 px-3 font-medium text-gray-500">Type | النوع</th>
                <th className="py-2 px-3 font-medium text-gray-500">Gender | الجنس</th>
                <th className="py-2 px-3 font-medium text-gray-500">Classes | الصفوف</th>
              </tr>
            </thead>
            <tbody>
              {pageData.map((s, i) => (
                <tr key={`${s.code}-${i}`} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="py-2 px-3">{s.regionNameEn}</td>
                  <td className="py-2 px-3" dir="rtl">{s.wilaya}</td>
                  <td className="py-2 px-3" dir="rtl">{s.nameAr}</td>
                  <td className="py-2 px-3">{s.educationTypeEn}</td>
                  <td className="py-2 px-3">{s.schoolGenderEn}</td>
                  <td className="py-2 px-3">{s.classes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-gray-500">
            Showing {page * PAGE_SIZE + 1}-{Math.min((page + 1) * PAGE_SIZE, filtered.length)} of {formatNumber(filtered.length)}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setPage(Math.max(0, page - 1))}
              disabled={page === 0}
              className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-sm disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Previous
            </button>
            <button
              onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
              disabled={page >= totalPages - 1}
              className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-sm disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
