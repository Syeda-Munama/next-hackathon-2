
"use client";
import { VscChevronDown, VscChromeClose } from "react-icons/vsc";
import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi"; // Hamburger icon for mobile
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="relative flex font-satoshi items-center justify-center w-full h-10 bg-black text-white text-[14px]">
        Sign up and get 20% off in your first order &nbsp;{" "}
        <span className="underline">Sign up Now.</span>
        <button
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close banner"
          className="absolute right-5 max-md:hidden"
        >
          <VscChromeClose />
        </button>
      </div>

      {/* Navbar */}
      <div className="w-full h-16 px-5 flex items-center justify-between bg-white shadow-md">
        {/* Logo and Hamburger Icon */}
        <div className="flex items-center gap-4">
          {/* Hamburger Icon (Mobile Only) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-xl md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <HiMenuAlt3 />
          </button>
          {/* Logo */}
          <h1 className="text-3xl ml-2 md:ml-10 font-bold font-integral">
            SHOP.CO
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-6 text-sm ml-10">
          <li className="flex items-center cursor-pointer">
        <Link href="/productdetail">
        Shop 
        </Link>
        <span className="ml-1"><VscChevronDown /></span>
            
          </li>
          <li className="cursor-pointer">On Sale</li>
          <li className="cursor-pointer">New Arrival</li>
          <li className="cursor-pointer">Brands</li>
        </ul>

        {/* Icons and Search */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* Desktop Search Bar */}
          <form className="hidden md:flex flex-1 max-w-md relative">
            <Input
              type="search"
              placeholder="Search for products..."
              className="w-full p-2 pl-10 rounded-full border bg-[#f0f0f0] shadow-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-800" />
          </form>

          {/* Icons */}
          <Button variant="ghost" size="icon" aria-label="Shopping cart">
            <BsCart2 className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search"
            className="md:hidden"
          >
            <CiSearch className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="User account">
            <FaRegUserCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Dropdown Menu (Mobile View) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col gap-4 px-5 py-4">
            <li className="flex items-center cursor-pointer">
                <Link href="/productdetail">
                Shop <span className="ml-1"><VscChevronDown /></span>
                </Link>
              
            </li>
            <li className="cursor-pointer">On Sale</li>
            <li className="cursor-pointer">New Arrival</li>
            <li className="cursor-pointer">Brands</li>
          </ul>

          {/* Mobile Search Bar */}
          <div className="px-5 py-2">
            <form className="relative w-[90%] mx-auto">
              <Input
                type="search"
                placeholder="Search for products..."
                className="w-full p-2 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              
              <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-800" />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
