import { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

export interface Column<T> {
  header: string;
  accessor: keyof T | string;
  className?: string;
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  renderRow: (item: T) => ReactNode;
  className?: string;
}

export function Table<T>({
  columns,
  data,
  renderRow,
  className,
}: TableProps<T>) {
  return (
    <table className={cn("w-full mt-4", className)}>
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((col) => (
            <th key={String(col.accessor)} className={cn("p-4", col.className)}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
}
