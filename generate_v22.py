import os

images = [
    "https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg",
    "https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg",
] * 2
names = ["APOLLO WHEY", "ORION MASS", "NOVA ENERGY", "NEBULA BCAA", "PULSAR CREATINE", "COSMIC VITA", "QUASAR OMEGA", "GRAVITY TEST"]

layout = """import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050510] text-slate-300 font-sans overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-50"></div>
      
      {/* Earth glow */}
      <div className="fixed -bottom-[40vh] left-1/2 transform -translate-x-1/2 w-[150vw] h-[100vh] rounded-t-[100%] border-t-[1px] border-blue-500/30 bg-gradient-to-b from-blue-900/20 to-[#050510] z-0 blur-sm"></div>

      <nav className="fixed w-full z-50 top-0 bg-[#050510]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-mono text-xs uppercase tracking-widest">
          <Link href="/v22" className="flex items-center gap-3 text-white">
            <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16" />
            </svg>
            <span className="tracking-[0.3em]">HUTCHINGS // AEROSPACE</span>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/v22/about" className="hover:text-blue-400 transition-colors">MISSION.LOG</Link>
            <Link href="/v22/products" className="hover:text-blue-400 transition-colors">PAYLOAD.DATA</Link>
            <Link href="/v22/contact" className="hover:text-blue-400 transition-colors">COMM.LINK</Link>
          </div>
        </div>
      </nav>
      
      <div className="pt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between font-mono text-[10px] text-blue-500/50 uppercase tracking-widest border-b border-white/5">
          <span>SYS.ON</span>
          <span>LAT: 28.5721° N // LON: 80.6480° W</span>
          <span>T - MINUS</span>
        </div>
        {children}
      </div>
      
      <footer className="relative z-10 border-t border-white/10 mt-24 py-12 bg-[#050510]/90 text-center font-mono text-xs text-slate-600">
        <p className="tracking-[0.2em] uppercase">HUTCHINGS AEROSPACE NUTRITION © 2026 // END TRANSMISSION</p>
      </footer>
    </div>
  );
}
"""

home = """import Link from 'next/link';

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
"""

products_html = ""
for i in range(24):
    img = images[i % 8]
    name = names[i % 8]
    price = 99 - (i % 4) * 10
    products_html += f"""
        <div className="border border-white/10 bg-black/50 p-6 hover:bg-white/5 hover:border-blue-500/50 transition-all group relative">
          <div className="absolute top-2 left-2 font-mono text-[9px] text-blue-500 tracking-widest">PAYLOAD_ID: {i+400}</div>
          <div className="w-full h-48 mb-8 mt-4 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img src="{img}" className="h-full object-contain filter contrast-125 brightness-110 group-hover:scale-110 transition-transform duration-500 relative z-10" alt="{name}" />
          </div>
          <h2 className="text-xl text-white font-light tracking-wider mb-2">{name}</h2>
          <div className="w-full h-px bg-white/10 mb-4"></div>
          <div className="flex justify-between items-center">
            <span className="font-mono text-lg text-slate-300">${price}</span>
            <button className="text-xs font-mono tracking-widest text-blue-400 uppercase hover:text-white transition-colors">
              [ EXTRACT ]
            </button>
          </div>
        </div>"""

products = f"""export default function Products() {{
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-16">
        <h1 className="text-5xl text-white font-light tracking-tight mb-4">Payload Bay</h1>
        <p className="font-mono text-sm text-blue-400 tracking-widest uppercase">Select your nutritional ordnance.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{products_html}
      </div>
    </div>
  );
}}
"""

about = """export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <div className="border border-white/10 bg-[#050510]/80 backdrop-blur-md p-12 relative">
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blue-500/50 -mt-2 -mr-2"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-blue-500/50 -mb-2 -ml-2"></div>
        
        <h1 className="text-4xl text-white font-light tracking-tight mb-12 border-b border-white/10 pb-6">Commander's Log</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="p-4 border border-white/10 bg-black">
              <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-full filter grayscale contrast-125" />
              <div className="mt-4 flex justify-between font-mono text-[10px] text-blue-400 tracking-widest uppercase">
                <span>CDR. A. HUTCHINGS</span>
                <span>BIO-METRICS: STABLE</span>
              </div>
            </div>
          </div>
          <div className="space-y-6 text-slate-400 font-light leading-relaxed">
            <p>
              "Gravity is the ultimate enemy of recovery. To truly understand muscle synthesis, we had to leave the atmosphere behind."
            </p>
            <p>
              Dr. Hutchings suffered catastrophic structural failure during atmospheric re-entry simulations. The solution wasn't earth-bound medicine, but aerospace-grade nutritional synthesis.
            </p>
            <p>
              Hutchings Aerospace provides the purest, most rapidly assimilated protein matrix in the known universe. Designed for astronauts, available to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
"""

contact = """export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24">
      <div className="border border-white/10 bg-[#050510]/80 backdrop-blur-md p-12">
        <h1 className="text-3xl text-white font-light tracking-tight mb-2 text-center">Establish Comm Link</h1>
        <p className="font-mono text-[10px] text-blue-400 text-center tracking-widest uppercase mb-12">Awaiting signal transmission...</p>
        
        <form className="space-y-8 font-mono text-sm">
          <div>
            <label className="block text-slate-500 tracking-widest uppercase mb-2">CALL SIGN (NAME)</label>
            <input type="text" className="w-full bg-black/50 border border-white/10 text-white p-3 focus:border-blue-500 outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-slate-500 tracking-widest uppercase mb-2">COORD (EMAIL)</label>
            <input type="email" className="w-full bg-black/50 border border-white/10 text-white p-3 focus:border-blue-500 outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-slate-500 tracking-widest uppercase mb-2">TRANSMISSION DATA</label>
            <textarea rows={5} className="w-full bg-black/50 border border-white/10 text-white p-3 focus:border-blue-500 outline-none transition-colors resize-none"></textarea>
          </div>
          <div className="pt-4 text-center">
            <button className="bg-white text-black font-bold uppercase tracking-[0.2em] px-12 py-4 hover:bg-blue-500 hover:text-white transition-colors w-full">
              TRANSMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
"""

with open("src/app/v22/layout.tsx", "w") as f: f.write(layout)
with open("src/app/v22/page.tsx", "w") as f: f.write(home)
with open("src/app/v22/products/page.tsx", "w") as f: f.write(products)
with open("src/app/v22/about/page.tsx", "w") as f: f.write(about)
with open("src/app/v22/contact/page.tsx", "w") as f: f.write(contact)
