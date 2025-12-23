"use client";

import Image from "next/image";
import Link from "next/link";
import { SidebarMenu } from "@/widgets/sidebar-menu";
import { TopNavbar } from "@/widgets/top-navbar";

export interface DashboardLayoutWidgetProps {
  children: React.ReactNode;
}

export function DashboardLayoutWidget({
  children,
}: DashboardLayoutWidgetProps) {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* LEFT - SIDEBAR */}
      <aside className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-white border-r border-gray-100 flex flex-col h-full overflow-y-auto no-scrollbar">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2 mb-4 hover:opacity-80 transition-opacity"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold text-xl text-gray-800">
            Technova IT
          </span>
        </Link>
        <SidebarMenu />
      </aside>

      {/* RIGHT - MAIN CONTENT */}
      <main className="flex-1 bg-[#F7F8FA] overflow-y-auto flex flex-col h-full scroll-smooth">
        <TopNavbar />
        <div className="flex-1 flex flex-col w-full">{children}</div>
      </main>
    </div>
  );
}
