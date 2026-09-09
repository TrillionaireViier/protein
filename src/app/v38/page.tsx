import Link from 'next/link';
export default function Home() {
  return (
    <>
      <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-[#0066ff] text-sm font-bold tracking-[0.5em] uppercase mb-8">Evolve Under Pressure</h2>
        <h1 className="text-6xl md:text-8xl font-light tracking-wide text-white mb-8 drop-shadow-[0_0_20px_rgba(0,102,255,0.5)]">
          The <span className="font-bold text-[#00ffcc]">Abyss</span> Awaits.
        </h1>
        <p className="text-xl text-[#88ccff] max-w-2xl font-light leading-relaxed mb-16">
          Protein isolates synthesized under extreme atmospheric pressure. Unrivaled density. Unmatched recovery.
        </p>
        
        <div className="relative mb-20 group">
          <div className="absolute inset-0 bg-[#00ffcc] rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
          <div className="w-72 h-72 rounded-full border border-[#003366] p-2 bg-[#000a14] relative z-10 overflow-hidden flex justify-center items-center">
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full h-full object-cover filter contrast-125 saturate-50 hue-rotate-[180deg] mix-blend-screen opacity-70 group-hover:scale-110 transition-transform duration-1000" alt="Ocean Protein" />
          </div>
        </div>
        
        <Link href="/v38/products" className="inline-block bg-transparent text-[#00ffcc] border border-[#00ffcc] text-sm font-bold uppercase tracking-[0.2em] px-12 py-5 rounded-full hover:bg-[#00ffcc] hover:text-[#000a14] hover:shadow-[0_0_30px_#00ffcc] transition-all duration-500">
          Dive Deeper
        </Link>
      </section>
    </>
  );
}