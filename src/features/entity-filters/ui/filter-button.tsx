"use client";

import Image from "next/image";
import { Button } from "@/shared/ui/button";

export interface FilterButtonProps {
  onFilter?: (filters: any) => void;
}

export function FilterButton({ onFilter }: FilterButtonProps) {
  return (
    <Button
      variant="secondary"
      size="sm"
      className="w-8 h-8 p-0 rounded-full bg-lamaYellow border-none hover:opacity-80"
      onClick={() => console.log("Filter clicked")}
    >
      <Image src="/filter.png" alt="Filter" width={14} height={14} />
    </Button>
  );
}
