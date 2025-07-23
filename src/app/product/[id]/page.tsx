"use client";

import Loading from "@/app/loading";
import type { ProductType } from "@/types/productType";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge"; // Assuming Badge component is available or can be created

export default function ProductDetail() {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL_API}products/${id}`
        );
        if (!res.ok) {
          setProductDetail(null);
          return;
        }
        const data = await res.json();
        if (!data || !data.id) {
          setProductDetail(null);
        } else {
          setProductDetail(data);
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
        setProductDetail(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <Loading />;
  if (!productDetail)
    return (
      <div className="text-center text-red-500 h-screen flex justify-center items-center">
        Product not found
      </div>
    );

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-8 bg-card text-card-foreground rounded-lg  p-6">
        {/* Product Image Section */}
        <div className="relative justify-center items-center overflow-hidden rounded-lg">
          <Image
            src={productDetail.thumbnail || "/placeholder.svg"}
            alt={productDetail.title}
            width={600}
            height={600}
            unoptimized // Keep unoptimized if the thumbnail URL is external and not configured in next.config.js
            className="object-cover w-full h-full max-h-[500px] rounded-lg"
          />
            <div className="flex justify-between">
          <div>
            <Image
              src={productDetail.thumbnail || "/placeholder.svg"}
              alt={productDetail.title}
              width={150}
              height={150}
              unoptimized // Keep unoptimized if the thumbnail URL is external and not configured in next.config.js
              className="object-cover hover:border border rounded-md transform transition-transform duration-300 hover:scale-102"
            />
          </div>
          <div>
            <Image
              src={productDetail.thumbnail || "/placeholder.svg"}
              alt={productDetail.title}
              width={150}
              height={150}
              unoptimized // Keep unoptimized if the thumbnail URL is external and not configured in next.config.js
              className="object-cover hover:border border rounded-md transform transition-transform duration-300 hover:scale-102"
            />
          </div>
          <div>
            <Image
              src={productDetail.thumbnail || "/placeholder.svg"}
              alt={productDetail.title}
              width={150}
              height={150}
              unoptimized // Keep unoptimized if the thumbnail URL is external and not configured in next.config.js
              className="object-cover hover:border border rounded-md transform transition-transform duration-300 hover:scale-102"
            />
          </div>
        </div>
        </div>
      

        {/* Product Details Section */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{productDetail.title}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5  stroke-yellow-400" />
                <Star className="w-5 h-5  stroke-yellow-400" />
              </div>
              <span className="text-sm text-muted-foreground">(4.0)</span>
            </div>
            <p className="text-4xl font-bold text-red-500">
              ${productDetail.price}
            </p>
            <p className="text-sm text-muted-foreground mt-2">In stock</p>
          </div>

          <div className="grid gap-4">
            {/* Size Selection */}
            <div className="grid gap-2">
              <Label htmlFor="size" className="text-base">
                Size
              </Label>
              <RadioGroup
                id="size"
                defaultValue="m"
                className="flex items-center gap-2"
              >
                <Label
                  htmlFor="size-xs"
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted [&:has(:checked)]:text-foreground"
                >
                  <RadioGroupItem id="size-xs" value="xs" />
                  XS
                </Label>
                <Label
                  htmlFor="size-s"
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted [&:has(:checked)]:text-foreground"
                >
                  <RadioGroupItem id="size-s" value="s" />S
                </Label>
                <Label
                  htmlFor="size-m"
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted [&:has(:checked)]:text-foreground"
                >
                  <RadioGroupItem id="size-m" value="m" />M
                </Label>
                <Label
                  htmlFor="size-l"
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted [&:has(:checked)]:text-foreground"
                >
                  <RadioGroupItem id="size-l" value="l" />L
                </Label>
                <Label
                  htmlFor="size-xl"
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted [&:has(:checked)]:text-foreground"
                >
                  <RadioGroupItem id="size-xl" value="xl" />
                  XL
                </Label>
              </RadioGroup>
            </div>

            {/* Buy Button */}
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500"
            >
              Buy
            </Button>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {productDetail.description}
          </p>

          {/* Category */}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-sm font-medium">Category:</span>
            <Badge variant="secondary">{productDetail.category}</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
