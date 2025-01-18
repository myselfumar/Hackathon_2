import Link from "next/link";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const categories = [
  { name: "Casual", image: "/categories/casual.jpg" },
  { name: "Formal", image: "/categories/formal.jpg" },
  { name: "Sport", image: "/categories/sport.jpg" },
  { name: "Summer", image: "/categories/summer.jpg" },
  { name: "Winter", image: "/categories/winter.jpg" },
];

const brands = ["hooli", "lyft", "stripe", "aws", "reddit"];

const products = [
  {
    id: 1,
    name: "Graphic Design Men's Hoodie",
    price: 49.99,
    rating: 4,
    colors: ["#23A6F0", "#2DC071", "#E77C40"],
    image: "/pics/11.png",
  },
  {
    id: 2,
    name: "Women's Fashion Sweater",
    price: 39.99,
    rating: 5,
    colors: ["#23A6F0", "#2DC071"],
    image: "/pics/12.png",
  },
  // Additional product examples
  ...Array(10)
    .fill(null)
    .map((_, i) => ({
      id: i + 3,
      name: `Fashion Product Item ${i + 3}`,
      price: 29.99 + i * 10,
      rating: Math.floor(Math.random() * 2) + 4,
      colors: ["#23A6F0", "#2DC071", "#E77C40"].slice(0, Math.floor(Math.random() * 3) + 1),
      image: `/pics/${i + 1}.png`,
    })),
];

export default function ProductListing() {
  const totalPages = Math.ceil(products.length / 12);
  const currentPage = 1; // Hardcoded for now; you can add state to control this.

  return (
    <div className="min-h-screen bg-white">
      {/* Category Banner */}
      <section className="border-b">
        <div className="container mx-auto overflow-x-auto px-4 py-6">
          <div className="flex gap-6">
            {categories.map((category, index) => (
              <div key={index} className="shrink-0">
                <div className="relative h-32 w-32 overflow-hidden rounded-lg">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <p className="mt-2 text-center text-sm font-medium">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-around">
            {brands.map((brand, index) => (
              <Image
                key={index}
                src={`/brands/${brand}.svg`}
                alt={`${brand} logo`}
                width={100}
                height={32}
                className="h-8 w-auto opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Listing */}
      <section className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Select defaultValue="popular">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-gray-500">Showing 1-12 of {products.length} results</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  layout="fill"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-center font-medium">{product.name}</h3>
                <div className="flex justify-center gap-2">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="h-4 w-4 rounded-full border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="font-bold text-gray-500">${product.price}</span>
                  {product.price > product.price * 0.8 && (
                    <span className="text-[#23A6F0]">${(product.price * 0.8).toFixed(2)}</span>
                  )}
                </div>
                <div className="flex justify-center">
                  {Array(5)
                    .fill(null)
                    .map((_, index) => (
                      <Star
                        key={index}
                        className={`h-4 w-4 ${
                          index < product.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={page === currentPage ? "default" : "outline"}
              className={page === currentPage ? "bg-[#23A6F0]" : ""}
            >
              {page}
            </Button>
          ))}
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
