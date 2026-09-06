import React from 'react';
import Link from 'next/link';

export default function Version8() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased selection:bg-blue-200">
      
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-xl border-b border-zinc-100 z-50">
        <div className="max-w-[980px] mx-auto px-4 h-12 flex items-center justify-between text-[13px] font-medium text-zinc-500">
          <Link href="/" className="hover:text-black transition-colors">
            Hub
          </Link>
          <div className="text-black font-semibold tracking-tight">
            HutchingsHealth
          </div>
          <button className="text-blue-600 hover:text-blue-700 transition-colors">
            Buy
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-[980px] mx-auto">
          <h1 className="text-[56px] md:text-[80px] font-semibold tracking-[-0.03em] leading-[1.05] text-black mb-6">
            Pro Isolate.
          </h1>
          <h2 className="text-[28px] md:text-[40px] font-medium tracking-tight text-zinc-500 leading-tight mb-10 max-w-2xl mx-auto">
            Pure protein.<br/>
            Uncompromising performance.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium text-[17px] transition-all">
              Buy from $49
            </button>
            <button className="text-blue-600 hover:underline px-8 py-3 rounded-full font-medium text-[17px] transition-all flex items-center">
              Learn more &gt;
            </button>
          </div>
          
          {/* Extremely minimalist product shot */}
          <div className="relative w-full max-w-3xl mx-auto h-[500px] flex justify-center">
            {/* The "Product" */}
            <div className="w-[340px] h-[480px] bg-[#fbfbfd] rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-zinc-100 flex flex-col items-center justify-center relative overflow-hidden transition-transform duration-700 hover:scale-[1.02]">
              {/* Subtle lighting gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-100/50 to-transparent"></div>
              
              <div className="z-10 text-center">
                <div className="text-[10px] font-semibold tracking-widest text-zinc-400 mb-8">HUTCHINGS HEALTH</div>
                <div className="text-4xl font-semibold tracking-tight mb-2">PRO Isolate</div>
                <div className="text-lg text-zinc-500">25g Protein</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of features */}
      <section className="py-24 bg-[#fbfbfd] border-t border-zinc-100">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[40px] md:text-[56px] font-semibold tracking-tight text-black mb-4">
              Advanced formulation.<br/>Simply effective.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="bg-white rounded-[32px] p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-zinc-100">
              <h3 className="text-2xl font-semibold mb-4 text-black">Micro-filtered purity.</h3>
              <p className="text-[17px] text-zinc-500 leading-relaxed">
                Our proprietary cold-filtration process removes fat and lactose while preserving vital muscle-building amino acids.
              </p>
            </div>
            
            <div className="bg-white rounded-[32px] p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-zinc-100">
              <h3 className="text-2xl font-semibold mb-4 text-black">Zero sugar.</h3>
              <p className="text-[17px] text-zinc-500 leading-relaxed">
                Sweetened naturally to provide an incredible taste experience without compromising your macro goals.
              </p>
            </div>

            <div className="bg-white rounded-[32px] p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-zinc-100 md:col-span-2 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
              <div className="flex-1">
                <h3 className="text-3xl font-semibold mb-4 text-black">Rapid absorption.</h3>
                <p className="text-[17px] text-zinc-500 leading-relaxed max-w-lg">
                  Designed to flood your muscles with critical nutrients exactly when they need it most—immediately post-workout.
                </p>
              </div>
              <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-blue-100 to-blue-50 flex flex-col items-center justify-center shrink-0">
                <div className="text-4xl font-semibold text-blue-600">25g</div>
                <div className="text-[13px] font-medium text-blue-400 uppercase tracking-widest mt-1">Protein</div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
    </div>
  );
}
