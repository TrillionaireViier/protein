import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="min-h-[85vh] flex items-center px-6 py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="order-2 md:order-1">
            <h2 className="text-[#20b2aa] font-black uppercase tracking-[0.2em] mb-4">Summer Collection</h2>
            <h1 className="text-6xl md:text-8xl font-black text-[#2c4c3b] tracking-tighter leading-[0.9] mb-8 uppercase">
              Refresh <br/> <span className="text-[#ff7f50]">Your Gains.</span>
            </h1>
            <p className="text-xl text-[#2c4c3b]/70 font-medium mb-10 max-w-lg leading-relaxed">
              Ditch the heavy, chalky shakes. Our ultra-filtered isolate is light, refreshing, and tastes like a tropical vacation.
            </p>
            <div className="flex gap-4">
              <Link href="/v23/products" className="bg-[#ff7f50] text-white font-black uppercase tracking-widest px-8 py-4 rounded-full shadow-[0_10px_30px_rgba(255,127,80,0.3)] hover:shadow-[0_15px_40px_rgba(255,127,80,0.5)] hover:-translate-y-1 transition-all">
                Shop The Bar
              </Link>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center relative">
            <div className="absolute inset-0 bg-[#20b2aa]/20 rounded-full blur-3xl transform scale-150"></div>
            <div className="relative bg-white/50 backdrop-blur-sm p-8 rounded-[3rem] border-4 border-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full max-w-sm filter saturate-150 brightness-110" alt="Tropical Protein" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6 bg-white/50 backdrop-blur-md relative z-10 border-y-2 border-[#ff7f50]/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border-2 border-[#fffae6] hover:-translate-y-2 transition-transform text-center">
            <div className="w-16 h-16 bg-[#ffda75] rounded-full mx-auto mb-6 flex items-center justify-center text-3xl">☀️</div>
            <h3 className="text-2xl font-black text-[#2c4c3b] mb-4 uppercase">Light & Clear</h3>
            <p className="text-[#2c4c3b]/70 font-medium">Mixes perfectly clear like juice. Say goodbye to thick, milky textures.</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border-2 border-[#fffae6] hover:-translate-y-2 transition-transform text-center">
            <div className="w-16 h-16 bg-[#20b2aa] rounded-full mx-auto mb-6 flex items-center justify-center text-3xl">🌊</div>
            <h3 className="text-2xl font-black text-[#2c4c3b] mb-4 uppercase">Ocean Pure</h3>
            <p className="text-[#2c4c3b]/70 font-medium">Triple-filtered for maximum bioavailability and zero stomach discomfort.</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border-2 border-[#fffae6] hover:-translate-y-2 transition-transform text-center">
            <div className="w-16 h-16 bg-[#ff7f50] rounded-full mx-auto mb-6 flex items-center justify-center text-3xl">🍹</div>
            <h3 className="text-2xl font-black text-[#2c4c3b] mb-4 uppercase">Island Flavors</h3>
            <p className="text-[#2c4c3b]/70 font-medium">Naturally flavored with real fruit extracts for a refreshing post-workout treat.</p>
          </div>
        </div>
      </section>
    </>
  );
}
