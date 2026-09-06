import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Leaf, Droplets, Sun, Sprout } from 'lucide-react';

export default function Version3() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A5D23] font-serif selection:bg-[#E8F0D6]">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#FDFBF7]/80 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between border-b border-[#E8F0D6]">
          <Link href="/" className="flex items-center text-[#8C9870] hover:text-[#4A5D23] transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-sans text-sm tracking-widest uppercase">Return</span>
          </Link>
          <div className="font-bold text-2xl tracking-wide">
            Hutchings<span className="text-[#8C9870] font-light">Health</span>
          </div>
          <button className="font-sans bg-[#4A5D23] hover:bg-[#3A491C] text-[#FDFBF7] px-6 py-2 rounded-sm tracking-widest uppercase text-sm transition-colors">
            Shop Nature
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 min-h-[70vh]">
          
          <div className="flex-1 order-2 md:order-1 relative">
            <div className="absolute -inset-4 bg-[#E8F0D6] rounded-full blur-3xl opacity-50"></div>
            <div className="relative w-64 h-80 mx-auto bg-[#F5F2E9] rounded-t-full shadow-md flex flex-col items-center justify-end pb-8 border border-[#E8F0D6]">
              {/* Product Mockup */}
              <div className="absolute top-8 text-center w-full">
                <Leaf className="w-8 h-8 mx-auto text-[#8C9870] mb-2" />
                <div className="text-xs font-sans tracking-[0.2em] uppercase text-[#8C9870]">Organic</div>
              </div>
              <div className="text-3xl mb-1 text-[#4A5D23]">Plant Based</div>
              <div className="text-sm font-sans tracking-widest uppercase text-[#8C9870]">Protein Blend</div>
            </div>
          </div>

          <div className="flex-1 order-1 md:order-2 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-[#8C9870] font-sans text-sm tracking-widest uppercase mb-6">
              <Sprout className="w-4 h-4" />
              <span>100% Earth Grown</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              Nourish your body.<br/>
              <span className="italic text-[#8C9870]">Naturally.</span>
            </h1>
            <p className="font-sans text-lg text-[#6B7552] mb-10 leading-relaxed max-w-md mx-auto md:mx-0">
              A harmonious blend of pea, hemp, and brown rice protein. 25g of clean, vegan nourishment to support your holistic wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start font-sans">
              <button className="bg-[#4A5D23] hover:bg-[#3A491C] text-[#FDFBF7] px-8 py-4 rounded-sm tracking-widest uppercase text-sm transition-colors">
                Discover The Blend
              </button>
            </div>
          </div>
          
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#F5F2E9] px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Pure Ingredients</h2>
            <p className="font-sans text-[#6B7552] max-w-xl mx-auto">Sourced ethically from organic farms. No artificial anything, just what the earth intended.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 font-sans">
            {[
              { icon: Leaf, title: "Vegan Certified", desc: "Completely free from animal products. Kind to you, kind to the planet." },
              { icon: Droplets, title: "Smooth Texture", desc: "Milled to perfection for a grit-free, silky smooth experience in any beverage." },
              { icon: Sun, title: "Nutrient Dense", desc: "Packed with naturally occurring antioxidants, vitamins, and minerals." }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#E8F0D6] flex items-center justify-center text-[#4A5D23] mb-6">
                  <feature.icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-serif text-[#4A5D23] mb-3">{feature.title}</h3>
                <p className="text-[#6B7552] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
