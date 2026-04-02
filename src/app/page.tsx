import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-custom font-body text-on-surface-custom selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <Toaster position="top-center" richColors closeButton />
    </div>
  );
}
