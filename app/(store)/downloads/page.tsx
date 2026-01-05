import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  FileText,
  Download,
  ChevronRight,
  Home,
  Search,
  FileSpreadsheet,
  FileImage,
  File,
  FolderOpen,
} from "lucide-react";
import Link from "next/link";

const downloadCategories = [
  { name: "Product Datasheets", count: 45, icon: FileText },
  { name: "Installation Guides", count: 28, icon: FileSpreadsheet },
  { name: "Warranty Documents", count: 12, icon: File },
  { name: "Marketing Materials", count: 18, icon: FileImage },
];

const downloads = [
  {
    category: "Product Datasheets",
    items: [
      {
        name: "JA Solar 440W Panel Datasheet",
        type: "PDF",
        size: "2.4 MB",
        updated: "Dec 2024",
      },
      {
        name: "Growatt 8kW Inverter Specifications",
        type: "PDF",
        size: "1.8 MB",
        updated: "Dec 2024",
      },
      {
        name: "Tesla Powerwall 2 Technical Guide",
        type: "PDF",
        size: "3.2 MB",
        updated: "Nov 2024",
      },
      {
        name: "SunGrow 10kW Hybrid Inverter",
        type: "PDF",
        size: "2.1 MB",
        updated: "Dec 2024",
      },
      {
        name: "Trina Solar 550W Vertex Panel",
        type: "PDF",
        size: "2.6 MB",
        updated: "Nov 2024",
      },
    ],
  },
  {
    category: "Installation Guides",
    items: [
      {
        name: "Solar Panel Mounting Guide",
        type: "PDF",
        size: "4.5 MB",
        updated: "Oct 2024",
      },
      {
        name: "Inverter Installation Manual",
        type: "PDF",
        size: "3.8 MB",
        updated: "Nov 2024",
      },
      {
        name: "Battery Storage Setup Guide",
        type: "PDF",
        size: "5.2 MB",
        updated: "Dec 2024",
      },
      {
        name: "Grid Connection Requirements",
        type: "PDF",
        size: "1.2 MB",
        updated: "Sep 2024",
      },
    ],
  },
  {
    category: "Warranty Documents",
    items: [
      {
        name: "JA Solar Product Warranty",
        type: "PDF",
        size: "0.8 MB",
        updated: "Jan 2024",
      },
      {
        name: "Growatt Warranty Terms",
        type: "PDF",
        size: "0.6 MB",
        updated: "Jan 2024",
      },
      {
        name: "Tesla Warranty Agreement",
        type: "PDF",
        size: "1.1 MB",
        updated: "Jan 2024",
      },
    ],
  },
  {
    category: "Marketing Materials",
    items: [
      {
        name: "Product Catalogue 2024",
        type: "PDF",
        size: "15.8 MB",
        updated: "Dec 2024",
      },
      {
        name: "Brand Logos Pack",
        type: "ZIP",
        size: "8.4 MB",
        updated: "Nov 2024",
      },
      {
        name: "Promotional Banners",
        type: "ZIP",
        size: "12.2 MB",
        updated: "Oct 2024",
      },
    ],
  },
];

export default function DownloadsPage() {
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
            <span className="text-muted-foreground">Downloads</span>
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
                <Download className="w-3 h-3 mr-1" />
                Resource Center
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Downloads & <span className="text-accent">Resources</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Access product datasheets, installation guides, warranty
                documents, and marketing materials all in one place.
              </p>
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search downloads..."
                  className="pl-10 h-12"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Categories */}
      <AnimatedSection delay={100}>
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {downloadCategories.map((category) => (
                <Card
                  key={category.name}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-accent"
                >
                  <CardContent className="p-5 sm:p-6 text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                      <category.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base mb-1">
                      {category.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {category.count} files
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Downloads List */}
      <AnimatedSection delay={200}>
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              {downloads.map((section) => (
                <div key={section.category}>
                  <div className="flex items-center gap-3 mb-6">
                    <FolderOpen className="w-6 h-6 text-accent" />
                    <h2 className="text-xl sm:text-2xl font-bold">
                      {section.category}
                    </h2>
                    <Badge
                      variant="secondary"
                      className="bg-accent/10 text-accent"
                    >
                      {section.items.length} files
                    </Badge>
                  </div>
                  <div className="grid gap-3">
                    {section.items.map((item) => (
                      <Card
                        key={item.name}
                        className="border-border hover:border-accent transition-colors"
                      >
                        <CardContent className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                            </div>
                            <div>
                              <h3 className="font-medium text-sm sm:text-base">
                                {item.name}
                              </h3>
                              <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground mt-1">
                                <span>{item.type}</span>
                                <span>•</span>
                                <span>{item.size}</span>
                                <span>•</span>
                                <span>Updated {item.updated}</span>
                              </div>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            className="bg-accent hover:bg-accent/90 text-white gap-2 w-full sm:w-auto"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Help Section */}
      <AnimatedSection>
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Can&apos;t Find What You Need?
              </h2>
              <p className="text-muted-foreground mb-6">
                Contact our team and we&apos;ll help you find the right
                documentation for your project.
              </p>
              <Link href="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-white gap-2">
                  Contact Support
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
