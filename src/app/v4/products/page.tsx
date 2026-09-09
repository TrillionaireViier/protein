import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Crown } from 'lucide-react';

export default function ProductsV4() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#d4af37] selection:text-black">
      <nav className="fixed w-full bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
          <Link href="/v4" className="flex items-center text-zinc-500 hover:text-[#d4af37] transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="text-sm uppercase tracking-[0.2em]">Назад</span>
          </Link>
          <div className="font-serif text-2xl tracking-[0.3em] uppercase">
            Hutchings<span className="text-[#d4af37]">Health</span>
          </div>
          <div className="w-24"></div>
        </div>
      </nav>

      <section className="pt-40 pb-20 px-8 max-w-6xl mx-auto">
        <div className="inline-flex items-center space-x-3 text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-8">
          <span>Каталог</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-serif font-light leading-[1.15] mb-16">
          Наши <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f9e596] to-[#d4af37]">Продукты</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Main Product */}
          <div className="bg-[#111] rounded-2xl border border-white/5 hover:border-[#d4af37]/30 transition-colors group p-8 flex flex-col items-center">
            <div className="w-full h-80 relative flex justify-center items-center mb-8">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#d4af37]/10 blur-[80px] rounded-full"></div>
              <div className="w-48 h-64 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-xl border border-white/10 shadow-2xl flex flex-col items-center p-6 relative z-10">
                <div className="w-full h-6 bg-gradient-to-r from-[#111] via-[#333] to-[#111] rounded-t-lg -mt-8 mb-6 border-b border-white/5"></div>
                <Crown className="w-6 h-6 text-[#d4af37] mb-4" />
                <div className="text-center w-full border-y border-white/10 py-4 mb-4">
                  <div className="font-serif text-xl font-light text-white tracking-[0.2em] uppercase mb-1">Hutchings</div>
                  <div className="text-[#d4af37] text-[10px] tracking-[0.4em] uppercase">Signature</div>
                </div>
                <div className="mt-auto w-full flex justify-between text-[8px] text-zinc-500 tracking-[0.2em] uppercase">
                  <span>2lbs</span>
                  <span>Изолят</span>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-serif tracking-wider mb-3 group-hover:text-[#d4af37] transition-colors">Premium Signature Isolate</h2>
            <p className="text-zinc-500 font-light text-center mb-8">Идеальная формула, созданная для максимального результата и быстрого усвоения.</p>
            
            <div className="w-full flex justify-between items-center mt-auto border-t border-white/5 pt-6">
              <span className="text-3xl font-serif text-[#d4af37]">$89</span>
              <button className="bg-gradient-to-r from-[#b38f22] to-[#d4af37] hover:from-[#d4af37] hover:to-[#f9e596] text-black px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-all">
                Приобрести
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
