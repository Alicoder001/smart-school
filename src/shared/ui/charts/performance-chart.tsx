"use client";

import Image from "next/image";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { cn } from "@/shared/lib/utils";

const data = [
  { name: "Group A", value: 92, fill: "#C3EBFA" },
  { name: "Group B", value: 8, fill: "#FAE27C" },
];

export interface PerformanceChartProps {
  title?: string;
  value?: number;
  maxValue?: number;
  label?: string;
  className?: string;
}

export function PerformanceChart({
  title = "Performance",
  value = 9.2,
  maxValue = 10,
  label = "1st Semester - 2nd Semester",
  className,
}: PerformanceChartProps) {
  return (
    <div
      className={cn(
        "bg-white p-4 rounded-xl shadow-sm h-80 relative group",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">{title}</h1>
        <button className="hover:bg-gray-100 p-1 rounded-full transition-colors">
          <Image src="/moreDark.png" alt="more" width={16} height={16} />
        </button>
      </div>

      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              fill="#8884d8"
              stroke="none"
              className="outline-none"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-gray-800 to-gray-400">
          {value}
        </h1>
        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest mt-1">
          of {maxValue} max LTS
        </p>
      </div>

      <h2 className="font-semibold text-gray-500 absolute bottom-12 left-0 right-0 m-auto text-center text-sm">
        {label}
      </h2>
    </div>
  );
}
