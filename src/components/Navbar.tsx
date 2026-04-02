import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm">
      <nav className="flex justify-between items-center h-16 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold tracking-tighter text-slate-950 dark:text-slate-50">
            Digital Guardian IT
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8 font-sans tracking-tight text-sm font-medium">
          <Link
            className="text-slate-950 dark:text-white font-semibold border-b-2 border-orange-600"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-slate-500 dark:text-slate-400 hover:text-orange-600 transition-colors duration-200"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="text-slate-500 dark:text-slate-400 hover:text-orange-600 transition-colors duration-200"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-slate-500 dark:text-slate-400 hover:text-orange-600 transition-colors duration-200"
            href="/contact"
          >
            Contact
          </Link>
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
