"use client";

import { useEffect, useState } from "react";
import { ShoppingCart, Loader2, MapPin, Globe, MessageCircle, Share2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProducts, Product } from "@/services/api";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load products. Please check if the backend services are running.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  // Helper array of high-quality Unsplash images to use as placeholders for our seeded products
  const placeholderImages = [
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop", // Laptop
    "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=2071&auto=format&fit=crop", // Keyboard
    "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2067&auto=format&fit=crop", // Mouse
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop"  // Fallback Watch
  ];


  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full flex flex-col">
        {/* Tier 1 - Top Bar */}
        <div className="w-full bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
            {/* Left: Logo and Location */}
            <div className="flex items-center gap-6 shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center">
                  <span className="text-white font-bold text-xl leading-none">N</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-black hidden sm:block">
                  NexusCommerce
                </span>
              </div>
              <div className="hidden md:flex items-center gap-1 hover:bg-gray-100 rounded-md p-2 cursor-pointer transition-colors">
                <MapPin className="w-5 h-5 text-gray-500" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 font-medium leading-none mb-0.5">Deliver to</span>
                  <span className="text-sm font-bold text-black leading-none">Bengaluru</span>
                </div>
              </div>
            </div>

            {/* Center: Massive Search Bar */}
            <div className="flex-1 max-w-2xl hidden md:flex items-center">
              <div className="relative w-full flex">
                <input 
                  type="text" 
                  placeholder="Search for products..." 
                  className="w-full bg-gray-100 border border-gray-300 rounded-l-md px-4 py-2.5 text-sm text-black placeholder:text-gray-500 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                />
                <button className="bg-black text-white px-5 rounded-r-md hover:bg-gray-800 transition-colors flex items-center justify-center border border-black">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Auth and Cart */}
            <div className="flex items-center gap-6 shrink-0">
              <Button variant="ghost" className="text-black hover:bg-gray-100 font-medium hidden sm:flex">
                Sign In
              </Button>
              <div className="flex items-center gap-2 cursor-pointer hover:text-gray-600 transition-colors group">
                <div className="relative">
                  <ShoppingCart className="w-6 h-6 text-black group-hover:text-gray-600 transition-colors" />
                  <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center group-hover:bg-gray-600 transition-colors">0</span>
                </div>
                <span className="hidden sm:block font-medium text-black group-hover:text-gray-600 transition-colors">Cart</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tier 2 - Category Bar */}
        <div className="w-full bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center gap-8 text-sm font-medium overflow-x-auto whitespace-nowrap scrollbar-hide">
            <a href="#" className="hover:text-gray-300 transition-colors">All Categories</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Laptops</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Mechanical Keyboards</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Monitors</a>
            <a href="#" className="hover:text-gray-300 transition-colors">New Arrivals</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Today&apos;s Deals</a>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full mt-6 md:mt-12 space-y-24 pb-24 px-4 md:px-8 lg:px-12">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
              Elevate Your Tech Workspace
            </h1>
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Discover curated, premium tools designed for developers, creators, and modern professionals. Enhance your productivity with unparalleled aesthetics.
            </p>
            <Button className="bg-black text-white hover:bg-gray-800 rounded-md px-8 py-6 text-lg font-medium transition-colors mt-4">
              Shop the Collection
            </Button>
          </div>
          <div className="relative aspect-square md:aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100 flex items-center justify-center p-4">
             <div className="w-full h-full rounded-2xl overflow-hidden relative bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={placeholderImages[0]} alt="Tech Workspace" className="object-cover w-full h-full" />
             </div>
          </div>
        </section>

        {/* Social Proof Banner */}
        <section className="flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-6">Trusted by innovative teams worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale">
            <span className="text-xl font-bold font-serif text-slate-800">Stripe</span>
            <span className="text-xl font-black tracking-tighter text-slate-800">AWS</span>
            <span className="text-xl font-bold text-slate-800 tracking-tight">Next.js</span>
            <span className="text-xl font-bold text-slate-800 italic">Vercel</span>
            <span className="text-xl font-bold text-slate-800 tracking-wide">GitHub</span>
          </div>
        </section>

        {/* Featured Products Grid */}
        <section className="pt-8">
          <div className="flex justify-between items-end mb-10">
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Curated Essentials</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product, i) => (
              <div key={product.id || i} className="group flex flex-col bg-gray-50 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="h-48 bg-gray-100 relative overflow-hidden shrink-0">
                  <div className="absolute top-3 left-3 bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider z-10">
                    {i === 0 ? "New Arrival" : "Bestseller"}
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={placeholderImages[(i + 1) % placeholderImages.length]}
                    alt={product.name || 'Product Image'}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-sm font-semibold text-black mb-1 line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm text-gray-600">
                      ${Number(product.price).toFixed(2)}
                    </span>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 py-2 mt-4 rounded-md text-sm font-medium transition-colors">
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
            {products.length === 0 && !loading && !error && (
              <div className="col-span-3 text-center py-12 text-slate-500">No products found.</div>
            )}
            {loading && (
              <div className="col-span-3 flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-indigo-600"/></div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-zinc-950 text-gray-300 py-16 mt-auto">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-white flex items-center justify-center">
                  <span className="text-black font-bold text-xl leading-none">N</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  NexusCommerce
                </span>
              </div>
              <p className="text-sm text-gray-400 max-w-xs">
                Equipping the next generation of builders and creators with premium, cutting-edge tools.
              </p>
              <div className="flex gap-4 mt-2">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer text-white">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer text-white">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer text-white">
                  <Share2 className="w-4 h-4" />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-2">Shop</h4>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Laptops</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Keyboards</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Accessories</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">New Arrivals</a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-2">Support</h4>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Help Center</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Returns</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Shipping Info</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-2">Stay Connected</h4>
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-zinc-900 border border-gray-800 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white w-full"
                  required
                />
                <Button type="submit" className="bg-white text-black hover:bg-gray-200 rounded-md px-4 py-3 text-sm font-bold w-full transition-colors">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-2">
                By subscribing, you agree to our Privacy Policy. We respect your data.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2026 NexusCommerce Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
