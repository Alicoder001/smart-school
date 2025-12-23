import {
  Table as TableRoot,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";

export interface Column {
  header: string;
  accessor: string;
  className?: string; // For responsive hiding (e.g. "hidden md:table-cell")
}

interface ListTableProps {
  columns: Column[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
  className?: string;
}

export const Table = ({
  columns,
  renderRow,
  data,
  className,
}: ListTableProps) => {
  return (
    <TableRoot className={className}>
      <TableHeader>
        <TableRow>
          {columns.map((col) => (
            <TableHead key={col.accessor} className={col.className}>
              {col.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>{data.map((item) => renderRow(item))}</TableBody>
    </TableRoot>
  );
};
