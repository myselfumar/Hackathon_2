import Image from "next/image"
import { Badge } from "lucide-react"

import { Card, CardContent, CardFooter, } from "@/components/ui/card"
import { ChevronRight, MessageCircle } from 'lucide-react'

export default function FeaturedPosts() {
  const posts = [
    {
      image: "/images/1.jpeg",
      tags: ["Trending", "New"],
      title: "Loudest á la Madison #1",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10
    },
    {
      image: "/images/2.jpeg",
      tags: ["Trending", "New"],
      title: "Loudest á la Madison #1",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10
    },
    {
      image: "/images/3.jpeg",
      tags: ["Trending", "New"],
      title: "Loudest á la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10
    }
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <h3 className="mb-2 text-sm font-bold uppercase text-[#23A6F0]">
          Practice Advice
        </h3>
        <h2 className="mb-4 text-4xl font-bold text-gray-900">
          Featured Posts
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-gray-600">
          Problems trying to resolve the conflict between 
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Card key={index} className="group overflow-hidden border-none shadow-lg">
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Badge 
                className="absolute left-3 top-3 z-10 bg-[#E74040] hover:bg-[#E74040]"
              >
                NEW
              </Badge>
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <CardContent className="p-6">
              {/* Tags */}
              <div className="mb-4 flex gap-2">
                {post.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-xs font-normal text-[#737373]"
                  >
                    {tag}
                    {tagIndex < post.tags.length - 1 && 
                      <span className="mx-2">•</span>
                    }
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="mb-4 text-xl font-normal text-gray-900">
                {post.title}
              </h3>

              {/* Description */}
              <p className="mb-4 text-sm font-normal text-gray-600">
                {post.description}
              </p>

              {/* Footer */}
              <CardFooter className="flex items-center justify-between p-0">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{post.comments} comments</span>
                  </div>
                </div>
                <button className="flex items-center gap-1 text-sm font-bold text-[#737373] hover:text-[#23A6F0]">
                  Learn More
                  <ChevronRight className="h-4 w-4" />
                </button>
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

