"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-between px-8 py-5 border-b-[3px] border-foreground bg-background">
      {/* Left: Logo (WAZIFA_) */}
      <Link
        href="/"
        className="font-display font-bold text-2xl tracking-widest uppercase flex items-baseline hover:opacity-80 transition-opacity"
      >
        WAZIFA<span className="text-primary font-black">_</span>
      </Link>

      {/* Right: Segmented Navigation Group */}
      <nav className="inline-flex border-2 border-foreground bg-card">
        <Link
          href="/"
          className={`
            px-6 py-2 font-display font-bold uppercase text-xs tracking-wider transition-colors
            border-r-2 border-foreground
            ${pathname === "/" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}
          `}
        >
          Home
        </Link>
        <Link
          href="/job"
          className={`
            px-6 py-2 font-display font-bold uppercase text-xs tracking-wider transition-colors
            ${pathname === "/job" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}
          `}
        >
          Browse Jobs
        </Link>
      </nav>
    </header>
  );
}
