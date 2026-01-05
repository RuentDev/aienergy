"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star, Package, ShieldCheck, Truck, Minus, Plus } from "lucide-react"
import { useWarehouse } from "@/lib/warehouse-context"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/products-data"

interface AddToCartSectionProps {
  product: Product
}

export function AddToCartSection({ product }: AddToCartSectionProps) {
  const { warehouse } = useWarehouse()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const stock = product.stock[warehouse]

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <Badge className="mb-3 bg-accent/10 text-accent hover:bg-accent/20">{product.category}</Badge>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{product.name}</h1>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(product.rating) ? "fill-accent text-accent" : "fill-muted text-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-sm text-muted-foreground">(128 reviews)</span>
        </div>
        <div className="flex items-center gap-3 mb-6">
          <Badge variant="outline" className="text-sm">
            Brand: {product.brand}
          </Badge>
          <Badge variant="outline" className="text-sm">
            Color: {product.color}
          </Badge>
        </div>
        <p className="text-4xl font-bold text-accent mb-6">${product.price}</p>
      </div>

      <Separator />

      {/* Stock Info */}
      <div className="flex items-center gap-2">
        <Package className="w-5 h-5 text-accent" />
        <span className="font-medium">
          Stock ({warehouse}): {stock} units available
        </span>
        {stock < 20 && stock > 0 && <Badge className="bg-yellow-500 text-white">Low Stock</Badge>}
        {stock === 0 && <Badge className="bg-red-500 text-white">Out of Stock</Badge>}
      </div>

      {/* Quantity Selector */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <span className="font-medium">Quantity:</span>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(Math.min(stock, quantity + 1))}
              disabled={quantity >= stock}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            className="flex-1 h-12 text-base bg-accent hover:bg-accent/90 text-white"
            disabled={stock === 0}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
          <Button variant="outline" className="h-12 px-6 bg-transparent">
            Buy Now
          </Button>
        </div>
      </div>

      <Separator />

      {/* Product Features */}
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center text-center p-4 bg-muted/30 rounded-lg">
          <Truck className="w-6 h-6 text-accent mb-2" />
          <span className="text-xs font-medium">Free Shipping</span>
        </div>
        <div className="flex flex-col items-center text-center p-4 bg-muted/30 rounded-lg">
          <ShieldCheck className="w-6 h-6 text-accent mb-2" />
          <span className="text-xs font-medium">{product.warranty} Warranty</span>
        </div>
        <div className="flex flex-col items-center text-center p-4 bg-muted/30 rounded-lg">
          <Package className="w-6 h-6 text-accent mb-2" />
          <span className="text-xs font-medium">In Stock</span>
        </div>
      </div>
    </div>
  )
}
