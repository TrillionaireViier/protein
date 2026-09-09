import os

images = [
    "https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg",
    "https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg",
] * 2

def write_v34():
    # Pure Monochrome
    os.makedirs("src/app/v34/products", exist_ok=True)
    os.makedirs("src/app/v34/about", exist_ok=True)
    os.makedirs("src/app/v34/contact", exist_ok=True)
    
    names = ["BLACK WHEY", "WHITE MASS", "GREY ENERGY", "DARK BCAA", "LIGHT CREATINE", "VOID VITA", "BLANC OMEGA", "NOIR TEST"]
    
    layout = """import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <nav className="border-b border-white/20 p-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <Link href="/v34" className="text-3xl font-black uppercase tracking-widest hover:tracking-[0.25em] transition-all">
            Hutchings
          </Link>
          <div className="flex gap-12 text-sm font-bold uppercase tracking-widest mt-6 md:mt-0">
            <Link href="/v34/about" className="hover:line-through transition-all">Identity</Link>
            <Link href="/v34/products" className="hover:line-through transition-all">Objects</Link>
            <Link href="/v34/contact" className="hover:line-through transition-all">Signal</Link>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}"""

    home = """import Link from 'next/link';
export default function Home() {
  return (
    <>
      <section className="min-h-[85vh] flex items-center justify-center px-6 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-white opacity-[0.03] transform -skew-x-12 -translate-x-1/4"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border-[40px] border-white/5 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
        
        <div className="text-center relative z-10 max-w-4xl">
          <h2 className="text-white/50 text-xs tracking-[0.5em] uppercase mb-8">Absolute Zero</h2>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-none">
            Void of <br/><span className="text-transparent" style={{WebkitTextStroke: '2px white'}}>Color.</span><br/>Full of Mass.
          </h1>
          <div className="flex justify-center mb-16 group">
             <div className="w-64 h-64 border border-white/20 rounded-full flex justify-center items-center p-8 bg-white/5 backdrop-blur-sm group-hover:border-white transition-colors duration-500">
                <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full h-full object-cover rounded-full filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-700" alt="Monochrome Protein" />
             </div>
          </div>
          <Link href="/v34/products" className="inline-block bg-white text-black text-sm font-black uppercase tracking-widest px-12 py-5 hover:bg-transparent hover:text-white border-2 border-white transition-all">
            Enter The Void
          </Link>
        </div>
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
        <div className="border border-white/20 p-8 hover:border-white transition-colors group cursor-pointer">
          <div className="w-full aspect-square bg-white/5 mb-8 flex items-center justify-center p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <img src="{img}" className="h-full object-contain filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-500" alt="{name}" />
          </div>
          <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-white transition-colors">
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-1">Object {i+1}</h3>
              <h2 className="text-xl font-black uppercase tracking-tight">{name}</h2>
            </div>
            <span className="text-lg">${price}</span>
          </div>
        </div>"""

    products = f"""export default function Products() {{
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-6xl font-black uppercase tracking-tighter mb-24 border-b border-white/20 pb-8 text-center">The Objects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{products_html}
      </div>
    </div>
  );
}}"""

    about = """export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="order-2 md:order-1 space-y-8">
          <h1 className="text-6xl font-black uppercase tracking-tighter border-b border-white/20 pb-6">Identity</h1>
          <div className="text-white/60 text-lg leading-loose space-y-6">
            <p>Dr. Andrew Hutchings stripped everything back to black and white after his accident. No noise. No distractions. Just pure focus on rebuilding what was broken.</p>
            <p>Our isolates are devoid of unnecessary color, flavor, or branding. They are functional objects designed for a singular purpose: cellular repair.</p>
          </div>
        </div>
        <div className="order-1 md:order-2 border border-white/20 p-4">
          <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Hutchings" className="w-full filter grayscale contrast-200" />
        </div>
      </div>
    </div>
  );
}"""

    contact = """export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <h1 className="text-5xl font-black uppercase tracking-tighter mb-16 border-b border-white/20 pb-8">Signal</h1>
      <form className="space-y-12">
        <div>
          <input type="text" placeholder="IDENTIFIER" className="w-full bg-transparent border-b border-white/20 py-4 text-center text-xl font-bold tracking-widest uppercase outline-none focus:border-white transition-colors placeholder:text-white/20" />
        </div>
        <div>
          <textarea rows={3} placeholder="DATA PAYLOAD" className="w-full bg-transparent border-b border-white/20 py-4 text-center text-xl font-bold tracking-widest uppercase outline-none focus:border-white transition-colors placeholder:text-white/20 resize-none"></textarea>
        </div>
        <button className="bg-white text-black font-black uppercase tracking-widest px-16 py-6 hover:bg-black hover:text-white border-2 border-white transition-all">
          Transmit
        </button>
      </form>
    </div>
  );
}"""

    for path, content in [("layout.tsx", layout), ("page.tsx", home), ("products/page.tsx", products), ("about/page.tsx", about), ("contact/page.tsx", contact)]:
        with open(f"src/app/v34/{path}", "w") as f: f.write(content)


def write_v35():
    # Holographic / Iridescent
    os.makedirs("src/app/v35/products", exist_ok=True)
    os.makedirs("src/app/v35/about", exist_ok=True)
    os.makedirs("src/app/v35/contact", exist_ok=True)
    
    names = ["PEARL WHEY", "OPAL MASS", "PRISM ENERGY", "LUMEN BCAA", "AURA CREATINE", "SHIMMER VITA", "GLOW OMEGA", "HALO TEST"]
    
    layout = """import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-[#555] font-sans selection:bg-[#f0f0f0] relative overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-300 via-pink-200 to-cyan-100 opacity-60 z-0 pointer-events-none"></div>
      <div className="fixed -bottom-1/2 -right-1/2 w-[150vw] h-[150vh] bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-cyan-200 via-purple-200 to-yellow-100 opacity-40 blur-[100px] animate-[spin_20s_linear_infinite] z-0 pointer-events-none"></div>
      
      <nav className="relative z-50 p-6 bg-white/30 backdrop-blur-xl border-b border-white/50 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <Link href="/v35" className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
            Hutchings
          </Link>
          <div className="flex gap-8 text-sm font-bold uppercase tracking-wider text-black/60 mt-4 md:mt-0">
            <Link href="/v35/about" className="hover:text-black transition-colors">Origins</Link>
            <Link href="/v35/products" className="hover:text-black transition-colors">Prisms</Link>
            <Link href="/v35/contact" className="hover:text-black transition-colors">Connect</Link>
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
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full blur-2xl opacity-60 animate-pulse"></div>
          <div className="relative w-72 h-72 rounded-full p-2 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 shadow-[0_0_50px_rgba(255,255,255,1)]">
             <div className="w-full h-full bg-white/40 backdrop-blur-md rounded-full overflow-hidden flex items-center justify-center p-4 border border-white/50">
               <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full h-full object-cover filter contrast-125 rounded-full mix-blend-multiply opacity-80" alt="Holographic Protein" />
             </div>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500">
          Luminous <br/>Gains.
        </h1>
        <p className="text-xl text-black/60 font-medium max-w-2xl mx-auto mb-12">
          Shimmering isolation. Our holographic protein matrices reflect perfection inside and out.
        </p>
        
        <Link href="/v35/products" className="bg-white/80 backdrop-blur-md text-black font-bold uppercase tracking-widest px-10 py-4 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-white/50 hover:bg-gradient-to-r hover:from-cyan-100 hover:to-pink-100 transition-all hover:-translate-y-1">
          Explore Prisms
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
        <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-6 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.05)] hover:shadow-[0_8px_32px_rgba(31,38,135,0.15)] hover:-translate-y-2 transition-all duration-300 group">
          <div className="w-full h-56 rounded-2xl bg-gradient-to-tr from-cyan-100/50 via-purple-100/50 to-pink-100/50 flex items-center justify-center mb-6 relative overflow-hidden border border-white/50">
             <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)_100%)] w-[200%] -ml-[100%] group-hover:ml-[100%] transition-all duration-1000 ease-in-out"></div>
             <img src="{img}" className="h-[80%] object-contain filter drop-shadow-xl mix-blend-multiply opacity-80 group-hover:scale-110 transition-transform duration-500" alt="{name}" />
          </div>
          <h2 className="text-xl font-black text-black/80 tracking-tight mb-2">{name}</h2>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-purple-500">${price}</span>
            <button className="text-sm font-bold uppercase tracking-widest bg-white/80 border border-white px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors">
              Add
            </button>
          </div>
        </div>"""

    products = f"""export default function Products() {{
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">The Prism Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{products_html}
      </div>
    </div>
  );
}}"""

    about = """export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[3rem] p-12 shadow-[0_8px_32px_rgba(31,38,135,0.05)] relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-cyan-300 rounded-full blur-[80px] opacity-50"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-pink-300 rounded-full blur-[80px] opacity-50"></div>
        
        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl font-black tracking-tighter mb-8 text-black/80">Refraction.</h1>
            <p className="text-lg font-medium text-black/60 leading-relaxed mb-6">
              When light hits a prism, it reveals its true spectrum. When protein hits your muscles, it reveals your true potential.
            </p>
            <p className="text-lg font-medium text-black/60 leading-relaxed">
              Dr. Andrew Hutchings designed this iridescent matrix after an accident changed his perception of healing. Recovery isn't just physical; it's light overcoming darkness.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-pink-400 rounded-3xl rotate-6 opacity-30 blur-sm"></div>
            <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Hutchings" className="relative w-full rounded-3xl border-2 border-white/80 shadow-xl filter contrast-125 sepia-[20%] hue-rotate-[280deg]" />
          </div>
        </div>
      </div>
    </div>
  );
}"""

    contact = """export default function Contact() {
  return (
    <div className="max-w-xl mx-auto px-6 py-20">
      <div className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[3rem] p-12 shadow-[0_8px_32px_rgba(31,38,135,0.05)]">
        <h1 className="text-4xl font-black text-center mb-12 text-black/80 tracking-tighter">Reflect With Us</h1>
        <form className="space-y-8">
          <div>
            <input type="text" placeholder="Name" className="w-full bg-white/50 border border-white/80 rounded-xl p-4 text-black/80 font-medium outline-none focus:bg-white/80 transition-colors placeholder:text-black/30 shadow-inner" />
          </div>
          <div>
            <textarea rows={4} placeholder="Message" className="w-full bg-white/50 border border-white/80 rounded-xl p-4 text-black/80 font-medium outline-none focus:bg-white/80 transition-colors placeholder:text-black/30 shadow-inner resize-none"></textarea>
          </div>
          <button className="w-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-white font-black uppercase tracking-widest py-5 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all">
            Send Beam
          </button>
        </form>
      </div>
    </div>
  );
}"""

    for path, content in [("layout.tsx", layout), ("page.tsx", home), ("products/page.tsx", products), ("about/page.tsx", about), ("contact/page.tsx", contact)]:
        with open(f"src/app/v35/{path}", "w") as f: f.write(content)


def write_v36():
    # Wild West / Saloon
    os.makedirs("src/app/v36/products", exist_ok=True)
    os.makedirs("src/app/v36/about", exist_ok=True)
    os.makedirs("src/app/v36/contact", exist_ok=True)
    
    names = ["OUTLAW WHEY", "SHERIFF MASS", "FRONTIER ENERGY", "BULLET BCAA", "SALOON CREATINE", "DESERT VITA", "CANYON OMEGA", "RANGER TEST"]
    
    layout = """import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#deb887] text-[#4a3525] font-serif selection:bg-[#4a3525] selection:text-[#deb887] bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]">
      <nav className="border-b-4 border-[#4a3525] bg-[#c19a6b] p-6 shadow-md relative z-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <Link href="/v36" className="text-4xl font-black uppercase tracking-tighter" style={{fontFamily: 'Playfair Display, serif'}}>
            ★ Hutchings ★
          </Link>
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest mt-4 md:mt-0 border-t-2 md:border-t-0 md:border-l-2 border-[#4a3525] md:pl-8 pt-4 md:pt-0">
            <Link href="/v36/about" className="hover:text-black transition-colors">The Tale</Link>
            <Link href="/v36/products" className="hover:text-black transition-colors">General Store</Link>
            <Link href="/v36/contact" className="hover:text-black transition-colors">Telegraph</Link>
          </div>
        </div>
      </nav>
      {children}
      <footer className="mt-20 border-t-4 border-[#4a3525] bg-[#c19a6b] p-6 text-center text-xs font-bold uppercase tracking-widest">
        Est. 1884 • Premium Provisions
      </footer>
    </div>
  );
}"""

    home = """import Link from 'next/link';
export default function Home() {
  return (
    <>
      <section className="min-h-[75vh] flex flex-col items-center justify-center px-6 text-center py-20">
        <div className="border-8 border-double border-[#4a3525] p-2 bg-[#d2b48c] max-w-4xl mx-auto shadow-2xl transform -rotate-1">
          <div className="border-4 border-[#4a3525] p-8 md:p-16 relative">
            {/* Corner pins */}
            <div className="absolute top-2 left-2 w-3 h-3 bg-[#4a3525] rounded-full shadow-sm"></div>
            <div className="absolute top-2 right-2 w-3 h-3 bg-[#4a3525] rounded-full shadow-sm"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 bg-[#4a3525] rounded-full shadow-sm"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 bg-[#4a3525] rounded-full shadow-sm"></div>
            
            <h2 className="text-xl tracking-[0.3em] uppercase mb-4">Wanted:</h2>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8" style={{fontFamily: 'Playfair Display, serif'}}>
              MASSIVE <br/>GAINS
            </h1>
            <p className="text-xl font-medium max-w-2xl mx-auto mb-12 border-y-2 border-[#4a3525] py-4">
              Reward offered for the toughest cowpokes who dare to consume the frontier's most potent protein isolate.
            </p>
            
            <div className="flex justify-center mb-12">
               <div className="w-64 h-64 p-2 border-4 border-[#4a3525] bg-white transform rotate-3">
                 <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full h-full object-cover filter sepia-[0.8] contrast-150" alt="Wanted Protein" />
               </div>
            </div>
            
            <Link href="/v36/products" className="inline-block bg-[#4a3525] text-[#deb887] text-xl font-black uppercase tracking-widest px-12 py-4 border-2 border-black hover:bg-black transition-colors shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
              Enter The Store
            </Link>
          </div>
        </div>
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
        <div className="bg-[#d2b48c] border-4 border-[#4a3525] p-4 shadow-[6px_6px_0_#4a3525] hover:-translate-y-1 hover:shadow-[8px_8px_0_#4a3525] transition-all group">
          <div className="w-full aspect-[4/3] bg-white border-2 border-[#4a3525] flex items-center justify-center mb-6 overflow-hidden">
             <img src="{img}" className="h-full object-contain filter sepia-[0.6] contrast-125 group-hover:scale-110 transition-transform duration-500" alt="{name}" />
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tight mb-2 text-center border-b-2 border-[#4a3525] pb-2" style={{{{fontFamily: 'Playfair Display, serif'}}}}>★ {name} ★</h2>
          <div className="flex justify-between items-center mt-4 px-2">
            <span className="text-2xl font-bold">${price}</span>
            <button className="bg-[#4a3525] text-[#deb887] text-sm font-bold uppercase tracking-widest px-4 py-2 hover:bg-black transition-colors border border-black">
              Purchase
            </button>
          </div>
        </div>"""

    products = f"""export default function Products() {{
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl md:text-7xl font-black text-center mb-16 uppercase tracking-tighter" style={{fontFamily: 'Playfair Display, serif'}}>
        General Store
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{products_html}
      </div>
    </div>
  );
}}"""

    about = """export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="border-8 border-double border-[#4a3525] p-2 bg-[#d2b48c] shadow-2xl">
        <div className="border-4 border-[#4a3525] p-8 md:p-12">
          <h1 className="text-5xl font-black uppercase text-center mb-12" style={{fontFamily: 'Playfair Display, serif'}}>The Legend of Doc Hutchings</h1>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <div className="border-4 border-[#4a3525] p-2 bg-white transform -rotate-3">
                <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Doc" className="w-full filter sepia contrast-150 grayscale" />
                <p className="text-center font-bold mt-2 uppercase tracking-widest text-xs">Doc. H - Circa 1884</p>
              </div>
            </div>
            <div className="w-full md:w-2/3 text-lg font-medium leading-loose space-y-6">
              <p>Doc Andrew Hutchings took a bad fall off a stallion out West. Broke more bones than a man has fingers.</p>
              <p>While recovering in a dusty saloon, he realized the local grub wasn't enough to rebuild a man's frame. He needed something stronger. Something pure.</p>
              <p>Using old apothecary methods, he distilled the first batch of frontier protein isolate. The rest is history.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}"""

    contact = """export default function Contact() {
  return (
    <div className="max-w-xl mx-auto px-6 py-20">
      <div className="bg-[#d2b48c] border-4 border-[#4a3525] p-12 shadow-[8px_8px_0_#4a3525]">
        <h1 className="text-4xl font-black uppercase text-center mb-10 border-b-2 border-[#4a3525] pb-4" style={{fontFamily: 'Playfair Display, serif'}}>Wire a Message</h1>
        <form className="space-y-6">
          <div>
            <label className="block font-bold uppercase tracking-widest text-xs mb-2">Cowpoke Name</label>
            <input type="text" className="w-full bg-transparent border-2 border-[#4a3525] p-3 text-lg font-bold outline-none focus:bg-white transition-colors" />
          </div>
          <div>
            <label className="block font-bold uppercase tracking-widest text-xs mb-2">The Wire</label>
            <textarea rows={4} className="w-full bg-transparent border-2 border-[#4a3525] p-3 text-lg font-bold outline-none focus:bg-white transition-colors resize-none"></textarea>
          </div>
          <button className="w-full bg-[#4a3525] text-[#deb887] text-2xl font-black uppercase tracking-widest py-4 border-2 border-black hover:bg-black transition-colors shadow-[4px_4px_0_rgba(0,0,0,0.5)] mt-4">
            Send Telegram
          </button>
        </form>
      </div>
    </div>
  );
}"""

    for path, content in [("layout.tsx", layout), ("page.tsx", home), ("products/page.tsx", products), ("about/page.tsx", about), ("contact/page.tsx", contact)]:
        with open(f"src/app/v36/{path}", "w") as f: f.write(content)

write_v34()
write_v35()
write_v36()
