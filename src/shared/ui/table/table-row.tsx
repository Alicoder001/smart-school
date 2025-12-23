import { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

export interface TableRowProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function TableRow({ children, className, onClick }: TableRowProps) {
  return (
    <tr
      className={cn(
        "border-b border-gray-200 even:bg-slate-50 text-sm",
        onClick && "cursor-pointer hover:bg-lamaPurpleLight",
        className
      )}
      onClick={onClick}
    >
      {children}
    </tr>
  );
}

export interface TableCellProps {
  children: ReactNode;
  className?: string;
}

export function TableCell({ children, className }: TableCellProps) {
  return <td className={cn("p-4", className)}>{children}</td>;
}
