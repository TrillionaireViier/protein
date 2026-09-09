import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="relative min-h-[85vh] flex items-center px-6 overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-black rounded-full z-0"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-2xl z-10 flex justify-end">
          <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-[500px] filter grayscale mix-blend-hard-light" alt="Protein" />
          
          <div className="absolute top-20 right-20 bg-[#ccff00] text-black font-black uppercase text-2xl p-4 rotate-12 shadow-2xl">
            SOLD OUT
          </div>
          <div className="absolute bottom-20 left-20 bg-white text-black font-black uppercase text-xl p-2 -rotate-6 border-4 border-black">
            "100% PURE"
          </div>
        </div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4 bg-black text-white inline-block px-2">FALL/WINTER '26</h2>
            <h1 className="text-8xl md:text-[150px] font-black uppercase tracking-tighter leading-[0.8] mb-8 mix-blend-difference text-white">
              ISOLATE
            </h1>
            <p className="text-2xl font-bold max-w-md uppercase mb-12 mix-blend-difference text-white">
              THE ULTIMATE MUSCLE SYNTHESIS GARMENT FOR YOUR INSIDES.
            </p>
            <Link href="/v20/products" className="inline-block bg-[#ccff00] text-black font-black uppercase tracking-widest text-2xl px-12 py-6 hover:bg-black hover:text-[#ccff00] transition-colors border-4 border-transparent hover:border-[#ccff00]">
              SHOP COLLECTION &rarr;
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[100px] md:text-[180px] font-black uppercase tracking-tighter text-black/5 leading-[0.8] mb-[-60px] md:mb-[-100px]">FEATURES</h2>
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            <div className="border-t-4 border-black pt-6">
              <h3 className="text-3xl font-black uppercase mb-4">"SPEED"</h3>
              <p className="font-bold text-gray-500 uppercase">Hydrolyzed. Fast absorbing. No delays.</p>
            </div>
            <div className="border-t-4 border-black pt-6">
              <h3 className="text-3xl font-black uppercase mb-4">"CLARITY"</h3>
              <p className="font-bold text-gray-500 uppercase">Zero proprietary blends. We show you everything.</p>
            </div>
            <div className="border-t-4 border-black pt-6 bg-[#ccff00] p-6 -mt-6">
              <h3 className="text-3xl font-black uppercase mb-4">"POWER"</h3>
              <p className="font-bold text-black uppercase">Maximum muscle protein synthesis unlocked.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
