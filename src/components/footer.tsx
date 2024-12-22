import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image"; // Import `Image` for optimized rendering
import badge1 from "../public/badges/Badge.png";
import badge2 from "../public/badges/Badge (1).png";
import badge3 from "../public/badges/Badge (2).png";
import badge4 from "../public/badges/Badge (3).png";
import badge5 from "../public/badges/Badge (4).png";

import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full font-satoshi relative">
      {/* Newsletter Section */}
      <div className="bg-black text-white px-6 py-8 md:py-12 relative z-10 rounded-xl max-w-6xl mx-auto -mb-24">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left max-w-md font-integral">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-white text-black rounded-full"
            />
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#F0F0F0] px-6 pt-28 pb-12 relative -z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold mb-4 block font-integral text-left"
            >
              SHOP.CO
            </Link>
            <p className="text-gray-600 mb-4 text-left">
              We have clothes that suit your style and which you&#39;re proud
              to wear. From women to men.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <Link href="#" className="text-gray-600 hover:text-black">
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black">
                <FacebookIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black">
                <InstagramIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black">
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 mt-8">
            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-4 text-center md:text-left">
                COMPANY
              </h3>
              <div className="flex flex-col gap-3 text-gray-600 text-center md:text-left">
                <Link href="#">About</Link>
                <Link href="#">Features</Link>
                <Link href="#">Works</Link>
                <Link href="#">Career</Link>
              </div>
            </div>

            {/* Help Links */}
            <div>
              <h3 className="font-semibold mb-4 text-center md:text-left">
                HELP
              </h3>
              <div className="flex flex-col gap-3 text-gray-600 text-center md:text-left">
                <Link href="#">Customer Support</Link>
                <Link href="#">Delivery Details</Link>
                <Link href="#">Terms &amp; Conditions</Link>
                <Link href="#">Privacy Policy</Link>
              </div>
            </div>

            {/* FAQ Links */}
            <div>
              <h3 className="font-semibold mb-4 text-center md:text-left">
                FAQ
              </h3>
              <div className="flex flex-col gap-3 text-gray-600 text-center md:text-left">
                <Link href="#">Account</Link>
                <Link href="#">Manage Deliveries</Link>
                <Link href="#">Orders</Link>
                <Link href="#">Payments</Link>
              </div>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="font-semibold mb-4 text-center md:text-left">
                RESOURCES
              </h3>
              <div className="flex flex-col gap-3 text-gray-600 text-center md:text-left">
                <Link href="#">Free eBooks</Link>
                <Link href="#">Development Tutorial</Link>
                <Link href="#">How to - Blog</Link>
                <Link href="#">Youtube Playlist</Link>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-sm text-center md:text-left mb-4 md:mb-0">
              Shop.co © 2000-2023. All Rights Reserved.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              <Image src={badge1} alt="Visa" className="h-8" />
              <Image src={badge2} alt="Mastercard" className="h-8" />
              <Image src={badge3} alt="PayPal" className="h-8" />
              <Image src={badge4} alt="Apple Pay" className="h-8" />
              <Image src={badge5} alt="Google Pay" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
