import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CTO, Global Logistics",
    content: "NightOwl IT saved our operations during a critical server failure at 3 AM. Their 15-minute response time isn't just a marketing claim—it's a reality.",
    avatar: "SJ",
    rating: 5
  },
  {
    name: "Marcus Chen",
    role: "Founder, TechStream",
    content: "As a startup with teams in Europe and Asia, we needed support that doesn't sleep. The 'Night Shift' plan has been a game-changer for our productivity.",
    avatar: "MC",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "IT Manager, RetailHub",
    content: "Weekend maintenance used to be a nightmare for our internal team. Now, we leave it to the experts at NightOwl and wake up to everything running perfectly.",
    avatar: "ER",
    rating: 5
  },
  {
    name: "David Smith",
    role: "Operations Lead, FinSecure",
    content: "The level of expertise and security protocols they follow is impressive. They've become an essential extension of our IT department.",
    avatar: "DS",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">Success Stories</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Trusted by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients say about our off-hours support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/10 -z-10" />
                    <p className="text-muted-foreground italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
