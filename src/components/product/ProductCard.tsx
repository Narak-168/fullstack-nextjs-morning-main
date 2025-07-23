"use client";

import { addToCart } from "@/lib/features/cartSlice";
import { useAppDispatch } from "@/lib/hook";
import type { ProductType } from "@/types/productType";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

type ProductCardProps = {
  product: ProductType;
};

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(`Adding product ${product.id} to cart`);
    dispatch(addToCart(product));
  };

  return (
    <div
      key={product.id}
      className="bg-white rounded-lg gap-5 overflow-hidden px-2 pb-2 max-w-sm shadow-md hover:shadow-lg transition-shadow duration-300
"
    >
      <div className="relative">
        <Image
          width={300}
          height={300}
          className="w-full"
          src={product.thumbnail || "/placeholder.svg"}
          alt={product.title}
          unoptimized
          priority
        />
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
          SALE
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 line-clamp-1">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <p className="text-gray-500 text-xs mb-2">
          Category: {product.category}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">${product.price}</span>
        </div>
      </div>
      <div className="flex">
        <Link href={`/product/${product.id}`} className="flex-1">
          <button className="bg-gray-100 text-gray-800 hover:bg-gray-200 font-bold py-2 px-4 hover:shadow-md rounded-lg transition duration-200 ease-in-out">
            View More
          </button>
        </Link>
        <button
          onClick={handleAddToCart}
          className="flex-1 w-2xl bg-indigo-600 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200 ease-in-out"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
