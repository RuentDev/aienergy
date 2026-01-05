import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedSection } from "@/components/animated-section";

export function NewsletterSection() {
  return (
    <AnimatedSection animation="fade-up" delay={400}>
      <section className="py-12 md:py-16 lg:py-20 bg-linear-to-br from-accent via-accent/90 to-accent/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-balance">
              Stay Updated with Industry News
            </h2>
            <p className="text-sm md:text-base mb-6 md:mb-8 text-white/90 text-pretty">
              Subscribe to our newsletter for the latest products, offers, and
              renewable energy insights
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 flex-1"
              />
              <Button
                size="lg"
                className="bg-white text-accent hover:bg-white/90 transition-all hover:scale-105 whitespace-nowrap"
              >
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
