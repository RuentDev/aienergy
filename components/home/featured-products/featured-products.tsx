import { FeaturedProductsSkeleton } from "./featured-products-skeleton";
import { AnimatedSection } from "@/components/animated-section";
import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getStoreProducts } from "@/app/actions/products";
interface FeaturedProductsSectionProps {
  heading?: string;
  sub_heading?: string;
  slug?: string;
  id?: string;
  __typename?: string;
}

export async function FeaturedProductsSection(
  props: FeaturedProductsSectionProps
) {
  const { heading, sub_heading, slug } = props;

  const { data } = await getStoreProducts({
    filters: {
      tags: {
        tag: {
          eq: "featured",
        },
      },
    },
    pagination: {
      limit: 4,
    },
  });

  if (!data) {
    return <FeaturedProductsSkeleton cardsCounts={4} />;
  }

  const products = data?.products;

  return (
    <AnimatedSection animation="fade-up" delay={200}>
      <section className="py-12 md:py-16 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 text-balance">
                {heading}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground text-pretty">
                {sub_heading}
              </p>
            </div>
            <Link href={slug || "/"}>
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
            {products?.map((product, index) => (
              <Card
                key={index}
                className="p-0 group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-48 md:h-56 overflow-hidden bg-secondary">
                  <Image
                    src={product?.images[0]?.url || "/placeholder.svg"}
                    alt={product?.images[0]?.alternativeText || ""}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 right-3 bg-accent text-white">
                    New
                  </Badge>
                </div>
                <CardContent className="p-4 md:p-5">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {product?.product_type}
                  </Badge>
                  <h3 className="font-semibold text-base md:text-lg mb-2">
                    {product?.name}
                  </h3>
                  {/* <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="text-sm font-medium">
                      {product.rating}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      (128 reviews)
                    </span>
                  </div> */}
                  <div className="flex items-center justify-between">
                    {/* <span className="text-xl md:text-2xl font-bold text-accent">
                      {product.price}
                    </span> */}
                    <Button
                      size="sm"
                      className="bg-accent hover:bg-accent/90 text-white transition-all hover:scale-105"
                    >
                      Add to Cart
                    </Button>
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
