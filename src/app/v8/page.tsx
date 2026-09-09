import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-zinc-950 to-zinc-950"></div>
        <div className="max-w-7xl mx-auto relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block border border-pink-500 text-pink-500 font-mono text-xs px-3 py-1 mb-6 animate-pulse">
              SYS.UPDATE // V8.0
            </div>
            <h1 className="text-5xl md:text-7xl font-mono font-bold text-white leading-tight mb-6 uppercase">
              UPGRADE YOUR <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">HARDWARE</span>
            </h1>
            <p className="text-zinc-400 text-lg mb-10 max-w-lg font-mono">
              INITIATE BIO-HACK SEQUENCE. PURE WHEY ISOLATE DESIGNED FOR MAXIMUM PERFORMANCE AND RAPID RECOVERY PROTOCOLS.
            </p>
            <Link href="/v8/products" className="inline-block bg-cyan-500 text-black font-mono font-bold px-8 py-4 hover:bg-pink-500 hover:text-white transition-all uppercase tracking-widest shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_20px_rgba(255,0,240,0.6)]">
              INITIALIZE_DOWNLOAD
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full"></div>
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="relative z-10 w-full max-w-md mx-auto border-2 border-cyan-500/50 shadow-[0_0_30px_rgba(0,243,255,0.3)] filter contrast-125 grayscale-[20%]" alt="Hero" />
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6 border-t border-zinc-800 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-mono text-white mb-12 text-center uppercase tracking-widest">SYS.<span className="text-pink-500">BENEFITS</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-cyan-500/30 p-8 bg-zinc-950 relative group hover:border-cyan-400">
              <div className="text-cyan-400 text-4xl mb-4">01</div>
              <h3 className="text-xl font-mono text-white mb-2 uppercase">Muscle_Patch</h3>
              <p className="text-zinc-500 font-mono text-sm">Rapid protein synthesis acceleration for optimal muscle repair.</p>
            </div>
            <div className="border border-pink-500/30 p-8 bg-zinc-950 relative group hover:border-pink-400">
              <div className="text-pink-400 text-4xl mb-4">02</div>
              <h3 className="text-xl font-mono text-white mb-2 uppercase">Recovery_Protocol</h3>
              <p className="text-zinc-500 font-mono text-sm">Minimize downtime between execution cycles.</p>
            </div>
            <div className="border border-green-500/30 p-8 bg-zinc-950 relative group hover:border-green-400">
              <div className="text-green-400 text-4xl mb-4">03</div>
              <h3 className="text-xl font-mono text-white mb-2 uppercase">Clean_Compile</h3>
              <p className="text-zinc-500 font-mono text-sm">No bloating, no bugs. Pure absorption matrix.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
