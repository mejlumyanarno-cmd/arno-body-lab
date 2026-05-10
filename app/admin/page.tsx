import type { Metadata } from "next";
import { AdminPanel } from "@/components/admin/admin-panel";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin",
  description: "Trainer admin panel for programs, clients, subscriptions, analytics and nutrition."
};

export default function AdminPage() {
  return <AdminPanel />;
}
