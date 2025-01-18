import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 py-12 md:grid-cols-2 md:gap-12">
      {/* Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
        <Image
          src="/g11.png"
          
          alt="Lifestyle photo"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="space-y-6">
        <span className="text-sm font-medium uppercase tracking-wider text-gray-500">
          Summer 2020
        </span>
        
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Part of the Neural Universe
        </h1>
        
        <p className="text-lg text-gray-600">
          We know how large objects will act, but things on a small scale.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Button 
            size="lg"
            className="bg-[#2DC071] hover:bg-[#25a861] px-8"
          >
            BUY NOW
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="border-[#2DC071] text-[#2DC071] hover:bg-[#2DC071] hover:text-white px-8"
          >
            READ MORE
          </Button>
        </div>
      </div>
    </div>
  )
}

