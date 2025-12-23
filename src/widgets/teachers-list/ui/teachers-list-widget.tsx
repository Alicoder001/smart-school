"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Table } from "@/shared/ui/table";
import { TableSearch } from "@/features/table-search";
import { FilterButton, SortButton } from "@/features/entity-filters";
import { Pagination } from "@/shared/ui/pagination";
import { CreateTeacherForm } from "@/features/create-teacher";
import { EditTeacherForm } from "@/features/edit-teacher";
import { DeleteEntityFeature } from "@/features/delete-entity";
import { getCurrentRole } from "@/entities/user";
import { Modal } from "@/shared/ui/modal";
import { Teacher } from "@/entities/teacher";

export interface TeachersListWidgetProps {
  data: Teacher[];
}

const columns = [
  { header: "Info", accessor: "info" },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  { header: "Classes", accessor: "classes", className: "hidden md:table-cell" },
  { header: "Phone", accessor: "phone", className: "hidden lg:table-cell" },
  { header: "Address", accessor: "address", className: "hidden lg:table-cell" },
  { header: "Actions", accessor: "action" },
];

export function TeachersListWidget({ data }: TeachersListWidgetProps) {
  const role = getCurrentRole();
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);
  const [deletingId, setDeletingId] = useState<string | number | null>(null);

  const renderRow = (item: Teacher) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight group/row"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo || "/avatar.png"}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover shadow-sm"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.teacherId}</td>
      <td className="hidden md:table-cell">{item.subjects.join(", ")}</td>
      <td className="hidden md:table-cell">{item.classes.join(", ")}</td>
      <td className="hidden lg:table-cell">{item.phone}</td>
      <td className="hidden lg:table-cell truncate max-w-[200px]">
        {item.address}
      </td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaSky hover:shadow-md transition-all">
              <Image src="/view.png" alt="view" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaSky hover:shadow-md transition-all"
                onClick={() => setEditingTeacher(item)}
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
    <div className="bg-white p-4 rounded-xl flex-1 m-4 mt-0 shadow-sm">
      {/* TOP - HEADER & TOOLS */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="hidden md:block text-xl font-bold text-gray-800">
          All Teachers
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch onSearch={(q) => console.log("Searching for:", q)} />
          <div className="flex items-center gap-3 self-end">
            <FilterButton />
            <SortButton />
            {role === "admin" && (
              <button
                className="w-9 h-9 flex items-center justify-center rounded-full bg-lamaYellow hover:shadow-md hover:scale-110 transition-all"
                onClick={() => setIsCreateOpen(true)}
              >
                <Image src="/plus.png" alt="add" width={16} height={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* LIST SECTION */}
      <Table columns={columns} renderRow={renderRow} data={data} />

      {/* PAGINATION SECTION */}
      <div className="mt-8">
        <Pagination />
      </div>

      {/* MODALS */}
      <Modal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)}>
        <CreateTeacherForm
          onCancel={() => setIsCreateOpen(false)}
          onSuccess={(data) => {
            console.log("Success:", data);
            setIsCreateOpen(false);
          }}
        />
      </Modal>

      <Modal isOpen={!!editingTeacher} onClose={() => setEditingTeacher(null)}>
        {editingTeacher && (
          <EditTeacherForm
            data={editingTeacher}
            onCancel={() => setEditingTeacher(null)}
            onSuccess={(data) => {
              console.log("Updated:", data);
              setEditingTeacher(null);
            }}
          />
        )}
      </Modal>

      <DeleteEntityFeature
        entityType="teacher"
        entityId={deletingId || ""}
        isOpen={!!deletingId}
        onClose={() => setDeletingId(null)}
        onConfirm={(id) => console.log("Deleting id:", id)}
      />
    </div>
  );
}
