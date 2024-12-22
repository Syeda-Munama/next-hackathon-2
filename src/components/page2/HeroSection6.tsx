import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, ChevronDown, MoreHorizontal } from 'lucide-react'

interface Review {
  id: string
  author: string
  rating: number
  content: string
  date: string
  verified: boolean
}

const reviews: Review[] = [
  {
    id: "1",
    author: "Samantha D.",
    rating: 4.5,
    content: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt!",
    date: "August 14, 2023",
    verified: true,
  },
  {
    id: "2",
    author: "Alex M.",
    rating: 4,
    content: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    date: "August 15, 2023",
    verified: true,
  },
  {
    id: "3",
    author: "Ethan R.",
    rating: 3.5,
    content: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    date: "August 16, 2023",
    verified: true,
  },
  {
    id: "4",
    author: "Olivia P.",
    rating: 4,
    content: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    date: "August 17, 2023",
    verified: true,
  },
  {
    id: "5",
    author: "Liam K.",
    rating: 4,
    content: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    date: "August 18, 2023",
    verified: true,
  },
  {
    id: "6",
    author: "Ava H.",
    rating: 4.5,
    content: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    date: "August 19, 2023",
    verified: true,
  },
]


export default function Reviews() {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 font-satoshi">
        <Tabs defaultValue="reviews" className="w-full">
          <TabsList className="flex flex-wrap w-full justify-center gap-4 md:justify-evenly text-lg sm:text-2xl md:text-4xl border-b rounded-none h-auto p-2 bg-transparent">
            <TabsTrigger
              value="details"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-2"
            >
              Product Details
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-2"
            >
              Rating & Reviews
            </TabsTrigger>
            <TabsTrigger
              value="faqs"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-2"
            >
              FAQs
            </TabsTrigger>
          </TabsList>
  
          <TabsContent value="reviews" className="pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6">
              <h2 className="text-lg sm:text-xl font-semibold">
                All Reviews <span className="text-muted-foreground">({reviews.length})</span>
              </h2>
              <div className="flex flex-wrap items-center gap-4 mt-4 md:mt-0">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2 text-sm md:text-base">
                      Latest <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Latest</DropdownMenuItem>
                    <DropdownMenuItem>Highest Rating</DropdownMenuItem>
                    <DropdownMenuItem>Lowest Rating</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button className="text-sm md:text-base">Write a Review</Button>
              </div>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review) => (
                <div key={review.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(review.rating)
                                ? "text-yellow-400"
                                : i < review.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="font-semibold">{review.author}</span>
                    {review.verified && (
                      <Check className="h-4 w-4 text-green-500" />
                    )}
                  </div>
                  <p className="text-muted-foreground mb-2">{review.content}</p>
                  <p className="text-sm text-muted-foreground">
                    Posted on {review.date}
                  </p>
                </div>
              ))}
            </div>
  
            <div className="flex justify-center mt-8 mb-4">
              <Button variant="outline" className="text-sm md:text-base">
                Load More Reviews
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    )
  }
  

