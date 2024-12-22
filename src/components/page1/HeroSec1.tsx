
"use client";
import Image from "next/image";

import img from "../../public/image.webp";
import Star from "../../public/Vector.png";
import versace from "../../public/Group (1).png";
import zara from "../../public/zara-logo-1 1.png";
import gucci from "../../public/gucci-logo-1 1.png";
import prada from "../../public/prada-logo-1 1.png";
import cl from "../../public/Group.png";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col bg-white font-satoshi">
      {/* Main Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-center w-full h-auto md:h-[85vh]">
        {/* Left Content */}
        <div className="flex-1 px-6 py-8 md:px-16 md:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black font-integral leading-tight">
            FIND CLOTHES<br />
            THAT MATCHES<br />
            YOUR STYLE
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            Browse through our diverse range of meticulously crafted garments, 
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white text-sm md:text-lg rounded-full hover:bg-gray-800 transition">
            Shop Now
          </button>

          {/* Stats Section */}
          <div className="flex justify-between mt-6 md:hidden">
            <div className="text-center">
              <p className="font-bold text-xl">200+</p>
              <p className="text-xs text-gray-600">International Brands</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-xl">2,000+</p>
              <p className="text-xs text-gray-600">High-Quality Products</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-xl">30,000+</p>
              <p className="text-xs text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex-1 flex items-center justify-center px-6 md:px-16">
          <Image
            src={img}
            alt="Styled Clothing"
            className="w-full flex-grow max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            priority
          />
          {/* Decorative Stars */}
          <Image
            src={Star}
            alt="Decorative Star"
            className="absolute w-6 sm:w-8 md:w-10"
            style={{ top: "10%", left: "70%" }}
          />
          <Image
            src={Star}
            alt="Decorative Star"
            className="absolute w-6 sm:w-8 md:w-10"
            style={{ top: "60%", left: "10%" }}
          />
        </div>
      </div>

      {/* Brand Logos */}
      <div className="flex items-center justify-center flex-wrap gap-x-5 gap-y-3 w-full bg-black px-4 py-6">
        <Image src={versace} alt="Versace" className="h-4 sm:h-6 md:h-10" />
        <Image src={zara} alt="Zara" className="h-4 sm:h-6 md:h-8" />
        <Image src={gucci} alt="Gucci" className="h-4 sm:h-6 md:h-8" />
        <Image src={prada} alt="Prada" className="h-4 sm:h-6 md:h-7" />
        <Image src={cl} alt="Calvin Klein" className="h-4 sm:h-6 md:h-7" />
      </div>
    </section>
  );
}
