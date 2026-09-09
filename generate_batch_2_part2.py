import os

images = [
    "https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg",
    "https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg",
] * 2

def write_v32():
    # Luxury Hotel / Spa
    os.makedirs("src/app/v32/products", exist_ok=True)
    os.makedirs("src/app/v32/about", exist_ok=True)
    os.makedirs("src/app/v32/contact", exist_ok=True)
    
    names = ["The Isolate", "The Mass", "The Energy", "The BCAA", "The Creatine", "The Vita", "The Omega", "The Test"]
    
    layout = """import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#2c3e2d] font-serif selection:bg-[#d4af37] selection:text-white">
      <nav className="absolute w-full top-0 z-50 px-12 py-8 flex justify-between items-center border-b border-[#2c3e2d]/10">
        <Link href="/v32" className="text-2xl tracking-[0.2em] uppercase font-light">
          Hutchings <span className="text-[#d4af37]">Retreat</span>
        </Link>
        <div className="flex gap-12 text-sm tracking-[0.1em] uppercase">
          <Link href="/v32/about" className="hover:text-[#d4af37] transition-colors pb-1 border-b border-transparent hover:border-[#d4af37]">Philosophy</Link>
          <Link href="/v32/products" className="hover:text-[#d4af37] transition-colors pb-1 border-b border-transparent hover:border-[#d4af37]">Amenities</Link>
          <Link href="/v32/contact" className="hover:text-[#d4af37] transition-colors pb-1 border-b border-transparent hover:border-[#d4af37]">Reservations</Link>
        </div>
      </nav>
      {children}
      <footer className="py-12 text-center text-[#2c3e2d]/50 text-xs tracking-[0.2em] uppercase border-t border-[#2c3e2d]/10 mt-24">
        A Sanctuary for Cellular Renewal
      </footer>
    </div>
  );
}"""

    home = """import Link from 'next/link';
export default function Home() {
  return (
    <>
      <section className="h-screen relative flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#f4f1eb]">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-[#e8e4db] rounded-l-full opacity-50 transform translate-x-1/4"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border border-[#d4af37] flex items-center justify-center mb-8">
            <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
          </div>
          <h2 className="text-[#d4af37] tracking-[0.3em] uppercase text-sm mb-6">Uncompromising Quality</h2>
          <h1 className="text-5xl md:text-7xl font-light tracking-wide mb-8 leading-tight">
            Elevate Your <br/>Restoration
          </h1>
          <p className="text-[#2c3e2d]/70 text-lg max-w-2xl mx-auto mb-12 font-sans font-light leading-relaxed">
            Experience the pinnacle of nutritional luxury. Pure isolates designed to restore, replenish, and rejuvenate the body at a cellular level.
          </p>
          <Link href="/v32/products" className="text-sm tracking-[0.2em] uppercase border-b border-[#2c3e2d] pb-2 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors">
            Explore the Collection
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
        <div className="group cursor-pointer">
          <div className="bg-[#f4f1eb] aspect-[4/5] p-12 flex justify-center items-center relative overflow-hidden mb-6">
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img src="{img}" className="h-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-700 ease-out" alt="{name}" />
          </div>
          <div className="text-center">
            <h3 className="text-[#d4af37] text-xs tracking-[0.2em] uppercase mb-2">Signature</h3>
            <h2 className="text-2xl font-light mb-2">{name}</h2>
            <p className="text-[#2c3e2d]/60 font-sans text-sm">${price}.00</p>
          </div>
        </div>"""

    products = f"""export default function Products() {{
  return (
    <div className="max-w-7xl mx-auto px-12 pt-48 pb-24">
      <div className="text-center mb-24">
        <h1 className="text-5xl font-light mb-6">The Amenities</h1>
        <p className="text-[#2c3e2d]/60 font-sans max-w-xl mx-auto">Curated formulas for the discerning athlete.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
{products_html}
      </div>
    </div>
  );
}}"""

    about = """export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-12 pt-48 pb-24">
      <div className="grid md:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <div className="aspect-[3/4] bg-[#e8e4db] absolute -top-8 -left-8 w-full h-full"></div>
          <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="The Founder" className="relative w-full aspect-[3/4] object-cover shadow-2xl filter sepia-[30%]" />
        </div>
        <div className="space-y-8">
          <h2 className="text-[#d4af37] tracking-[0.2em] uppercase text-sm">The Philosophy</h2>
          <h1 className="text-5xl font-light leading-tight">Healing is an <br/>Art Form.</h1>
          <div className="space-y-6 text-[#2c3e2d]/70 font-sans font-light leading-relaxed text-lg">
            <p>After a traumatic injury, Dr. Andrew Hutchings sought a sanctuary for healing, both physically and nutritionally.</p>
            <p>Finding the supplement market overly aggressive and artificial, he established Hutchings Retreat—a line of nutritional amenities that treat muscle recovery as a luxurious spa experience for your cells.</p>
          </div>
        </div>
      </div>
    </div>
  );
}"""

    contact = """export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-12 pt-48 pb-24 text-center">
      <h2 className="text-[#d4af37] tracking-[0.2em] uppercase text-sm mb-6">Reservations</h2>
      <h1 className="text-5xl font-light mb-16">Contact the Concierge</h1>
      <form className="space-y-12">
        <div className="grid grid-cols-2 gap-12">
          <input type="text" placeholder="First Name" className="w-full bg-transparent border-b border-[#2c3e2d]/20 py-4 outline-none focus:border-[#d4af37] transition-colors font-sans placeholder:text-[#2c3e2d]/40" />
          <input type="text" placeholder="Last Name" className="w-full bg-transparent border-b border-[#2c3e2d]/20 py-4 outline-none focus:border-[#d4af37] transition-colors font-sans placeholder:text-[#2c3e2d]/40" />
        </div>
        <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-[#2c3e2d]/20 py-4 outline-none focus:border-[#d4af37] transition-colors font-sans placeholder:text-[#2c3e2d]/40" />
        <textarea rows={3} placeholder="Your Inquiry" className="w-full bg-transparent border-b border-[#2c3e2d]/20 py-4 outline-none focus:border-[#d4af37] transition-colors font-sans placeholder:text-[#2c3e2d]/40 resize-none"></textarea>
        <button className="bg-[#2c3e2d] text-white px-12 py-4 tracking-[0.2em] uppercase text-sm hover:bg-[#d4af37] transition-colors duration-300">
          Request Information
        </button>
      </form>
    </div>
  );
}"""

    for path, content in [("layout.tsx", layout), ("page.tsx", home), ("products/page.tsx", products), ("about/page.tsx", about), ("contact/page.tsx", contact)]:
        with open(f"src/app/v32/{path}", "w") as f: f.write(content)


def write_v33():
    # Graffiti / Grunge
    os.makedirs("src/app/v33/products", exist_ok=True)
    os.makedirs("src/app/v33/about", exist_ok=True)
    os.makedirs("src/app/v33/contact", exist_ok=True)
    
    names = ["RIOT WHEY", "STREET MASS", "GRAFF ENERGY", "PUNK BCAA", "GRIME CREATINE", "URBAN VITA", "HOOD OMEGA", "ALLEY TEST"]
    
    layout = """import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans selection:bg-[#ff003c] selection:text-white bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]">
      <nav className="border-b-4 border-white bg-black/90 p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <Link href="/v33" className="text-4xl font-black italic tracking-tighter text-[#ff003c] drop-shadow-[2px_2px_0_#ffffff] transform -rotate-2">
            HUTCHINGS
          </Link>
          <div className="flex gap-6 mt-4 md:mt-0 font-bold text-xl uppercase italic">
            <Link href="/v33/about" className="hover:text-[#ff003c] hover:bg-white px-2 transition-all">Crew</Link>
            <Link href="/v33/products" className="hover:text-[#ff003c] hover:bg-white px-2 transition-all">Stash</Link>
            <Link href="/v33/contact" className="hover:text-[#ff003c] hover:bg-white px-2 transition-all">Holler</Link>
          </div>
        </div>
      </nav>
      <div className="relative overflow-hidden">
        {/* Fake spray paint splatters */}
        <div className="absolute top-20 -left-10 w-64 h-64 bg-[#ff003c] rounded-full blur-[80px] opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-40 -right-20 w-80 h-80 bg-white rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
        {children}
      </div>
    </div>
  );
}"""

    home = """import Link from 'next/link';
export default function Home() {
  return (
    <>
      <section className="px-6 py-20 min-h-[80vh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-[#ff003c] text-white font-black italic px-4 py-1 text-2xl inline-block transform -rotate-3 mb-6">RAW POWER</div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              NO<br/>RULES.<br/><span className="text-transparent" style={{WebkitTextStroke: '2px white'}}>JUST GAINS.</span>
            </h1>
            <p className="text-xl text-[#aaaaaa] font-bold max-w-md mb-10 border-l-4 border-[#ff003c] pl-4">
              Stop playing nice. Rip the muscle fibers and fuel them with the most aggressive isolate on the street.
            </p>
            <Link href="/v33/products" className="inline-block bg-white text-black text-3xl font-black italic uppercase px-10 py-4 hover:bg-[#ff003c] hover:text-white transition-colors shadow-[8px_8px_0_#ff003c]">
              RAID THE STASH
            </Link>
          </div>
          
          <div className="relative flex justify-center items-center">
             <div className="absolute inset-0 bg-black border-8 border-white transform rotate-6"></div>
             <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full h-auto object-cover relative z-10 filter contrast-[1.5] saturate-0 shadow-[10px_10px_0_#ff003c] transform -rotate-3" alt="Grunge Protein" />
             <div className="absolute -bottom-6 -right-6 bg-[#ff003c] text-white font-black text-4xl p-4 rotate-12 z-20 shadow-xl border-4 border-white">SOLD OUT?</div>
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
        <div className="bg-black border-4 border-[#333333] p-4 hover:border-white transition-colors group relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#ff003c] text-white font-black italic px-3 py-1 z-10 border-b-4 border-l-4 border-black">${price}</div>
          <div className="w-full h-64 bg-[#111111] mb-6 flex items-center justify-center relative overflow-hidden">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
             <img src="{img}" className="h-[90%] object-contain filter contrast-125 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10" alt="{name}" />
          </div>
          <h2 className="text-3xl font-black italic uppercase text-white mb-4 leading-none">{name}</h2>
          <button className="w-full bg-[#ff003c] text-white text-xl font-black italic uppercase py-3 hover:bg-white hover:text-black transition-colors">
            COP IT
          </button>
        </div>"""

    products = f"""export default function Products() {{
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-white text-black inline-block px-8 py-2 mb-16 transform -skew-x-12">
        <h1 className="text-6xl font-black italic uppercase tracking-tighter">THE STASH</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{products_html}
      </div>
    </div>
  );
}}"""

    about = """export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-7xl font-black uppercase tracking-tighter mb-8 bg-[#ff003c] text-white inline-block px-4 leading-none">THE<br/>DOC</h1>
          <p className="text-2xl font-bold italic text-[#aaaaaa] mb-6 border-l-4 border-white pl-4">
            He broke every bone. He hit rock bottom. Then he rebuilt himself.
          </p>
          <p className="text-lg font-medium">
            Dr. Hutchings didn't create these formulas in a sterile lab. He created them in the gutter, fighting for recovery. This is protein for the streets, for the fighters, for the ones who refuse to stay down.
          </p>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="absolute inset-0 bg-[#ff003c] translate-x-4 translate-y-4"></div>
          <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Hutchings" className="relative z-10 w-full filter contrast-[2] saturate-0 brightness-75" />
          <div className="absolute -bottom-6 -left-6 bg-black border-4 border-white p-2 z-20 rotate-12">
            <span className="text-[#ff003c] font-black text-3xl">WANTED</span>
          </div>
        </div>
      </div>
    </div>
  );
}"""

    contact = """export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <div className="bg-black border-8 border-[#333333] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff003c] blur-[60px] opacity-40"></div>
        <h1 className="text-5xl font-black italic uppercase text-white mb-8 border-b-4 border-[#ff003c] pb-2 inline-block">SAY SOMETHING</h1>
        <form className="space-y-6 relative z-10">
          <div>
            <input type="text" placeholder="YOUR TAG (NAME)" className="w-full bg-[#111111] border-2 border-[#333333] p-4 text-white font-bold uppercase outline-none focus:border-white transition-colors" />
          </div>
          <div>
            <textarea rows={5} placeholder="DROP A LINE..." className="w-full bg-[#111111] border-2 border-[#333333] p-4 text-white font-bold uppercase outline-none focus:border-white transition-colors resize-none"></textarea>
          </div>
          <button className="w-full bg-white text-black text-3xl font-black italic uppercase py-4 hover:bg-[#ff003c] hover:text-white transition-colors">
            SPRAY IT
          </button>
        </form>
      </div>
    </div>
  );
}"""

    for path, content in [("layout.tsx", layout), ("page.tsx", home), ("products/page.tsx", products), ("about/page.tsx", about), ("contact/page.tsx", contact)]:
        with open(f"src/app/v33/{path}", "w") as f: f.write(content)

write_v32()
write_v33()
