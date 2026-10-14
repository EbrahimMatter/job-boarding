import Footer from "@/components/navBar/Footer";
import Header from "@/components/navBar/Navbar";
import React from "react";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-black">
      <Header></Header>
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}

export default AppLayout;
