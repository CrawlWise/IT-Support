import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-custom font-body text-on-surface-custom selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Overview */}
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <FinalCTA />
      </main>
    </div>
  );
}
