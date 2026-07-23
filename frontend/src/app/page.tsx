import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl leading-none">N</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              NexusCommerce
            </span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-indigo-600 transition-colors">Home</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Shop</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Categories</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">About</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-slate-600 hover:text-indigo-600 hover:bg-indigo-50">
              <ShoppingCart className="w-5 h-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-900 text-white py-24 sm:py-32">
          {/* Background image overlay */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
          
          <div className="container relative z-10 mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="max-w-2xl text-left">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                Elevate Your <span className="text-indigo-400">Lifestyle</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
                Discover our curated collection of premium products. Experience unmatched quality and sophisticated design for the modern connoisseur.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white border-0 shadow-lg shadow-indigo-900/50 rounded-full px-8 py-6 text-lg font-medium transition-all hover:-translate-y-1">
                  Shop Now
                </Button>
                <Button size="lg" variant="outline" className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white rounded-full px-8 py-6 text-lg font-medium transition-all">
                  Explore Collections
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Products</h2>
              <div className="w-16 h-1 bg-indigo-600 rounded-full"></div>
              <p className="mt-4 text-slate-500 max-w-2xl">
                Handpicked selections representing the pinnacle of craftsmanship and modern aesthetics.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Minimalist Watch", price: "$249.00", category: "Accessories", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop" },
                { name: "Premium Leather Bag", price: "$189.00", category: "Bags", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop" },
                { name: "Wireless Headphones", price: "$329.00", category: "Electronics", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop" },
                { name: "Smart Sunglasses", price: "$159.00", category: "Eyewear", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2080&auto=format&fit=crop" }
              ].map((product, i) => (
                <div key={i} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="aspect-square bg-slate-100 relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={product.img} 
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <Button size="icon" variant="secondary" className="w-8 h-8 rounded-full bg-white/90 text-slate-900 shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <ShoppingCart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-medium text-indigo-600 mb-1 tracking-wider uppercase">{product.category}</p>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{product.name}</h3>
                    <p className="text-slate-600 font-medium">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs leading-none">N</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              NexusCommerce
            </span>
          </div>
          <p className="text-sm">
            © 2026 NexusCommerce Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
