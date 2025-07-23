"use client"

import ProductCard from "@/components/product/ProductCard" // Corrected import path
import type { ProductType } from "@/types/productType" // Assuming this path is correct
import { useGetProductsQuery } from "@/lib/api/productsApi" // Assuming this path is correct
import Loading from "../loading" // Assuming this path is correct

export default function Page() {
  const { data, isLoading, error } = useGetProductsQuery()

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loading />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-red-500 text-center text-lg">Failed to load products. Please try again later.</p>
      </div>
    )
  }

  const products = data?.products as ProductType[]

  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="font-extrabold text-4xl text-center text-gray-800 uppercase mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: ProductType) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  )
}