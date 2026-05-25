import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 dark:bg-black w-full py-12 px-6 mt-auto border-t border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <span className="text-lg font-bold text-white mb-6 block">OutOfHours IT Support LTD</span>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">The elite redundancy layer for enterprise IT infrastructure. We never sleep.</p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-orange-500 cursor-pointer hover:text-white">public</span>
            <span className="material-symbols-outlined text-orange-500 cursor-pointer hover:text-white">shield</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-white font-bold text-sm uppercase tracking-wider">Services</span>
          <Link className="text-slate-400 text-sm hover:text-white transition-colors" href="/emergency-support">Emergency Support</Link>
          <Link className="text-slate-400 text-sm hover:text-white transition-colors" href="/services">Managed Security</Link>
          <Link className="text-slate-400 text-sm hover:text-white transition-colors" href="/services">Cloud Migration</Link>
          <Link className="text-slate-400 text-sm hover:text-white transition-colors" href="/services">Backup Recovery</Link>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-white font-bold text-sm uppercase tracking-wider">Company</span>
          <Link className="text-slate-400 text-sm hover:text-white transition-colors" href="/about">About Us</Link>
          <Link className="text-slate-400 text-sm hover:text-white transition-colors" href="#">Privacy Policy</Link>
          <Link className="text-slate-400 text-sm hover:text-white transition-colors" href="#">Terms of Service</Link>
          <Link className="text-slate-400 text-sm hover:text-white transition-colors" href="#">Service Status</Link>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-white font-bold text-sm uppercase tracking-wider">Support</span>
          <Link className="text-slate-400 text-sm hover:text-white transition-colors" href="/contact">Support Desk</Link>
          <Link className="text-slate-400 text-sm hover:text-white transition-colors" href="#">LinkedIn</Link>
          <Link className="text-slate-400 text-sm hover:text-white transition-colors" href="#">Twitter</Link>
          <div className="mt-4 p-4 bg-slate-900 rounded border border-slate-800">
            <p className="text-xs text-slate-500 mb-2">Emergency Hotline</p>
            <p className="text-orange-500 font-bold">xxx-xxx-xxxx</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm">OutOfHours IT Support LTD © 2026. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="text-slate-500 text-xs">SOC2 Certified</span>
          <span className="text-slate-500 text-xs">HIPAA Compliant</span>
        </div>
      </div>
    </footer>
  );
}
