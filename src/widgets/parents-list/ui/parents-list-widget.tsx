"use client";

import Image from "next/image";
import { useState } from "react";
import { Table } from "@/shared/ui/table";
import { TableSearch } from "@/features/table-search";
import { FilterButton, SortButton } from "@/features/entity-filters";
import { Pagination } from "@/shared/ui/pagination";
import { DeleteEntityFeature } from "@/features/delete-entity";
import { getCurrentRole } from "@/entities/user";
import { Parent } from "@/entities/parent";

export interface ParentsListWidgetProps {
  data: Parent[];
}

const columns = [
  { header: "Info", accessor: "info" },
  {
    header: "Student Names",
    accessor: "students",
    className: "hidden md:table-cell",
  },
  { header: "Phone", accessor: "phone", className: "hidden lg:table-cell" },
  { header: "Address", accessor: "address", className: "hidden lg:table-cell" },
  { header: "Actions", accessor: "action" },
];

export function ParentsListWidget({ data }: ParentsListWidgetProps) {
  const role = getCurrentRole();
  const [deletingId, setDeletingId] = useState<string | number | null>(null);

  const renderRow = (item: Parent) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight group/row"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.students.join(", ")}</td>
      <td className="hidden lg:table-cell">{item.phone}</td>
      <td className="hidden lg:table-cell truncate max-w-[200px]">
        {item.address}
      </td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaSky hover:shadow-md transition-all"
                onClick={() => console.log("Edit parent:", item.id)}
              >
                <Image src="/edit.png" alt="edit" width={16} height={16} />
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaPurple hover:shadow-md transition-all"
                onClick={() => setDeletingId(item.id)}
              >
                <Image src="/delete.png" alt="delete" width={16} height={16} />
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-xl flex-1 mx-4 mb-4 mt-0 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h1 className="hidden md:block text-xl font-bold text-gray-800">
          All Parents
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch
            onSearch={(q) => console.log("Searching parents for:", q)}
          />
          <div className="flex items-center gap-3 self-end">
            <FilterButton />
            <SortButton />
            {role === "admin" && (
              <button
                className="w-9 h-9 flex items-center justify-center rounded-full bg-lamaYellow hover:shadow-md transition-all"
                onClick={() => console.log("Create parent")}
              >
                <Image src="/plus.png" alt="add" width={16} height={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      <Table columns={columns} renderRow={renderRow} data={data} />

      <div className="mt-8">
        <Pagination />
      </div>

      <DeleteEntityFeature
        entityType="parent"
        entityId={deletingId || ""}
        isOpen={!!deletingId}
        onClose={() => setDeletingId(null)}
        onConfirm={(id) => console.log("Deleting parent id:", id)}
      />
    </div>
  );
}
