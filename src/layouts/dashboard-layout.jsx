import Navbar from "@/components/dashboard/navbar/navbar";
import { Sidebar } from "@/components/dashboard/sidebar/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <Sidebar />
      <main className="bg-[#F0F5FF] w-full">
        <Navbar />
        <div className="h-[calc(100svh-98px)] overflow-y-auto px-5">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
