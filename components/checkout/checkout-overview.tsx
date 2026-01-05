"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Package,
  Truck,
  CreditCard,
  Building2,
  Wallet,
  MapPin,
  Calendar,
  Clock,
  Edit,
  ShoppingBag,
  Check,
  Loader2,
  Tag,
  StickyNote,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import { format } from "date-fns";
import type { CheckoutData, CheckoutStep } from "@/lib/types/checkout-types";
import type { Product } from "@/lib/products-data";

interface CartItem extends Product {
  quantity: number;
}

interface CheckoutOverviewProps {
  checkoutData: CheckoutData;
  cart: CartItem[];
  warehouse: string;
  shippingCost: number;
  discount: number;
  finalTotal: number;
  onEdit: (step: CheckoutStep) => void;
  onBack: () => void;
}

const warehouseAddresses = {
  Sydney: "Unit 5, 123 Industrial Drive, Wetherill Park NSW 2164",
  Melbourne: "Unit 8, 456 Commerce Way, Dandenong VIC 3175",
  Brisbane: "Unit 3, 789 Trade Street, Eagle Farm QLD 4009",
};

const pickupTimes = {
  Melbourne: { morning: "7:30am - 11am", afternoon: "12pm - 3:30pm" },
  Sydney: { morning: "7:30am - 11am", afternoon: "12pm - 3:30pm" },
  Brisbane: { morning: "9am - 12pm", afternoon: "1pm - 5pm" },
};

export function CheckoutOverview({
  checkoutData,
  cart,
  warehouse,
  shippingCost,
  discount,
  finalTotal,
  onEdit,
  onBack,
}: CheckoutOverviewProps) {
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const currentPickupTimes =
    pickupTimes[warehouse as keyof typeof pickupTimes] || pickupTimes.Sydney;

  const handlePlaceOrder = async () => {
    setIsPlacingOrder(true);
    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsPlacingOrder(false);
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="text-center py-16 animate-fade-in-up">
        <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
          <Check className="w-12 h-12 text-green-500" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Order Placed Successfully!</h2>
        <p className="text-muted-foreground mb-2">Thank you for your order.</p>
        <p className="text-muted-foreground mb-8">
          Order confirmation has been sent to your email.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted">
          <span className="text-muted-foreground">Order Number:</span>
          <span className="font-mono font-bold text-accent">
            #AES-{Date.now().toString().slice(-8)}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Review Your Order</h2>
        <p className="text-muted-foreground">
          Please review all details before placing your order
        </p>
      </div>

      {/* Order Items */}
      <Card className="border-border/50 shadow-lg overflow-hidden pt-0 pb-5">
        <CardHeader className="p-5 bg-gradient-to-r from-accent/10 to-transparent border-b border-border/50">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-accent" />
              Order Items ({cart.length})
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(1)}
              className="gap-1 text-accent hover:text-accent hover:bg-accent/10"
            >
              <Edit className="w-4 h-4" />
              Edit
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-3">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3 rounded-xl bg-muted/30 border border-border/50"
              >
                <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-secondary">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium line-clamp-1">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.brand}</p>
                  <p className="text-sm text-muted-foreground">
                    Qty: {item.quantity}
                  </p>
                </div>
                <p className="font-semibold text-accent">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {checkoutData.voucherCode && (
            <div className="mt-4 p-3 rounded-lg bg-accent/10 border border-accent/20 flex items-center gap-2">
              <Tag className="w-4 h-4 text-accent" />
              <span className="text-sm">Voucher Applied: </span>
              <Badge className="bg-accent text-white">
                {checkoutData.voucherCode}
              </Badge>
            </div>
          )}

          {checkoutData.orderNotes && (
            <div className="mt-4 p-3 rounded-lg bg-muted/50 border border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <StickyNote className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">Order Notes</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {checkoutData.orderNotes}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Shipping / Pickup Details */}
      <Card className="border-border/50 shadow-lg overflow-hidden pt-0 pb-5">
        <CardHeader className="p-5 bg-gradient-to-r from-accent/10 to-transparent border-b border-border/50">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              {checkoutData.deliveryMethod === "delivery" ? (
                <Truck className="w-5 h-5 text-accent" />
              ) : (
                <Package className="w-5 h-5 text-accent" />
              )}
              {checkoutData.deliveryMethod === "delivery"
                ? "Delivery Details"
                : "Pickup Details"}
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(2)}
              className="gap-1 text-accent hover:text-accent hover:bg-accent/10"
            >
              <Edit className="w-4 h-4" />
              Edit
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          {checkoutData.deliveryMethod === "delivery" ? (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-semibold">
                      {checkoutData.shippingAddress.fullName}
                    </p>
                    <p className="text-muted-foreground">
                      {checkoutData.shippingAddress.address}
                    </p>
                    <p className="text-muted-foreground">
                      {checkoutData.shippingAddress.city},{" "}
                      {checkoutData.shippingAddress.state}{" "}
                      {checkoutData.shippingAddress.postcode}
                    </p>
                    <p className="text-muted-foreground">
                      {checkoutData.shippingAddress.phone}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                <div className="flex items-center gap-2 mb-2">
                  <Truck className="w-4 h-4 text-accent" />
                  <span className="font-medium">Standard Metro Delivery</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Estimated 1-2 Business Days
                </p>
                <p className="text-accent font-semibold mt-2">$50.00</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-semibold">{warehouse} Warehouse</p>
                    <p className="text-muted-foreground">
                      {
                        warehouseAddresses[
                          warehouse as keyof typeof warehouseAddresses
                        ]
                      }
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="font-medium">Pickup Date</span>
                  </div>
                  <p className="text-accent font-semibold">
                    {checkoutData.pickupDate
                      ? format(checkoutData.pickupDate, "EEEE, MMMM d, yyyy")
                      : "Not selected"}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="font-medium">Pickup Time</span>
                  </div>
                  <p className="text-accent font-semibold capitalize">
                    {checkoutData.pickupTime} (
                    {currentPickupTimes[checkoutData.pickupTime]})
                  </p>
                </div>
              </div>
              {checkoutData.pickupNotes && (
                <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <StickyNote className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Pickup Notes</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {checkoutData.pickupNotes}
                  </p>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Payment Details */}
      <Card className="border-border/50 shadow-lg overflow-hidden pt-0 pb-5">
        <CardHeader className="p-5 bg-gradient-to-r from-accent/10 to-transparent border-b border-border/50">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              {checkoutData.paymentMethod === "credit-card" && (
                <CreditCard className="w-5 h-5 text-accent" />
              )}
              {checkoutData.paymentMethod === "bank-transfer" && (
                <Building2 className="w-5 h-5 text-accent" />
              )}
              {checkoutData.paymentMethod === "account-credit" && (
                <Wallet className="w-5 h-5 text-accent" />
              )}
              Payment Method
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(3)}
              className="gap-1 text-accent hover:text-accent hover:bg-accent/10"
            >
              <Edit className="w-4 h-4" />
              Edit
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
            {checkoutData.paymentMethod === "credit-card" && (
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Credit / Debit Card</p>
                  <p className="text-sm text-muted-foreground">
                    •••• •••• ••••{" "}
                    {checkoutData.cardDetails.number.slice(-4) || "****"}
                  </p>
                </div>
              </div>
            )}
            {checkoutData.paymentMethod === "bank-transfer" && (
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Bank Transfer (EFT)</p>
                  <p className="text-sm text-muted-foreground">
                    Payment details will be sent via email
                  </p>
                </div>
              </div>
            )}
            {checkoutData.paymentMethod === "account-credit" && (
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Account Credit</p>
                  <p className="text-sm text-muted-foreground">
                    Using store credit balance
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Order Total */}
      <Card className="border-accent/50 shadow-lg overflow-hidden bg-gradient-to-br from-accent/5 to-transparent">
        <CardContent className="pt-6">
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-green-600 dark:text-green-400">
                  Discount
                </span>
                <span className="font-medium text-green-600 dark:text-green-400">
                  -${discount.toFixed(2)}
                </span>
              </div>
            )}
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                {checkoutData.deliveryMethod === "delivery"
                  ? "Shipping"
                  : "Pickup"}
              </span>
              <span className="font-medium">
                {shippingCost > 0 ? `$${shippingCost.toFixed(2)}` : "Free"}
              </span>
            </div>
            <Separator />
            <div className="flex justify-between items-center pt-2">
              <span className="font-bold text-xl">Total</span>
              <span className="font-bold text-3xl text-accent">
                ${finalTotal.toFixed(2)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Separator />

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="h-12 px-6 gap-2 bg-transparent hover:bg-muted group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Payment
        </Button>
        <Button
          onClick={handlePlaceOrder}
          disabled={isPlacingOrder}
          className="bg-accent hover:bg-accent/90 text-white h-14 px-12 text-lg gap-2 shadow-lg shadow-accent/30"
        >
          {isPlacingOrder ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Check className="w-5 h-5" />
              Place Order
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
