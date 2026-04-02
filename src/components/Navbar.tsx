"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm">
      <nav className="flex justify-between items-center h-16 px-6 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-slate-950 dark:text-slate-50">
            Digital Guardian IT
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-sans tracking-tight text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href.startsWith("/#") && pathname === "/");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "transition-colors duration-200 hover:text-on-tertiary-container",
                  isActive
                    ? "text-slate-950 dark:text-white font-semibold border-b-2 border-on-tertiary-container"
                    : "text-slate-500 dark:text-slate-400"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <Link href="/emergency">
          <button className="active:scale-95 transition-all bg-on-tertiary-container text-white px-5 py-2 rounded-lg font-medium text-sm hover:brightness-110">
            Emergency Support
          </button>
        </Link>
      </nav>
    </header>
  );
}
