import Link from "next/link";

export default function Services() {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Uptime Never Sleeps</h2>
            <p className="text-on-primary-container max-w-lg">We specialize in the high-stakes windows when internal IT teams are unreachable.</p>
          </div>
          <div className="hidden md:block w-32 h-1 bg-on-tertiary-container rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-on-tertiary-container mb-6 text-4xl">notification_important</span>
            <h3 className="text-xl font-bold mb-4">Emergency IT</h3>
            <p className="text-on-primary-container text-sm leading-relaxed mb-6">Immediate intervention for server outages, cyber-attacks, and hardware failures at any hour.</p>
            <Link className="inline-flex items-center text-sm font-bold text-on-tertiary-container hover:gap-2 transition-all" href="/emergency-support">
              Learn More <span className="material-symbols-outlined ml-1">arrow_forward</span>
            </Link>
          </div>
          {/* Card 2 */}
          <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-on-tertiary-container mb-6 text-4xl">weekend</span>
            <h3 className="text-xl font-bold mb-4">Weekend Support</h3>
            <p className="text-on-primary-container text-sm leading-relaxed mb-6">Expert technical assistance during Saturdays and Sundays, ensuring business continuity without delays.</p>
            <Link className="inline-flex items-center text-sm font-bold text-on-tertiary-container hover:gap-2 transition-all" href="/services">
              Learn More <span className="material-symbols-outlined ml-1">arrow_forward</span>
            </Link>
          </div>
          {/* Card 3 */}
          <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-on-tertiary-container mb-6 text-4xl">visibility</span>
            <h3 className="text-xl font-bold mb-4">Off-Hours Monitoring</h3>
            <p className="text-on-primary-container text-sm leading-relaxed mb-6">Proactive system health checks and threat detection while your primary staff is offline.</p>
            <Link className="inline-flex items-center text-sm font-bold text-on-tertiary-container hover:gap-2 transition-all" href="/services">
              Learn More <span className="material-symbols-outlined ml-1">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
