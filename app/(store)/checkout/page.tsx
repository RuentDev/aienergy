"use client";

import { useState, useMemo } from "react";
import { CheckoutTimeline } from "@/components/checkout/checkout-timeline";
import { ReviewItems } from "@/components/checkout/review-items";
import { ShippingSection } from "@/components/checkout/shipping-section";
import { PaymentSection } from "@/components/checkout/payment-section";
import { OrderSummary } from "@/components/checkout/order-summary";
import { CheckoutOverview } from "@/components/checkout/checkout-overview";
import { useCart } from "@/lib/cart-context";
import { useWarehouse } from "@/lib/warehouse-context";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import Link from "next/link";
import {
  CheckoutData,
  CheckoutStep,
  ShippingAddress,
} from "@/lib/types/checkout-types";

const defaultShippingAddress: ShippingAddress = {
  fullName: "John Smith",
  address: "123 Solar Street",
  city: "Sydney",
  state: "NSW",
  postcode: "2000",
  phone: "0412 345 678",
};

export default function CheckoutPage() {
  const { cart, cartTotal, cartItemsCount } = useCart();
  const { warehouse } = useWarehouse();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>(1);
  const [showOverview, setShowOverview] = useState(false);

  const [checkoutData, setCheckoutData] = useState<CheckoutData>({
    voucherCode: "",
    orderNotes: "",
    deliveryMethod: "delivery",
    shippingAddress: defaultShippingAddress,
    pickupDate: null,
    pickupTime: "morning",
    pickupNotes: "",
    paymentMethod: "credit-card",
    cardDetails: {
      number: "",
      name: "",
      expiry: "",
      cvv: "",
    },
  });

  const shippingCost = useMemo(() => {
    if (checkoutData.deliveryMethod === "pickup") return 0;
    return 50; // Fixed rate for metro delivery
  }, [checkoutData.deliveryMethod]);

  const discount = useMemo(() => {
    if (checkoutData.voucherCode.toUpperCase() === "SAVE10") {
      return cartTotal * 0.1;
    }
    return 0;
  }, [checkoutData.voucherCode, cartTotal]);

  const finalTotal = cartTotal + shippingCost - discount;

  const updateCheckoutData = (updates: Partial<CheckoutData>) => {
    setCheckoutData((prev) => ({ ...prev, ...updates }));
  };

  const goToStep = (step: CheckoutStep) => {
    setCurrentStep(step);
    setShowOverview(false);
  };

  const handleContinue = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => (prev + 1) as CheckoutStep);
    } else {
      setShowOverview(true);
    }
  };

  const handleBack = () => {
    if (showOverview) {
      setShowOverview(false);
    } else if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as CheckoutStep);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 sm:w-12 sm:h-12 text-muted-foreground" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold mb-4">
              Your cart is empty
            </h1>
            <p className="text-muted-foreground mb-8">
              Add some products to your cart to proceed with checkout.
            </p>
            <Link href="/products">
              <Button className="bg-accent hover:bg-accent/90 text-white">
                Browse Products
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Page Header */}
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Checkout
          </h1>
        </div>

        {/* Timeline */}
        {!showOverview && (
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <CheckoutTimeline
              currentStep={currentStep}
              onStepClick={goToStep}
              completedSteps={currentStep - 1}
            />
          </div>
        )}

        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-6 sm:gap-8 lg:gap-10">
          {/* Main Content */}
          <div className="order-2 lg:order-1">
            {showOverview ? (
              <CheckoutOverview
                checkoutData={checkoutData}
                cart={cart}
                warehouse={warehouse}
                shippingCost={shippingCost}
                discount={discount}
                finalTotal={finalTotal}
                onEdit={goToStep}
                onBack={handleBack}
              />
            ) : (
              <>
                {currentStep === 1 && (
                  <ReviewItems
                    checkoutData={checkoutData}
                    updateCheckoutData={updateCheckoutData}
                    warehouse={warehouse}
                    onContinue={handleContinue}
                  />
                )}
                {currentStep === 2 && (
                  <ShippingSection
                    checkoutData={checkoutData}
                    updateCheckoutData={updateCheckoutData}
                    warehouse={warehouse}
                    onContinue={handleContinue}
                    onBack={handleBack}
                  />
                )}
                {currentStep === 3 && (
                  <PaymentSection
                    checkoutData={checkoutData}
                    updateCheckoutData={updateCheckoutData}
                    onContinue={handleContinue}
                    onBack={handleBack}
                  />
                )}
              </>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-24 lg:self-start">
            <OrderSummary
              cart={cart}
              cartTotal={cartTotal}
              cartItemsCount={cartItemsCount}
              shippingCost={shippingCost}
              discount={discount}
              finalTotal={finalTotal}
              voucherCode={checkoutData.voucherCode}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
