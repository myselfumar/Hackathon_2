import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const teamMembers = [
  {
    id: 1,
    name: "Sarah Doe",
    role: "Design Lead",
    image: "/team/member1.jpg",
    bgColor: "bg-red-100",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Developer",
    image: "/team/member2.jpg",
    bgColor: "bg-blue-100",
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Marketing",
    image: "/team/member3.jpg",
    bgColor: "bg-yellow-100",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Product Manager",
    image: "/team/member4.jpg",
    bgColor: "bg-purple-100",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "UX Designer",
    image: "/team/member5.jpg",
    bgColor: "bg-pink-100",
  },
  {
    id: 6,
    name: "David Lee",
    role: "Frontend Developer",
    image: "/team/member6.jpg",
    bgColor: "bg-orange-100",
  },
  {
    id: 7,
    name: "Rachel Green",
    role: "Content Writer",
    image: "/team/member7.jpg",
    bgColor: "bg-green-100",
  },
  {
    id: 8,
    name: "James Wilson",
    role: "Backend Developer",
    image: "/team/member8.jpg",
    bgColor: "bg-indigo-100",
  },
  {
    id: 9,
    name: "Sophie Turner",
    role: "UI Designer",
    image: "/team/member9.jpg",
    bgColor: "bg-teal-100",
  },
]

const galleryImages = [
  { src: "/gallery/image1.jpg", width: 600, height: 800 },
  { src: "/gallery/image2.jpg", width: 400, height: 600 },
  { src: "/gallery/image3.jpg", width: 400, height: 600 },
  { src: "/gallery/image4.jpg", width: 400, height: 600 },
]

export default function TeamPage() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <h1 className="mb-12 text-center text-4xl font-bold md:text-5xl">
          Innovation tailored for you
        </h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-lg ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <Image
                src={`/placeholder.svg?height=${image.height}&width=${image.width}`}
                alt={`Gallery image ${index + 1}`}
                width={image.width}
                height={image.height}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">Meet Our Team</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className={`relative aspect-[4/5] ${member.bgColor}`}>
                <Image
                  src={`/placeholder.svg?height=600&width=480`}
                  alt={member.name}
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="mb-4 text-sm">{member.role}</p>
                <div className="flex gap-4">
                  <Link href="#" className="text-white hover:text-[#23A6F0]">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-white hover:text-[#23A6F0]">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-white hover:text-[#23A6F0]">
                    <Instagram className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="mb-8 text-2xl font-bold">
          Start your 14 days free trial
        </h2>
        <Button 
          className="mb-8 bg-[#23A6F0] px-8 hover:bg-[#1a94d9]"
          size="lg"
        >
          Try it free now
        </Button>
        <div className="flex justify-center gap-6">
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
      </section>
    </div>
    <Footer/>
    </>
  )
}

