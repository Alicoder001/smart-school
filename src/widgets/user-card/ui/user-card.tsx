"use client";

import Image from "next/image";
import { cn } from "@/shared/lib/utils";

export interface UserCardProps {
  type: string;
  count: string | number;
  year?: string;
  className?: string;
}

export function UserCard({
  type,
  count,
  year = "2024/25",
  className,
}: UserCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px] shadow-sm hover:shadow-md transition-shadow",
        className
      )}
    >
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600 font-medium">
          {year}
        </span>
        <button className="hover:bg-white/20 rounded-full p-1 transition-colors">
          <Image src="/more.png" alt="more" width={20} height={20} />
        </button>
      </div>
      <h1 className="text-2xl font-bold my-4 text-gray-800">
        {count.toLocaleString()}
      </h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}s</h2>
    </div>
  );
}
