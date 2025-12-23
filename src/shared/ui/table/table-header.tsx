import { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

export interface TableHeaderProps {
  children: ReactNode;
  className?: string;
}

export function TableHeader({ children, className }: TableHeaderProps) {
  return (
    <thead>
      <tr className={cn("text-left text-gray-500 text-sm", className)}>
        {children}
      </tr>
    </thead>
  );
}

export interface TableHeaderCellProps {
  children: ReactNode;
  className?: string;
}

export function TableHeaderCell({ children, className }: TableHeaderCellProps) {
  return <th className={cn("p-4", className)}>{children}</th>;
}
