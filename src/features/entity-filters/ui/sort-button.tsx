"use client";

import Image from "next/image";
import { Button } from "@/shared/ui/button";

export interface SortButtonProps {
  onSort?: (field: string, order: "asc" | "desc") => void;
  options?: Array<{ label: string; value: string }>;
}

export function SortButton({ onSort, options }: SortButtonProps) {
  return (
    <Button
      variant="secondary"
      size="sm"
      className="w-8 h-8 p-0 rounded-full bg-lamaYellow border-none hover:opacity-80"
      onClick={() => console.log("Sort clicked")}
    >
      <Image src="/sort.png" alt="Sort" width={14} height={14} />
    </Button>
  );
}
