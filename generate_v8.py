import os

images = [
    "https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg",
    "https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg",
] * 2

names = ["CYBER_ISO", "NEON_MASS", "GLITCH_NRG", "HACK_BCAA", "OVERCLOCK", "SYNTH_VIT", "MECH_OMEGA", "TEST_PROTOCOL"]

products_html = ""
for i in range(24):
    img = images[i % 8]
    name = names[i % 8]
    products_html += f"""
          <div className="bg-zinc-900 border border-cyan-500/30 p-6 relative group hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all">
            <div className="absolute top-0 left-0 w-2 h-2 bg-pink-500"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-500"></div>
            <div className="w-full h-64 relative mb-6 overflow-hidden">
              <div className="absolute inset-0 bg-cyan-500/10 mix-blend-color-dodge z-10 group-hover:bg-pink-500/20 transition-colors"></div>
              <img src="{img}" className="w-full h-full object-cover filter contrast-125 saturate-150 relative z-0" alt="{name}" />
            </div>
            <h2 className="text-2xl font-mono text-white mb-2 tracking-widest">{name}</h2>
            <div className="text-cyan-400 font-mono text-sm mb-6 opacity-70">SYS.REQ // OPTIMAL</div>
            <div className="flex justify-between items-center border-t border-zinc-800 pt-4">
              <span className="text-3xl font-mono text-pink-500 font-bold">$[{99 - (i%4)*10}]</span>
              <button className="bg-transparent border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black font-mono text-sm px-4 py-2 transition-all uppercase tracking-widest">
                EXECUTE
              </button>
            </div>
          </div>"""

layout = """import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-pink-500 selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/v8" className="text-2xl font-mono font-bold text-white tracking-widest flex items-center gap-2">
            HUTCHINGS<span className="text-cyan-400">_OS</span>
            <span className="w-3 h-6 bg-pink-500 animate-pulse"></span>
          </Link>
          <div className="hidden md:flex gap-8 font-mono text-sm">
            <Link href="/v8/about" className="hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(0,243,255,0.5)] transition-all">/ABOUT</Link>
            <Link href="/v8/products" className="hover:text-pink-400 hover:shadow-[0_0_10px_rgba(255,0,240,0.5)] transition-all">/CATALOG</Link>
            <Link href="/v8/contact" className="hover:text-green-400 hover:shadow-[0_0_10px_rgba(57,255,20,0.5)] transition-all">/LINK</Link>
          </div>
          <button className="md:hidden text-cyan-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </nav>
      
      {/* Content */}
      <div className="pt-20">
        {children}
      </div>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-cyan-500/30 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-xl text-white opacity-50">
            SYSTEM.<span className="text-pink-500">HALT</span>
          </div>
          <div className="font-mono text-xs text-cyan-500/50">
            © 2026 / ASSEMBLED ON TILDA
          </div>
        </div>
      </footer>
    </div>
  );
}
"""

home = """import Link from 'next/link';

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
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="relative z-10 w-full max-w-md mx-auto border-2 border-cyan-500/50 shadow-[0_0_30px_rgba(0,243,255,0.3)] filter contrast-125" alt="Hero" />
          </div>
        </div>
      </section>
      
      {/* Sections would go here (Benefits, Ingredients, etc. styled in neon) */}
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
"""

products = f"""import Link from 'next/link';

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-mono font-bold text-white mb-4 uppercase">/// <span className="text-cyan-400">CATALOG</span></h1>
      <p className="text-zinc-500 font-mono mb-12">AVAILABLE UPGRADES IN THE MAINFRAME.</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
{products_html}
      </div>
    </div>
  );
}
"""

about = """export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-mono font-bold text-white mb-12 uppercase"><span className="text-pink-500">WHOAMI</span></h1>
      <div className="border border-cyan-500/30 bg-zinc-900/50 p-8 md:p-12 relative">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500"></div>
        
        <p className="text-zinc-300 font-mono leading-relaxed mb-6">
          > DR. ANDREW HUTCHINGS<br/><br/>
          > ARCHITECT & FOUNDER<br/><br/>
          > SPECIALIZATION: BIO-CHEMISTRY, RECOVERY PROTOCOLS, TENDONITIS DEFEAT.<br/><br/>
          > STATUS: ONLINE.
        </p>
      </div>
    </div>
  );
}
"""

contact = """export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-mono font-bold text-white mb-12 uppercase">PING <span className="text-green-400">US</span></h1>
      <div className="grid md:grid-cols-2 gap-12">
        <form className="space-y-6 font-mono">
          <div>
            <label className="block text-cyan-500 text-sm mb-2">INPUT_NAME</label>
            <input type="text" className="w-full bg-zinc-900 border border-zinc-700 focus:border-cyan-500 text-white p-3 outline-none" />
          </div>
          <div>
            <label className="block text-cyan-500 text-sm mb-2">INPUT_COMMLINK</label>
            <input type="email" className="w-full bg-zinc-900 border border-zinc-700 focus:border-cyan-500 text-white p-3 outline-none" />
          </div>
          <div>
            <label className="block text-cyan-500 text-sm mb-2">INPUT_DATA</label>
            <textarea rows={4} className="w-full bg-zinc-900 border border-zinc-700 focus:border-cyan-500 text-white p-3 outline-none"></textarea>
          </div>
          <button className="bg-cyan-500 text-black font-bold uppercase tracking-widest px-8 py-3 hover:bg-pink-500 hover:text-white transition-colors w-full">
            TRANSMIT
          </button>
        </form>
      </div>
    </div>
  );
}
"""

with open("src/app/v8/layout.tsx", "w") as f:
    f.write(layout)
with open("src/app/v8/page.tsx", "w") as f:
    f.write(home)
with open("src/app/v8/products/page.tsx", "w") as f:
    f.write(products)
with open("src/app/v8/about/page.tsx", "w") as f:
    f.write(about)
with open("src/app/v8/contact/page.tsx", "w") as f:
    f.write(contact)

