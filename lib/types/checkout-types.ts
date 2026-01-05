export type CheckoutStep = 1 | 2 | 3;
export type DeliveryMethod = "delivery" | "pickup";
export type PaymentMethod = "credit-card" | "bank-transfer" | "account-credit";
export type PickupTime = "morning" | "afternoon";

export interface ShippingAddress {
  fullName: string;
  address: string;
  city: string;
  state: string;
  postcode: string;
  phone: string;
}

export interface CheckoutData {
  voucherCode: string;
  orderNotes: string;
  deliveryMethod: DeliveryMethod;
  shippingAddress: ShippingAddress;
  pickupDate: Date | null;
  pickupTime: PickupTime;
  pickupNotes: string;
  paymentMethod: PaymentMethod;
  cardDetails: {
    number: string;
    name: string;
    expiry: string;
    cvv: string;
  };
}
