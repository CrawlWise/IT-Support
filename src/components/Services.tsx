import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Laptop, 
  ShieldCheck, 
  Server, 
  Cloud, 
  Network, 
  Database,
  Clock,
  Calendar
} from "lucide-react";

const services = [
  {
    title: "Off-Hours Support",
    description: "Full IT support during evenings and nights (6 PM - 8 AM). Perfect for global teams.",
    icon: Clock,
    badge: "Most Popular",
    features: ["Remote Troubleshooting", "Security Monitoring", "Software Updates"]
  },
  {
    title: "Weekend Coverage",
    description: "Dedicated support on Saturdays and Sundays. Ensure your systems are ready for Monday.",
    icon: Calendar,
    badge: "Essential",
    features: ["System Maintenance", "Database Backups", "Network Audits"]
  },
  {
    title: "Emergency Response",
    description: "Critical incident management with guaranteed 15-minute response times.",
    icon: ShieldCheck,
    badge: "Critical",
    features: ["Server Recovery", "Cybersecurity Response", "Data Restoration"]
  },
  {
    title: "Infrastructure Management",
    description: "Proactive monitoring and management of your servers and cloud infrastructure.",
    icon: Server,
    features: ["Cloud Migration", "Load Balancing", "Performance Tuning"]
  },
  {
    title: "Network Security",
    description: "Advanced security protocols and firewall management to keep your data safe.",
    icon: Network,
    features: ["VPN Setup", "Intrusion Detection", "Threat Analysis"]
  },
  {
    title: "Cloud Solutions",
    description: "Expert management of AWS, Azure, and Google Cloud environments.",
    icon: Cloud,
    features: ["Cost Optimization", "Auto-scaling", "Serverless Setup"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">Our Expertise</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Comprehensive IT Solutions</h2>
          <p className="text-lg text-muted-foreground">
            We provide specialized support tailored for businesses that operate outside the standard 9-to-5 window.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 group bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <service.icon className="h-6 w-6" />
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/20">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
