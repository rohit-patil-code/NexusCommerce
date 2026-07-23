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
              className="w-full max-w-md bg-slate-100 rounded-md border border-slate-200 px-4 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
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

            {loading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
              </div>
            ) : error ? (
              <div className="text-center bg-red-50 text-red-600 rounded-xl p-8 max-w-lg mx-auto border border-red-100 shadow-sm">
                <p className="font-medium text-lg">{error}</p>
                <p className="text-sm text-red-500 mt-2">Did you restart the API Gateway and Product Service?</p>
              </div>
            ) : products.length === 0 ? (
              <div className="text-center bg-slate-100 text-slate-500 rounded-xl p-8 max-w-lg mx-auto shadow-sm">
                No products found in the database.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, i) => (
                  <div key={product.id || i} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-video sm:aspect-square bg-slate-100 relative overflow-hidden flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={placeholderImages[i % placeholderImages.length]}
                        alt={product.name || 'Product Image'}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300"></div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-slate-500 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                        <span className="text-2xl font-bold text-slate-900">
                          ${Number(product.price).toFixed(2)}
                        </span>
                        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 transition-colors shadow-sm">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
