"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface font-body text-on-surface selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
      <Navbar />
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Overview */}
        <Services />

        {/* Why Choose Us */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 bg-primary-container text-white flex items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined">speed</span>
                </div>
                <h4 className="text-lg font-bold">Rapid Response</h4>
                <p className="text-on-primary-container text-sm leading-relaxed">
                  Average ticket acknowledgment in under 5 minutes with immediate escalation to level 2 engineers.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 bg-primary-container text-white flex items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <h4 className="text-lg font-bold">Expert Engineers</h4>
                <p className="text-on-primary-container text-sm leading-relaxed">
                  No junior triage. Every emergency call is handled by senior staff with minimum 10 years experience.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 bg-primary-container text-white flex items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined">update</span>
                </div>
                <h4 className="text-lg font-bold">24/7 Availability</h4>
                <p className="text-on-primary-container text-sm leading-relaxed">
                  Holidays, midnights, weekends—the Guardian never clocks out. We are your redundant IT layer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Final CTA */}
        <section className="py-24 bg-primary-container text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-on-tertiary-container/10 -skew-x-12 transform translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Don't Wait for Monday</h2>
            <p className="text-xl text-on-primary-container mb-10 max-w-2xl mx-auto">
              Digital emergencies don't respect office hours. Secure your peace of mind with the Guardian team today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/emergency" className="w-full sm:w-auto">
                <button className="w-full bg-on-tertiary-container text-white px-10 py-5 rounded-md font-bold text-lg hover:brightness-110 transition-all flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined">call</span>
                  Contact Emergency Desk
                </button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-md font-bold text-lg transition-all">
                  Request a Quote
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
