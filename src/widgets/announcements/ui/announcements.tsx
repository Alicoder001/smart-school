"use client";

import { cn } from "@/shared/lib/utils";

export interface AnnouncementItem {
  id: string | number;
  title: string;
  date: string;
  description: string;
}

export interface AnnouncementsWidgetProps {
  items?: AnnouncementItem[];
  className?: string;
}

const defaultAnnouncements: AnnouncementItem[] = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit",
    date: "2025-01-01",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, expedita. Rerum, quidem facilis?",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit",
    date: "2025-01-01",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, expedita. Rerum, quidem facilis?",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit",
    date: "2025-01-01",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, expedita. Rerum, quidem facilis?",
  },
];

const bgColors = [
  "bg-lamaSkyLight",
  "bg-lamaPurpleLight",
  "bg-lamaYellowLight",
];

export function AnnouncementsWidget({
  items = defaultAnnouncements,
  className,
}: AnnouncementsWidgetProps) {
  return (
    <div className={cn("bg-white p-4 rounded-xl shadow-sm", className)}>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Announcements</h1>
        <button className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
          View All
        </button>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "rounded-lg p-4 transition-transform hover:scale-[1.01]",
              bgColors[index % bgColors.length]
            )}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-gray-700">{item.title}</h2>
              <span className="text-[10px] text-gray-400 bg-white rounded-md px-2 py-1 shadow-xs">
                {item.date}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
