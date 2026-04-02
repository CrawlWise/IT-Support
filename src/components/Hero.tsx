"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 text-left z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
            Live Support 24/7/365
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-8 leading-[1.1]">
            24/7 IT Support <br />
            <span className="text-on-tertiary-container">When Others Are Off</span>
          </h1>
          <p className="text-lg text-on-primary-container max-w-xl leading-relaxed mb-10">
            Stop waiting for Monday morning. Our elite team of engineers is standing by to resolve critical issues, handle weekend migrations, and monitor your infrastructure while you sleep.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/emergency">
              <button className="bg-on-tertiary-container text-white px-8 py-4 rounded-md font-bold text-lg hover:brightness-110 transition-all emergency-glow">
                Emergency Support
              </button>
            </Link>
            <Link href="/#services">
              <button className="border border-outline-variant/20 bg-surface-container-lowest text-on-surface px-8 py-4 rounded-md font-bold text-lg hover:bg-surface-container-low transition-all">
                View Services
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute -inset-4 bg-surface-container rounded-full blur-3xl opacity-50"></div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img
              className="w-full h-full object-cover"
              alt="Modern high-tech server room with deep blue ambient lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlXiRnJpGMWaihXEEKT4xJe1lb1rDF91bi1WzS67fBqz1aspUO2t43khF-k1nET0qpV1hAJlPJcaw1cJLqwNrcwRrr6LeUx939-iPFBdYi2TB2w0RX3kz0uIjAsM2nRaqIdn49_ywJoADMTz7rj5oA117WvqCe0z9NOaRG3ztUy3vjt47jZOlYoAsp8135XUz0uD2hSk_d8oWboYQ3japVR8m8VVbP91GbOFso0rHyVoBEkU0xGOxCH0hTiU1zxXeOjA3ODs7ZMm4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container/60 to-transparent"></div>
            {/* Floating Emergency Alert UI */}
            <div className="absolute bottom-6 left-6 right-6 guardian-glass p-4 rounded-xl shadow-lg border border-white/20">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-on-primary-container uppercase tracking-tight">Current Response Time</p>
                  <p className="text-lg font-bold text-on-surface">Under 12 Minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
