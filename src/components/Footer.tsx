import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 dark:bg-black w-full py-12 px-6 mt-auto border-t border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto text-left">
        <div className="md:col-span-1">
          <span className="text-lg font-bold text-white mb-6 block tracking-tight">Digital Guardian IT</span>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            The elite redundancy layer for enterprise IT infrastructure. We never sleep.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-on-tertiary-container cursor-pointer hover:text-white transition-colors">public</span>
            <span className="material-symbols-outlined text-on-tertiary-container cursor-pointer hover:text-white transition-colors">shield</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-white font-bold text-sm uppercase tracking-wider">Services</span>
          <Link href="/emergency" className="text-slate-400 text-sm hover:text-white transition-colors">Emergency Support</Link>
          <Link href="#" className="text-slate-400 text-sm hover:text-white transition-colors">Managed Security</Link>
          <Link href="#" className="text-slate-400 text-sm hover:text-white transition-colors">Cloud Migration</Link>
          <Link href="#" className="text-slate-400 text-sm hover:text-white transition-colors">Backup Recovery</Link>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-white font-bold text-sm uppercase tracking-wider">Company</span>
          <Link href="/about" className="text-slate-400 text-sm hover:text-white transition-colors">About Us</Link>
          <Link href="#" className="text-slate-400 text-sm hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-slate-400 text-sm hover:text-white transition-colors">Terms of Service</Link>
          <Link href="#" className="text-slate-400 text-sm hover:text-white transition-colors">Service Status</Link>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-white font-bold text-sm uppercase tracking-wider">Support</span>
          <Link href="/contact" className="text-slate-400 text-sm hover:text-white transition-colors">Support Desk</Link>
          <Link href="#" className="text-slate-400 text-sm hover:text-white transition-colors">LinkedIn</Link>
          <Link href="#" className="text-slate-400 text-sm hover:text-white transition-colors">Twitter</Link>
          <div className="mt-4 p-4 bg-slate-900 rounded border border-slate-800">
            <p className="text-xs text-slate-500 mb-2">Emergency Hotline</p>
            <p className="text-on-tertiary-container font-bold">1-800-GUARDIAN</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm">© 2024 Digital Guardian IT. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="text-slate-500 text-xs uppercase font-medium">SOC2 Certified</span>
          <span className="text-slate-500 text-xs uppercase font-medium">HIPAA Compliant</span>
        </div>
      </div>
    </footer>
  );
}
