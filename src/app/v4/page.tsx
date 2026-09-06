import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Crown, Star, Sparkles } from 'lucide-react';

export default function Version4() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#d4af37] selection:text-black">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center text-zinc-500 hover:text-[#d4af37] transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="text-sm uppercase tracking-[0.2em]">Return</span>
          </Link>
          <div className="font-serif text-2xl tracking-[0.3em] uppercase">
            Hutchings<span className="text-[#d4af37]">Health</span>
          </div>
          <button className="text-[#d4af37] hover:text-white border border-[#d4af37] hover:border-white px-8 py-3 text-sm uppercase tracking-[0.2em] transition-all">
            Purchase
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center min-h-[75vh]">
          
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center space-x-3 text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-8">
              <Crown className="w-4 h-4" />
              <span>Premium Collection</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.15] mb-8">
              The Gold Standard of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f9e596] to-[#d4af37]">Performance.</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-12">
              An exquisitely crafted protein blend for those who demand uncompromising excellence. 25g of pure isolate.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-gradient-to-r from-[#b38f22] to-[#d4af37] hover:from-[#d4af37] hover:to-[#f9e596] text-black px-10 py-4 text-sm uppercase tracking-[0.2em] font-medium transition-all shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                Acquire Now
              </button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative flex justify-center items-center h-full">
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 blur-[120px] rounded-full"></div>
            
            {/* Premium Tub */}
            <div className="relative w-64 h-[400px] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-xl border border-white/10 shadow-2xl flex flex-col items-center p-8">
              <div className="w-full h-8 bg-gradient-to-r from-[#111] via-[#333] to-[#111] rounded-t-lg -mt-10 mb-8 border-b border-white/5"></div>
              <Crown className="w-8 h-8 text-[#d4af37] mb-6" />
              <div className="text-center w-full border-y border-white/10 py-6 mb-6">
                <div className="font-serif text-3xl font-light text-white tracking-[0.2em] uppercase mb-2">Hutchings</div>
                <div className="text-[#d4af37] text-xs tracking-[0.4em] uppercase">Signature</div>
              </div>
              <div className="mt-auto w-full flex justify-between text-[10px] text-zinc-500 tracking-[0.2em] uppercase">
                <span>Net Wt. 2lbs</span>
                <span>Vanilla</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#111] px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { icon: Star, title: "Unrivaled Purity", desc: "Sourced from the finest ingredients globally, ensuring a pristine macronutrient profile." },
              { icon: Sparkles, title: "Silk Texture", desc: "A proprietary milling process creates an exceptionally smooth, luxurious mouthfeel." },
              { icon: Crown, title: "Elite Formulation", desc: "Engineered specifically for high-performers unwilling to settle for the ordinary." }
            ].map((feature, i) => (
              <div key={i} className="group">
                <feature.icon className="w-8 h-8 text-[#d4af37] mb-6 transition-transform group-hover:scale-110" />
                <h3 className="text-xl font-serif text-white tracking-wider mb-4">{feature.title}</h3>
                <p className="text-zinc-500 font-light leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
