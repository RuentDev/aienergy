import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Users,
  Award,
  Target,
  TrendingUp,
  Shield,
  Leaf,
  Globe,
  ChevronRight,
  Home,
  CheckCircle2,
  Building2,
  Truck,
  HeadphonesIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { label: "Years Experience", value: "15+", icon: Award },
  { label: "Products Sold", value: "50K+", icon: TrendingUp },
  { label: "Happy Customers", value: "10K+", icon: Users },
  { label: "Warehouses", value: "3", icon: Building2 },
];

const values = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Every product undergoes rigorous testing to meet Australian standards and exceed expectations.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We're committed to a greener future, offering eco-friendly solutions that reduce carbon footprints.",
  },
  {
    icon: Globe,
    title: "Global Partnerships",
    description:
      "We partner with world-leading manufacturers to bring you the best renewable energy technology.",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description:
      "Our dedicated team provides technical support and guidance throughout your renewable energy journey.",
  },
];

const team = [
  {
    name: "James Mitchell",
    role: "CEO & Founder",
    image: "/professional-man-suit.png",
  },
  {
    name: "Sarah Chen",
    role: "Head of Operations",
    image: "/professional-businesswoman.png",
  },
  {
    name: "Michael Thompson",
    role: "Technical Director",
    image: "/professional-engineer.png",
  },
  {
    name: "Emily Roberts",
    role: "Customer Success Manager",
    image: "/professional-woman-smiling.png",
  },
];

const milestones = [
  {
    year: "2009",
    event: "Founded in Sydney with a vision for sustainable energy",
  },
  { year: "2012", event: "Expanded to Brisbane warehouse" },
  { year: "2015", event: "Launched online wholesale platform" },
  { year: "2018", event: "Opened Melbourne distribution center" },
  { year: "2021", event: "Reached 10,000+ happy customers milestone" },
  { year: "2024", event: "Introduced AI-powered energy solutions" },
];

export default function AboutPage() {
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
            <span className="text-muted-foreground">About Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <AnimatedSection>
        <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-6 px-4 py-1.5">
                <Zap className="w-3 h-3 mr-1" />
                Powering Australia&apos;s Future
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-balance">
                Leading the Charge in{" "}
                <span className="text-accent">Renewable Energy</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                AI Energy Shop is Australia&apos;s premier wholesale distributor
                of solar panels, inverters, and energy storage systems.
                We&apos;re dedicated to making clean energy accessible to
                everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white gap-2 w-full sm:w-auto"
                  >
                    Browse Products
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 w-full sm:w-auto bg-transparent"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection delay={100}>
        <section className="py-12 sm:py-16 border-y border-border bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Mission Section */}
      <AnimatedSection delay={200}>
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                  <Target className="w-3 h-3 mr-1" />
                  Our Mission
                </Badge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                  Empowering Australia with Clean Energy Solutions
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  At AI Energy Shop, we believe in a future powered by renewable
                  energy. Our mission is to make high-quality solar and energy
                  storage solutions accessible to installers, businesses, and
                  homeowners across Australia.
                </p>
                <ul className="space-y-4">
                  {[
                    "Premium quality products from trusted manufacturers",
                    "Competitive wholesale pricing for maximum value",
                    "Fast delivery from 3 strategic warehouse locations",
                    "Expert technical support and after-sales service",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src="/solar-panel-installation-team-working.jpg"
                    alt="Our team at work"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border max-w-xs hidden sm:block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Truck className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold">Fast Delivery</div>
                      <div className="text-sm text-muted-foreground">
                        Next-day available
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection delay={300}>
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                Our Values
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                What Drives Us Forward
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our core values shape everything we do, from product selection
                to customer service.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card
                  key={value.title}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-accent"
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <value.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Timeline Section */}
      <AnimatedSection delay={400}>
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                Our Journey
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Milestones Along the Way
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-border sm:-translate-x-0.5" />
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div
                      key={milestone.year}
                      className={`relative flex items-center gap-6 ${
                        index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                      }`}
                    >
                      <div
                        className={`flex-1 ${
                          index % 2 === 0 ? "sm:text-right" : "sm:text-left"
                        } hidden sm:block`}
                      >
                        <div className="bg-card p-4 rounded-lg border border-border inline-block">
                          <div className="font-bold text-accent text-lg">
                            {milestone.year}
                          </div>
                          <p className="text-muted-foreground">
                            {milestone.event}
                          </p>
                        </div>
                      </div>
                      <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-accent rounded-full sm:-translate-x-1.5 ring-4 ring-background z-10" />
                      <div className="flex-1 pl-10 sm:pl-0">
                        <div className="bg-card p-4 rounded-lg border border-border sm:hidden">
                          <div className="font-bold text-accent text-lg">
                            {milestone.year}
                          </div>
                          <p className="text-muted-foreground">
                            {milestone.event}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection delay={500}>
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                <Users className="w-3 h-3 mr-1" />
                Our Team
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Meet the Experts
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our passionate team of renewable energy experts is here to help
                you succeed.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <Card
                  key={member.name}
                  className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border hover:border-accent"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-5 text-center">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-accent rounded-2xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/solar-panels-pattern.jpg')] opacity-10" />
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Ready to Power Your Future?
                </h2>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
                  Join thousands of satisfied customers who have made the switch
                  to renewable energy with AI Energy Shop.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/products">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="gap-2 w-full sm:w-auto"
                    >
                      Shop Now
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent border-white text-white hover:bg-white hover:text-accent gap-2 w-full sm:w-auto"
                    >
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
