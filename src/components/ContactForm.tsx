import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Ticket submitted successfully! An expert will contact you within 15 minutes.", {
        description: "Reference ID: #NW-2026-0401",
        duration: 5000,
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">Get Support Now</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Need Immediate Assistance?</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Our team is standing by to help you with any IT emergency. Fill out the form or use our direct lines for priority support.
            </p>

            <div className="space-y-8">
              {[
                { icon: Phone, title: "Emergency Line", detail: "+1 (888) NIGHT-OWL", sub: "24/7 Priority Access" },
                { icon: Mail, title: "Support Email", detail: "help@nightowlit.com", sub: "Response within 1 hour" },
                { icon: Clock, title: "Operational Hours", detail: "6 PM - 8 AM Weekdays", sub: "24/7 Weekends & Holidays" },
                { icon: MapPin, title: "Global Presence", detail: "Remote Support Everywhere", sub: "On-site in Major Cities" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-primary font-medium">{item.detail}</p>
                    <p className="text-sm text-muted-foreground">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-border/50 shadow-2xl bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Submit a Support Ticket</CardTitle>
                <CardDescription>Describe your issue and an expert will get back to you shortly.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <Input placeholder="John Doe" required className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address</label>
                      <Input type="email" placeholder="john@company.com" required className="h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Issue Category</label>
                    <select className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option>Server Down</option>
                      <option>Network Connectivity</option>
                      <option>Security Breach</option>
                      <option>Software Error</option>
                      <option>Other Emergency</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Description</label>
                    <Textarea 
                      placeholder="Please provide as much detail as possible..." 
                      className="min-h-[150px] resize-none" 
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 text-base font-semibold group" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Submit Ticket
                        <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
