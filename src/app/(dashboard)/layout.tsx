import { DashboardLayoutWidget } from "@/widgets/dashboard-layout";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardLayoutWidget>{children}</DashboardLayoutWidget>;
}
