import Link from "next/link"
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-10">
      <div className="container mx-auto px-4">
        {/* Brand and Social */}
        <div className="flex items-center justify-between pb-10">
          <Link href="/" className="text-2xl font-bold">
            Bandage
          </Link>
          <div className="flex items-center gap-5">
            <Link href="#" className="text-[#23A6F0] hover:opacity-80">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-[#23A6F0] hover:opacity-80">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-[#23A6F0] hover:opacity-80">
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-5">
          {/* Company Info */}
          <div className="space-y-3">
            <h3 className="font-bold">Company Info</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-[#23A6F0]">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#23A6F0]">Carrier</Link></li>
              <li><Link href="#" className="hover:text-[#23A6F0]">We are hiring</Link></li>
              <li><Link href="#" className="hover:text-[#23A6F0]">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h3 className="font-bold">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-[#23A6F0]">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#23A6F0]">Carrier</Link></li>
              <li><Link href="#" className="hover:text-[#23A6F0]">We are hiring</Link></li>
              <li><Link href="#" className="hover:text-[#23A6F0]">Blog</Link></li>
            </ul>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h3 className="font-bold">Features</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-[#23A6F0]">Business Marketing</Link></li>
              <li><Link href="#" className="hover:text-[#23A6F0]">User Analytic</Link></li>
              <li><Link href="#" className="hover:text-[#23A6F0]">Live Chat</Link></li>
              <li><Link href="#" className="hover:text-[#23A6F0]">Unlimited Support</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h3 className="font-bold">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-[#23A6F0]">IOS & Android</Link></li>
              <li><Link href="#" className="hover:text-[#23A6F0]">Watch a Demo</Link></li>
              <li><Link href="#" className="hover:text-[#23A6F0]">Customers</Link></li>
              <li><Link href="#" className="hover:text-[#23A6F0]">API</Link></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="space-y-3">
            <h3 className="font-bold">Get In Touch</h3>
            <form className="flex flex-col gap-2">
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="rounded border-gray-300 px-4 py-2 text-sm"
              />
              <p className="text-xs text-gray-500">Lore imp sun dolor Amit</p>
              <Button 
                type="submit"
                className="bg-[#23A6F0] text-white hover:bg-[#1a94d9]"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-600">
          <p>Made With Love By Finland All Right Reserved</p>
        </div>
      </div>
    </footer>
  )
}

