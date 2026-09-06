import React from 'react';
import Link from 'next/link';

export default function Version7() {
  return (
    <div className="min-h-screen bg-yellow-400 text-black font-mono selection:bg-black selection:text-yellow-400">
      
      {/* Brutalist Top Banner */}
      <div className="w-full bg-black text-white py-2 border-b-4 border-black overflow-hidden flex whitespace-nowrap">
        <div className="font-black uppercase tracking-tighter text-xl flex gap-8 animate-[marquee_5s_linear_infinite]">
          <span>100% PURE WHEY</span><span>///</span>
          <span>100% PURE WHEY</span><span>///</span>
          <span>100% PURE WHEY</span><span>///</span>
          <span>100% PURE WHEY</span><span>///</span>
          <span>100% PURE WHEY</span><span>///</span>
          <span>100% PURE WHEY</span><span>///</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full border-b-8 border-black bg-white">
        <div className="flex items-center justify-between">
          <Link href="/" className="px-8 py-6 font-black text-2xl uppercase border-r-8 border-black hover:bg-black hover:text-white transition-colors">
            ← BACK
          </Link>
          <div className="font-black text-5xl tracking-tighter uppercase px-8">
            HUTCHINGS_HEALTH
          </div>
          <button className="px-8 py-6 font-black text-2xl uppercase border-l-8 border-black hover:bg-black hover:text-white transition-colors">
            BUY NOW [ $49 ]
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b-8 border-black flex flex-col md:flex-row">
        
        <div className="flex-1 border-r-8 border-black p-12 bg-yellow-400 flex flex-col justify-center">
          <h1 className="text-8xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter mb-8 break-words mix-blend-multiply">
            RAW<br/>PROTEIN
          </h1>
          <p className="text-3xl font-bold uppercase max-w-xl border-l-8 border-black pl-6 mb-12">
            No BS. No fillers.<br/>
            Just 25g of pure isolate.
          </p>
          <button className="w-full bg-black text-white font-black text-4xl uppercase py-8 border-8 border-black hover:bg-yellow-400 hover:text-black transition-colors shadow-[16px_16px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-4 hover:translate-y-4">
            ADD TO CART
          </button>
        </div>
        
        <div className="flex-1 bg-white p-12 flex items-center justify-center relative overflow-hidden">
          {/* Brutalist Graphics */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-black rounded-full mix-blend-overlay"></div>
          <div className="absolute bottom-10 left-10 text-9xl font-black text-yellow-400 mix-blend-difference">WHEY</div>
          
          <div className="w-64 h-96 border-8 border-black bg-yellow-400 shadow-[24px_24px_0_0_rgba(0,0,0,1)] flex flex-col p-6 z-10 relative">
            <div className="border-b-8 border-black pb-4 mb-4">
              <div className="font-black text-4xl uppercase tracking-tighter">H-PRO</div>
              <div className="font-bold text-xl uppercase">Isolate Matrix</div>
            </div>
            
            <div className="flex-1 border-4 border-black bg-white mb-4 p-4 flex flex-col justify-center items-center text-center">
              <div className="font-black text-6xl">25G</div>
              <div className="font-bold text-xl uppercase">Protein</div>
            </div>
            
            <div className="mt-auto flex justify-between font-bold uppercase border-t-8 border-black pt-4">
              <span>VOL. 1</span>
              <span>2 LBS</span>
            </div>
          </div>
        </div>
        
      </section>

      {/* Grid Features */}
      <section className="grid md:grid-cols-3 border-b-8 border-black bg-white">
        {[
          { title: "LAB TESTED", desc: "WE TEST EVERY BATCH SO YOU DON'T DIE." },
          { title: "ZERO SUGAR", desc: "SWEETENED WITH STEVIA. TASTES LIKE DIRT, WORKS LIKE MAGIC." },
          { title: "FAST ABSORB", desc: "HITS YOUR MUSCLES BEFORE YOU LEAVE THE GYM." }
        ].map((feature, i) => (
          <div key={i} className={`p-12 ${i !== 2 ? 'border-r-8 border-black' : ''} hover:bg-black hover:text-white transition-colors group cursor-crosshair`}>
            <div className="text-8xl font-black mb-8 opacity-20 group-hover:opacity-100 group-hover:text-yellow-400 transition-colors">0{i+1}</div>
            <h3 className="text-4xl font-black uppercase mb-4">{feature.title}</h3>
            <p className="text-xl font-bold uppercase">{feature.desc}</p>
          </div>
        ))}
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
