"use client";

import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-indigo-600" />
            <span className="font-bold text-indigo-600">OLearn</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              | Oman Education Intelligence Platform
            </span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Data sourced from{" "}
              <a href="https://opendata.gov.om" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                opendata.gov.om
              </a>
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              Built by MedResearch Academy | Open Government License - Sultanate of Oman
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5" dir="rtl">
              مختبر البيانات المفتوحة 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
