"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
  Truck,
  MapPin,
  Package,
  CalendarIcon,
  Clock,
  ArrowRight,
  ArrowLeft,
  Edit,
  Sun,
  Sunset,
  Building,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  format,
  isWeekend,
  isBefore,
  startOfDay,
  addMonths,
  endOfMonth,
  isAfter,
} from "date-fns";
import type {
  CheckoutData,
  DeliveryMethod,
  PickupTime,
  ShippingAddress,
} from "@/lib/types/checkout-types";

interface ShippingSectionProps {
  checkoutData: CheckoutData;
  updateCheckoutData: (updates: Partial<CheckoutData>) => void;
  warehouse: string;
  onContinue: () => void;
  onBack: () => void;
}

const warehouseAddresses = {
  Sydney: "Unit 5, 123 Industrial Drive, Wetherill Park NSW 2164",
  Melbourne: "Unit 8, 456 Commerce Way, Dandenong VIC 3175",
  Brisbane: "Unit 3, 789 Trade Street, Eagle Farm QLD 4009",
};

const pickupTimes = {
  Melbourne: {
    morning: "7:30am - 11am",
    afternoon: "12pm - 3:30pm",
  },
  Sydney: {
    morning: "7:30am - 11am",
    afternoon: "12pm - 3:30pm",
  },
  Brisbane: {
    morning: "9am - 12pm",
    afternoon: "1pm - 5pm",
  },
};

export function ShippingSection({
  checkoutData,
  updateCheckoutData,
  warehouse,
  onContinue,
  onBack,
}: ShippingSectionProps) {
  const [editAddressOpen, setEditAddressOpen] = useState(false);
  const [tempAddress, setTempAddress] = useState<ShippingAddress>(
    checkoutData.shippingAddress
  );
  const [calendarOpen, setCalendarOpen] = useState(false);

  const today = startOfDay(new Date());
  const nextMonth = addMonths(today, 1);

  const isDateDisabled = (date: Date) => {
    const dateStart = startOfDay(date);
    // Disable past dates
    if (isBefore(dateStart, today)) return true;
    // Disable weekends
    if (isWeekend(date)) return true;
    // Disable dates in the next month and beyond
    if (isAfter(dateStart, endOfMonth(today))) return true;
    return false;
  };

  const handleSaveAddress = () => {
    updateCheckoutData({ shippingAddress: tempAddress });
    setEditAddressOpen(false);
  };

  const currentPickupTimes =
    pickupTimes[warehouse as keyof typeof pickupTimes] || pickupTimes.Sydney;

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Delivery Method Selection */}
      <Card className="border-border/50 shadow-lg overflow-hidden pt-0 pb-5">
        <CardHeader className="p-5 bg-linear-to-r from-accent/10 to-transparent border-b border-border/50">
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
              <Truck className="w-4 h-4 text-accent" />
            </div>
            Delivery Method
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <RadioGroup
            value={checkoutData.deliveryMethod}
            onValueChange={(value) =>
              updateCheckoutData({ deliveryMethod: value as DeliveryMethod })
            }
            className="grid md:grid-cols-2 gap-4"
          >
            <label
              htmlFor="delivery"
              className={cn(
                "relative flex flex-col items-center gap-4 p-6 rounded-xl border-2 cursor-pointer transition-all duration-300",
                checkoutData.deliveryMethod === "delivery"
                  ? "border-accent bg-accent/5 shadow-lg shadow-accent/10"
                  : "border-border hover:border-accent/50 bg-muted/30"
              )}
            >
              <RadioGroupItem
                value="delivery"
                id="delivery"
                className="sr-only"
              />
              <div
                className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300",
                  checkoutData.deliveryMethod === "delivery"
                    ? "bg-accent text-white scale-110"
                    : "bg-muted"
                )}
              >
                <Truck className="w-8 h-8" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-lg">Delivery</p>
                <p className="text-sm text-muted-foreground">
                  Ship to your address
                </p>
              </div>
              {checkoutData.deliveryMethod === "delivery" && (
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center animate-scale-in">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
            </label>

            <label
              htmlFor="pickup"
              className={cn(
                "relative flex flex-col items-center gap-4 p-6 rounded-xl border-2 cursor-pointer transition-all duration-300",
                checkoutData.deliveryMethod === "pickup"
                  ? "border-accent bg-accent/5 shadow-lg shadow-accent/10"
                  : "border-border hover:border-accent/50 bg-muted/30"
              )}
            >
              <RadioGroupItem value="pickup" id="pickup" className="sr-only" />
              <div
                className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300",
                  checkoutData.deliveryMethod === "pickup"
                    ? "bg-accent text-white scale-110"
                    : "bg-muted"
                )}
              >
                <Package className="w-8 h-8" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-lg">Pick Up</p>
                <p className="text-sm text-muted-foreground">
                  Collect from warehouse
                </p>
              </div>
              {checkoutData.deliveryMethod === "pickup" && (
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center animate-scale-in">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
            </label>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Delivery Details */}
      {checkoutData.deliveryMethod === "delivery" && (
        <Card className="border-border/50 shadow-lg overflow-hidden animate-fade-in-up pt-0 pb-5">
          <CardHeader className="p-5 bg-linear-to-r from-accent/10 to-transparent border-b border-border/50">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                Ship To
              </CardTitle>
              <Dialog open={editAddressOpen} onOpenChange={setEditAddressOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 bg-transparent hover:bg-accent/10"
                  >
                    <Edit className="w-4 h-4" />
                    Change Address
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Edit Shipping Address</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        value={tempAddress.fullName}
                        onChange={(e) =>
                          setTempAddress({
                            ...tempAddress,
                            fullName: e.target.value,
                          })
                        }
                        className="bg-muted/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={tempAddress.address}
                        onChange={(e) =>
                          setTempAddress({
                            ...tempAddress,
                            address: e.target.value,
                          })
                        }
                        className="bg-muted/50"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={tempAddress.city}
                          onChange={(e) =>
                            setTempAddress({
                              ...tempAddress,
                              city: e.target.value,
                            })
                          }
                          className="bg-muted/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          value={tempAddress.state}
                          onChange={(e) =>
                            setTempAddress({
                              ...tempAddress,
                              state: e.target.value,
                            })
                          }
                          className="bg-muted/50"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="postcode">Postcode</Label>
                        <Input
                          id="postcode"
                          value={tempAddress.postcode}
                          onChange={(e) =>
                            setTempAddress({
                              ...tempAddress,
                              postcode: e.target.value,
                            })
                          }
                          className="bg-muted/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={tempAddress.phone}
                          onChange={(e) =>
                            setTempAddress({
                              ...tempAddress,
                              phone: e.target.value,
                            })
                          }
                          className="bg-muted/50"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-3">
                    <Button
                      variant="outline"
                      onClick={() => setEditAddressOpen(false)}
                      className="bg-transparent"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleSaveAddress}
                      className="bg-accent hover:bg-accent/90 text-white"
                    >
                      Save Address
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
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

            <Separator className="my-6" />

            <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
              <div className="flex items-center gap-3 mb-3">
                <Truck className="w-5 h-5 text-accent" />
                <span className="font-semibold">Standard Metro Delivery</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Small Package
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                Estimated 1-2 Business Days
              </p>
              <p className="text-lg font-bold text-accent">$50.00 Fixed Rate</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Pickup Details */}
      {checkoutData.deliveryMethod === "pickup" && (
        <div className="space-y-6 animate-fade-in-up">
          <Card className="border-border/50 shadow-lg overflow-hidden">
            <CardHeader className="bg-linear-to-r from-accent/10 to-transparent border-b border-border/50">
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Building className="w-4 h-4 text-accent" />
                </div>
                Pick Up From
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-lg">{warehouse} Warehouse</p>
                  <p className="text-muted-foreground">
                    {
                      warehouseAddresses[
                        warehouse as keyof typeof warehouseAddresses
                      ]
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-lg overflow-hidden">
            <CardHeader className="bg-linear-to-r from-accent/10 to-transparent border-b border-border/50">
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                  <CalendarIcon className="w-4 h-4 text-accent" />
                </div>
                Planned Pickup Date
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal h-12 bg-muted/50 hover:bg-muted",
                      !checkoutData.pickupDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-accent" />
                    {checkoutData.pickupDate
                      ? format(checkoutData.pickupDate, "EEEE, MMMM d, yyyy")
                      : "Select a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkoutData.pickupDate || undefined}
                    onSelect={(date) => {
                      updateCheckoutData({ pickupDate: date || null });
                      setCalendarOpen(false);
                    }}
                    disabled={isDateDisabled}
                    initialFocus
                    fromDate={today}
                    toDate={endOfMonth(today)}
                  />
                  <div className="p-3 border-t text-xs text-muted-foreground">
                    <p>Weekends and past dates are unavailable</p>
                    <p>Only current month dates can be selected</p>
                  </div>
                </PopoverContent>
              </Popover>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-lg overflow-hidden">
            <CardHeader className="bg-linear-to-r from-accent/10 to-transparent border-b border-border/50">
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-accent" />
                </div>
                Estimated Arrival Time
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <RadioGroup
                value={checkoutData.pickupTime}
                onValueChange={(value) =>
                  updateCheckoutData({ pickupTime: value as PickupTime })
                }
                className="grid md:grid-cols-2 gap-4"
              >
                <label
                  htmlFor="morning"
                  className={cn(
                    "relative flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300",
                    checkoutData.pickupTime === "morning"
                      ? "border-accent bg-accent/5 shadow-lg shadow-accent/10"
                      : "border-border hover:border-accent/50 bg-muted/30"
                  )}
                >
                  <RadioGroupItem
                    value="morning"
                    id="morning"
                    className="sr-only"
                  />
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center transition-all",
                      checkoutData.pickupTime === "morning"
                        ? "bg-accent text-white"
                        : "bg-muted"
                    )}
                  >
                    <Sun className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Morning Pickup</p>
                    <p className="text-sm text-muted-foreground">
                      {currentPickupTimes.morning}
                    </p>
                  </div>
                </label>

                <label
                  htmlFor="afternoon"
                  className={cn(
                    "relative flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300",
                    checkoutData.pickupTime === "afternoon"
                      ? "border-accent bg-accent/5 shadow-lg shadow-accent/10"
                      : "border-border hover:border-accent/50 bg-muted/30"
                  )}
                >
                  <RadioGroupItem
                    value="afternoon"
                    id="afternoon"
                    className="sr-only"
                  />
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center transition-all",
                      checkoutData.pickupTime === "afternoon"
                        ? "bg-accent text-white"
                        : "bg-muted"
                    )}
                  >
                    <Sunset className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Afternoon Pickup</p>
                    <p className="text-sm text-muted-foreground">
                      {currentPickupTimes.afternoon}
                    </p>
                  </div>
                </label>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-lg overflow-hidden">
            <CardHeader className="bg-linear-to-r from-accent/10 to-transparent border-b border-border/50">
              <CardTitle>Pickup Notes</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <Textarea
                placeholder="Any special instructions for pickup (e.g., vehicle type, contact person)..."
                value={checkoutData.pickupNotes}
                onChange={(e) =>
                  updateCheckoutData({ pickupNotes: e.target.value })
                }
                className="min-h-[100px] bg-muted/50 border-border/50 focus:border-accent resize-none"
              />
            </CardContent>
          </Card>
        </div>
      )}

      <Separator />

      <div className="flex justify-between gap-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="h-12 px-6 gap-2 bg-transparent hover:bg-muted group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Review
        </Button>
        <Button
          onClick={onContinue}
          disabled={
            checkoutData.deliveryMethod === "pickup" && !checkoutData.pickupDate
          }
          className="bg-accent hover:bg-accent/90 text-white h-12 px-8 text-base gap-2 group"
        >
          Continue to Payment
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}
