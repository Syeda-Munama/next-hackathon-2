import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import product1 from "@/public/Frame 32.png";
import product2 from "@/public/Frame 33.png";
import product3 from "@/public/Frame 34.png";
import product4 from "@/public/Frame 38.png";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
}

const recommendations: Product[] = [
  {
    id: "1",
    name: "Polo with Contrast Trims",
    price: 212,
    originalPrice: 242,
    rating: 4.0,
    image: product1.src,
  },
  {
    id: "2",
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
    image: product2.src,
  },
  {
    id: "3",
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    image: product3.src,
  },
  {
    id: "4",
    name: "Black Striped T-shirt",
    price: 120,
    originalPrice: 160,
    rating: 5.0,
    image: product4.src,
  },
];

export default function RecommendationSection() {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-center mb-8 font-integral">
        YOU MIGHT ALSO LIKE
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-satoshi">
        {recommendations.map((product) => (
          <Card key={product.id} className="overflow-hidden shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-auto object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center text-yellow-400">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < Math.floor(product.rating)
                          ? "fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating.toFixed(1)}/5
                </span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-xl font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
