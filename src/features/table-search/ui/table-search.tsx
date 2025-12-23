"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export interface TableSearchProps {
  onSearch?: (query: string) => void;
  defaultValue?: string;
  placeholder?: string;
  delay?: number;
}

export function TableSearch({
  onSearch,
  defaultValue = "",
  placeholder = "Search...",
  delay = 500,
}: TableSearchProps) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch?.(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay, onSearch]);

  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 bg-white">
      <Image src="/search.png" alt="" width={14} height={14} />
      <input
        type="text"
        placeholder={placeholder}
        className="w-[200px] p-2 bg-transparent outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
