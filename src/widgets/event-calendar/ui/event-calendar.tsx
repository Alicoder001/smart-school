"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { cn } from "@/shared/lib/utils";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export interface EventItem {
  id: string | number;
  title: string;
  time: string;
  description: string;
}

export interface EventCalendarWidgetProps {
  events?: EventItem[];
  className?: string;
}

const defaultEvents: EventItem[] = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export function EventCalendarWidget({
  events = defaultEvents,
  className,
}: EventCalendarWidgetProps) {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className={cn("bg-white p-4 rounded-xl shadow-sm", className)}>
      <div className="calendar-container mb-6">
        <Calendar
          onChange={onChange}
          value={value}
          className="!w-full !border-none !font-sans"
        />
      </div>

      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-gray-800">Events</h1>
        <button className="hover:bg-gray-100 p-1 rounded-full transition-colors">
          <Image src="/moreDark.png" alt="more" width={20} height={20} />
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-lg border border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple hover:shadow-md transition-all group"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-700 group-hover:text-black transition-colors">
                {event.title}
              </h1>
              <span className="text-gray-400 text-[10px] font-medium">
                {event.time}
              </span>
            </div>
            <p className="mt-2 text-gray-400 text-sm leading-relaxed">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
