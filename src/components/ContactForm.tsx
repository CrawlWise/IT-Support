"use client";

import React, { useState } from "react";
import { toast } from "sonner";
export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Request initialized successfully!", {
        description: "Our digital guardians will contact you shortly.",
        duration: 5000,
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-8 md:p-12 ambient-shadow ghost-border">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="full-name" className="text-xs font-bold uppercase tracking-widest text-on-primary-container">Full Name</label>
            <input
              id="full-name"
              className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-on-tertiary-fixed-variant transition-all text-on-surface outline-none"
              placeholder="John Doe"
              type="text"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-on-primary-container">Company</label>
            <input
              id="company"
              className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-on-tertiary-fixed-variant transition-all text-on-surface outline-none"
              placeholder="Acme Corp"
              type="text"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-on-primary-container">Email Address</label>
          <input
            id="email"
            className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-on-tertiary-fixed-variant transition-all text-on-surface outline-none"
            placeholder="john@company.com"
            type="email"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-primary-container">Service Needed</label>
            <select className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-on-tertiary-fixed-variant transition-all text-on-surface appearance-none outline-none">
              <option>Cybersecurity Audit</option>
              <option>Cloud Infrastructure</option>
              <option>Disaster Recovery</option>
              <option>Managed IT Services</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-primary-container">Urgency Level</label>
            <select className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-on-tertiary-fixed-variant transition-all text-on-surface appearance-none outline-none">
              <option>Standard (2-3 Days)</option>
              <option>High (24 Hours)</option>
              <option>CRITICAL (Emergency)</option>
            </select>
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-on-primary-container">Operational Context / Message</label>
          <textarea
            id="message"
            className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-on-tertiary-fixed-variant transition-all text-on-surface outline-none"
            placeholder="Describe your current infrastructure challenges..."
            rows={4}
            required
          ></textarea>
        </div>
        <div className="pt-4">
          <button
            className="w-full md:w-auto bg-on-tertiary-container text-white px-8 py-4 rounded-lg font-bold hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Initializing..." : "Initialize Request"}
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </form>
    </div>
  );
}
