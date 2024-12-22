import { Minus, Plus, Tag, Trash2 } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

import img1 from "@/public/Frame 33 (2).png"
import check from "@/public/Frame 34.png";
import jeans from "@/public/Frame 33.png";

export default function ShoppingCart() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 font-satoshi">
      <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span>/</span>
        <span>Cart</span>
      </div>

      <h1 className="mb-8 text-3xl font-bold tracking-tight font-integral">YOUR CART</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="space-y-4 p-4">
            {/* Gradient Graphic T-shirt */}
            <div className="flex gap-4 ">
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                <Image
                  src={img1}
                  alt="Gradient Graphic T-shirt"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div className="grid gap-1">
                  <h3 className="font-medium">Gradient Graphic T-shirt</h3>
                  <div className="text-sm text-muted-foreground">
                    <p>Size: Large</p>
                    <p>Color: White</p>
                  </div>
                  <div className="font-medium">$145</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="outline">
                      <Minus className="h-4 w-4" />
                      <span className="sr-only">Decrease quantity</span>
                    </Button>
                    <span className="w-12 text-center">1</span>
                    <Button size="icon" variant="outline">
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Increase quantity</span>
                    </Button>
                  </div>
                  <Button size="icon" variant="ghost" className="text-destructive">
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove item</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Checkered Shirt */}
            <div className="flex gap-4">
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                <Image
                  src={check}
                  alt="Checkered Shirt"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div className="grid gap-1">
                  <h3 className="font-medium">Checkered Shirt</h3>
                  <div className="text-sm text-muted-foreground">
                    <p>Size: Medium</p>
                    <p>Color: Red</p>
                  </div>
                  <div className="font-medium">$180</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="outline">
                      <Minus className="h-4 w-4" />
                      <span className="sr-only">Decrease quantity</span>
                    </Button>
                    <span className="w-12 text-center">1</span>
                    <Button size="icon" variant="outline">
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Increase quantity</span>
                    </Button>
                  </div>
                  <Button size="icon" variant="ghost" className="text-destructive">
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove item</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Skinny Fit Jeans */}
            <div className="flex gap-4">
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                <Image
                  src={jeans }
                  alt="Skinny Fit Jeans"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div className="grid gap-1">
                  <h3 className="font-medium">Skinny Fit Jeans</h3>
                  <div className="text-sm text-muted-foreground">
                    <p>Size: Large</p>
                    <p>Color: Blue</p>
                  </div>
                  <div className="font-medium">$240</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="outline">
                      <Minus className="h-4 w-4" />
                      <span className="sr-only">Decrease quantity</span>
                    </Button>
                    <span className="w-12 text-center">1</span>
                    <Button size="icon" variant="outline">
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Increase quantity</span>
                    </Button>
                  </div>
                  <Button size="icon" variant="ghost" className="text-destructive">
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove item</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-lg border p-6">
            <h2 className="mb-4 text-lg font-medium">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>$565</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Discount (-20%)</span>
                <span className="text-red-600">-$113</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Delivery Fee</span>
                <span>$15</span>
              </div>
              <Separator />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>$467</span>
              </div>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input className="pl-9" placeholder="Add promo code" />
                </div>
                <Button variant="outline">Apply</Button>
              </div>
              <Button className="w-full">Go to Checkout</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

