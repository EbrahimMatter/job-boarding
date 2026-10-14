import Link from "next/link";
import NavigationLinks from "./NavigationLinks";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-5 border-b-[3px] border-foreground bg-background">
      <Link
        href="/"
        className="font-display font-bold text-2xl tracking-widest uppercase flex items-baseline hover:opacity-80 transition-opacity"
      >
        WAZIFA<span className="text-primary font-black">_</span>
      </Link>

      <NavigationLinks />
    </header>
  );
}
