"use client";

import { UserCard } from "@/widgets/user-card";
import { CountChart, AttendanceChart, FinanceChart } from "@/shared/ui/charts";
import { EventCalendarWidget } from "@/widgets/event-calendar";
import { AnnouncementsWidget } from "@/widgets/announcements";

export function AdminDashboardWidget() {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row h-full">
      {/* LEFT - MAIN ANALYTICS */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* STAT CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" count="1,234" />
          <UserCard type="teacher" count="450" />
          <UserCard type="parent" count="2,300" />
          <UserCard type="staff" count="120" />
        </div>

        {/* ANALYTICS ROW 1 */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* STUDENT RATIO */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart
              title="Students"
              boysCount={682}
              girlsCount={552}
              boysPercentage={55}
              girlsPercentage={45}
            />
          </div>
          {/* WEEKLY ATTENDANCE */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart title="Attendance" />
          </div>
        </div>

        {/* ANALYTICS ROW 2 - FINANCE */}
        <div className="w-full h-[500px]">
          <FinanceChart title="Income vs Expenses" />
        </div>
      </div>

      {/* RIGHT - SIDEBAR WIDGETS */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendarWidget />
        <AnnouncementsWidget />
      </div>
    </div>
  );
}
