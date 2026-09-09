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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product 1 */}
          <div className="bg-[#111] rounded-2xl border border-white/5 hover:border-[#d4af37]/30 transition-colors group p-8 flex flex-col items-center">
            <div className="w-full h-80 relative flex justify-center items-center mb-8">
<img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" alt="Product" className="max-h-full object-contain relative z-10 hover:scale-110 transition-transform duration-700 mix-blend-screen" />
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
          {/* Product 2 */}
          <div className="bg-[#111] rounded-2xl border border-white/5 hover:border-[#d4af37]/30 transition-colors group p-8 flex flex-col items-center">
            <div className="w-full h-80 relative flex justify-center items-center mb-8">
<img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" alt="Product" className="max-h-full object-contain relative z-10 hover:scale-110 transition-transform duration-700 mix-blend-screen" />
            </div>
            
            <h2 className="text-2xl font-serif tracking-wider mb-3 group-hover:text-[#d4af37] transition-colors">Premium Gold Mass</h2>
            <p className="text-zinc-500 font-light text-center mb-8">Идеальная формула, созданная для максимального результата и быстрого усвоения.</p>
            
            <div className="w-full flex justify-between items-center mt-auto border-t border-white/5 pt-6">
              <span className="text-3xl font-serif text-[#d4af37]">$99</span>
              <button className="bg-gradient-to-r from-[#b38f22] to-[#d4af37] hover:from-[#d4af37] hover:to-[#f9e596] text-black px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-all">
                Приобрести
              </button>
            </div>
          </div>
          {/* Product 3 */}
          <div className="bg-[#111] rounded-2xl border border-white/5 hover:border-[#d4af37]/30 transition-colors group p-8 flex flex-col items-center">
            <div className="w-full h-80 relative flex justify-center items-center mb-8">
<img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" alt="Product" className="max-h-full object-contain relative z-10 hover:scale-110 transition-transform duration-700 mix-blend-screen" />
            </div>
            
            <h2 className="text-2xl font-serif tracking-wider mb-3 group-hover:text-[#d4af37] transition-colors">Premium Platinum Energy</h2>
            <p className="text-zinc-500 font-light text-center mb-8">Идеальная формула, созданная для максимального результата и быстрого усвоения.</p>
            
            <div className="w-full flex justify-between items-center mt-auto border-t border-white/5 pt-6">
              <span className="text-3xl font-serif text-[#d4af37]">$69</span>
              <button className="bg-gradient-to-r from-[#b38f22] to-[#d4af37] hover:from-[#d4af37] hover:to-[#f9e596] text-black px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-all">
                Приобрести
              </button>
            </div>
          </div>
          {/* Product 4 */}
          <div className="bg-[#111] rounded-2xl border border-white/5 hover:border-[#d4af37]/30 transition-colors group p-8 flex flex-col items-center">
            <div className="w-full h-80 relative flex justify-center items-center mb-8">
<img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" alt="Product" className="max-h-full object-contain relative z-10 hover:scale-110 transition-transform duration-700 mix-blend-screen" />
            </div>
            
            <h2 className="text-2xl font-serif tracking-wider mb-3 group-hover:text-[#d4af37] transition-colors">Premium Diamond BCAA</h2>
            <p className="text-zinc-500 font-light text-center mb-8">Идеальная формула, созданная для максимального результата и быстрого усвоения.</p>
            
            <div className="w-full flex justify-between items-center mt-auto border-t border-white/5 pt-6">
              <span className="text-3xl font-serif text-[#d4af37]">$59</span>
              <button className="bg-gradient-to-r from-[#b38f22] to-[#d4af37] hover:from-[#d4af37] hover:to-[#f9e596] text-black px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-all">
                Приобрести
              </button>
            </div>
          </div>
          {/* Product 5 */}
          <div className="bg-[#111] rounded-2xl border border-white/5 hover:border-[#d4af37]/30 transition-colors group p-8 flex flex-col items-center">
            <div className="w-full h-80 relative flex justify-center items-center mb-8">
<img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" alt="Product" className="max-h-full object-contain relative z-10 hover:scale-110 transition-transform duration-700 mix-blend-screen" />
            </div>
            
            <h2 className="text-2xl font-serif tracking-wider mb-3 group-hover:text-[#d4af37] transition-colors">Premium Elite Creatine</h2>
            <p className="text-zinc-500 font-light text-center mb-8">Идеальная формула, созданная для максимального результата и быстрого усвоения.</p>
            
            <div className="w-full flex justify-between items-center mt-auto border-t border-white/5 pt-6">
              <span className="text-3xl font-serif text-[#d4af37]">$49</span>
              <button className="bg-gradient-to-r from-[#b38f22] to-[#d4af37] hover:from-[#d4af37] hover:to-[#f9e596] text-black px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-all">
                Приобрести
              </button>
            </div>
          </div>
          {/* Product 6 */}
          <div className="bg-[#111] rounded-2xl border border-white/5 hover:border-[#d4af37]/30 transition-colors group p-8 flex flex-col items-center">
            <div className="w-full h-80 relative flex justify-center items-center mb-8">
<img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" alt="Product" className="max-h-full object-contain relative z-10 hover:scale-110 transition-transform duration-700 mix-blend-screen" />
            </div>
            
            <h2 className="text-2xl font-serif tracking-wider mb-3 group-hover:text-[#d4af37] transition-colors">Premium Pro Vitamins</h2>
            <p className="text-zinc-500 font-light text-center mb-8">Идеальная формула, созданная для максимального результата и быстрого усвоения.</p>
            
            <div className="w-full flex justify-between items-center mt-auto border-t border-white/5 pt-6">
              <span className="text-3xl font-serif text-[#d4af37]">$39</span>
              <button className="bg-gradient-to-r from-[#b38f22] to-[#d4af37] hover:from-[#d4af37] hover:to-[#f9e596] text-black px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-all">
                Приобрести
              </button>
            </div>
          </div>
          {/* Product 7 */}
          <div className="bg-[#111] rounded-2xl border border-white/5 hover:border-[#d4af37]/30 transition-colors group p-8 flex flex-col items-center">
            <div className="w-full h-80 relative flex justify-center items-center mb-8">
<img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" alt="Product" className="max-h-full object-contain relative z-10 hover:scale-110 transition-transform duration-700 mix-blend-screen" />
            </div>
            
            <h2 className="text-2xl font-serif tracking-wider mb-3 group-hover:text-[#d4af37] transition-colors">Premium Ultra Omega</h2>
            <p className="text-zinc-500 font-light text-center mb-8">Идеальная формула, созданная для максимального результата и быстрого усвоения.</p>
            
            <div className="w-full flex justify-between items-center mt-auto border-t border-white/5 pt-6">
              <span className="text-3xl font-serif text-[#d4af37]">$45</span>
              <button className="bg-gradient-to-r from-[#b38f22] to-[#d4af37] hover:from-[#d4af37] hover:to-[#f9e596] text-black px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-all">
                Приобрести
              </button>
            </div>
          </div>
          {/* Product 8 */}
          <div className="bg-[#111] rounded-2xl border border-white/5 hover:border-[#d4af37]/30 transition-colors group p-8 flex flex-col items-center">
            <div className="w-full h-80 relative flex justify-center items-center mb-8">
<img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" alt="Product" className="max-h-full object-contain relative z-10 hover:scale-110 transition-transform duration-700 mix-blend-screen" />
            </div>
            
            <h2 className="text-2xl font-serif tracking-wider mb-3 group-hover:text-[#d4af37] transition-colors">Premium Master Test</h2>
            <p className="text-zinc-500 font-light text-center mb-8">Идеальная формула, созданная для максимального результата и быстрого усвоения.</p>
            
            <div className="w-full flex justify-between items-center mt-auto border-t border-white/5 pt-6">
              <span className="text-3xl font-serif text-[#d4af37]">$79</span>
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
