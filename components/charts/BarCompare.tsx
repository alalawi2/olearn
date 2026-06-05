"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { COLORS } from "../../data/constants";

interface BarCompareProps {
  data: Record<string, unknown>[];
  xKey: string;
  bars: { key: string; label: string; color?: string }[];
  height?: number;
  layout?: "horizontal" | "vertical";
  stacked?: boolean;
}

export function BarCompare({
  data,
  xKey,
  bars,
  height = 350,
  layout = "horizontal",
  stacked = false,
}: BarCompareProps) {
  if (layout === "vertical") {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, bottom: 5, left: 80 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis type="number" tick={{ fontSize: 11 }} />
          <YAxis dataKey={xKey} type="category" tick={{ fontSize: 11 }} width={75} />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255,255,255,0.95)",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              fontSize: 12,
            }}
          />
          <Legend />
          {bars.map((bar, i) => (
            <Bar
              key={bar.key}
              dataKey={bar.key}
              name={bar.label}
              fill={bar.color || COLORS.chart[i % COLORS.chart.length]}
              stackId={stacked ? "stack" : undefined}
              radius={stacked ? undefined : [0, 4, 4, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis
          dataKey={xKey}
          tick={{ fontSize: 11 }}
          angle={-45}
          textAnchor="end"
          height={60}
        />
        <YAxis tick={{ fontSize: 11 }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(255,255,255,0.95)",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            fontSize: 12,
          }}
        />
        <Legend />
        {bars.map((bar, i) => (
          <Bar
            key={bar.key}
            dataKey={bar.key}
            name={bar.label}
            fill={bar.color || COLORS.chart[i % COLORS.chart.length]}
            stackId={stacked ? "stack" : undefined}
            radius={stacked ? undefined : [4, 4, 0, 0]}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
