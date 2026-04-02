import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EmergencySupport() {
  return (
    <div className="bg-surface-custom font-body text-on-surface-custom selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-fixed rounded-full text-on-tertiary-fixed-variant text-xs font-bold tracking-widest uppercase mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-on-tertiary-container opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-on-tertiary-container"></span>
                </span>
                Active Guardian Status
              </div>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-on-surface-custom mb-8 leading-[1.1]">
                Emergency IT Support <br />
                <span className="text-on-tertiary-container text-4xl md:text-5xl opacity-90">Rapid Response in Under 60 Minutes</span>
              </h1>
              <p className="text-lg text-on-primary-container leading-relaxed max-w-xl mb-10">
                When digital infrastructure collapses, every second costs. Our Elite Response Team deploy immediately to stabilize, secure, and restore your critical systems.
              </p>
              {/* Priority Hotline Box */}
              <div className="bg-primary-container-custom p-1 rounded-xl ambient-shadow max-w-md group overflow-hidden transition-all duration-300">
                <div className="bg-surface-container-lowest p-6 rounded-[0.5rem] flex flex-col sm:flex-row items-center gap-6">
                  <div className="h-16 w-16 bg-tertiary-fixed flex items-center justify-center rounded-xl shrink-0">
                    <span className="material-symbols-outlined text-on-tertiary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>emergency_home</span>
                  </div>
                  <div className="text-center sm:text-left">
                    <span className="block text-xs font-bold text-on-primary-container uppercase tracking-widest mb-1">Priority Hotline</span>
                    <a className="block text-3xl font-black text-on-surface-custom hover:text-on-tertiary-container transition-colors" href="tel:1800GUARDIAN">
                      1-800-GUARDIAN
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-square relative z-10 rounded-2xl overflow-hidden ambient-shadow">
                <img
                  className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
                  alt="Modern high-tech server room with blue ambient lighting and a glowing orange emergency light bar at the top"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf2lKTVCTOzdmYGDMC-cEEmp7zWguzx-b5LsKwaPd0ljWmsOX7ZUVDcaOpKKfF67kktatTh1QEe1GPZRngt-2Op-stZ4rbXvCGojCmyrTFxI-I4XhPG7hjJ5QjhtQdRy1kBKd0E9tCs_0c6xqLDe5HoM9KUaTE8EMT2ONRzpEfIGsdvlXR_F8T6YpPhMm-wNfIWw3p-2TcwCbVhlPP_lvhkC_CPp_0cvMX2VOGvrj9ezxvN_OG0EmWkShznTVkBsvlvRsbi4H1LGE"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-container-custom/40 to-transparent"></div>
              </div>
              {/* Asymmetric Decorator */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-surface-container-high rounded-full blur-3xl opacity-60"></div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface-custom mb-4">Critical Response Coverage</h2>
                <p className="text-on-primary-container max-w-lg">We maintain readiness for the highest-tier digital emergencies, ensuring business continuity when it matters most.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="bg-surface-container-lowest p-8 rounded-xl ghost-border hover:bg-white transition-all duration-300">
                <div className="mb-6 flex justify-between items-start">
                  <span className="material-symbols-outlined text-on-tertiary-container text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>lock_person</span>
                  <span className="text-[0.65rem] font-bold tracking-tighter text-on-primary-container bg-surface-container px-2 py-1 rounded">PRIORITY 0</span>
                </div>
                <h3 className="text-xl font-bold text-on-surface-custom mb-4">Cybersecurity Breaches</h3>
                <p className="text-sm text-on-primary-container leading-relaxed">Immediate isolation of compromised assets, threat hunting, and perimeter reinforcement to stop data exfiltration.</p>
              </div>
              {/* Feature 2 */}
              <div className="bg-surface-container-lowest p-8 rounded-xl ghost-border hover:bg-white transition-all duration-300">
                <div className="mb-6 flex justify-between items-start">
                  <span className="material-symbols-outlined text-on-tertiary-container text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>dns</span>
                  <span className="text-[0.65rem] font-bold tracking-tighter text-on-primary-container bg-surface-container px-2 py-1 rounded">CRITICAL</span>
                </div>
                <h3 className="text-xl font-bold text-on-surface-custom mb-4">Server & Cloud Failures</h3>
                <p className="text-sm text-on-primary-container leading-relaxed">Hardware replacement, VM restoration, and cloud orchestration to bring your primary workloads back online.</p>
              </div>
              {/* Feature 3 */}
              <div className="bg-surface-container-lowest p-8 rounded-xl ghost-border hover:bg-white transition-all duration-300">
                <div className="mb-6 flex justify-between items-start">
                  <span className="material-symbols-outlined text-on-tertiary-container text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>database_off</span>
                  <span className="text-[0.65rem] font-bold tracking-tighter text-on-primary-container bg-surface-container px-2 py-1 rounded">RESTORATION</span>
                </div>
                <h3 className="text-xl font-bold text-on-surface-custom mb-4">Massive Data Loss</h3>
                <p className="text-sm text-on-primary-container leading-relaxed">Emergency data recovery from damaged arrays, corrupt volumes, and failed backup verification protocols.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-4xl font-headline font-bold text-on-surface-custom tracking-tight">Deployment Protocol</h2>
              <div className="h-1 w-20 bg-on-tertiary-container mx-auto mt-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
              {/* Connector Line (Desktop Only) */}
              <div className="hidden md:block absolute top-20 left-0 w-full h-[1px] bg-outline-variant opacity-20 z-0"></div>
              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary-container-custom text-white flex items-center justify-center text-2xl font-black mb-8 ambient-shadow">
                  01
                </div>
                <h4 className="text-xl font-bold text-on-surface-custom mb-3 uppercase tracking-wider">Initial Call</h4>
                <p className="text-on-primary-container text-sm max-w-xs leading-relaxed">Connect with a lead engineer instantly. No queues. No ticketing system delays.</p>
              </div>
              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-tertiary-fixed text-on-tertiary-container flex items-center justify-center text-2xl font-black mb-8 ambient-shadow">
                  02
                </div>
                <h4 className="text-xl font-bold text-on-surface-custom mb-3 uppercase tracking-wider">Rapid Diagnose</h4>
                <p className="text-on-primary-container text-sm max-w-xs leading-relaxed">Remote telemetry and on-site assessment performed within the first 30 minutes.</p>
              </div>
              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-on-tertiary-container text-white flex items-center justify-center text-2xl font-black mb-8 ambient-shadow">
                  03
                </div>
                <h4 className="text-xl font-bold text-on-surface-custom mb-3 uppercase tracking-wider">Full Resolve</h4>
                <p className="text-on-primary-container text-sm max-w-xs leading-relaxed">Active remediation until systems are stabilized and operations resume safely.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Alert Overlap Banner */}
        <section className="pb-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-tertiary-fixed/90 backdrop-blur-xl p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center gap-8 ambient-shadow border border-on-tertiary-fixed/10">
              <div className="h-20 w-20 shrink-0 bg-on-tertiary-container rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>campaign</span>
              </div>
              <div className="grow text-center md:text-left">
                <h3 className="text-2xl font-black text-on-tertiary-fixed mb-2">Systems Down Right Now?</h3>
                <p className="text-on-tertiary-fixed-variant opacity-90">Our rapid response dashboard is showing technicians available in your region. Call now for a bypass code.</p>
              </div>
              <button className="bg-on-tertiary-container text-white font-bold py-4 px-8 rounded-lg shadow-lg active:scale-95 transition-all shrink-0">
                GET IMMEDIATE HELP
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
