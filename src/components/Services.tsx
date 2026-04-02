import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Emergency IT",
      description: "Immediate intervention for server outages, cyber-attacks, and hardware failures at any hour.",
      icon: "notification_important",
      href: "/emergency"
    },
    {
      title: "Weekend Support",
      description: "Expert technical assistance during Saturdays and Sundays, ensuring business continuity without delays.",
      icon: "weekend",
      href: "/weekend"
    },
    {
      title: "Off-Hours Monitoring",
      description: "Proactive system health checks and threat detection while your primary staff is offline.",
      icon: "visibility",
      href: "/#services"
    }
  ];

  return (
    <section id="services" className="bg-surface-container-low py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Uptime Never Sleeps</h2>
            <p className="text-on-primary-container max-w-lg">We specialize in the high-stakes windows when internal IT teams are unreachable.</p>
          </div>
          <div className="hidden md:block w-32 h-1 bg-on-tertiary-container rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {services.map((service, index) => (
            <div key={index} className="bg-surface-container-lowest p-8 rounded-xl ghost-border shadow-sm hover:shadow-md transition-shadow group">
              <span className="material-symbols-outlined text-on-tertiary-container mb-6 text-4xl block">
                {service.icon}
              </span>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-on-primary-container text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <Link href={service.href} className="inline-flex items-center text-sm font-bold text-on-tertiary-container hover:gap-2 transition-all">
                Learn More
                <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
