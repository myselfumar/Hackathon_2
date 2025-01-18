"use client"

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Star, ChevronLeft, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";

// This would typically come from a database or API
const products = [
  {
    id: 1,
    name: "Graphic Design Men's Hoodie",
    price: 49.99,
    rating: 4,
    colors: ["#23A6F0", "#2DC071", "#E77C40"],
    image: "/pics/11.png",
    description: "A comfortable and stylish hoodie perfect for casual wear. Features a unique graphic design and is made from high-quality, soft material.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Graphic Design Men's Hoodie",
    price: 49.99,
    rating: 4,
    colors: ["#23A6F0", "#2DC071", "#E77C40"],
    image: "/pics/12.png",
    description: "A comfortable and stylish hoodie perfect for casual wear. Features a unique graphic design and is made from high-quality, soft material.",
    sizes: ["S", "M", "L", "XL"],
  },{
    id: 3,
    name: "Graphic Design Men's Hoodie",
    price: 49.99,
    rating: 4,
    colors: ["#23A6F0", "#2DC071", "#E77C40"],
    image: "/pics/1.png",
    description: "A comfortable and stylish hoodie perfect for casual wear. Features a unique graphic design and is made from high-quality, soft material.",
    sizes: ["S", "M", "L", "XL"],
  },{
    id: 4,
    name: "Graphic Design Men's Hoodie",
    price: 49.99,
    rating: 4,
    colors: ["#23A6F0", "#2DC071", "#E77C40"],
    image: "/pics/2.png",
    description: "A comfortable and stylish hoodie perfect for casual wear. Features a unique graphic design and is made from high-quality, soft material.",
    sizes: ["S", "M", "L", "XL"],
  },{
    id: 5,
    name: "Graphic Design Men's Hoodie",
    price: 49.99,
    rating: 4,
    colors: ["#23A6F0", "#2DC071", "#E77C40"],
    image: "/pics/3.png",
    description: "A comfortable and stylish hoodie perfect for casual wear. Features a unique graphic design and is made from high-quality, soft material.",
    sizes: ["S", "M", "L", "XL"],
  },{
    id: 6,
    name: "Graphic Design Men's Hoodie",
    price: 49.99,
    rating: 4,
    colors: ["#23A6F0", "#2DC071", "#E77C40"],
    image: "/pics/4.png",
    description: "A comfortable and stylish hoodie perfect for casual wear. Features a unique graphic design and is made from high-quality, soft material.",
    sizes: ["S", "M", "L", "XL"],
  },{
    id: 7,
    name: "Graphic Design Men's Hoodie",
    price: 49.99,
    rating: 4,
    colors: ["#23A6F0", "#2DC071", "#E77C40"],
    image: "/pics/5.png",
    description: "A comfortable and stylish hoodie perfect for casual wear. Features a unique graphic design and is made from high-quality, soft material.",
    sizes: ["S", "M", "L", "XL"],
  },{
    id: 8,
    name: "Graphic Design Men's Hoodie",
    price: 49.99,
    rating: 4,
    colors: ["#23A6F0", "#2DC071", "#E77C40"],
    image: "/pics/6.png",
    description: "A comfortable and stylish hoodie perfect for casual wear. Features a unique graphic design and is made from high-quality, soft material.",
    sizes: ["S", "M", "L", "XL"],
  },{
    id: 9,
    name: "Graphic Design Men's Hoodie",
    price: 49.99,
    rating: 4,
    colors: ["#23A6F0", "#2DC071", "#E77C40"],
    image: "/pics/7.png",
    description: "A comfortable and stylish hoodie perfect for casual wear. Features a unique graphic design and is made from high-quality, soft material.",
    sizes: ["S", "M", "L", "XL"],
  },{
    id: 10,
    name: "Graphic Design Men's Hoodie",
    price: 49.99,
    rating: 4,
    colors: ["#23A6F0", "#2DC071", "#E77C40"],
    image: "/pics/8.png",
    description: "A comfortable and stylish hoodie perfect for casual wear. Features a unique graphic design and is made from high-quality, soft material.",
    sizes: ["S", "M", "L", "XL"],
  },{
    id: 11,
    name: "Graphic Design Men's Hoodie",
    price: 49.99,
    rating: 4,
    colors: ["#23A6F0", "#2DC071", "#E77C40"],
    image: "/pics/9.png",
    description: "A comfortable and stylish hoodie perfect for casual wear. Features a unique graphic design and is made from high-quality, soft material.",
    sizes: ["S", "M", "L", "XL"],
  },{
    id: 12,
    name: "Graphic Design Men's Hoodie",
    price: 49.99,
    rating: 4,
    colors: ["#23A6F0", "#2DC071", "#E77C40"],
    image: "/pics/10.png",
    description: "A comfortable and stylish hoodie perfect for casual wear. Features a unique graphic design and is made from high-quality, soft material.",
    sizes: ["S", "M", "L", "XL"],
  },
  
];


export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const product = products.find(p => p.id === parseInt(id));
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
  
    if (!product) {
      return <div>Product not found</div>;
    }
  
    const handleAddToCart = () => {
      if (!selectedSize || !selectedColor) {
        alert("Please select a size and color before adding to cart.");
        return;
      }
  
      // In a real application, you'd typically use a state management solution like Redux
      // or React Context to manage the cart state. For simplicity, we'll use localStorage here.
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      cart.push({
        ...product,
        selectedSize,
        selectedColor,
        quantity: 1
      });
      localStorage.setItem('cart', JSON.stringify(cart));
  
      router.push('/cart');
    };
  
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          <Link href="/products" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="flex items-center">
                <div className="flex mr-2">
                  {Array(5).fill(null).map((_, index) => (
                    <Star
                      key={index}
                      className={`h-5 w-5 ${
                        index < product.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">{product.rating} out of 5 stars</span>
              </div>
              <p className="text-xl font-bold">${product.price}</p>
              <p className="text-gray-600">{product.description}</p>
              <div>
                <h3 className="font-semibold mb-2">Available Colors:</h3>
                <div className="flex gap-2">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className={`h-8 w-8 rounded-full border-2 cursor-pointer ${
                        color === selectedColor ? 'border-black' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Select Size:</h3>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={size === selectedSize ? "default" : "outline"}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
              <Button className="w-full" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

