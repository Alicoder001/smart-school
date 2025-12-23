"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCurrentRole } from "@/entities/user";
import { menuItems } from "../config/menu-items";
import { cn } from "@/shared/lib/utils";

export function SidebarMenu() {
  const role = getCurrentRole();
  const pathname = usePathname();

  return (
    <div className="mt-4 text-sm">
      {menuItems.map((section) => (
        <div className="flex flex-col gap-2" key={section.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4 uppercase tracking-wider text-[10px]">
            {section.title}
          </span>
          {section.items.map((item) => {
            if (item.visible.includes(role)) {
              const isActive = pathname === item.href;

              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className={cn(
                    "flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md transition-colors",
                    isActive
                      ? "bg-lamaSkyLight text-black font-medium"
                      : "hover:bg-lamaSkyLight"
                  )}
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
}
