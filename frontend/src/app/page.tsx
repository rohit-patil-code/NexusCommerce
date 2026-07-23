"use client";

import { useEffect, useState } from "react";
import { ShoppingCart, Loader2, MapPin } from "lucide-react";
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
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo, Name, and Location */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl leading-none">N</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 hidden sm:block">
                NexusCommerce
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-1 hover:bg-slate-100 rounded-md p-2 cursor-pointer transition-colors">
              <MapPin className="w-5 h-5 text-slate-500" />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 font-medium leading-none mb-0.5">Deliver to</span>
                <span className="text-sm font-bold text-slate-900 leading-none">Bengaluru</span>
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="flex-1 flex justify-center px-4 md:px-8">
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="w-full max-w-md bg-white rounded-md border-2 border-slate-300 px-4 py-2 text-sm text-slate-900 placeholder:text-slate-500 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            />
          </div>

          {/* Auth and Cart */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <Button variant="ghost" className="text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 font-medium">
                Sign In
              </Button>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-sm transition-colors">
                Sign Up
              </Button>
            </div>
            
            <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>
            
            <Button variant="ghost" size="icon" className="text-slate-600 hover:text-indigo-600 hover:bg-indigo-50">
              <ShoppingCart className="w-5 h-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full mt-12 md:mt-24 space-y-24 pb-24">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Elevate Your <span className="text-indigo-600">Tech Workspace</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
              Discover curated, premium tools designed for developers, creators, and modern professionals. Enhance your productivity with unparalleled aesthetics.
            </p>
            <Button className="bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.5)] hover:shadow-[0_0_25px_rgba(79,70,229,0.7)] hover:-translate-y-1 transition-all duration-300 px-8 py-6 rounded-full text-lg font-medium mt-4">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product, i) => (
              <div key={product.id || i} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 p-4">
                <div className="aspect-square bg-slate-50 relative overflow-hidden rounded-2xl mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={placeholderImages[(i + 1) % placeholderImages.length]}
                    alt={product.name || 'Product Image'}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg rounded-full px-6 transition-all duration-300">
                       <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
                    </Button>
                  </div>
                </div>
                <div className="px-2 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-slate-900">
                      ${Number(product.price).toFixed(2)}
                    </span>
                  </div>
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
      <footer className="w-full bg-slate-50 py-12 border-t border-slate-200 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-4 w-full md:w-auto max-w-sm">
            <h4 className="font-semibold text-slate-900">Join our newsletter</h4>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-white border border-slate-200 rounded-md px-4 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <Button type="submit" className="bg-slate-900 hover:bg-slate-800 text-white rounded-md px-4 py-2 text-sm font-medium">
                Subscribe
              </Button>
            </form>
          </div>
          <div className="text-sm text-slate-500 text-center md:text-right">
            © 2026 NexusCommerce Inc.<br/>All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
