import Image from "next/image";
import { Shield, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/animated-section";

export function AboutSection() {
  return (
    <AnimatedSection animation="fade-up" delay={300}>
      <section id="about" className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/renewable-energy-team-discussing-solar-installatio.jpg"
                alt="About AI Energy Shop"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                About Us
              </Badge>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-balance">
                Australia's Trusted Energy Solutions Partner
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed text-pretty">
                AI Energy Shop is a leading national wholesaler of PV inverters,
                energy storage, solar racking, and other renewable energy
                products across Australia. We partner with industry-leading
                brands to provide the highest quality solutions for your
                business.
              </p>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm md:text-base">
                      Authorized Distributor
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground text-pretty">
                      Exclusive partnerships with global energy brands
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm md:text-base">
                      Expert Team
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground text-pretty">
                      Technical support and consultation services
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Truck className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm md:text-base">
                      Nationwide Service
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground text-pretty">
                      Fast delivery across all Australian states
                    </p>
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white transition-all hover:scale-105"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
