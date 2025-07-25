
"use client";

import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useAppSelector } from "@/lib/hook";
import { Button } from "@/components/ui/button";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";


export default function CartPage() {
  const { items } = useAppSelector((state) => state.cart);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6">
            Looks like you haven&apos;t added any items to your cart yet.
          </p>
          <Button asChild>
            <Link href="/product">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  // ✅ Log keys to debug
  console.log("Cart item keys:", items.map((i) => i.id));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side: Cart items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item) =>
              item.id ? (
                <CartItem key={item.id} item={item} />
              ) : null // 🛑 prevent invalid keys
            )}
          </div>
        </div>

        {/* Right side: Order summary */}
        <div className="lg:col-span-1">
          <CartSummary />
        </div>
      </div>
    </div>
  );
}


// HOW THIS WORKS:
// 1. Component reads cart items from Redux store using useAppSelector
// 2. If cart is empty, shows empty state with link to continue shopping
// 3. If cart has items, shows them in a grid layout:
//    - Left side: List of cart items (each with quantity controls)
//    - Right side: Order summary with totals and checkout button
// 4. Each cart item can be modified (quantity) or removed
// 5. Changes automatically update the Redux store and re-render the page