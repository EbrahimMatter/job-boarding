// 2. NavigationLinks.tsx (Client Component)
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationLinks() {
  // Reasoning: Only this specific component needs to know the pathname and re-render when it changes.
  const pathname = usePathname();

  return (
    <nav className="inline-flex border-2 border-foreground bg-card">
      <Link
        href="/"
        className={`px-6 py-2 font-display font-bold uppercase text-xs tracking-wider transition-colors border-r-2 border-foreground ${
          pathname === "/"
            ? "bg-primary text-primary-foreground"
            : "hover:bg-muted"
        }`}
      >
        Home
      </Link>
      <Link
        href="/job"
        className={`px-6 py-2 font-display font-bold uppercase text-xs tracking-wider transition-colors ${
          pathname === "/job"
            ? "bg-primary text-primary-foreground"
            : "hover:bg-muted"
        }`}
      >
        Browse Jobs
      </Link>
    </nav>
  );
}
