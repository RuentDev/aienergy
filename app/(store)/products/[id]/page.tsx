"use client";
import { Header } from "@/components/header";
import { AddToCartSection } from "@/components/add-to-cart-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Star, ChevronRight, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products-data";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumbs */}
      <div className="bg-muted/20 border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm flex-wrap">
            <Link
              href="/"
              className="hover:text-accent transition-colors flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link
              href="/products"
              className="hover:text-accent transition-colors"
            >
              Products
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link
              href={`/products?search=${product.category}`}
              className="hover:text-accent transition-colors"
            >
              {product.category}
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground line-clamp-1">
              {product.name}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Product Detail Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-secondary border border-border">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Product Info - Extracted to client component */}
          <AddToCartSection product={product} />
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="space-y-8">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Product Description
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description ||
                      "High-quality product designed for optimal performance and durability. Perfect for both residential and commercial applications."}
                  </p>
                </div>

                <Separator />

                {/* Features */}
                {product.features && product.features.length > 0 && (
                  <>
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Separator />
                  </>
                )}

                {/* Specifications */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Specifications</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.specifications?.map((spec, index) => (
                      <div
                        key={index}
                        className="flex justify-between p-3 bg-muted/30 rounded-lg"
                      >
                        <span className="font-medium">{spec.label}:</span>
                        <span className="text-muted-foreground">
                          {spec.value}
                        </span>
                      </div>
                    )) || (
                      <>
                        <div className="flex justify-between p-3 bg-muted/30 rounded-lg">
                          <span className="font-medium">Brand:</span>
                          <span className="text-muted-foreground">
                            {product.brand}
                          </span>
                        </div>
                        <div className="flex justify-between p-3 bg-muted/30 rounded-lg">
                          <span className="font-medium">Category:</span>
                          <span className="text-muted-foreground">
                            {product.category}
                          </span>
                        </div>
                        <div className="flex justify-between p-3 bg-muted/30 rounded-lg">
                          <span className="font-medium">Color:</span>
                          <span className="text-muted-foreground">
                            {product.color}
                          </span>
                        </div>
                        <div className="flex justify-between p-3 bg-muted/30 rounded-lg">
                          <span className="font-medium">Warranty:</span>
                          <span className="text-muted-foreground">
                            {product.warranty}
                          </span>
                        </div>
                        {product.powerRating && (
                          <div className="flex justify-between p-3 bg-muted/30 rounded-lg">
                            <span className="font-medium">Power Rating:</span>
                            <span className="text-muted-foreground">
                              {product.powerRating}
                            </span>
                          </div>
                        )}
                        {product.phaseSupport && (
                          <div className="flex justify-between p-3 bg-muted/30 rounded-lg">
                            <span className="font-medium">Phase Support:</span>
                            <span className="text-muted-foreground">
                              {product.phaseSupport}
                            </span>
                          </div>
                        )}
                        {product.inverterType && (
                          <div className="flex justify-between p-3 bg-muted/30 rounded-lg">
                            <span className="font-medium">Inverter Type:</span>
                            <span className="text-muted-foreground">
                              {product.inverterType}
                            </span>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                >
                  <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border-border hover:border-accent">
                    <div className="relative h-48 overflow-hidden bg-secondary">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute top-3 right-3 bg-accent text-white">
                        {relatedProduct.brand}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {relatedProduct.category}
                      </Badge>
                      <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-accent">
                          ${relatedProduct.price}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-accent text-accent" />
                          <span className="text-xs font-medium">
                            {relatedProduct.rating}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
