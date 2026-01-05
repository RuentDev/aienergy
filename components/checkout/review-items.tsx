"use client";

import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Minus,
  Plus,
  Trash2,
  Tag,
  StickyNote,
  MapPin,
  ArrowRight,
  ShoppingCart,
  MapPinned,
} from "lucide-react";
import Image from "next/image";
import { CheckoutData } from "@/lib/types/checkout-types";

interface ReviewItemsProps {
  checkoutData: CheckoutData;
  updateCheckoutData: (updates: Partial<CheckoutData>) => void;
  warehouse: string;
  onContinue: () => void;
}

export function ReviewItems({
  checkoutData,
  updateCheckoutData,
  warehouse,
  onContinue,
}: ReviewItemsProps) {
  const { cart, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="space-y-6 animate-fade-in-up">
      <Card className="border-border/50 shadow-lg overflow-hidden pt-0 pb-5">
        <CardHeader className="p-5 bg-linear-to-r from-accent/10 to-transparent border-b border-border/50">
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            Selected Warehouse
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border/50">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <MapPinned className="w-4 h-4 text-accent" />
            </div>
            <div>
              <p className="font-semibold text-lg">{warehouse} Warehouse</p>
              <p className="text-sm text-muted-foreground">
                {warehouse === "Sydney" &&
                  "Unit 5, 123 Industrial Drive, Wetherill Park NSW 2164"}
                {warehouse === "Melbourne" &&
                  "Unit 8, 456 Commerce Way, Dandenong VIC 3175"}
                {warehouse === "Brisbane" &&
                  "Unit 3, 789 Trade Street, Eagle Farm QLD 4009"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cart Items */}
      <Card className="border-border/50 shadow-lg overflow-hidden pt-0 pb-5">
        <CardHeader className="p-5 bg-linear-to-r from-accent/10 to-transparent border-b border-border/50">
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
              <ShoppingCart className="w-4 h-4 text-accent" />
            </div>
            Your Items ({cart.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={item.id}
                className="group flex gap-4 p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-accent/50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-secondary">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold line-clamp-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.brand}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="flex-shrink-0 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500 hover:bg-red-500/10"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent hover:bg-accent/10 hover:border-accent"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-10 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent hover:bg-accent/10 hover:border-accent"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                    <p className="text-lg font-bold text-accent">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Voucher Code */}
      <Card className="border-border/50 shadow-lg overflow-hidden pt-0 pb-5">
        <CardHeader className="p-5 bg-linear-to-r from-accent/10 to-transparent border-b border-border/50">
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
              <Tag className="w-4 h-4 text-accent" />
            </div>
            Voucher Code
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <div className="flex-1">
              <Input
                placeholder="Enter voucher code"
                value={checkoutData.voucherCode}
                onChange={(e) =>
                  updateCheckoutData({ voucherCode: e.target.value })
                }
                className="h-12 bg-muted/50 border-border/50 focus:border-accent"
              />
            </div>
            <Button
              variant="outline"
              className="h-12 px-6 bg-transparent hover:bg-accent hover:text-white hover:border-accent transition-all"
            >
              Apply
            </Button>
          </div>
          {checkoutData.voucherCode.toUpperCase() === "SAVE10" && (
            <Badge className="mt-3 bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30">
              10% discount applied!
            </Badge>
          )}
          <p className="text-xs text-muted-foreground mt-2">
            Try "SAVE10" for 10% off
          </p>
        </CardContent>
      </Card>

      {/* Order Notes */}
      <Card className="border-border/50 shadow-lg overflow-hidden pt-0 pb-5">
        <CardHeader className="p-5 bg-linear-to-r from-accent/10 to-transparent border-b border-border/50">
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
              <StickyNote className="w-4 h-4 text-accent" />
            </div>
            Order Notes
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <Textarea
            placeholder="Add any special instructions or notes for your order..."
            value={checkoutData.orderNotes}
            onChange={(e) => updateCheckoutData({ orderNotes: e.target.value })}
            className="min-h-[100px] bg-muted/50 border-border/50 focus:border-accent resize-none"
          />
        </CardContent>
      </Card>

      <Separator />

      <div className="flex justify-end">
        <Button
          onClick={onContinue}
          className="bg-accent hover:bg-accent/90 text-white h-12 px-8 text-base gap-2 group"
        >
          Continue to Shipping
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}
