"use client";

import React from "react";
import { ResponsiveChartContainer } from "./ResponsiveChartContainer";

export interface ColumnDef<T> {
  key: string;
  header: string;
  render?: (row: T) => React.ReactNode;
  width?: string;
}

interface Props<T> {
  name: string;
  title?: string;
  columns: ColumnDef<T>[];
  data: T[];
  keyExtractor: (row: T, index: number) => string;
  className?: string;
}

export function ResponsiveTable<T extends Record<string, unknown>>({
  name,
  title,
  columns,
  data,
  keyExtractor,
  className = "",
}: Props<T>) {
  return (
    <ResponsiveChartContainer name={name} title={title} className={className}>
      {(breakpoint) => {
        // MOBILE VIEW (< 768px): STACKED CARDS (ZERO HORIZONTAL SCROLL)
        if (breakpoint === "mobile") {
          return (
            <div className="space-y-3 w-full">
              {title && (
                <h4 className="font-sans font-bold text-base text-[#0A2747] mb-3">{title}</h4>
              )}
              {data.map((row, idx) => (
                <div
                  key={keyExtractor(row, idx)}
                  className="p-4 rounded-xl bg-[#FFFEFA] border border-[rgba(10,39,71,0.14)] shadow-2xs space-y-2.5 text-xs font-sans text-[#0A2747]"
                >
                  {columns.map((col) => (
                    <div
                      key={col.key}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-[rgba(10,39,71,0.06)] last:border-0 last:pb-0"
                    >
                      <span className="font-mono text-[11px] text-[#5A738E] font-bold uppercase tracking-wider">
                        {col.header}
                      </span>
                      <div className="font-medium text-[#0A2747] text-xs">
                        {col.render ? col.render(row) : (row[col.key] as React.ReactNode)}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          );
        }

        // DESKTOP & TABLET VIEW (≥ 768px): CLEAN RESPONSIVE HTML TABLE
        return (
          <div className="w-full bg-[#FFFEFA] border border-[rgba(10,39,71,0.14)] rounded-xl p-5 shadow-2xs">
            {title && (
              <h4 className="font-sans font-bold text-lg text-[#0A2747] mb-4 pb-3 border-b border-[rgba(10,39,71,0.08)]">
                {title}
              </h4>
            )}
            <div className="w-full overflow-x-auto">
              <table className="w-full border-collapse text-left text-xs font-sans">
                <thead>
                  <tr className="border-b border-[rgba(10,39,71,0.12)]">
                    {columns.map((col) => (
                      <th
                        key={col.key}
                        className="py-3 px-3 font-mono text-[11px] text-[#5A738E] font-bold uppercase tracking-wider"
                        style={{ width: col.width }}
                      >
                        {col.header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, idx) => (
                    <tr
                      key={keyExtractor(row, idx)}
                      className="border-b border-[rgba(10,39,71,0.06)] hover:bg-[#F6F3EC]/50 transition-colors last:border-0"
                    >
                      {columns.map((col) => (
                        <td key={col.key} className="py-3.5 px-3 text-[#0A2747]">
                          {col.render ? col.render(row) : (row[col.key] as React.ReactNode)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      }}
    </ResponsiveChartContainer>
  );
}
