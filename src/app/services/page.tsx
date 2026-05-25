
import { Button } from "@/components/ui/button";
import Link from "next/link"; 

export default function Services() {
  return (
    <div className="text-on-surface-custom bg-surface-custom min-h-screen flex flex-col">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[819px] flex items-center bg-surface-custom overflow-hidden pt-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-container text-xs font-bold tracking-wider uppercase mb-6">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>shield_with_heart</span>
                Always Active Support
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface-custom leading-[1.1] mb-8">
                Your Business Doesn't Stop. <span className="text-on-tertiary-container">Neither Do We.</span>
              </h1>
              <p className="text-lg md:text-xl text-on-primary-container leading-relaxed max-w-xl mb-10">
                Elite IT orchestration for the hours that matter most. Secure your weekends and late nights with our dedicated OutOfHours IT Support engineers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-on-tertiary-container text-white px-8 py-4 h-auto rounded-md font-bold text-lg emergency-shadow hover:brightness-110 transition-all active:scale-95 border-none">
                  Activate Coverage
                </Button>

                <Link href="/pricing" className="cursor-pointer">
                <Button variant="outline" className="ghost-border bg-white px-8 py-4 h-auto rounded-md font-bold text-lg text-primary-container-custom hover:bg-surface-container-low transition-all">
                  View Pricing
                </Button>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 relative h-full min-h-[400px]">
              <div className="absolute inset-0 bg-surface-container rounded-3xl overflow-hidden -rotate-2 transform scale-105">
                <img
                  alt="Professional engineer monitoring digital systems in a high-tech control room with soft blue lighting"
                  className="w-full h-full object-cover opacity-90"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1WLc8sSkTqkIM88fzRg9YYA_doe2yna5NQvk-cxijzPO8d7bOZArhkKQMqRCOMN2ZRrRpEx3t2XjkEl36-wtspvGplZMUbMHijBNhse1Zr2AZ9aXzHaUWbzSGhBKElGHszdVSYLt0y5bxvsnwNA8pYx31HkXVQFQEqaAmG4Fos2uIunx-aP3-XYCgpH6oLgs8DAANbnuSJQqi34DGrjdPESKPd1maFtQQc6CMMn8llerdj5gNpops6G7p_dmCdKieFDjH36xd1nc"
                />
              </div>
              {/* Emergency Overlay Badge */}
              <div className="absolute -bottom-6 -left-6 bg-tertiary-fixed/90 backdrop-blur-md p-6 rounded-2xl max-w-[240px] emergency-shadow z-20">
                <div className="text-on-tertiary-fixed font-bold text-sm mb-1">Response Guarantee</div>
                <div className="text-2xl font-black text-on-tertiary-container tracking-tighter">Under 15 Mins</div>
                <div className="text-xs text-on-tertiary-fixed-variant mt-2 font-medium">For all critical weekend infrastructure tickets.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Schedule Section */}
        <section className="py-24 bg-surface-custom">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold tracking-tight text-on-surface-custom mb-4">Precision Coverage Schedule</h2>
                <p className="text-on-primary-container text-lg">We bridge the gap between traditional business hours and global continuity.</p>
              </div>
              <div className="flex items-center gap-4 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-surface-container-highest"></span>
                  <span>Standard</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-on-tertiary-container"></span>
                  <span>OutOfHours IT Support Hours</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {/* Day Cards */}
              <div className="md:col-span-5 grid grid-cols-5 gap-4">
                <div className="col-span-5 bg-surface-container rounded-2xl p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-xl mb-1">Monday – Friday</h3>
                      <p className="text-sm text-on-primary-container">Weeknight Vigilance</p>
                    </div>
                    <span className="material-symbols-outlined text-on-tertiary-container">nightlight</span>
                  </div>
                  <div className="mt-8 relative h-12 bg-surface-container-low rounded-full overflow-hidden flex">
                    <div className="h-full w-[33%] bg-on-tertiary-container flex items-center justify-center text-[10px] text-white font-bold">6PM - 8AM</div>
                    <div className="h-full w-[34%] bg-surface-container-highest flex items-center justify-center text-[10px] text-on-surface-custom opacity-30 font-bold">STANDARD</div>
                    <div className="h-full w-[33%] bg-on-tertiary-container flex items-center justify-center text-[10px] text-white font-bold">6PM - 8AM</div>
                  </div>
                </div>
              </div>
              {/* Weekend Card */}
              <div className="md:col-span-2 bg-primary-container-custom rounded-2xl p-8 text-white flex flex-col justify-between overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4">
                  <span className="material-symbols-outlined text-4xl opacity-20" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
                </div>
                <div className="z-10">
                  <h3 className="font-bold text-2xl mb-2">Full Weekend</h3>
                  <p className="text-primary-fixed-dim text-sm">Saturday & Sunday</p>
                </div>
                <div className="z-10 mt-12">
                  <div className="text-5xl font-black text-tertiary-fixed tracking-tighter">24/0</div>
                  <p className="text-xs uppercase tracking-widest text-primary-fixed-dim mt-2 font-bold">Zero Downtime Support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Bento */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold tracking-tight text-on-surface-custom mb-6">Why the Weekend Matters</h2>
              <div className="w-24 h-1 bg-on-tertiary-container mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="bg-surface-container-lowest p-10 rounded-2xl ghost-border hover:shadow-xl transition-shadow group">
                <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center mb-8 group-hover:bg-on-tertiary-container transition-colors">
                  <span className="material-symbols-outlined text-on-tertiary-container group-hover:text-white" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                </div>
                <h3 className="text-xl font-bold text-on-surface-custom mb-4">Flat-Rate Predictability</h3>
                <p className="text-on-primary-container leading-relaxed">
                  No hidden 'emergency' premiums. Scheduled weekend work is billed at your standard service rate. Transparency is our foundation.
                </p>
              </div>
              {/* Benefit 2 */}
              <div className="bg-surface-container-lowest p-10 rounded-2xl ghost-border hover:shadow-xl transition-shadow group">
                <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center mb-8 group-hover:bg-on-tertiary-container transition-colors">
                  <span className="material-symbols-outlined text-on-tertiary-container group-hover:text-white" style={{ fontVariationSettings: "'FILL' 1" }}>engineering</span>
                </div>
                <h3 className="text-xl font-bold text-on-surface-custom mb-4">Dedicated Elite Engineers</h3>
                <p className="text-on-primary-container leading-relaxed">
                  We don't use a skeleton crew. Access our most senior systems architects specifically rostered for off-hours high-impact changes.
                </p>
              </div>
              {/* Benefit 3 */}
              <div className="bg-surface-container-lowest p-10 rounded-2xl ghost-border hover:shadow-xl transition-shadow group">
                <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center mb-8 group-hover:bg-on-tertiary-container transition-colors">
                  <span className="material-symbols-outlined text-on-tertiary-container group-hover:text-white" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                </div>
                <h3 className="text-xl font-bold text-on-surface-custom mb-4">Zero Business Impact</h3>
                <p className="text-on-primary-container leading-relaxed">
                  Execute complex updates and migrations while your team sleeps. Arrive Monday morning to a fully optimized, tested infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-surface-custom">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-primary-container-custom rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <img alt="Abstract digital network visualization" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCaP27_Zb9T4MC1Os3cXMhXuxkesJ3LWrehUncBKueX93GZIre1EG3_g7lIsucnNgW2yvbDaZAAJq-UKVOaHi9ZzpNywJIfR8zSr7OUDmqEXx8oNNaW9HNPZnQcAeBMAoFvHkge6fHSI0W1dUocw7vYEs-vHNvYXc7kks6vwKJpbYDgyyRVw5CpZGxqTSlW3Cn3cGB6_ToFL_LQoga3Olj-fXzPf8RjWWlroSYFwB41YoSSSEnLwwfIqvVhzKgsvvLP7RZZgKr9sI" />
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Ready for Uninterrupted Stability?</h2>
                <p className="text-primary-fixed-dim text-lg mb-12 max-w-2xl mx-auto">
                  Join 400+ businesses that trust Digital OutOfHours IT Support for their critical off-hours operations.
                </p>
                <Button className="bg-on-tertiary-container text-white px-10 py-5 h-auto rounded-md font-bold text-xl hover:scale-105 transition-transform active:scale-95 border-none">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
