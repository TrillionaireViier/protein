export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-mono font-bold text-white mb-12 uppercase"><span className="text-pink-500">WHOAMI</span></h1>
      <div className="border border-cyan-500/30 bg-zinc-900/50 p-8 md:p-12 relative">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500"></div>
        
        <p className="text-zinc-300 font-mono leading-relaxed mb-6">
          &gt; DR. ANDREW HUTCHINGS<br/><br/>
          &gt; ARCHITECT & FOUNDER<br/><br/>
          &gt; SPECIALIZATION: BIO-CHEMISTRY, RECOVERY PROTOCOLS, TENDONITIS DEFEAT.<br/><br/>
          &gt; STATUS: ONLINE.
        </p>
      </div>
    </div>
  );
}
