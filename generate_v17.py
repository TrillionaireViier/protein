import os

images = [
    "https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg",
    "https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg",
] * 2
names = ["LASER WHEY", "NEON MASS", "RADICAL ENERGY", "MIAMI BCAA", "SYNTH CREATINE", "OUTRUN VITA", "RETRO OMEGA", "TURBO TEST"]

layout = """import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-fuchsia-300 font-sans overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20"></div>
      
      {/* Synthwave Sun */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-yellow-400 via-orange-500 to-fuchsia-600 rounded-full blur-[100px] opacity-20 z-0"></div>
      
      {/* Grid Floor */}
      <div className="fixed bottom-0 w-full h-[40vh] z-0" style={{
        backgroundImage: 'linear-gradient(transparent 95%, #ec4899 100%), linear-gradient(90deg, transparent 95%, #ec4899 100%)',
        backgroundSize: '40px 40px',
        transform: 'perspective(500px) rotateX(60deg)',
        transformOrigin: 'top',
        opacity: 0.3
      }}></div>

      <nav className="fixed w-full z-50 top-0 bg-[#0b0c10]/80 backdrop-blur-sm border-b-2 border-fuchsia-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/v17" className="text-3xl font-black italic tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-blue-600 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] uppercase">
            Hutchings<span className="text-fuchsia-500 drop-shadow-[0_0_5px_rgba(236,72,153,0.8)]">1984</span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest uppercase">
            <Link href="/v17/about" className="text-cyan-400 hover:text-white transition-colors drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">Database</Link>
            <Link href="/v17/products" className="text-cyan-400 hover:text-white transition-colors drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">Arsenal</Link>
            <Link href="/v17/contact" className="text-cyan-400 hover:text-white transition-colors drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">Uplink</Link>
          </div>
        </div>
      </nav>
      
      <div className="pt-20 relative z-10">
        {children}
      </div>
      
      <footer className="relative z-10 border-t-2 border-cyan-500 mt-24 py-8 bg-[#0b0c10]/90 text-center shadow-[0_-5px_15px_rgba(34,211,238,0.3)]">
        <p className="text-cyan-400 font-bold tracking-widest uppercase text-xs drop-shadow-[0_0_2px_rgba(34,211,238,0.8)]">END OF LINE // 1984</p>
      </footer>
    </div>
  );
}
"""

home = """import Link from 'next/link';

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
"""

products_html = ""
for i in range(24):
    img = images[i % 8]
    name = names[i % 8]
    price = 99 - (i % 4) * 10
    products_html += f"""
        <div className="bg-[#1f1035]/60 border-2 border-fuchsia-500 p-6 rounded-xl hover:bg-[#1f1035] hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] backdrop-blur-md group">
          <div className="w-full h-48 bg-black/50 rounded-lg mb-6 flex items-center justify-center p-4 border border-fuchsia-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-600/20 to-transparent"></div>
            <img src="{img}" className="h-full object-contain filter contrast-125 saturate-200 hue-rotate-15 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] group-hover:scale-110 transition-transform duration-500 relative z-10" alt="{name}" />
          </div>
          <h2 className="text-xl font-black italic text-cyan-400 uppercase tracking-wider mb-2 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">{name}</h2>
          <div className="flex justify-between items-center mt-6">
            <span className="text-2xl font-bold text-fuchsia-300">${price}</span>
            <button className="bg-fuchsia-600 hover:bg-cyan-500 text-white font-bold italic px-4 py-2 uppercase tracking-widest text-xs transition-colors shadow-[0_0_10px_rgba(236,72,153,0.8)]">
              EQUIP
            </button>
          </div>
        </div>"""

products = f"""export default function Products() {{
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black italic text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-blue-600 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] uppercase">
          THE ARSENAL
        </h1>
        <p className="text-fuchsia-400 tracking-[0.3em] uppercase mt-4 font-bold">Select your power-up</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{products_html}
      </div>
    </div>
  );
}}
"""

about = """export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 relative z-10">
      <div className="bg-[#1f1035]/80 border-2 border-cyan-400 p-8 md:p-12 rounded-xl shadow-[0_0_30px_rgba(34,211,238,0.3)] backdrop-blur-md">
        <h1 className="text-4xl md:text-5xl font-black italic text-fuchsia-400 uppercase tracking-wider mb-10 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)] border-b border-fuchsia-500/50 pb-4">
          MAINFRAME DATABANKS
        </h1>
        
        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
          <div className="w-full md:w-1/3">
            <div className="border-4 border-cyan-400 rounded-full p-2 shadow-[0_0_15px_rgba(34,211,238,0.8)]">
              <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-full rounded-full filter contrast-150 saturate-200 hue-rotate-180 sepia-[50%] mix-blend-screen" />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold text-cyan-300 mb-2 tracking-widest uppercase">SYS.ADMIN // DR. A. HUTCHINGS</h2>
            <p className="text-fuchsia-200 leading-relaxed mb-4 text-lg">
              IN THE YEAR 1984, DR. HUTCHINGS UPLOADED HIS CONSCIOUSNESS INTO THE NEON GRID TO SYNTHESIZE THE PERFECT MUSCLE RECOVERY ALGORITHM.
            </p>
            <p className="text-fuchsia-200 leading-relaxed text-lg">
              THE RESULT IS A PROTEIN ISOLATE SO PURE, IT TRANSCENDS PHYSICAL REALITY.
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
    <div className="max-w-2xl mx-auto px-6 py-24 relative z-10">
      <div className="bg-[#1f1035]/80 border-2 border-fuchsia-500 p-8 md:p-12 rounded-xl shadow-[0_0_30px_rgba(236,72,153,0.3)] backdrop-blur-md">
        <h1 className="text-4xl font-black italic text-cyan-400 uppercase tracking-wider mb-8 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] text-center">
          ESTABLISH UPLINK
        </h1>
        
        <form className="space-y-6">
          <div>
            <label className="block text-fuchsia-400 font-bold tracking-widest uppercase text-sm mb-2">USER ID</label>
            <input type="text" className="w-full bg-black/50 border-2 border-fuchsia-900 focus:border-cyan-400 text-cyan-300 p-3 outline-none transition-colors shadow-inner font-mono" />
          </div>
          <div>
            <label className="block text-fuchsia-400 font-bold tracking-widest uppercase text-sm mb-2">COMM FREQUENCY (EMAIL)</label>
            <input type="email" className="w-full bg-black/50 border-2 border-fuchsia-900 focus:border-cyan-400 text-cyan-300 p-3 outline-none transition-colors shadow-inner font-mono" />
          </div>
          <div>
            <label className="block text-fuchsia-400 font-bold tracking-widest uppercase text-sm mb-2">DATA PACKET</label>
            <textarea rows={5} className="w-full bg-black/50 border-2 border-fuchsia-900 focus:border-cyan-400 text-cyan-300 p-3 outline-none transition-colors shadow-inner font-mono resize-none"></textarea>
          </div>
          <button className="w-full bg-transparent border-2 border-fuchsia-500 text-fuchsia-400 font-black italic tracking-widest uppercase py-4 hover:bg-fuchsia-500 hover:text-white transition-colors shadow-[0_0_15px_rgba(236,72,153,0.5)]">
            TRANSMIT
          </button>
        </form>
      </div>
    </div>
  );
}
"""

with open("src/app/v17/layout.tsx", "w") as f: f.write(layout)
with open("src/app/v17/page.tsx", "w") as f: f.write(home)
with open("src/app/v17/products/page.tsx", "w") as f: f.write(products)
with open("src/app/v17/about/page.tsx", "w") as f: f.write(about)
with open("src/app/v17/contact/page.tsx", "w") as f: f.write(contact)
