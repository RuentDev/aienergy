import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  Home,
  CheckCircle2,
  Clock,
  FileText,
  Building2,
  DollarSign,
  Shield,
  LogIn,
  Smartphone,
  Apple,
} from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: CheckCircle2,
    title: "Simple Process",
    description: "One efficient and easy to use app - no more messy paperwork.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description:
      "Standard STCs processed within 2 business days, BSTCs within 10 business days.",
  },
  {
    icon: DollarSign,
    title: "Offset Purchases",
    description:
      "Offset kit purchases with the STC value associated with your solar installations.",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description:
      "We work with Bridge Select and their intuitive app and online portal software.",
  },
];

const pricing = [
  {
    type: "Residential",
    price: "$38.50",
    features: [
      "No GST applicable",
      "Credits processed in 2 business days",
      "Available to all AI Energy Shop customers",
    ],
  },
  {
    type: "Commercial",
    price: "$38.50",
    gst: "+gst",
    features: [
      "GST applicable",
      "Credits processed in 2 business days",
      "Contact for special pricing",
      "Bulk discounts available",
    ],
  },
];

export default function STCTradingPage() {
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
            <span className="text-muted-foreground">STC Trading</span>
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
                <FileText className="w-3 h-3 mr-1" />
                STC / BSTC Trading
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Simplify Your Trading with{" "}
                <span className="text-accent">AI Energy Shop</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                At AI Energy Shop we assist you with the entire STC & BSTC
                (Battery STC) application process, working with Bridge Select
                and their intuitive app and online portal software to make
                trading simpler and quicker than ever.
              </p>
              <p className="text-base text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Available to all AI Energy Shop customers, our STC trading
                service allows customers to offset kit purchases with the STC
                value associated with their solar installations. The process is
                simple and it allows AI Energy Shop wholesale customers to free
                up cash whilst their solar systems are installed.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Pricing Cards */}
      <AnimatedSection delay={100}>
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                STC Trading Rates
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Competitive rates for both residential and commercial
                installations.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {pricing.map((plan, index) => (
                <AnimatedSection key={plan.type} delay={150 + index * 100}>
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-accent h-full">
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <h3 className="font-bold text-2xl mb-2">{plan.type}</h3>
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-4xl font-bold text-accent">
                            {plan.price}
                          </span>
                          {plan.gst && (
                            <span className="text-lg text-muted-foreground">
                              {plan.gst}
                            </span>
                          )}
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Benefits */}
      <AnimatedSection delay={200}>
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                Benefits
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Why Trade with AI Energy Shop?
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={benefit.title} delay={250 + index * 100}>
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

      {/* Bridge Select Portal */}
      <AnimatedSection delay={300}>
        <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                  Portal Access
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Bridge Select Login Portal
                </h2>
                <p className="text-muted-foreground">
                  Access the Bridge Select portal to manage your STC
                  applications and submissions.
                </p>
              </div>

              <Card className="bg-gradient-to-br from-accent to-accent/90 border-0 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/solar-panels-pattern.jpg')] opacity-10" />
                <CardContent className="p-8 sm:p-12 text-center relative">
                  <Building2 className="w-16 h-16 text-white/40 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Ready to Start Trading?
                  </h3>
                  <p className="text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Contact us at{" "}
                    <a
                      href="mailto:ar@aienergyshop.com.au"
                      className="underline font-semibold"
                    >
                      ar@aienergyshop.com.au
                    </a>{" "}
                    to register an account and start trading STCs with AI Energy
                    Shop
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="gap-2 text-base px-8 hover:scale-105 transition-transform"
                      asChild
                    >
                      <a
                        href="https://bridgeselect.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LogIn className="w-5 h-5" />
                        Login to Online Portal
                      </a>
                    </Button>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      variant="outline"
                      className="gap-3 text-base px-8 hover:scale-105 transition-transform bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-accent"
                      asChild
                    >
                      <a
                        href="https://play.google.com/store"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Smartphone className="w-5 h-5" />
                        Get it on Google Play
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="gap-3 text-base px-8 hover:scale-105 transition-transform bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-accent"
                      asChild
                    >
                      <a
                        href="https://apps.apple.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Apple className="w-5 h-5" />
                        Download on App Store
                      </a>
                    </Button>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="text-white/80 text-sm">
                      Need assistance? Email us at{" "}
                      <a
                        href="mailto:ar@aienergyshop.com.au"
                        className="underline font-semibold hover:text-white"
                      >
                        ar@aienergyshop.com.au
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Terms & Conditions */}
      <AnimatedSection delay={400}>
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Terms & Conditions
                </h2>
                <p className="text-muted-foreground">
                  Please review our STC trading terms and conditions below.
                </p>
              </div>

              <Card className="border-border">
                <CardContent className="p-8 space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Please note that the below listed terms and conditions are
                    specific to STC and Battery STC (BSTC) trading with AI
                    Energy Shop. In addition to the below, the standard terms
                    and conditions of trade with AI Energy Shop will apply where
                    applicable.
                  </p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>
                        Credits/payments for standard STCs will be processed
                        within 2 business days after the jobs have been
                        submitted successfully, while BSTCs will be processed
                        within 10 business days of job have been submitted
                        successfully and the BSTC has been approved by the CER.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>
                        No cash payments will be made on STCs assigned to AI
                        Energy Shop for jobs where materials were sourced from
                        other suppliers. This will be applied as credits to your
                        AI Energy Shop account for buying materials for your
                        future orders.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>
                        STCs/BSTCs cashout only on credit amount after account
                        is offset from submitted STCs/BSTCs.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>
                        No GST is applicable for STCs of residential
                        installations.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>
                        For STCs on commercial installations and pricing, please
                        contact your AI Energy Shop sales representative or send
                        us an email at{" "}
                        <a
                          href="mailto:ar@aienergyshop.com.au"
                          className="text-accent hover:underline"
                        >
                          ar@aienergyshop.com.au
                        </a>
                      </span>
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-border mt-6">
                    <p className="text-sm text-muted-foreground">
                      Thank you for your understanding. For any further
                      information regarding STC trading with AI Energy Shop,
                      please contact your AI Energy Shop sales representative or
                      send us an email at{" "}
                      <a
                        href="mailto:ar@aienergyshop.com.au"
                        className="text-accent hover:underline font-medium"
                      >
                        ar@aienergyshop.com.au
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
