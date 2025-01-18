import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"



import { Check, Facebook, Instagram, Twitter } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const pricingPlans = [
  {
    name: "FREE",
    price: { monthly: 0, yearly: 0 },
    features: [
      "Unlimited product updates",
      "Unlimited product updates",
      "Unlimited product updates",
      "1GB Cloud storage",
      "Email and community support",
    ],
    buttonText: "Try for Free",
    popular: false
  },
  {
    name: "STANDARD",
    price: { monthly: 9.99, yearly: 99.99 },
    features: [
      "Unlimited product updates",
      "Unlimited product updates",
      "Unlimited product updates",
      "1GB Cloud storage",
      "Email and community support",
    ],
    buttonText: "Start Standard",
    popular: true
  },
  {
    name: "PREMIUM",
    price: { monthly: 19.99, yearly: 199.99 },
    features: [
      "Unlimited product updates",
      "Unlimited product updates",
      "Unlimited product updates",
      "1GB Cloud storage",
      "Email and community support",
    ],
    buttonText: "Start Premium",
    popular: false
  }
]

const faqs = [
  {
    question: "What are my payment options?",
    answer: "We accept all major credit cards, PayPal, and bank transfers. Payment is processed securely through our payment partners."
  },
  {
    question: "How do I change my subscription plan?",
    answer: "You can change your subscription plan at any time through your account settings. Changes will be reflected in your next billing cycle."
  },
  {
    question: "What happens when I upgrade or downgrade?",
    answer: "When you upgrade, you'll immediately get access to new features. When downgrading, you'll keep premium features until the end of your current billing period."
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your current billing period."
  }
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <>
    <Navbar/>
    
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="mb-4 text-5xl font-bold">Simple Pricing</h1>
        <p className="mb-8 text-lg text-gray-600">
          Simple, transparent pricing that grows with you. Try any plan free for 30 days.
        </p>
        
        {/* Pricing Toggle */}
        <div className="mx-auto mb-16 flex items-center justify-center gap-4">
          <span className={`text-sm ${!isYearly ? 'text-[#23A6F0] font-bold' : 'text-gray-600'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative h-6 w-12 rounded-full bg-[#23A6F0] transition-colors"
          >
            <span
              className={`absolute left-1 top-1 h-4 w-4 transform rounded-full bg-white transition-transform ${
                isYearly ? 'translate-x-6' : ''
              }`}
            />
          </button>
          <span className={`text-sm ${isYearly ? 'text-[#23A6F0] font-bold' : 'text-gray-600'}`}>
            Yearly
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.name}
              className={`relative overflow-hidden ${
                plan.popular ? 'border-[#23A6F0] shadow-lg' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute right-4 top-4 rounded-full bg-[#23A6F0] px-3 py-1 text-xs text-white">
                  Popular
                </div>
              )}
              <CardHeader className="text-center">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-4 text-4xl font-bold">
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                  <span className="text-base font-normal text-gray-600">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-[#23A6F0]" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-[#23A6F0] hover:bg-[#1a94d9]' 
                      : 'bg-white text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </header>

      {/* Brand Logos */}
      <section className="border-y bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {['Hooli', 'Lyft', 'Stripe', 'AWS', 'Reddit', 'Slack'].map((brand) => (
              <div key={brand} className="flex items-center justify-center">
                <Image
                  src={`/brands/${brand.toLowerCase()}.svg`}
                  alt={`${brand} logo`}
                  width={120}
                  height={60}
                  className="opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Pricing FAQs</h2>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Start your 14 days free trial</h2>
          <p className="mb-8 text-gray-600">
            Try our risk-free trial and start building what you want.
          </p>
          <Button 
            size="lg"
            className="mb-8 bg-[#23A6F0] px-8 hover:bg-[#1a94d9]"
          >
            Get Started Now
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
        </div>
      </section>
    </div>
    <Footer/>
    </>
  )
}

