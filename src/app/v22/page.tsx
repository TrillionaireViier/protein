import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="min-h-[85vh] flex items-center px-6 relative">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="font-mono text-blue-500 text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-blue-500"></span>
              PROJECT DEEP SPACE
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight mb-8">
              Zero gravity. <br/>
              <span className="font-bold">Infinite gains.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-12 max-w-lg font-light leading-relaxed">
              Synthesized for the harsh environment of deep space. Engineered for athletes who push beyond the atmosphere.
            </p>
            
            <Link href="/v22/products" className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 font-mono text-sm tracking-widest uppercase hover:bg-blue-500 hover:text-white transition-all group">
              INITIATE LAUNCH
              <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>
          
          <div className="relative flex justify-center">
            {/* Tech UI Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-blue-500/30"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-blue-500/30"></div>
            <div className="absolute top-1/2 left-0 w-4 h-px bg-blue-500"></div>
            <div className="absolute top-1/2 right-0 w-4 h-px bg-blue-500"></div>
            
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="relative z-10 w-full max-w-md filter brightness-125 contrast-125 hover:scale-105 transition-transform duration-700" alt="Space Protein" />
            
            <div className="absolute bottom-4 right-4 font-mono text-[10px] text-blue-400 text-right">
              M: 4.8KG<br/>
              V: 0.02M³<br/>
              STATUS: NOMINAL
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
              <div className="font-mono text-blue-400 text-sm mb-6 border-b border-white/10 pb-4 tracking-widest">PHASE_01 // FILTRATION</div>
              <h3 className="text-2xl text-white font-light mb-4">Vacuum Purity</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">Micro-filtered in a zero-atmosphere environment to eliminate earthly contaminants.</p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
              <div className="font-mono text-blue-400 text-sm mb-6 border-b border-white/10 pb-4 tracking-widest">PHASE_02 // ABSORPTION</div>
              <h3 className="text-2xl text-white font-light mb-4">Light-speed Entry</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">Hydrolyzed peptide chains that bypass traditional digestion for immediate synthesis.</p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
              <div className="font-mono text-blue-400 text-sm mb-6 border-b border-white/10 pb-4 tracking-widest">PHASE_03 // RECOVERY</div>
              <h3 className="text-2xl text-white font-light mb-4">Cryo-Sleep Repair</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">Continuous amino acid drip mechanism designed for optimal cellular regeneration.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
