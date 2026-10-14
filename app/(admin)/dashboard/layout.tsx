import AdminSidebar from "@/components/navBar/AdminSidebar";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-min-screen flex bg-background">
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}

export default DashboardLayout;
