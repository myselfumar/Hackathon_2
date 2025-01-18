import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ProductHero() {
  return (
    <div className="relative min-h-[600px] w-full bg-[#2D8472]">
      <div className="container mx-auto grid min-h-[600px] grid-cols-1 items-center gap-8 px-4 lg:grid-cols-2">
        {/* Left Content */}
        <div className="z-10 space-y-6 text-white">
          <span className="text-sm font-bold uppercase tracking-wider">
            SUMMER 2020
          </span>
          
          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Vita Classic<br />Product
          </h1>
          
          <p className="max-w-md text-lg">
            We know how large objects will act. We know how are objects will act. We know
          </p>
          
          <div className="flex items-center gap-6">
            <span className="text-3xl font-bold">$16.48</span>
            <Button 
              size="lg"
              className="bg-[#2DC071] px-8 font-bold hover:bg-[#25a861]"
            >
              ADD TO CART
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="absolute right-0 top-0 h-full w-1/2 lg:relative lg:w-full">
          <Image
            src="/3.png"
            alt="Product showcase"
            fill
            className="object-contain object-right"
            priority
          />
        </div>
      </div>
    </div>
  )
}

