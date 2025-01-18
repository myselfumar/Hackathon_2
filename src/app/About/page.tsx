import Image from "next/image"
import { Play } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"



export default function AboutPage() {
  return (
    <>
    <Navbar />
      
    <div className="flex min-h-screen w-full flex-col">
      {/* Hero Section */}
      <section className="container mx-auto grid gap-8 px-4 py-16 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            ABOUT US
          </h1>
          <p className="text-lg text-gray-600">
            We know how large objects will act, but things on a small scale just do not act that way.
          </p>
          <Button className="rounded-md bg-[#23A6F0] px-8 hover:bg-[#1a94d9]">
            Get Quote Now
          </Button>
        </div>
        <div className="relative aspect-square">
          <Image
            src="/technology-1.png"
            alt="Shopping experience"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto grid gap-8 px-4 py-16 md:grid-cols-3">
        {[
          { number: "15K", label: "Happy Customers" },
          { number: "150K", label: "Monthly Visitors" },
          { number: "15+", label: "Countries Worldwide" },
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <h2 className="mb-2 text-5xl font-bold text-[#23A6F0]">{stat.number}</h2>
            <p className="text-lg font-medium text-gray-600">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Video Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
          <Image
            src="/unsplash1.jpeg"
            alt="Video thumbnail"
            fill
            className="object-cover"
          />
          <button className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform hover:scale-110">
            <Play className="h-8 w-8 text-[#23A6F0]" />
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">Meet Our Team</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((member) => (
            <Card key={member} className="overflow-hidden">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/about1.jpeg"
                  alt={`Team member ${member}`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="mb-2 text-xl font-bold">Username</h3>
                <p className="text-gray-600">Profession</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Brands Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-3 gap-8 md:grid-cols-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              <Image
                src="/"
                alt={`Brand logo ${i + 1}`}
                width={100}
                height={50}
                className="opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#23A6F0] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center text-white">
            <h2 className="mb-6 text-3xl font-bold">Subscribe For Latest Newsletter</h2>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="h-12 rounded-lg border-white bg-white/10 text-white placeholder:text-white/70"
              />
              <Button className="h-12 rounded-lg bg-[#252B42] px-8 hover:bg-[#1d2231]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
      
    </div>
    <Footer />
</>
  );
}