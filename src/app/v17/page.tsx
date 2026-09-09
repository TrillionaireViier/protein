import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="min-h-[85vh] flex items-center justify-center text-center px-6">
        <div>
          <h2 className="text-cyan-400 text-2xl font-bold tracking-[0.5em] uppercase mb-4 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
            Maximum Overdrive
          </h2>
          <h1 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-fuchsia-300 via-fuchsia-600 to-purple-900 filter drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]">
            SYNTH<span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">ISOLATE</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 font-medium mb-12 max-w-2xl mx-auto drop-shadow-[0_0_5px_rgba(236,72,153,0.5)] leading-relaxed">
            POWER UP YOUR AVATAR WITH 100% PURE DIGITAL PROTEIN WAVES.
          </p>
          
          <Link href="/v17/products" className="inline-block bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold italic tracking-widest uppercase px-12 py-4 text-xl hover:bg-cyan-400 hover:text-[#0b0c10] transition-all shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,1)]">
            INSERT COIN TO START
          </Link>
        </div>
      </section>
      
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-[#1f1035]/80 border border-fuchsia-500 p-8 rounded-lg shadow-[0_0_15px_rgba(236,72,153,0.3)] backdrop-blur-sm text-center">
            <h3 className="text-2xl font-black italic text-cyan-400 mb-4 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">LASER PURITY</h3>
            <p className="text-fuchsia-200">Filtered through neon grids for zero bloat.</p>
          </div>
          <div className="bg-[#1f1035]/80 border border-fuchsia-500 p-8 rounded-lg shadow-[0_0_15px_rgba(236,72,153,0.3)] backdrop-blur-sm text-center">
            <h3 className="text-2xl font-black italic text-cyan-400 mb-4 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">TURBO SPEED</h3>
            <p className="text-fuchsia-200">Rapid absorption for immediate stat boosts.</p>
          </div>
          <div className="bg-[#1f1035]/80 border border-fuchsia-500 p-8 rounded-lg shadow-[0_0_15px_rgba(236,72,153,0.3)] backdrop-blur-sm text-center">
            <h3 className="text-2xl font-black italic text-cyan-400 mb-4 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">RADICAL TASTE</h3>
            <p className="text-fuchsia-200">Flavors straight from a Miami sunset.</p>
          </div>
        </div>
      </section>
    </>
  );
}
