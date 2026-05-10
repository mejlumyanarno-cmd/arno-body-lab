import type { Metadata } from "next";
import { ClientDashboard } from "@/components/dashboard/client-dashboard";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Premium coaching dashboard for workouts, nutrition, progress, check-ins and notifications."
};

export default function DashboardPage() {
  return <ClientDashboard />;
}
