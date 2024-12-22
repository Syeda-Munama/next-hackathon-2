import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'
import black from "@/public/Frame 32.png";
import jeans from "@/public/Frame 33.png"
import check from "@/public/Frame 34.png";
import orange1 from "@/public/Frame 38.png"

import green from "@/public/Frame 32 (1).png"
import orange2 from "@/public/Frame 33 (1).png"
import jojo from "@/public/Frame 34 (1).png"
import Gi from "@/public/Frame 38 (1).png"
import Image from "next/image";


import { Button } from "@/components/ui/button";


interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  rating: number
  image: string
}

const newArrivals: Product[] = [
  {
    id: "1",
    name: "T-shirt with Tape Details",
    price: 120,
    rating: 4.5,
    image: black.src,
  },
  {
    id: "2",
    name: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    rating: 3.5,
    image: jeans.src,
  },
  {
    id: "3",
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    image: check.src,
  },
  {
    id: "4",
    name: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 160,
    rating: 4.5,
    image: orange1.src,
  },
]

const topSelling: Product[] = [
  {
    id: "5",
    name: "Vertical Striped Shirt",
    price: 212,
    originalPrice: 232,
    rating: 4.5,
    image: green.src,
  },
  {
    id: "6",
    name: "Courage Graphic T-shirt",
    price: 145,
    rating: 4.5,
    image: orange2.src,
  },
  {
    id: "7",
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    rating: 4.5,
    image: jojo.src,
  },
  {
    id: "8",
    name: "Faded Skinny Jeans",
    price: 210,
    rating: 4.5,
    image: Gi.src,
  },
]

function ProductSection({ title, products }: { title: string; products: Product[] }) {
  return (
    <section className="mb-12 font-satoshi font-bold">
      <h2 className="text-2xl font-bold text-center mb-8 font-integral">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-bold">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-square relative bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                  width={400}
                  height={400}
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
  {[...Array(5)].map((_, i) => (
    <Star
      key={i}
      className={`w-4 h-4 ${
        i < Math.floor(product.rating)
          ? "fill-yellow-400 text-yellow-400" // Yellow stars for filled ratings
          : "fill-gray-300 text-gray-300"     // Gray stars for unfilled ratings
      }`}
    />
  ))}
  <span className="text-sm text-muted-foreground ml-1">{product.rating}</span>
</div>

                <div className="flex items-center gap-2">
                  <span className="font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                      <span className="text-sm text-red-500">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </span>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-6">
        <Button className="text-sm bg-white rounded-full border-r-slate-200 text-muted-foreground hover:text-primary">
          View All
        </Button>
      </div>
    </section>
  )
}

export default function ProductGrid() {
  return (
    <div className="container mx-auto px-4 py-12 font-integral">
      <ProductSection title="NEW ARRIVALS" products={newArrivals} />
      <ProductSection title="TOP SELLING" products={topSelling} />
    </div>
  )
}

