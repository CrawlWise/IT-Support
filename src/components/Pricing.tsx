import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Shield, Globe } from "lucide-react";

const plans = [
  {
    name: "Night Shift",
    price: "$499",
    period: "/month",
    description: "Perfect for small teams needing evening support.",
    features: [
      "6 PM - 12 AM Support",
      "15-min Response Time",
      "Remote Troubleshooting",
      "Security Monitoring",
      "Up to 5 Users"
    ],
    icon: Zap,
    popular: false
  },
  {
    name: "Weekend Warrior",
    price: "$899",
    period: "/month",
    description: "Full weekend coverage for growing businesses.",
    features: [
      "Sat & Sun 24/7 Support",
      "10-min Response Time",
      "On-site Emergency Visit",
      "System Maintenance",
      "Up to 15 Users",
      "Database Backups"
    ],
    icon: Shield,
    popular: true
  },
  {
    name: "Enterprise Owl",
    price: "Custom",
    period: "",
    description: "Complete 24/7 off-hours and weekend solution.",
    features: [
      "6 PM - 8 AM + Weekends",
      "Instant Response Time",
      "Dedicated Account Manager",
      "Full Infrastructure Mgmt",
      "Unlimited Users",
      "Custom SLA"
    ],
    icon: Globe,
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">Transparent Pricing</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Plans for Every Business</h2>
          <p className="text-lg text-muted-foreground">
            Choose the level of support that fits your operational hours and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full flex flex-col relative ${plan.popular ? 'border-primary shadow-2xl ring-1 ring-primary/20' : 'border-border/50 shadow-lg'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1 text-xs font-bold uppercase tracking-wider">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="flex justify-between items-center mb-4">
                    <div className="p-2 rounded-xl bg-primary/10 text-primary">
                      <plan.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-8">
                    <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full h-12 text-base font-semibold" variant={plan.popular ? 'default' : 'outline'}>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
