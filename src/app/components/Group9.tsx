/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { urlFor } from '@/sanity/lib/image';
import client from '@/sanity/lib/client';
import Image from 'next/image';


interface ColorVariant {
  name: string;
  code: string;
}

interface Product {
  productImage: any;
  title: string;
  price: number;
  image: any;
  description: string;
  colors?: ColorVariant[];
}

export default async function ProductGrid() {
  const data = await client.fetch(`*[_type == 'product']`);
 

  return (
    <div className='px-24'>
    <div className="w-full max-w-7xl mx-auto px-4 py-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h3 className="text-neutral-500 text-lg mb-3">Featured Products</h3>
        <h2 className="text-[#252b42] text-3xl font-bold mb-4">BESTSELLER PRODUCTS</h2>
        <p className="text-neutral-500">Problems trying to resolve the conflict between</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((product: Product, index: number) => (
          <div
            key={index}
            className="group flex flex-col bg-white transition-all duration-300 hover:shadow-xl"
          >
            {/* Product Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
            <Image
        src={
          product.productImage
            ? urlFor(product.productImage).url()
            : '/fallback-image.jpg'
        }
        alt={product.title || 'Product image'} // Add meaningful alt text
        className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        width={500} // Provide width for Image component
        height={500} // Provide height for Image component
      />
            </div>

            {/* Product Info */}
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-[#252b42] font-bold text-base mb-2">
                {product.title}
              </h3>
              <h3 className="text-black/60  text-base mb-2">
                {product.description}
              </h3>
              
              {/* Price */}
              <div className="flex gap-2 items-center">
                <span className="text-neutral-500 font-bold">
                  ${product.price.toFixed(2)}
                </span>
                {product.price > 50 && (
                  <span className="text-sm text-green-500 font-bold">
                    ${(product.price * 0.8).toFixed(2)}
                  </span>
                )}
              </div>

              {/* Color Variants */}
              <div className="flex gap-2 mt-3">
                {product.colors?.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className="w-4 h-4 rounded-full border border-gray-200"
                    style={{ backgroundColor: color.code }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

