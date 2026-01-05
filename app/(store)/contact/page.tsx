"use client";

import type React from "react";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Home,
  Send,
  MessageSquare,
  CheckCircle2,
  Building2,
  Headphones,
} from "lucide-react";
import Link from "next/link";

const warehouses = [
  {
    city: "Sydney",
    address: "123 Solar Drive, Alexandria NSW 2015",
    phone: "(02) 9123 4567",
    email: "sydney@aienergyshop.com.au",
    hours: "Mon-Fri: 7:30am - 4:00pm",
  },
  {
    city: "Brisbane",
    address: "456 Energy Way, Eagle Farm QLD 4009",
    phone: "(07) 3123 4567",
    email: "brisbane@aienergyshop.com.au",
    hours: "Mon-Fri: 9:00am - 5:00pm",
  },
  {
    city: "Melbourne",
    address: "789 Renewable Road, Dandenong VIC 3175",
    phone: "(03) 9123 4567",
    email: "melbourne@aienergyshop.com.au",
    hours: "Mon-Fri: 7:30am - 4:00pm",
  },
];

const inquiryTypes = [
  "General Inquiry",
  "Product Information",
  "Technical Support",
  "Order Status",
  "Returns & Warranty",
  "Wholesale Partnership",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState<string>("Sydney");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const warehouseMapUrls: Record<string, string> = {
    Sydney:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.7073!2d151.2!3d-33.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU0JzAwLjAiUyAxNTHCsDEyJzAwLjAiRQ!5e0!3m2!1sen!2sau!4v1234567890",
    Brisbane:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540!2d153.12!3d-27.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI1JzEyLjAiUyAxNTPCsDA3JzEyLjAiRQ!5e0!3m2!1sen!2sau!4v1234567890",
    Melbourne:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149!2d145.13!3d-37.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU4JzEyLjAiUyAxNDXCsDA3JzQ4LjAiRQ!5e0!3m2!1sen!2sau!4v1234567890",
  };

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
            <span className="text-muted-foreground">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <AnimatedSection>
        <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-6 px-4 py-1.5">
                <MessageSquare className="w-3 h-3 mr-1" />
                Get in Touch
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                We&apos;re Here to <span className="text-accent">Help</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions about our products or services? Our team is ready
                to assist you with all your renewable energy needs.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Cards */}
      <AnimatedSection delay={100}>
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-accent">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Mon-Fri, 8am-5pm AEST
                  </p>
                  <a
                    href="tel:1300123456"
                    className="text-accent font-medium hover:underline"
                  >
                    1300 123 456
                  </a>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-accent">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    We reply within 24 hours
                  </p>
                  <a
                    href="mailto:info@aienergyshop.com.au"
                    className="text-accent font-medium hover:underline"
                  >
                    info@aienergyshop.com.au
                  </a>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-accent">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <Headphones className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Instant support available
                  </p>
                  <Button
                    size="sm"
                    className="bg-accent hover:bg-accent/90 text-white"
                  >
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Main Content */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={200}>
            <Card className="border-border mb-8 lg:mb-12">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Send className="w-6 h-6 text-accent" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for contacting us. We&apos;ll get back to you
                      within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          company: "",
                          inquiryType: "",
                          message: "",
                        });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="0412 345 678"
                          value={formData.phone}
                          onChange={(e) =>
                            handleChange("phone", e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={(e) =>
                            handleChange("company", e.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type *</Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) =>
                          handleChange("inquiryType", value)
                        }
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent/90 text-white gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Warehouse Locations */}
            <AnimatedSection delay={300}>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-accent" />
                  Our Locations
                </h2>
                <p className="text-muted-foreground">
                  Select a warehouse to view its location on the map
                </p>
                <div className="space-y-4">
                  {warehouses.map((warehouse) => (
                    <Card
                      key={warehouse.city}
                      className={`border-border transition-all cursor-pointer hover:shadow-lg ${
                        selectedWarehouse === warehouse.city
                          ? "border-accent ring-2 ring-accent/20 shadow-lg scale-[1.02]"
                          : "hover:border-accent/50"
                      }`}
                      onClick={() => setSelectedWarehouse(warehouse.city)}
                    >
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-semibold text-lg text-accent">
                            {warehouse.city}
                          </h3>
                          {selectedWarehouse === warehouse.city && (
                            <Badge className="bg-accent text-white">
                              Selected
                            </Badge>
                          )}
                        </div>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-start gap-3">
                            <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {warehouse.address}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                            <a
                              href={`tel:${warehouse.phone.replace(/\s/g, "")}`}
                              className="hover:text-accent transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {warehouse.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                            <a
                              href={`mailto:${warehouse.email}`}
                              className="hover:text-accent transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {warehouse.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-3">
                            <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {warehouse.hours}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="space-y-4 lg:sticky lg:top-24">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-accent" />
                    Location Map
                  </h2>
                  <Badge className="bg-accent/10 text-accent border-accent/20 px-3 py-1">
                    {selectedWarehouse}
                  </Badge>
                </div>
                <div className="relative rounded-2xl overflow-hidden border-2 border-accent/20 shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-accent/10 pointer-events-none z-10 group-hover:from-accent/30 transition-all duration-300" />
                  <div className="aspect-[4/3] lg:aspect-square bg-muted relative">
                    <iframe
                      key={selectedWarehouse}
                      src={warehouseMapUrls[selectedWarehouse]}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${selectedWarehouse} Warehouse Map`}
                      className="grayscale-[20%] contrast-110 saturate-120 group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-accent text-white px-4 py-2.5 rounded-full shadow-xl flex items-center gap-2 z-20 animate-in fade-in slide-in-from-top-2 duration-500">
                    <MapPin className="w-4 h-4 animate-pulse" />
                    <span className="font-semibold text-sm">
                      {selectedWarehouse} Warehouse
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm text-foreground px-3 py-1.5 rounded-lg shadow-lg z-20 text-xs font-medium border border-accent/20">
                    Click to view in Google Maps
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
