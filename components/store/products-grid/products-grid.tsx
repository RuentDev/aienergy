import { AnimatedSection } from "@/components/animated-section";
import { Star, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductsGridProps {
  products: any[];
  warehouse: string;
  addToCart: (product: any) => void;
}

const ProductsGrid = (props: ProductsGridProps) => {
  const { products, warehouse, addToCart } = props;

  return (
    <div>
      {/* Products Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <AnimatedSection
              key={product.id}
              delay={index * 50}
              animation="fade-up"
            >
              <Card
                key={product.id}
                className="pt-0 group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border-border hover:border-accent h-full"
              >
                <Link href={`/products/${product.id}`}>
                  <div className="relative h-56 overflow-hidden bg-secondary">
                    <Image
                      fill
                      alt={product.name}
                      src={product.image || "/placeholder.svg"}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.stock[warehouse] < 20 &&
                      product.stock[warehouse] > 0 && (
                        <Badge className="absolute top-3 left-3 bg-yellow-500 text-white">
                          Low Stock
                        </Badge>
                      )}
                    {product.stock[warehouse] === 0 && (
                      <Badge className="absolute top-3 left-3 bg-red-500 text-white">
                        Out of Stock
                      </Badge>
                    )}
                    <Badge className="absolute top-3 right-3 bg-accent text-white">
                      {product.brand}
                    </Badge>
                  </div>
                </Link>
                <CardContent className="p-5">
                  <Badge
                    variant="secondary"
                    className="mb-2 text-xs cursor-pointer transition-all duration-200 hover:bg-accent hover:text-white dark:hover:text-black"
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   setSelectedCategory(product.category);
                    // }}
                  >
                    {product.category}
                  </Badge>
                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-semibold text-base mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="text-sm font-medium">
                      {product.rating}
                    </span>
                    <span className="text-xs text-muted-foreground">(128)</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
                    <Package className="w-3 h-3" />
                    <span>
                      Stock ({warehouse}): {product.stock[warehouse]}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">
                      ${product.price}
                    </span>
                    <Button
                      size="sm"
                      disabled={product.stock[warehouse] === 0}
                      className="bg-accent hover:bg-accent/90 text-white transition-all hover:scale-105 disabled:opacity-50 cursor-pointer"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <Package className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold mb-2">No products found</h3>
          <p className="text-muted-foreground mb-6">
            Try adjusting your filters or search query
          </p>
          <Button
            variant="outline"
            // onClick={clearAllFilters}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductsGrid;
