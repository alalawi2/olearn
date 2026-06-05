"use client";

import { ExternalLink } from "lucide-react";
import { DATA_SOURCES } from "../../data/constants";

type SourceKey = keyof typeof DATA_SOURCES;

export function SourceBadge({ sources }: { sources: SourceKey[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {sources.map((key) => {
        const src = DATA_SOURCES[key];
        return (
          <a
            key={key}
            href={src.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${src.color} transition-opacity hover:opacity-80`}
          >
            <span>{src.name}</span>
            <span className="text-[10px]">({src.nameAr})</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        );
      })}
      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400">
        opendata.gov.om
      </span>
    </div>
  );
}
