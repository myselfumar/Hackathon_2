import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function Group() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">EDITORS PICK</h2>
      <p className="text-center text-muted-foreground mb-12">
        Problems trying to resolve the conflict between
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Men's Category */}
        <Card className="group cursor-pointer overflow-hidden">
          <Link href="/men">
            <CardContent className="p-0 relative aspect-[3/4]">
              <Image
                src="/men.jpg?height=600&width=400"
                alt="Men's Fashion"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6">
                <span className="bg-white px-8 py-3 text-lg font-semibold">
                  MEN
                </span>
              </div>
            </CardContent>
          </Link>
        </Card>

        {/* Women's Category */}
        <Card className="group cursor-pointer overflow-hidden">
          <Link href="/women">
            <CardContent className="p-0 relative aspect-[3/4]">
              <Image
                src="/woman.jpg?height=600&width=400"
                alt="Women's Fashion"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6">
                <span className="bg-white px-8 py-3 text-lg font-semibold">
                  WOMEN
                </span>
              </div>
            </CardContent>
          </Link>
        </Card>

        {/* Combined Card for Accessories and Kids */}
        <div className="grid grid-rows-2 gap-6">
          {/* Accessories */}
          <Card className="group cursor-pointer overflow-hidden">
            <Link href="/accessories">
              <CardContent className="p-0 relative aspect-[2/1]">
                <Image
                  src="/acces.jpg"
                  alt="Accessories"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white px-6 py-2 text-base font-semibold">
                    ACCESSORIES
                  </span>
                </div>
              </CardContent>
            </Link>
          </Card>

          {/* Kids */}
          <Card className="group cursor-pointer overflow-hidden">
            <Link href="/kids">
              <CardContent className="p-0 relative aspect-[2/1]">
                <Image
                  src="/kids.jpg"
                  alt="Kids Fashion"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white px-6 py-2 text-base font-semibold">
                    KIDS
                  </span>
                </div>
              </CardContent>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  )
}

