import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactSection() {
  const contactItems = [
    {
      icon: <Phone className="h-8 w-8 text-[#23A6F0]" />,
      email: "georgia.young@example.com",
      bgColor: "bg-white",
    },
    {
      icon: <Phone className="h-8 w-8 text-[#23A6F0]" />,
      email: "georgia.young@example.com",
      bgColor: "bg-[#252B42] text-white",
    },
    {
      icon: <Mail className="h-8 w-8 text-[#23A6F0]" />,
      email: "georgia.young@example.com",
      bgColor: "bg-white",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-bold uppercase text-gray-600">CONTACT US</p>
              <h1 className="text-4xl font-bold text-gray-900 lg:text-5xl">
                Get in touch today!
              </h1>
            </div>
            <p className="text-lg text-gray-600">
              We know how large objects will act,<br />
              but things on a small scale
            </p>
            <div className="space-y-2">
              <p className="font-medium">Phone : +451 215 215</p>
              <p className="font-medium">Fax : +451 215 215</p>
            </div>
            <div className="flex gap-4">
              {[
                { href: "#", Icon: Twitter },
                { href: "#", Icon: Facebook },
                { href: "#", Icon: Instagram },
                { href: "#", Icon: Linkedin },
              ].map(({ href, Icon }, index) => (
                <Link
                  key={index}
                  href={href}
                  aria-label={`Link to ${Icon.name}`}
                  className="text-[#23A6F0] hover:opacity-80"
                >
                  <Icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-auto">
            <Image
              src="/tech1.png"
              alt="Family shopping"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Help Section */}
        <div className="my-20 text-center">
          <h2 className="mb-16 text-3xl font-bold">
            We help small businesses<br />
            with big ideas
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {contactItems.map((item, index) => (
              <Card key={index} className={item.bgColor}>
                <CardContent className="flex flex-col items-center gap-4 p-8">
                  {item.icon}
                  <p className="text-sm">{item.email}</p>
                  <p className="font-bold">Get Support</p>
                  <Button
                    className={`mt-4 rounded-full ${
                      item.bgColor.includes("bg-[#252B42]")
                        ? "bg-[#23A6F0] hover:bg-[#1a94d9]"
                        : "border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white"
                    }`}
                  >
                    Submit Request
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="mb-8 space-y-4">
            <p className="text-sm font-bold uppercase text-[#23A6F0]">
              WE Cant WAIT TO MEET YOU
            </p>
            <h2 className="text-4xl font-bold">Lets Talk</h2>
          </div>
          <Button
            size="lg"
            className="rounded-full bg-[#23A6F0] px-12 hover:bg-[#1a94d9]"
          >
            Try it free now
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
