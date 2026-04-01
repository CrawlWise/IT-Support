import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, Zap, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-background">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary">
            <Clock className="mr-2 h-4 w-4" />
            24/7 Support for Your Business
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
        >
          Expert IT Support While <br className="hidden md:block" />
          <span className="text-primary">The World Sleeps</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We specialize in off-hours and weekend IT services. From critical server maintenance to emergency troubleshooting, we've got you covered when others are offline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="h-12 px-8 text-base font-semibold group">
            Start Free Consultation
            <Zap className="ml-2 h-4 w-4 group-hover:fill-current transition-all" />
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold">
            View Services
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { icon: Shield, text: "Secure Remote Access" },
            { icon: Clock, text: "15-Min Response Time" },
            { icon: Zap, text: "Instant Troubleshooting" },
            { icon: CheckCircle2, text: "Certified Experts" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-2xl bg-secondary/50 text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
