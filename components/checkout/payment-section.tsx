"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import {
  CreditCard,
  Building2,
  Wallet,
  ArrowRight,
  ArrowLeft,
  Lock,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { CheckoutData, PaymentMethod } from "@/lib/types/checkout-types";

interface PaymentSectionProps {
  checkoutData: CheckoutData;
  updateCheckoutData: (updates: Partial<CheckoutData>) => void;
  onContinue: () => void;
  onBack: () => void;
}

export function PaymentSection({
  checkoutData,
  updateCheckoutData,
  onContinue,
  onBack,
}: PaymentSectionProps) {
  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const groups = cleaned.match(/.{1,4}/g);
    return groups ? groups.join(" ").substring(0, 19) : "";
  };

  const formatExpiry = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length >= 2) {
      return cleaned.substring(0, 2) + "/" + cleaned.substring(2, 4);
    }
    return cleaned;
  };

  const updateCardDetails = (field: string, value: string) => {
    updateCheckoutData({
      cardDetails: { ...checkoutData.cardDetails, [field]: value },
    });
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      <Card className="border-border/50 shadow-lg overflow-hidden pt-0 pb-5">
        <CardHeader className="pt-5 bg-linear-to-r from-accent/10 to-transparent border-b border-border/50">
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
              <CreditCard className="w-4 h-4 text-accent" />
            </div>
            Payment Method
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <RadioGroup
            value={checkoutData.paymentMethod}
            onValueChange={(value) =>
              updateCheckoutData({ paymentMethod: value as PaymentMethod })
            }
            className="grid gap-4"
          >
            {/* Credit Card */}
            <label
              htmlFor="credit-card"
              className={cn(
                "relative flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300",
                checkoutData.paymentMethod === "credit-card"
                  ? "border-accent bg-accent/5 shadow-lg shadow-accent/10"
                  : "border-border hover:border-accent/50 bg-muted/30"
              )}
            >
              <RadioGroupItem
                value="credit-card"
                id="credit-card"
                className="sr-only"
              />
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center transition-all",
                  checkoutData.paymentMethod === "credit-card"
                    ? "bg-accent text-white"
                    : "bg-muted"
                )}
              >
                <CreditCard className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="font-semibold">Credit / Debit Card</p>
                <p className="text-sm text-muted-foreground">
                  Pay securely with your card
                </p>
              </div>
              <div className="flex gap-2">
                <div className="w-10 h-6 bg-[#1A1F71] rounded flex items-center justify-center text-white text-xs font-bold">
                  VISA
                </div>
                <div className="w-10 h-6 bg-[#EB001B] rounded flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#F79E1B] rounded-full -ml-1"></div>
                </div>
              </div>
            </label>

            {/* Bank Transfer */}
            <label
              htmlFor="bank-transfer"
              className={cn(
                "relative flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300",
                checkoutData.paymentMethod === "bank-transfer"
                  ? "border-accent bg-accent/5 shadow-lg shadow-accent/10"
                  : "border-border hover:border-accent/50 bg-muted/30"
              )}
            >
              <RadioGroupItem
                value="bank-transfer"
                id="bank-transfer"
                className="sr-only"
              />
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center transition-all",
                  checkoutData.paymentMethod === "bank-transfer"
                    ? "bg-accent text-white"
                    : "bg-muted"
                )}
              >
                <Building2 className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="font-semibold">Bank Transfer</p>
                <p className="text-sm text-muted-foreground">
                  Direct bank transfer (EFT)
                </p>
              </div>
            </label>

            {/* Account Credit */}
            <label
              htmlFor="account-credit"
              className={cn(
                "relative flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300",
                checkoutData.paymentMethod === "account-credit"
                  ? "border-accent bg-accent/5 shadow-lg shadow-accent/10"
                  : "border-border hover:border-accent/50 bg-muted/30"
              )}
            >
              <RadioGroupItem
                value="account-credit"
                id="account-credit"
                className="sr-only"
              />
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center transition-all",
                  checkoutData.paymentMethod === "account-credit"
                    ? "bg-accent text-white"
                    : "bg-muted"
                )}
              >
                <Wallet className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="font-semibold">Account Credit</p>
                <p className="text-sm text-muted-foreground">
                  Use your store credit balance
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Available</p>
                <p className="font-semibold text-accent">$2,500.00</p>
              </div>
            </label>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Credit Card Form */}
      {checkoutData.paymentMethod === "credit-card" && (
        <Card className="border-border/50 shadow-lg overflow-hidden animate-fade-in-up pt-0 pb-5">
          <CardHeader className="p-5 bg-linear-to-r from-accent/10 to-transparent border-b border-border/50">
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-accent" />
              Card Details
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={checkoutData.cardDetails.number}
                onChange={(e) =>
                  updateCardDetails("number", formatCardNumber(e.target.value))
                }
                className="h-12 bg-muted/50 border-border/50 focus:border-accent font-mono"
                maxLength={19}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cardName">Cardholder Name</Label>
              <Input
                id="cardName"
                placeholder="John Smith"
                value={checkoutData.cardDetails.name}
                onChange={(e) => updateCardDetails("name", e.target.value)}
                className="h-12 bg-muted/50 border-border/50 focus:border-accent"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input
                  id="expiry"
                  placeholder="MM/YY"
                  value={checkoutData.cardDetails.expiry}
                  onChange={(e) =>
                    updateCardDetails("expiry", formatExpiry(e.target.value))
                  }
                  className="h-12 bg-muted/50 border-border/50 focus:border-accent font-mono"
                  maxLength={5}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  placeholder="123"
                  type="password"
                  value={checkoutData.cardDetails.cvv}
                  onChange={(e) =>
                    updateCardDetails(
                      "cvv",
                      e.target.value.replace(/\D/g, "").substring(0, 4)
                    )
                  }
                  className="h-12 bg-muted/50 border-border/50 focus:border-accent font-mono"
                  maxLength={4}
                />
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <Shield className="w-4 h-4 text-green-600 dark:text-green-400" />
              <p className="text-sm text-green-600 dark:text-green-400">
                Your payment information is encrypted and secure
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Bank Transfer Details */}
      {checkoutData.paymentMethod === "bank-transfer" && (
        <Card className="border-border/50 shadow-lg overflow-hidden animate-fade-in-up pt-0 pb-5">
          <CardHeader className="pt-5 bg-linear-to-r from-accent/10 to-transparent border-b border-border/50">
            <CardTitle className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-accent" />
              Bank Transfer Details
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="p-4 rounded-xl bg-muted/30 border border-border/50 space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Bank Name</span>
                <span className="font-medium">Commonwealth Bank</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Account Name</span>
                <span className="font-medium">AI Energy Shop Pty Ltd</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">BSB</span>
                <span className="font-medium font-mono">062-000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Account Number</span>
                <span className="font-medium font-mono">1234 5678</span>
              </div>
              <Separator className="my-2" />
              <p className="text-sm text-muted-foreground">
                Please use your order number as the payment reference. Orders
                will be processed once payment is confirmed (1-2 business days).
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Account Credit Details */}
      {checkoutData.paymentMethod === "account-credit" && (
        <Card className="border-border/50 shadow-lg overflow-hidden animate-fade-in-up pt-0 pb-5">
          <CardHeader className="pt-5 bg-linear-to-r from-accent/10 to-transparent border-b border-border/50">
            <CardTitle className="flex items-center gap-2">
              <Wallet className="w-4 h-4 text-accent" />
              Account Credit
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-muted-foreground">Available Balance</span>
                <span className="text-2xl font-bold text-accent">
                  $2,500.00
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your account credit will be applied to this order. Any remaining
                balance will stay in your account.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      <Separator />

      <div className="flex justify-between gap-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="h-12 px-6 gap-2 bg-transparent hover:bg-muted group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Shipping
        </Button>
        <Button
          onClick={onContinue}
          className="bg-accent hover:bg-accent/90 text-white h-12 px-8 text-base gap-2 group"
        >
          Review Order
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}
