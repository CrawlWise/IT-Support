import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface font-body text-on-surface flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase text-on-tertiary-container bg-tertiary-fixed rounded">Always Vigilant</span>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-8 leading-[1.1]">
                  The <span className="text-on-tertiary-container">Guardian</span> Never Sleeps.
                </h1>
                <p className="text-xl md:text-2xl text-on-primary-container leading-relaxed max-w-2xl">
                  We are Digital Guardian IT. When the world goes home and offices go dark, we stand guard. Our mission is to provide unwavering IT stability during the hours when your business is most vulnerable.
                </p>
              </div>
            </div>
          </div>
          {/* Asymmetric Background Element */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-low -z-10 translate-x-20"></div>
          <div className="absolute -bottom-12 right-24 w-64 h-64 bg-tertiary-fixed rounded-full blur-3xl opacity-30 -z-10"></div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 bg-surface-container">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-1/2">
                <div className="aspect-square bg-surface-container-lowest rounded-xl overflow-hidden ambient-shadow p-4 relative">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    alt="Cybersecurity expert monitoring servers"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzINb5s3O-dSgrlOYx7DaiJmp7f1ufhcw0aG-gf_1PSF5PJVM5C0wmgV7DBjFUsozC57Uyd_yxSYtR74nmyTYYCudR6w-je65_-Ry4Cq7EyJsNExd1CO-UHD2bg6fg7pdnLcZBwES_TPihu2rtZFRg328dPI9TU-Z1EAoxPyz6-6swMJTYT3cB8rrZezQtRYhxyrOx1s26bYU8jmc1fIzMXGROcfU8PyESWK57GVLIE_I79pnEVnnOy_NTse-qf7r6FaJaQo91dls"
                  />
                  {/* Emergency Alert Overlay */}
                  <div className="absolute -bottom-6 -right-6 guardian-glass p-8 max-w-xs rounded-xl ambient-shadow border border-white/20 text-left">
                    <p className="text-on-tertiary-container font-bold text-lg mb-2">The 3 AM Reality</p>
                    <p className="text-sm text-on-primary-fixed-variant leading-relaxed">Most IT support stops at 5 PM. We realized that critical systems don't wait for business hours to fail.</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 pl-0 md:pl-12 text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-on-surface">The Gap in the Market</h2>
                <div className="space-y-6 text-lg text-on-primary-container leading-relaxed">
                  <p>For years, small and mid-sized enterprises have been forced to wait until Monday morning for critical fixes. We saw businesses lose thousands in weekend revenue because of a simple server glitch or a security breach that happened at midnight on a Saturday.</p>
                  <p>Digital Guardian IT was founded to bridge this gap. We aren't just an IT firm; we are an elite response team specializing in off-hours, weekends, and holiday support. We believe that stability is a right, not a weekday-only privilege.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values (Bento Grid) */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">Foundation of Trust</h2>
              <p className="text-on-primary-container max-w-xl">Our core values are the pillars that support our Guardian promise.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Reliability */}
              <div className="bg-surface-container-low p-10 rounded-xl hover:bg-surface-container-high transition-colors group text-left">
                <div className="mb-8 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-surface-container-lowest text-on-tertiary-container shadow-sm">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-on-surface">Reliability</h3>
                <p className="text-on-primary-container leading-relaxed text-sm">Our presence is constant. When we say we're on watch, we mean every second of every hour, without exception.</p>
              </div>
              {/* Speed */}
              <div className="bg-primary-container p-10 rounded-xl group relative overflow-hidden text-left">
                <div className="relative z-10">
                  <div className="mb-8 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-on-tertiary-container text-white shadow-sm">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Speed</h3>
                  <p className="text-on-primary-container leading-relaxed text-sm">Response times measured in minutes, not hours. In an emergency, every second saved preserves your bottom line.</p>
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-10 text-white transform rotate-12">
                  <span className="material-symbols-outlined !text-[120px]">speed</span>
                </div>
              </div>
              {/* Expertise */}
              <div className="bg-surface-container-low p-10 rounded-xl hover:bg-surface-container-high transition-colors group text-left">
                <div className="mb-8 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-surface-container-lowest text-on-tertiary-container shadow-sm">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-on-surface">Expertise</h3>
                <p className="text-on-primary-container leading-relaxed text-sm">We don't send juniors to do a senior's job. Our team consists of seasoned veterans who have seen it all.</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Team Section */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 text-left">
                <h2 className="text-4xl font-bold text-on-surface mb-6 leading-tight">Elite Engineers, <br />Total Assurance.</h2>
                <p className="text-lg text-on-primary-container mb-8 leading-relaxed">
                  Our roster isn't built on quantity. We hand-pick senior engineers with a minimum of 10+ years in high-stakes environments—financial data centers, healthcare networks, and global logistics.
                </p>
                <div className="space-y-4">
                  {[
                    "Certified Cisco & Azure Architects",
                    "ISO 27001 Compliance Officers",
                    "24/7 Rapid Response Unit"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-on-tertiary-container"></div>
                      <p className="font-bold text-on-surface text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="aspect-[4/5] bg-white rounded-lg overflow-hidden ambient-shadow">
                    <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Professional IT engineer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6oeIgGXunUfpK04JrZF1alTVuHQcs0zvMeX9dJA4hrL5nfcJ9N-tFV1g2EUpELLa06SX3eMAHA6_9EBTxT_NOUinYj-LM9aARbYZWomAt6YcxYY3FP_6qgs9-2hgvCJyIotIo7SKQIFOC-wBeZgIxDNyUGo_SmUPt5gPUn7eSzfKtundTUItYM-CaTeuHWkI7TLjesIkVGTBYdndVlZEFu2u4S0nfz-D5et-FlblOVSAnip2rBCos2KWRh9zVpf876rlXSqmcOI0" />
                  </div>
                  <div className="aspect-square bg-on-tertiary-container rounded-lg flex flex-col justify-end p-6 text-white text-left">
                    <p className="text-4xl font-bold tracking-tight">150+</p>
                    <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Crisis Interventions Monthly</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-square bg-primary-container rounded-lg flex flex-col justify-end p-6 text-white text-left">
                    <p className="text-4xl font-bold tracking-tight">12m</p>
                    <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Average Response Time</p>
                  </div>
                  <div className="aspect-[4/5] bg-white rounded-lg overflow-hidden ambient-shadow">
                    <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Senior IT architect" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1q-sf635XeLgKoWuPoSzmNHT2V2erCW-8OxQ_5O-ijrKAUgRcAP1hsGT3snM8MxJ8jljkCjD1EbjDQk0TjuuDh9VDO8kJK5WZrPMTyoYCTjM3sB6B2deKLRGnw78Puyk0QnXxRylZ_dVLra1caHZWipoHYwlZ00c2Pnqq_QnKB8X3vRcETggJdK_hFhTG5vlph63fidx256VKwPBp774ByDy8LJZFNUIk7m33E-MDW3Lo5jDE5GOrb5ejZUZYwSpGkLfzjZ5-nIU" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-xs font-bold tracking-widest text-on-primary-container uppercase mb-2">Our Credentials</p>
              <h2 className="text-2xl font-bold text-on-surface">Trusted by Industry Leaders</h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-4xl">shield</span>
                <span className="font-bold tracking-tighter text-xl uppercase">CYBER-SEC+</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-4xl">cloud_done</span>
                <span className="font-bold tracking-tighter text-xl uppercase">AZURE-ELITE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-4xl">settings_suggest</span>
                <span className="font-bold tracking-tighter text-xl uppercase">ISO-9001</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-4xl">hub</span>
                <span className="font-bold tracking-tighter text-xl uppercase">Cisco-Gold</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-primary-container rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready for Peace of Mind?</h2>
                <p className="text-on-primary-container text-lg mb-10 max-w-2xl mx-auto">Don't wait for your next outage to find out your IT support is asleep. Partner with the Guardian today.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/emergency">
                    <button className="bg-on-tertiary-container text-white px-8 py-4 rounded-md font-bold hover:brightness-110 transition-all">Start Your Protection</button>
                  </Link>
                  <Link href="/contact">
                    <button className="border border-outline-variant/30 text-white px-8 py-4 rounded-md font-bold hover:bg-white/5 transition-all">Talk to a Senior Architect</button>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-on-tertiary-container/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
