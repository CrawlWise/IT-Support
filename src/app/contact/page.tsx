import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="bg-surface-custom font-body text-on-surface-custom min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 md:py-20">
        {/* Page Header */}
        <div className="mb-16 max-w-2xl">
          <h1 className="text-5xl font-bold tracking-tight mb-4 text-on-surface-custom">Secure Your Infrastructure</h1>
          <p className="text-on-primary-container text-lg leading-relaxed">Request a consultation or emergency IT audit. Our digital guardians are standing by to stabilize your network operations.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Details & Map */}
          <div className="lg:col-span-5 space-y-12">
            <section className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-tertiary-container group-hover:bg-tertiary-fixed transition-colors">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-on-primary-container mb-1">Direct Line</h3>
                  <p className="text-xl font-semibold">+1 (555) 012-3456</p>
                  <p className="text-sm text-on-primary-container">Available 24/7 for Enterprise Clients</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-tertiary-container group-hover:bg-tertiary-fixed transition-colors">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-on-primary-container mb-1">Secure Email</h3>
                  <p className="text-xl font-semibold">guardian@dg-it.com</p>
                  <p className="text-sm text-on-primary-container">PGP Encrypted communications supported</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-tertiary-container group-hover:bg-tertiary-fixed transition-colors">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-on-primary-container mb-1">HQ Operations</h3>
                  <p className="text-xl font-semibold">1200 Silicon Avenue</p>
                  <p className="text-sm text-on-primary-container">Suite 400, Austin, TX 78701</p>
                </div>
              </div>
            </section>
            {/* Small Map Container */}
            <div className="rounded-2xl overflow-hidden bg-surface-container-low ambient-shadow h-64 relative group">
              <img
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                alt="stylized architectural map showing minimalist city grid with high contrast navy and white tones"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5eH4ZLyJUzmADCvp0v7ICR-utlaWZfwwd6vG6xg4gtnHzVxFfDtePNLpzuHqfczVNC_OPugBOQ8SXOqQZJ_mPSTTwJ4LEw6kdIU3A9yhbgoL7i8HfLC1hRTMolpt3LmQGnXxd1drDG4Tv8A7an6gMMnz3SRRyo6_cMD8CWdA-OqIv4Ri1GHwlgfa12343lYpZakwkl0xVauzYY63O8fS3xt3PYMOKev8xVzgtLu-CuYyj92wHubyOdmYsUEn-wdsCDUOtR9vnUVg"
              />
              <div className="absolute inset-0 bg-primary-container-custom/10 pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg text-xs font-bold shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
                LIVE OPS CENTER
              </div>
            </div>
          </div>
          {/* Right Column: Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest rounded-2xl p-8 md:p-12 ambient-shadow ghost-border">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-primary-container">Full Name</label>
                    <input className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-on-tertiary-fixed-variant transition-all text-on-surface-custom" placeholder="John Doe" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-primary-container">Company</label>
                    <input className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-on-tertiary-fixed-variant transition-all text-on-surface-custom" placeholder="Acme Corp" type="text" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-primary-container">Email Address</label>
                  <input className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-on-tertiary-fixed-variant transition-all text-on-surface-custom" placeholder="john@company.com" type="email" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-primary-container">Service Needed</label>
                    <select className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-on-tertiary-fixed-variant transition-all text-on-surface-custom appearance-none">
                      <option>Cybersecurity Audit</option>
                      <option>Cloud Infrastructure</option>
                      <option>Disaster Recovery</option>
                      <option>Managed IT Services</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-primary-container">Urgency Level</label>
                    <select className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-on-tertiary-fixed-variant transition-all text-on-surface-custom appearance-none">
                      <option>Standard (2-3 Days)</option>
                      <option>High (24 Hours)</option>
                      <option>CRITICAL (Emergency)</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-primary-container">Operational Context / Message</label>
                  <textarea className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-on-tertiary-fixed-variant transition-all text-on-surface-custom" placeholder="Describe your current infrastructure challenges..." rows={4}></textarea>
                </div>
                <div className="pt-4">
                  <Button className="w-full md:w-auto bg-on-tertiary-container text-white px-8 py-4 h-auto rounded-lg font-bold hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3 border-none">
                    Initialize Request
                    <span className="material-symbols-outlined">send</span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
