import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Flame, Dumbbell, Zap, ChevronRight } from 'lucide-react';

export default function Version2() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 border-b border-red-900/30 z-50">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center text-zinc-400 hover:text-red-500 transition-colors uppercase tracking-widest text-sm font-bold">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Link>
          <div className="font-black text-3xl tracking-tighter uppercase italic text-white">
            HUTCHINGS<span className="text-red-600">HEALTH</span>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-black uppercase tracking-wider skew-x-[-10deg] transition-all hover:scale-105">
            <div className="skew-x-[10deg]">Shop Now</div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Aggressive Background Elements */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-red-900/20 to-transparent skew-x-12 translate-x-1/4"></div>
        <div className="absolute -left-40 top-1/2 w-96 h-96 bg-red-600/10 blur-[100px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 min-h-[70vh]">
          <div>
            <div className="inline-flex items-center space-x-2 bg-zinc-900 text-red-500 px-4 py-2 text-sm font-black uppercase tracking-widest mb-8 border-l-4 border-red-600">
              <Flame className="w-4 h-4" />
              <span>Fuel Your Fire</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-6">
              DOMINATE<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                EVERY SET.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-10 leading-relaxed font-medium max-w-lg uppercase">
              25G of fast-absorbing protein. Zero filler. For those who don't know the meaning of quit.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 font-black text-xl uppercase tracking-widest skew-x-[-10deg] transition-all hover:scale-105 shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                <div className="skew-x-[10deg] flex items-center justify-center">
                  Buy The Fuel <ChevronRight className="ml-2 w-6 h-6" />
                </div>
              </button>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center">
            {/* Texture/Grime Overlay mock */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
            
            <div className="relative w-64 h-96 bg-zinc-900 border-4 border-zinc-800 shadow-2xl flex flex-col items-center justify-center transform rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="text-red-600 font-black text-6xl tracking-tighter uppercase transform -rotate-90 absolute -left-12 opacity-20">PROTEIN</div>
              
              <div className="text-zinc-600 font-black text-2xl uppercase tracking-widest">Hutchings</div>
              <div className="text-white font-black text-6xl uppercase tracking-tighter mt-2 mb-8">WHEY</div>
              <div className="bg-red-600 text-white px-4 py-1 font-black uppercase skew-x-[-10deg]">
                <div className="skew-x-[10deg]">Hardcore</div>
              </div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute right-0 top-1/4 bg-zinc-900 p-4 border border-zinc-800 transform rotate-12">
              <div className="text-red-500 font-black text-3xl">25G</div>
              <div className="text-zinc-400 text-xs font-bold uppercase tracking-wider">Protein</div>
            </div>
            <div className="absolute left-10 bottom-1/4 bg-zinc-900 p-4 border border-zinc-800 transform -rotate-12">
              <div className="text-red-500 font-black text-3xl">5.5G</div>
              <div className="text-zinc-400 text-xs font-bold uppercase tracking-wider">BCAA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Divider */}
      <div className="bg-red-600 text-black py-4 overflow-hidden flex whitespace-nowrap">
        <div className="font-black uppercase tracking-widest text-2xl flex gap-8 animate-[marquee_10s_linear_infinite]">
          <span>NO EXCUSES</span><span>•</span>
          <span>MAXIMUM GAINS</span><span>•</span>
          <span>PURE POWER</span><span>•</span>
          <span>NO EXCUSES</span><span>•</span>
          <span>MAXIMUM GAINS</span><span>•</span>
          <span>PURE POWER</span><span>•</span>
        </div>
      </div>

      {/* Features */}
      <section className="py-24 bg-zinc-950 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Dumbbell, title: "Muscle Repair", desc: "Instantly floods your muscles with critical aminos post-workout." },
              { icon: Zap, title: "Rapid Absorption", desc: "Hydrolyzed formula digests instantly. No bloating. Just results." },
              { icon: Flame, title: "Zero Sugar", desc: "Don't ruin your cut. 100% clean macros to keep you shredded." }
            ].map((feature, i) => (
              <div key={i} className="bg-zinc-900 p-8 border-t-4 border-red-600 hover:bg-zinc-800 transition-colors">
                <feature.icon className="w-12 h-12 text-red-500 mb-6" />
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{feature.title}</h3>
                <p className="text-zinc-400 font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
