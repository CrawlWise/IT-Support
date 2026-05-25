"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm">
      <nav className="flex justify-between items-center h-16 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold tracking-tighter text-slate-950 dark:text-slate-50">
            OutOfHours IT Support LTD
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8 font-sans tracking-tight text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className={`${
                pathname === item.href
                  ? "text-slate-950 dark:text-white font-semibold border-b-2 border-orange-600"
                  : "text-slate-500 dark:text-slate-400 hover:text-orange-600"
              } transition-colors duration-200`}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/emergency-support">
          <Button className="active:scale-95 transition-transform bg-on-tertiary-container text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-orange-700 transition-colors border-none">
            Emergency Support
          </Button>
        </Link>
      </nav>
    </header>
  );
}
