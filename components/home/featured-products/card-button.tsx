"use client";
import { Button } from "@/components/ui/button";
// import { toast } from "sonner";
import { useCart } from "@/lib/cart-context";

interface CardButtonProps {
  product: any;
}

const CardButton = ({ product }: CardButtonProps) => {
  const { addToCart } = useCart();
  // const addToCart = () => {
  //   toast.info("Add to Cart function comming soon!");
  // };
  return (
    <Button
      size="sm"
      className="bg-accent hover:bg-accent/90 text-white transition-all hover:scale-105 cursor-pointer"
      onClick={() => addToCart(product)}
    >
      Add to Cart
    </Button>
  );
};

export default CardButton;
