import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Gift, Truck, Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import TestimonialSlider from "@/components/testimonial-slider"
import CategoryCard from "@/components/category-card"
import NewsletterSection from "@/components/newsletter-section"
import { featuredProducts } from "@/lib/data"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-royal-cream to-background pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="heading-xl text-royal-charcoal">
                Handcrafted Gifts <span className="text-primary">With Love</span>
              </h1>
              <p className="body-lg text-muted-foreground max-w-md">
                Discover exquisite personalized gifts and home decor that celebrate life's special moments with elegance
                and warmth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="btn-primary">
                  Shop Now
                </Button>
                <Button size="lg" variant="outline" className="btn-outline">
                  Custom Orders
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-elegant-lg">
              <Image src="/images/hero.png" alt="Elegant gift arrangements" fill className="object-cover" priority />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Featured Categories */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Shop By Category</h2>
            <p className="body-md text-muted-foreground max-w-2xl mx-auto">
              Explore our curated collections designed for every special occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <CategoryCard
              title="Festive Gifts"
              description="Celebrate special occasions with our festive collection"
              image="/images/festive-gifts.png"
              href="/categories/festive"
            />
            <CategoryCard
              title="Wedding Collection"
              description="Elegant gifts and decor for the perfect wedding"
              image="/images/wedding-collection.png"
              href="/categories/wedding"
            />
            <CategoryCard
              title="Custom Orders"
              description="Personalized gifts crafted to your specifications"
              image="/images/custom-orders.png"
              href="/categories/custom"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-royal-cream/30">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="heading-lg mb-4">Our Bestsellers</h2>
              <p className="body-md text-muted-foreground max-w-2xl">
                Discover our most loved creations that bring joy to every occasion
              </p>
            </div>
            <Link href="/shop" className="mt-4 md:mt-0 group flex items-center text-primary font-medium">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card shadow-elegant">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-playfair font-semibold text-lg mb-2">Fast Shipping</h3>
              <p className="text-sm text-muted-foreground">Quick delivery across India with careful packaging</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card shadow-elegant">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-playfair font-semibold text-lg mb-2">Secure Checkout</h3>
              <p className="text-sm text-muted-foreground">Safe and secure payment options for worry-free shopping</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card shadow-elegant">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Gift className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-playfair font-semibold text-lg mb-2">Gift Wrapping</h3>
              <p className="text-sm text-muted-foreground">Complimentary elegant gift wrapping on all orders</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card shadow-elegant">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-playfair font-semibold text-lg mb-2">Customization</h3>
              <p className="text-sm text-muted-foreground">Personalize your gifts to make them truly special</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">What Our Customers Say</h2>
            <p className="body-md text-muted-foreground max-w-2xl mx-auto">
              Hear from our satisfied customers about their Arpan Decores experience
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />
    </div>
  )
}
