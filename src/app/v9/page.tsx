import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Zap, Heart } from 'lucide-react';

export default function Version9() {
  return (
    <div className="min-h-screen bg-[#FFF0F5] text-black font-sans selection:bg-[#FF1493] selection:text-white overflow-hidden relative">
      
      {/* Playful background shapes */}
      <div className="absolute top-20 -left-10 w-64 h-64 bg-[#FF69B4] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-40 -right-10 w-72 h-72 bg-[#FFFF00] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-20 w-80 h-80 bg-[#00FFFF] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      {/* Navigation */}
      <nav className="relative z-50 w-full px-6 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between bg-white border-4 border-black rounded-[2rem] px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <Link href="/" className="flex items-center font-bold hover:text-[#FF1493] transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            HUB
          </Link>
          <div className="font-black text-2xl md:text-3xl tracking-tight uppercase transform -rotate-2">
            Hutchings<span className="text-[#FF1493]">Health</span> 💖
          </div>
          <button className="bg-[#FFFF00] border-4 border-black font-black uppercase px-6 py-2 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all">
            Get it
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white border-4 border-black px-6 py-2 rounded-full font-black uppercase text-sm mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-3">
              <Sparkles className="w-5 h-5 text-[#FF1493]" />
              <span>Totally unmatched flavor</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] mb-8 tracking-tight">
              Gainz <br/>
              <span className="text-[#FF1493] inline-block transform rotate-2">without</span> <br/>
              the pain.
            </h1>
            
            <p className="text-xl font-bold mb-10 max-w-md mx-auto lg:mx-0 border-4 border-black bg-white p-6 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              25g of the smoothest, yummiest whey isolate ever. No clumping. No weird aftertaste. Just pure vibe. ✨
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button className="bg-[#FF1493] text-white border-4 border-black font-black uppercase text-xl px-10 py-5 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:translate-y-2 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center">
                Grab yours <Zap className="ml-2 w-6 h-6 fill-current" />
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            {/* Playful product container */}
            <div className="relative w-80 h-[450px] mx-auto">
              {/* Background blob */}
              <div className="absolute inset-0 bg-[#00FFFF] border-4 border-black rounded-[3rem] transform rotate-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"></div>
              
              {/* Product */}
              <div className="absolute inset-0 bg-white border-4 border-black rounded-[3rem] transform -rotate-3 p-8 flex flex-col items-center justify-center shadow-[inset_0px_-20px_0px_0px_rgba(0,0,0,0.05)]">
                
                {/* Stickers */}
                <div className="absolute -top-6 -right-6 bg-[#FFFF00] border-4 border-black rounded-full w-20 h-20 flex items-center justify-center font-black text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-12 z-20">
                  NEW!
                </div>
                <div className="absolute top-1/3 -left-8 bg-[#FF69B4] border-4 border-black rounded-full p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-12 z-20 text-white">
                  <Heart className="w-8 h-8 fill-current" />
                </div>
                
                <div className="font-black text-4xl uppercase mb-2">Hutchings</div>
                <div className="font-black text-6xl text-[#FF1493] uppercase tracking-tighter mb-8 transform -rotate-6">PRO</div>
                
                <div className="w-full bg-gray-100 rounded-xl border-4 border-black p-4 text-center mt-auto">
                  <div className="font-black text-3xl">25G</div>
                  <div className="font-bold uppercase text-sm">PROTEIN</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Marquee */}
      <div className="w-full bg-black text-[#00FFFF] py-4 border-y-4 border-black overflow-hidden flex whitespace-nowrap z-10 relative">
        <div className="font-black uppercase text-2xl flex gap-8 animate-[marquee_5s_linear_infinite]">
          <span>TASTES LIKE ICE CREAM</span><span>★</span>
          <span>MIXES INSTANTLY</span><span>★</span>
          <span>ZERO REGRETS</span><span>★</span>
          <span>TASTES LIKE ICE CREAM</span><span>★</span>
          <span>MIXES INSTANTLY</span><span>★</span>
          <span>ZERO REGRETS</span><span>★</span>
        </div>
      </div>

    </div>
  );
}
