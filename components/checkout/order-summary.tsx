"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShoppingBag, Tag, Truck, Package } from "lucide-react";
import Image from "next/image";
import type { Product } from "@/lib/products-data";

interface CartItem extends Product {
  quantity: number;
}

interface OrderSummaryProps {
  cart: CartItem[];
  cartTotal: number;
  cartItemsCount: number;
  shippingCost: number;
  discount: number;
  finalTotal: number;
  voucherCode: string;
}

export function OrderSummary({
  cart,
  cartTotal,
  cartItemsCount,
  shippingCost,
  discount,
  finalTotal,
  voucherCode,
}: OrderSummaryProps) {
  return (
    <Card className="border-border/50 shadow-lg sticky top-24 overflow-hidden pt-0 pb-5">
      <CardHeader className="p-5 bg-linear-to-r from-accent/10 to-transparent border-b border-border/50">
        <CardTitle className="flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-accent" />
          Order Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <ScrollArea className="max-h-[300px] pr-4">
          <div className="space-y-3">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-3">
                <div className="relative w-14 h-14 shrink-0 rounded-lg overflow-hidden bg-secondary">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 right-0 w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {item.quantity}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium line-clamp-1">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.brand}</p>
                </div>
                <p className="text-sm font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>

        <Separator className="my-4" />

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              Subtotal ({cartItemsCount} items)
            </span>
            <span className="font-medium">${cartTotal.toFixed(2)}</span>
          </div>

          {discount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
                <Tag className="w-3 h-3" />
                Discount ({voucherCode})
              </span>
              <span className="font-medium text-green-600 dark:text-green-400">
                -${discount.toFixed(2)}
              </span>
            </div>
          )}

          <div className="flex justify-between text-sm">
            <span className="flex items-center gap-1 text-muted-foreground">
              {shippingCost > 0 ? (
                <Truck className="w-3 h-3" />
              ) : (
                <Package className="w-3 h-3" />
              )}
              {shippingCost > 0 ? "Shipping" : "Pickup"}
            </span>
            <span className="font-medium">
              {shippingCost > 0 ? `$${shippingCost.toFixed(2)}` : "Free"}
            </span>
          </div>

          <Separator className="my-2" />

          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">Total</span>
            <span className="font-bold text-2xl text-accent">
              ${finalTotal.toFixed(2)}
            </span>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-2">
            Tax included where applicable
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
