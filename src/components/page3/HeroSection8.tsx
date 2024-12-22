import * as React from "react"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {  StarIcon } from 'lucide-react'
import Link from "next/link"
import { VscChevronRight, VscChevronUp } from "react-icons/vsc"
import { IoCheckmark } from "react-icons/io5";

import img1 from "@/public/Frame 33 (2).png";
import img2 from "@/public/Frame 34 (2).png";
import img3 from "@/public/Frame 38 (2).png";
import img4 from "@/public/Frame 33 (1).png";
import img5 from "@/public/Frame 34 (1).png";
import img6 from "@/public/Frame 38 (1).png";
import img7 from "@/public/Frame 33.png"
import img8 from "@/public/Frame 34.png"
import img9 from "@/public/Frame 38.png"
import Image from "next/image"
export default function CasualProducts() {
  return (
    <div className="container mx-auto px-4 py-6">
  <nav className="flex mb-8 ml-4 text-sm text-muted-foreground">
    <Link href="/" className="hover:text-foreground">
      Home
    </Link>
    <span className="mx-2 mt-1">
      <VscChevronRight />
    </span>
    <Link href="/shop" className="hover:text-foreground">
      Shop
    </Link>
  </nav>
  <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full lg:w-64 flex-shrink-0 font-satoshi">
      <h2 className="font-semibold mb-6">Filters</h2>
          
          {/* Categories */}
          <div className="mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">

              <span>T-shirts</span>
              <span className="text-muted-foreground"><VscChevronRight/></span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span>Shirts</span>
              <span className="text-muted-foreground"><VscChevronRight/></span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span>Hoodies</span>
              <span className="text-muted-foreground"><VscChevronRight/></span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span>Shorts</span>
              <span className="text-muted-foreground"><VscChevronRight/></span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span>Jeans</span>
              <span className="text-muted-foreground"><VscChevronRight/></span>
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6 px-2 sm:px-0">

            <h3 className="font-medium mb-4 flex items-center justify-between">Price <div><VscChevronUp/></div></h3>
            <Slider
              defaultValue={[50, 150]}
              max={200}
              step={1}
              className="mb-2"
            />
            <div className="flex justify-between text-sm">
              <span>$50</span>
              <span>$200</span>
            </div>
          </div>

          {/* Colors */}
          <div className="mb-6">
            <h3 className="font-medium mb-4">Colors</h3>
            <div className="flex flex-wrap gap-4">
              <button className="w-8 h-8 rounded-full bg-blue-500" />
              <button className="w-8 h-8 rounded-full bg-green-500" />
              <button className="w-8 h-8 rounded-full bg-purple-500" />
              <button className="w-8 h-8 rounded-full bg-pink-500" />
              <button className="w-8 h-8 rounded-full bg-black" />
              <IoCheckmark className="w-8 h-8 rounded-full bg-[#06CAF5] p-1 text-white" />
              <button className="w-8 h-8 rounded-full bg-[#F50606]" />
              <button className="w-8 h-8 rounded-full bg-[#F5DD06]" />
              <button className="w-8 h-8 rounded-full bg-[#7D06F5]" />
              <button className="w-8 h-8 rounded-full bg-[#063AF5]" />

            </div>
          </div>

          {/* Size */}
          <div className="mb-6 pt-6">
            <h3 className="font-medium mb-4">Size</h3>
            <div className="grid grid-cols-2 gap-2 ">
              <button className="px-3 py-1 border rounded-full hover:bg-accent bg-[#f0f0f0] ">XS</button>
              <button className="px-3 py-1 border rounded-full hover:bg-accent bg-[#f0f0f0] ">S</button>
              <button className="px-3 py-1 border rounded-full hover:bg-accent bg-[#f0f0f0] ">M</button>
              <button className="px-3 py-1 border rounded-full hover:bg-accent bg-[#f0f0f0] ">L</button>
              <button className="px-3 py-1 border rounded-full hover:bg-accent bg-[#f0f0f0] ">XL</button>
              <button className="px-3 py-1 border rounded-full hover:bg-accent bg-[#f0f0f0] ">2XL</button>
            </div>
          </div>

          {/* Dress Style */}
          <div className="mb-6 pt-6">
            <h3 className="font-large font-bold mb-4 flex items-center justify-between">Dress Style <div><VscChevronUp/></div></h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Casual</span>
                <span className="text-muted-foreground"><VscChevronRight/></span>
              </div>
              <div className="flex items-center justify-between">
                <span>Formal</span>
                <span className="text-muted-foreground"><VscChevronRight/></span>
              </div>
              <div className="flex items-center justify-between">
                <span>Party</span>
                <span className="text-muted-foreground"><VscChevronRight/></span>
              </div>
              <div className="flex items-center justify-between">
                <span>Gym</span>
                <span className="text-muted-foreground"><VscChevronRight/></span>
              </div>
              <button className="mt-6 px-6 py-3 bg-black text-white text-sm md:text-lg rounded-full hover:bg-gray-800 transition ml-10">
             Apply Filter
          </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <h1 className="text-lg sm:text-2xl font-bold font-integral lg:hidden mb-4">
        Casual
      </h1>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg sm:text-2xl font-bold font-integral hidden lg:block">
          Casual
        </h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Showing 1-9 of 456 Products
              </span>
              <Select defaultValue="most-popular">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="most-popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-gray-100">
                <Image
    src={product.image}
    alt={product.name}
    className="w-full h-auto object-cover object-center transition-transform group-hover:scale-105"
/>

                </div>
                <h3 className="font-medium">{product.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-4 w-4 ${
                        i < product.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">
                    ({product.reviews})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-8">

            <button className="px-3 py-1 border rounded hover:bg-accent">
              Previous
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`px-3 py-1 rounded ${
                  page === 1
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent"
                }`}
              >
                {page}
              </button>
            ))}
            <button className="px-3 py-1 border rounded hover:bg-accent">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// // Sample product data
const products = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 4,
    reviews: 250,
    image: img1.src,
  },
  {
    id: 2,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 5,
    reviews: 180,
    image: img2.src,
  },
  {
    id: 3,
    name: "Black Striped T-shirt",
    price: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 140,
    image: img3.src,
  },
  {
    id: 4,
    name: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    rating: 4,
    reviews: 120,
    image: img4.src,
  },
  {
    id: 5,
    name: "Checkered Shirt",
    price: 180,
    rating: 4,
    reviews: 90,
    image: img5.src,
  },
  {
    id: 6,
    name: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 150,
    rating: 3,
    reviews: 75,
    image: img6.src,
  },
  {
    id: 7,
    name: "Vertical Striped Shirt",
    price: 212,
    originalPrice: 225,
    rating: 5,
    reviews: 450,
    image: img7.src,
  },
  {
    id: 8,
    name: "Courage Graphic T-shirt",
    price: 145,
    rating: 4,
    reviews: 420,
    image: img8.src,
  },
  {
    id: 9,
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    rating: 3,
    reviews: 240,
    image: img9.src,
  },
]


