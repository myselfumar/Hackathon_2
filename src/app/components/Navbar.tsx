"use client"



import * as React from "react"
import Link from "next/link"
import { Menu, Phone, Search, ShoppingCart, Instagram, Youtube, Facebook, Twitter } from 'lucide-react'

import { Button } from "@/components/ui/button"


import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  return (
    <div className="w-full">
      {/* Top Banner */}
      <div className="hidden w-full bg-[#252B42] px-4 py-3 text-sm text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(225) 555-0118</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Follow Us and get a chance to win 80% off</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>Follow Us :</span>
            <div className="flex items-center gap-3">
              <Link href="#" className="hover:text-gray-300">
              <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="border-b">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#252B42]">
            Bandage
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/Pages"
              className="text-sm font-medium text-[#252B42] hover:text-gray-600"
            >
              Home
            </Link>
           
            <Link href="Product"
             className="text-sm font-medium text-[#252B42] hover:text-gray-600">
                Shop
                </Link>
                 
             
                
                
               
            <Link
              href="/About"
              className="text-sm font-medium text-[#252B42] hover:text-gray-600"
            >
              About
            </Link>
            <Link
              href="Team1"
              className="text-sm font-medium text-[#252B42] hover:text-gray-600"
            >
              Blog
            </Link>
      
           
            <Link
              href="/Contact"
              className="text-sm font-medium text-[#252B42] hover:text-gray-600"
            >
              Contact
            </Link>
            <Link
              href="/Pages"
              className="text-sm font-medium text-[#252B42] hover:text-gray-600"
            >
              Pages
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <Button variant="ghost" className="text-primary">
              Login / Register
            </Button>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="ml-1">1</span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col gap-4">
                <Link
                  href="/Team1"
                  className="text-lg font-medium text-[#252B42] hover:text-gray-600"
                >
                  Home
                </Link>
                <Link
                  href="/Shop"
                  className="text-lg font-medium text-[#252B42] hover:text-gray-600"
                >
                  Shop
                </Link>
                <Link
                  href="/About"
                  className="text-lg font-medium text-[#252B42] hover:text-gray-600"
                >
                  About
                </Link>
                <Link
                  href="/Blog"
                  className="text-lg font-medium text-[#252B42] hover:text-gray-600"
                >
                  Blog
                </Link>
                <Link
                  href="/Contact"
                  className="text-lg font-medium text-[#252B42] hover:text-gray-600"
                >
                  Contact
                </Link>
                <Link
                  href="/Pages"
                  className="text-lg font-medium text-[#252B42] hover:text-gray-600"
                >
                  Pages
                </Link>
                <div className="flex flex-col gap-4 pt-4">
                  <Button variant="ghost" className="justify-start text-primary">
                    Login / Register
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Search className="mr-2 h-5 w-5" />
                    Search
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Cart (1)
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  )
}

export default Navbar