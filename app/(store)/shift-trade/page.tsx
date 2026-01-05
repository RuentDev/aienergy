import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  Home,
  ArrowUpRight,
  ExternalLink,
  CreditCard,
  FileCheck,
  Clock,
} from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: CreditCard,
    title: "21 Day Payment Terms",
    description:
      "Flexible interest-free payment options to help manage your cash flow effectively.",
  },
  {
    icon: Clock,
    title: "Fast Approval",
    description:
      "Get approved within minutes of applying - no lengthy waiting periods.",
  },
  {
    icon: FileCheck,
    title: "Easy Integration",
    description:
      "Seamlessly integrated with AI Energy Shop for convenient purchasing.",
  },
];

export default function ShiftTradePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumbs */}
      <div className="bg-muted/20 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="hover:text-accent transition-colors flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Shift Trade</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <AnimatedSection>
        <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-6 px-4 py-1.5">
                <CreditCard className="w-3 h-3 mr-1" />
                Flexible Payment Solution
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Register with <span className="text-accent">Shift Trade</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                AI Energy Shop have partnered with Shift to offer flexible
                payment terms to help make cash flow management simple and
                convenient, with integration allowing you to use your Shift
                Trade account to make purchases with AI Energy Shop.
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                With 21 day payment options interest free and approval available
                within minutes of applying, this is one of the many ways
                we&apos;re working to provide a wholesale service that suits
                your business.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Benefits */}
      <AnimatedSection delay={100}>
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Why Choose Shift Trade?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Designed to make your business operations smoother and more
                efficient.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={benefit.title} delay={200 + index * 100}>
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-accent h-full">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                        <benefit.icon className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA - Register */}
      <AnimatedSection delay={300}>
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-br from-accent to-accent/90 border-0 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('/solar-panels-pattern.jpg')] opacity-10" />
              <CardContent className="p-8 sm:p-12 lg:p-16 text-center relative">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Register with Shift Trade
                </h2>
                <p className="text-lg text-white/90 mb-2 max-w-2xl mx-auto">
                  Open a 21 day trade account
                </p>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                  Follow the link below to apply now and start enjoying flexible
                  payment terms.
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2 text-base px-8 hover:scale-105 transition-transform"
                  asChild
                >
                  <a
                    href="https://shift.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply for Shift Trade Account
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Support */}
      <AnimatedSection delay={400}>
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Need Assistance?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Something not right? Contact us for assistance applying or to
                find out how we can find a plan that better matches your and
                your business&apos;s needs.
              </p>
              <Link href="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-white gap-2">
                  Contact Support
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
