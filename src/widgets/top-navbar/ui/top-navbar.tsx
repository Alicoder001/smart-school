"use client";

import Image from "next/image";
import { getCurrentRole } from "@/entities/user";

export function TopNavbar() {
  const role = getCurrentRole();

  return (
    <div className="flex items-center justify-between p-4 bg-white/50 backdrop-blur-sm sticky top-0 z-10 transition-all border-b border-gray-100">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 bg-white">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>

      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full md:w-auto">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors shadow-sm">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative hover:bg-gray-50 transition-colors shadow-sm">
          <Image src="/announcement.png" alt="" width={20} height={20} />
          <div className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-purple-500 text-white rounded-full text-[10px] animate-pulse">
            1
          </div>
        </div>

        <div className="flex flex-col text-right">
          <span className="text-xs leading-tight font-semibold text-gray-800">
            John Doe
          </span>
          <span className="text-[10px] text-gray-500 uppercase tracking-tighter">
            {role}
          </span>
        </div>

        <div className="relative group cursor-pointer">
          <Image
            src="/avatar.png"
            alt="User avatar"
            width={36}
            height={36}
            className="rounded-full ring-2 ring-lamaSkyLight group-hover:ring-lamaSky transition-all"
          />
        </div>
      </div>
    </div>
  );
}
