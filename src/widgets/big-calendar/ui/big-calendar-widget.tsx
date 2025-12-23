"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { cn } from "@/shared/lib/utils";

const localizer = momentLocalizer(moment);

export interface BigCalendarEvent {
  title: string;
  allDay?: boolean;
  start: Date;
  end: Date;
}

export interface BigCalendarWidgetProps {
  events: BigCalendarEvent[];
  className?: string;
  height?: string | number;
}

export function BigCalendarWidget({
  events,
  className,
  height = "calc(100vh - 200px)",
}: BigCalendarWidgetProps) {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <div
      className={cn("bg-white p-4 rounded-xl shadow-sm", className)}
      style={{ height }}
    >
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={["work_week", "day"]}
        view={view}
        style={{ height: "100%" }}
        onView={handleOnChangeView}
        min={new Date(2025, 1, 0, 8, 0, 0)}
        max={new Date(2025, 1, 0, 17, 0, 0)}
        className="font-sans"
      />
    </div>
  );
}
