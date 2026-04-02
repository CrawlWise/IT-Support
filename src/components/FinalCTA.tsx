import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-primary-container-custom text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-on-tertiary-container/10 -skew-x-12 transform translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Don't Wait for Monday</h2>
        <p className="text-xl text-on-primary-container mb-10 max-w-2xl mx-auto">Digital emergencies don't respect office hours. Secure your peace of mind with the Guardian team today.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="w-full sm:w-auto bg-on-tertiary-container text-white px-10 py-5 h-auto rounded-md font-bold text-lg hover:brightness-110 transition-all flex items-center justify-center gap-3 border-none">
            <span className="material-symbols-outlined">call</span>
            Contact Emergency Desk
          </Button>
          <Button variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-5 h-auto rounded-md font-bold text-lg transition-all">
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
