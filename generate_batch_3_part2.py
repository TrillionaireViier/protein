import os

images = [
    "https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg",
    "https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg",
] * 2

def write_v37():
    # Vaporwave
    os.makedirs("src/app/v37/products", exist_ok=True)
    os.makedirs("src/app/v37/about", exist_ok=True)
    os.makedirs("src/app/v37/contact", exist_ok=True)
    
    names = ["AESTHETIC WHEY", "VIRTUAL MASS", "CYBER ENERGY", "NEON BCAA", "RETRO CREATINE", "SYNTH VITA", "WAVE OMEGA", "GLITCH TEST"]
    
    layout = """import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#000022] text-[#00ffff] font-sans selection:bg-[#ff00ff] selection:text-white overflow-x-hidden relative">
      {/* Sun */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-gradient-to-b from-[#ffff00] via-[#ff00ff] to-[#000022] opacity-40 z-0 pointer-events-none blur-sm" style={{clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)', bottom: '-20vw'}}></div>
      {/* Grid */}
      <div className="fixed bottom-0 left-0 w-full h-[50vh] z-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(#ff00ff 1px, transparent 1px), linear-gradient(90deg, #ff00ff 1px, transparent 1px)',
        backgroundSize: '40px 20px',
        transform: 'perspective(500px) rotateX(60deg)',
        transformOrigin: 'bottom',
        opacity: 0.5
      }}></div>

      <nav className="relative z-50 p-6 bg-[#000022]/80 backdrop-blur-md border-b-2 border-[#00ffff]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <Link href="/v37" className="text-4xl font-black italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#ff00ff] drop-shadow-[2px_2px_0_#ffffff]">
            HUTCHINGS
          </Link>
          <div className="flex gap-8 mt-4 md:mt-0 font-bold uppercase tracking-widest text-[#ffff00]">
            <Link href="/v37/about" className="hover:text-[#ff00ff] transition-colors drop-shadow-[0_0_5px_#ffff00]">System</Link>
            <Link href="/v37/products" className="hover:text-[#ff00ff] transition-colors drop-shadow-[0_0_5px_#ffff00]">Files</Link>
            <Link href="/v37/contact" className="hover:text-[#ff00ff] transition-colors drop-shadow-[0_0_5px_#ffff00]">Network</Link>
          </div>
        </div>
      </nav>
      <div className="relative z-10 py-12">
        {children}
      </div>
    </div>
  );
}"""

    home = """import Link from 'next/link';
export default function Home() {
  return (
    <>
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-[#ff00ff] text-xl tracking-[0.5em] mb-4 font-bold drop-shadow-[0_0_8px_#ff00ff] italic">A E S T H E T I C S</h2>
        <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-[#00ffff] via-[#ff00ff] to-[#ffff00] drop-shadow-[4px_4px_0_#ffffff] leading-none">
          VIRTUAL <br/>GAINS
        </h1>
        <p className="text-2xl text-white max-w-2xl mx-auto mb-12 font-medium bg-[#000022]/60 p-4 border-2 border-[#ff00ff] shadow-[0_0_15px_#00ffff]">
          Download pure muscle mass directly into your physical hardware. No dial-up required.
        </p>
        
        <div className="flex justify-center mb-16 relative">
          <div className="absolute inset-0 bg-[#00ffff] blur-[40px] opacity-30 rounded-full"></div>
          <div className="w-64 h-64 border-4 border-[#ff00ff] p-2 bg-white/10 backdrop-blur-sm relative z-10">
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full h-full object-cover filter hue-rotate-[270deg] contrast-150 saturate-200" alt="Vapor Protein" />
          </div>
        </div>
        
        <Link href="/v37/products" className="inline-block bg-gradient-to-r from-[#00ffff] to-[#ff00ff] text-white text-xl font-black italic uppercase px-12 py-4 border-2 border-white shadow-[0_0_20px_#ff00ff] hover:scale-110 transition-transform">
          INITIALIZE
        </Link>
      </section>
    </>
  );
}"""

    products_html = ""
    for i in range(24):
        img = images[i % 8]
        name = names[i % 8]
        price = 99 - (i % 4) * 10
        products_html += f"""
        <div className="bg-[#000022]/80 backdrop-blur-md border-2 border-[#00ffff] p-6 shadow-[8px_8px_0_#ff00ff] hover:-translate-y-2 hover:shadow-[12px_12px_0_#ffff00] transition-all group relative">
          <div className="absolute top-2 right-2 bg-white text-black text-xs font-bold px-2 py-1">.EXE</div>
          <div className="w-full h-48 bg-white/10 flex items-center justify-center mb-6 border border-[#ff00ff]">
            <img src="{img}" className="h-[90%] object-contain filter hue-rotate-[270deg] contrast-150 saturate-200 group-hover:scale-110 transition-transform duration-300" alt="{name}" />
          </div>
          <h2 className="text-2xl font-black italic uppercase text-[#ffff00] mb-4 drop-shadow-[0_0_5px_#ffff00]">{name}</h2>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-white">${price}</span>
            <button className="bg-[#ff00ff] text-white text-sm font-black italic uppercase px-4 py-2 border border-white hover:bg-[#00ffff] hover:text-black transition-colors shadow-[0_0_10px_#ff00ff]">
              DOWNLOAD
            </button>
          </div>
        </div>"""

    products = f"""export default function Products() {{
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-black italic uppercase text-center mb-16 text-[#00ffff] drop-shadow-[4px_4px_0_#ff00ff]">DIRECTORY LISTING</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{products_html}
      </div>
    </div>
  );
}}"""

    about = """export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="bg-[#000022]/80 backdrop-blur-md border-4 border-[#ff00ff] p-8 md:p-12 shadow-[0_0_30px_#00ffff]">
        <h1 className="text-4xl md:text-5xl font-black italic uppercase text-white mb-12 drop-shadow-[3px_3px_0_#00ffff]">SYSADMIN: DR_HUTCHINGS</h1>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <div className="border-4 border-[#00ffff] p-2 bg-[#ff00ff]/20">
              <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Hutchings" className="w-full filter hue-rotate-[270deg] contrast-150 saturate-200" />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-xl text-white font-mono leading-relaxed space-y-6">
            <p className="border-l-4 border-[#ffff00] pl-4">&gt; HARDWARE FAILURE DETECTED: 1984.</p>
            <p className="border-l-4 border-[#ffff00] pl-4">&gt; INITIATING RECOVERY PROTOCOL.</p>
            <p>&gt; Dr. Hutchings synthesized a digital-grade isolate to patch the physical mainframe. The result is a high-bandwidth protein matrix for maximum upload speed to muscle tissues.</p>
            <p className="text-[#00ffff] animate-pulse">_</p>
          </div>
        </div>
      </div>
    </div>
  );
}"""

    contact = """export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <div className="bg-[#000022]/80 backdrop-blur-md border-4 border-[#00ffff] p-12 shadow-[15px_15px_0_#ff00ff]">
        <h1 className="text-4xl font-black italic uppercase text-[#ffff00] mb-8 drop-shadow-[2px_2px_0_#ff00ff]">ESTABLISH CONNECTION</h1>
        <form className="space-y-8">
          <div>
            <label className="block text-white font-mono mb-2">USER_ID</label>
            <input type="text" className="w-full bg-[#000022] border-2 border-[#ff00ff] p-4 text-[#00ffff] font-mono outline-none focus:border-[#ffff00] shadow-[0_0_10px_#ff00ff_inset]" />
          </div>
          <div>
            <label className="block text-white font-mono mb-2">DATA_PACKET</label>
            <textarea rows={5} className="w-full bg-[#000022] border-2 border-[#ff00ff] p-4 text-[#00ffff] font-mono outline-none focus:border-[#ffff00] shadow-[0_0_10px_#ff00ff_inset] resize-none"></textarea>
          </div>
          <button className="w-full bg-[#00ffff] text-black text-2xl font-black italic uppercase py-4 border-2 border-white hover:bg-[#ff00ff] hover:text-white transition-colors shadow-[0_0_15px_#00ffff]">
            EXECUTE
          </button>
        </form>
      </div>
    </div>
  );
}"""

    for path, content in [("layout.tsx", layout), ("page.tsx", home), ("products/page.tsx", products), ("about/page.tsx", about), ("contact/page.tsx", contact)]:
        with open(f"src/app/v37/{path}", "w") as f: f.write(content)


def write_v38():
    # Deep Ocean / Abyss
    os.makedirs("src/app/v38/products", exist_ok=True)
    os.makedirs("src/app/v38/about", exist_ok=True)
    os.makedirs("src/app/v38/contact", exist_ok=True)
    
    names = ["ABYSS WHEY", "MARIANA MASS", "DEEP ENERGY", "TRENCH BCAA", "PRESSURE CREATINE", "GLOW VITA", "KRILL OMEGA", "HYDRO TEST"]
    
    layout = """import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#000a14] text-[#88ccff] font-sans selection:bg-[#00ffcc] selection:text-[#000a14] relative overflow-hidden">
      {/* Bioluminescence */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ffcc] rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0066ff] rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      <nav className="relative z-50 p-8 border-b border-[#003366] bg-[#000a14]/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <Link href="/v38" className="text-3xl font-light tracking-[0.3em] uppercase text-white drop-shadow-[0_0_10px_#00ffcc]">
            Hutchings <span className="font-bold text-[#00ffcc]">Depth</span>
          </Link>
          <div className="flex gap-10 mt-6 md:mt-0 text-xs font-bold uppercase tracking-[0.2em] text-[#0066ff]">
            <Link href="/v38/about" className="hover:text-[#00ffcc] hover:drop-shadow-[0_0_8px_#00ffcc] transition-all">Origin</Link>
            <Link href="/v38/products" className="hover:text-[#00ffcc] hover:drop-shadow-[0_0_8px_#00ffcc] transition-all">Extracts</Link>
            <Link href="/v38/contact" className="hover:text-[#00ffcc] hover:drop-shadow-[0_0_8px_#00ffcc] transition-all">Sonar</Link>
          </div>
        </div>
      </nav>
      <div className="relative z-10 pb-20">
        {children}
      </div>
    </div>
  );
}"""

    home = """import Link from 'next/link';
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
}"""

    products_html = ""
    for i in range(24):
        img = images[i % 8]
        name = names[i % 8]
        price = 99 - (i % 4) * 10
        products_html += f"""
        <div className="bg-[#000a14]/60 backdrop-blur-md border border-[#003366] p-8 rounded-2xl hover:border-[#00ffcc] transition-colors duration-500 group relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#00ffcc] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="w-full h-48 flex justify-center items-center mb-8 relative">
             <div className="absolute inset-0 bg-[#0066ff] rounded-full blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
             <img src="{img}" className="h-full object-contain filter hue-rotate-[180deg] contrast-125 saturate-50 mix-blend-screen opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="{name}" />
          </div>
          <h2 className="text-xl font-light text-white tracking-widest uppercase mb-2">{name}</h2>
          <div className="flex justify-between items-center mt-6">
            <span className="text-lg font-bold text-[#00ffcc]">${price}</span>
            <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#88ccff] border border-[#003366] px-4 py-2 rounded hover:border-[#00ffcc] hover:text-[#00ffcc] transition-colors">
              Extract
            </button>
          </div>
        </div>"""

    products = f"""export default function Products() {{
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-light text-center text-white tracking-[0.3em] uppercase mb-20 drop-shadow-[0_0_15px_#0066ff]">Pressure Extracts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{products_html}
      </div>
    </div>
  );
}}"""

    about = """export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h1 className="text-5xl font-light text-white tracking-[0.2em] uppercase mb-10 drop-shadow-[0_0_10px_#00ffcc]">The <br/><span className="font-bold">Architect</span></h1>
          <div className="space-y-6 text-[#88ccff] font-light leading-relaxed text-lg">
            <p>After a catastrophic accident on the surface, Dr. Andrew Hutchings sought refuge in the quiet, crushing depths of the ocean.</p>
            <p>He discovered that under immense pressure, cellular structures rebuild themselves with unprecedented density and strength. He brought this methodology to the surface.</p>
            <p>Our proteins are cold-processed under extreme atmospheric conditions, resulting in an isolate that is undeniably dense.</p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-[#00ffcc] blur-[60px] opacity-20 rounded-full"></div>
          <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Hutchings" className="relative z-10 w-full rounded-2xl filter hue-rotate-[200deg] contrast-150 saturate-50 opacity-80 border border-[#003366]" />
        </div>
      </div>
    </div>
  );
}"""

    contact = """export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24">
      <div className="bg-[#000a14]/60 backdrop-blur-xl border border-[#003366] p-12 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066ff] blur-[100px] opacity-20"></div>
        <h1 className="text-3xl font-light text-white tracking-[0.2em] uppercase mb-12 text-center drop-shadow-[0_0_8px_#00ffcc]">Send a Sonar Ping</h1>
        <form className="space-y-8 relative z-10">
          <div>
            <input type="text" placeholder="Designation" className="w-full bg-[#000a14] border border-[#003366] rounded p-4 text-[#00ffcc] font-light outline-none focus:border-[#00ffcc] transition-colors placeholder:text-[#003366]" />
          </div>
          <div>
            <textarea rows={4} placeholder="Frequency Data" className="w-full bg-[#000a14] border border-[#003366] rounded p-4 text-[#00ffcc] font-light outline-none focus:border-[#00ffcc] transition-colors placeholder:text-[#003366] resize-none"></textarea>
          </div>
          <button className="w-full bg-[#000a14] border border-[#00ffcc] text-[#00ffcc] text-sm font-bold tracking-[0.3em] uppercase py-5 rounded hover:bg-[#00ffcc] hover:text-[#000a14] hover:shadow-[0_0_20px_#00ffcc] transition-all duration-500">
            Transmit Ping
          </button>
        </form>
      </div>
    </div>
  );
}"""

    for path, content in [("layout.tsx", layout), ("page.tsx", home), ("products/page.tsx", products), ("about/page.tsx", about), ("contact/page.tsx", contact)]:
        with open(f"src/app/v38/{path}", "w") as f: f.write(content)

write_v37()
write_v38()
