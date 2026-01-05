import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

interface FeaturedProductsSkeletonProps {
  cardsCounts: number;
}

export function FeaturedProductsSkeleton({
  cardsCounts,
}: FeaturedProductsSkeletonProps) {
  return (
    <AnimatedSection animation="fade-up" delay={200}>
      <section className="py-12 md:py-16 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4">
            <div className="w-full md:w-auto">
              <Skeleton className="h-8 md:h-10 w-48 md:w-64 mb-3" />
              <Skeleton className="h-4 md:h-5 w-full md:w-96" />
            </div>
            <Link href={"/collections/all"}>
              <Button
                variant="outline"
                className="group whitespace-nowrap bg-transparent"
              >
                View All Products
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: cardsCounts }).map((_, index) => (
              <Card key={index} className="p-0 overflow-hidden bg-card">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Skeleton className="h-full w-full" />
                </div>
                <CardContent className="p-4 md:p-5">
                  <Skeleton className="h-5 w-20 mb-2 rounded-full" />
                  <Skeleton className="h-6 w-3/4 mb-4" />

                  <div className="flex items-center justify-between">
                    <div />
                    <Skeleton className="h-9 w-28" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
