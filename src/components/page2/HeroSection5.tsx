
import Link from "next/link";
import { VscChevronRight } from "react-icons/vsc";
import { IoCheckmark } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Minus, Plus, Star, StarHalf } from "lucide-react";
import Image from "next/image";
import img1 from "@/public/productdetail/image 1.png";
import img2 from "@/public/productdetail/image 2.png";
import img3 from "@/public/productdetail/image 5.png";
import img4 from "@/public/productdetail/image 6.png";

export default function ProductDetail1() {
  return (
    <div className="container mx-auto px-4 py-8 font-satoshi">
      {/* Breadcrumb Navigation */}
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
        <span className="mx-2 mt-1">
          <VscChevronRight />
        </span>
        <Link href="/shop/men" className="hover:text-foreground">
          Men
        </Link>
        <span className="mx-2 mt-1">
          <VscChevronRight />
        </span>
        <span className="font-bold">T-shirts</span>
      </nav>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8">
        {/* Image Section */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex md:flex-col gap-4">
            <Card className="w-24 h-28 sm:w-32 sm:h-36 md:w-40 md:h-44 cursor-pointer overflow-hidden">
              <Image
                src={img2}
                alt="T-shirt thumbnail"
                className="object-cover w-full h-full"
              />
            </Card>
            <Card className="w-24 h-28 sm:w-32 sm:h-36 md:w-40 md:h-44 cursor-pointer overflow-hidden">
              <Image
                src={img3}
                alt="T-shirt thumbnail"
                className="object-cover w-full h-full"
              />
            </Card>
            <Card className="w-24 h-28 sm:w-32 sm:h-36 md:w-40 md:h-44 cursor-pointer overflow-hidden">
              <Image
                src={img4}
                alt="T-shirt thumbnail"
                className="object-cover w-full h-full"
              />
            </Card>
          </div>
          <Card className="flex-1 overflow-hidden">
            <Image
              src={img1}
              alt="T-shirt main image"
              className="object-cover w-full h-full"
            />
          </Card>
        </div>

        {/* Product Details Section */}
        <div className="space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-integral">
            ONE LIFE GRAPHIC T-SHIRT
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              <Star className="fill-current" size={16} />
              <Star className="fill-current" size={16} />
              <Star className="fill-current" size={16} />
              <Star className="fill-current" size={16} />
              <StarHalf className="fill-current" size={16} />
            </div>
            <span className="text-xs sm:text-sm text-muted-foreground">4.5/5</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold">$260</span>
            <span className="text-sm sm:text-lg md:text-xl text-muted-foreground line-through">
              $300
            </span>
            <span className="px-2 py-1 text-xs sm:text-sm md:text-base font-semibold text-red-500 bg-red-50 rounded">
              -40%
            </span>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Color Selection */}
          <div className="space-y-4 pt-3">
            <span className="text-sm font-medium">Select Colors</span>
            <div className="flex gap-2">
              <IoCheckmark className="w-6 h-6 sm:w-8 sm:h-8 p-1 rounded-full bg-[#4F4631] text-white" />
              <button className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-teal-800" />
              <button className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#31344F]" />
            </div>
          </div>

          {/* Size Selection */}
          <div className="space-y-4 pt-3">
            <span className="text-sm font-medium">Choose Size</span>
            <div className="flex gap-2">
              <Button variant="outline" className="w-16 sm:w-20 bg-[#F0F0F0]">
                Small
              </Button>
              <Button variant="outline" className="w-16 sm:w-20 bg-[#F0F0F0]">
                Medium
              </Button>
              <Button
                variant="outline"
                className="w-16 sm:w-20 bg-primary text-primary-foreground"
              >
                Large
              </Button>
              <Button variant="outline" className="w-16 sm:w-20 bg-[#F0F0F0]">
                X-Large
              </Button>
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4 pt-5">
            <div className="flex items-center bg-[#f0f0f0]">
              <Button variant="outline" size="icon" className="bg-[#f0f0f0]">
                <Minus className="h-3 w-3" />
              </Button>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-10 h-8 sm:w-12 sm:h-10 text-center border-y bg-[#f0f0f0]"
              />
              <Button variant="outline" size="icon" className="bg-[#f0f0f0]">
                <Plus className="h-3 w-3" />
              </Button>
            </div>

            <Button className="flex-1 rounded-full">Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}