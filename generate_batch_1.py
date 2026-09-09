import os

images = [
    "https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg",
    "https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg",
] * 2

def write_v27():
    # Psychedelic / Trippy
    os.makedirs("src/app/v27/products", exist_ok=True)
    os.makedirs("src/app/v27/about", exist_ok=True)
    os.makedirs("src/app/v27/contact", exist_ok=True)
    
    names = ["COSMIC WHEY", "ASTRAL MASS", "TRIP ENERGY", "AURORA BCAA", "MAGIC CREATINE", "MYSTIC VITA", "VISION OMEGA", "LUCID TEST"]
    
    layout = """import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#110022] text-[#ff00ff] font-sans selection:bg-[#00ffff] selection:text-black overflow-x-hidden">
      <div className="fixed inset-0 z-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/psychedelic.png')] pointer-events-none"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-yellow-400 via-pink-500 to-cyan-400 opacity-20 blur-3xl animate-[spin_10s_linear_infinite] pointer-events-none"></div>
      
      <nav className="relative z-50 p-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <Link href="/v27" className="text-5xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#ff00ff] filter drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] mb-6 md:mb-0">
            Hutchings
          </Link>
          <div className="flex gap-8 text-lg font-black uppercase italic text-[#ffff00]">
            <Link href="/v27/about" className="hover:text-[#00ffff] hover:scale-110 transition-transform">Mind</Link>
            <Link href="/v27/products" className="hover:text-[#00ffff] hover:scale-110 transition-transform">Body</Link>
            <Link href="/v27/contact" className="hover:text-[#00ffff] hover:scale-110 transition-transform">Spirit</Link>
          </div>
        </div>
      </nav>
      <div className="relative z-10 pt-12 pb-24">
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
        <h1 className="text-7xl md:text-[150px] font-black italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-[#ff00ff] to-[#00ffff] filter drop-shadow-[0_0_20px_rgba(255,0,255,0.5)] leading-none mb-8 hover:scale-105 transition-transform duration-500">
          AWAKEN
        </h1>
        <p className="text-2xl md:text-4xl font-bold text-[#00ffff] max-w-3xl leading-relaxed mb-12 drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
          Expand your consciousness and your muscle mass. Pure isolate from another dimension.
        </p>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-[#ff00ff] rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-70"></div>
          <Link href="/v27/products" className="relative bg-[#110022] text-[#ffff00] border-4 border-[#00ffff] text-2xl font-black italic uppercase px-12 py-6 rounded-full inline-block group-hover:bg-[#ff00ff] group-hover:text-white transition-colors">
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
        <div className="bg-[#220044]/80 backdrop-blur-md p-6 rounded-3xl border-2 border-[#ff00ff] hover:border-[#00ffff] hover:-translate-y-4 transition-all duration-300 shadow-[0_0_20px_rgba(255,0,255,0.3)] hover:shadow-[0_0_40px_rgba(0,255,255,0.5)] group">
          <div className="w-full h-56 flex items-center justify-center relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ff00ff] to-[#00ffff] opacity-20 rounded-full blur-xl group-hover:animate-pulse"></div>
            <img src="{img}" className="w-full h-full object-contain filter hue-rotate-90 saturate-200 group-hover:rotate-12 transition-transform duration-500 relative z-10" alt="{name}" />
          </div>
          <h2 className="text-3xl font-black italic text-[#ffff00] mb-2">{name}</h2>
          <div className="flex justify-between items-center mt-6">
            <span className="text-2xl font-bold text-[#00ffff] drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]">${price}</span>
            <button className="bg-[#ff00ff] text-white font-bold italic px-6 py-2 rounded-full hover:bg-[#00ffff] hover:text-black transition-colors">
              Manifest
            </button>
          </div>
        </div>"""

    products = f"""export default function Products() {{
  return (
    <div className="max-w-7xl mx-auto px-6">
      <h1 className="text-6xl md:text-8xl font-black italic text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-yellow-400 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">
        The Formulas
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
{products_html}
      </div>
    </div>
  );
}}"""

    about = """export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-[#220044]/80 backdrop-blur-md p-12 rounded-[3rem] border-4 border-[#00ffff] shadow-[0_0_50px_rgba(0,255,255,0.3)]">
        <h1 className="text-5xl font-black italic text-[#ff00ff] mb-12 text-center drop-shadow-[0_0_10px_rgba(255,0,255,0.8)]">The Guru</h1>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Hutchings" className="w-full rounded-full filter hue-rotate-180 saturate-200 contrast-150 shadow-[0_0_30px_rgba(255,255,0,0.5)]" />
          </div>
          <div className="w-full md:w-1/2 text-xl text-[#00ffff] font-medium leading-loose">
            <p className="mb-6">Dr. Andrew Hutchings didn't just heal his body; he expanded his mind. Through deep meditation and cellular chemistry, he discovered the ultimate truth of protein synthesis.</p>
            <p>Our isolates vibrate at a higher frequency, harmonizing with your muscles to promote spiritual and physical growth.</p>
          </div>
        </div>
      </div>
    </div>
  );
}"""

    contact = """export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6">
      <div className="bg-[#220044]/80 backdrop-blur-md p-12 rounded-[3rem] border-4 border-[#ff00ff] shadow-[0_0_50px_rgba(255,0,255,0.3)]">
        <h1 className="text-4xl font-black italic text-[#ffff00] mb-8 text-center drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]">Channel Us</h1>
        <form className="space-y-8">
          <div>
            <input type="text" placeholder="YOUR AURA (NAME)" className="w-full bg-[#110022] border-b-4 border-[#00ffff] text-[#ff00ff] p-4 text-xl font-bold italic outline-none focus:border-[#ffff00] placeholder:text-[#00ffff]/50 transition-colors" />
          </div>
          <div>
            <textarea rows={4} placeholder="YOUR THOUGHTS..." className="w-full bg-[#110022] border-b-4 border-[#00ffff] text-[#ff00ff] p-4 text-xl font-bold italic outline-none focus:border-[#ffff00] placeholder:text-[#00ffff]/50 transition-colors resize-none mt-4"></textarea>
          </div>
          <button className="w-full bg-gradient-to-r from-[#00ffff] to-[#ff00ff] text-white font-black italic text-2xl py-6 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:scale-105 transition-transform">
            TRANSMIT
          </button>
        </form>
      </div>
    </div>
  );
}"""

    for path, content in [("layout.tsx", layout), ("page.tsx", home), ("products/page.tsx", products), ("about/page.tsx", about), ("contact/page.tsx", contact)]:
        with open(f"src/app/v27/{path}", "w") as f: f.write(content)


def write_v28():
    # Chalkboard / Hand-drawn
    os.makedirs("src/app/v28/products", exist_ok=True)
    os.makedirs("src/app/v28/about", exist_ok=True)
    os.makedirs("src/app/v28/contact", exist_ok=True)
    
    names = ["Sketch Whey", "Rough Mass", "Draft Energy", "Raw BCAA", "Doodle Creatine", "Note Vita", "Scribble Omega", "Outline Test"]
    
    layout = """import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#2c3e2d] text-[#f4f4f4] font-sans selection:bg-white selection:text-[#2c3e2d] bg-[url('https://www.transparenttextures.com/patterns/black-board.png')]">
      <nav className="p-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between border-b-2 border-white/20 pb-4" style={{borderBottomStyle: 'dashed'}}>
          <Link href="/v28" className="text-4xl font-bold mb-4 md:mb-0" style={{fontFamily: 'Comic Sans MS, cursive, sans-serif'}}>
            Hutchings Health
          </Link>
          <div className="flex gap-8 text-xl" style={{fontFamily: 'Comic Sans MS, cursive, sans-serif'}}>
            <Link href="/v28/about" className="hover:text-yellow-200 transition-colors">Our Story</Link>
            <Link href="/v28/products" className="hover:text-blue-200 transition-colors">Products</Link>
            <Link href="/v28/contact" className="hover:text-pink-200 transition-colors">Say Hi!</Link>
          </div>
        </div>
      </nav>
      <div className="py-12">
        {children}
      </div>
    </div>
  );
}"""

    home = """import Link from 'next/link';
export default function Home() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 py-20 text-center" style={{fontFamily: 'Comic Sans MS, cursive, sans-serif'}}>
        <div className="inline-block border-2 border-white p-4 rounded-xl mb-8 transform -rotate-2" style={{borderStyle: 'dashed'}}>
          <h2 className="text-2xl text-yellow-200">Back to basics!</h2>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-12 text-white drop-shadow-md">
          Pure. <br/>Simple. <br/>Protein.
        </h1>
        <p className="text-2xl text-blue-100 max-w-2xl mx-auto mb-16 leading-relaxed">
          No crazy marketing, no weird chemicals. Just the stuff your muscles actually need to grow.
        </p>
        
        <div className="flex justify-center mb-16">
          <div className="border-4 border-white p-2 rounded-full transform rotate-3" style={{borderStyle: 'dashed'}}>
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-64 h-64 object-cover rounded-full filter grayscale sepia-[20%]" alt="Chalk Protein" />
          </div>
        </div>
        
        <Link href="/v28/products" className="inline-block text-3xl font-bold border-4 border-white px-10 py-4 rounded-2xl hover:bg-white hover:text-[#2c3e2d] transition-colors transform hover:-translate-y-2">
          Shop Now ->
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
        <div className="border-2 border-white/50 p-6 rounded-2xl hover:border-white transition-colors transform hover:-rotate-1" style={{{{borderStyle: 'dashed'}}}}>
          <div className="w-full h-48 flex items-center justify-center mb-6">
            <img src="{img}" className="h-full object-contain filter grayscale brightness-125" alt="{name}" />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-yellow-100">{name}</h2>
          <div className="flex justify-between items-center mt-4">
            <span className="text-2xl font-bold">${price}</span>
            <button className="border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#2c3e2d] transition-colors text-lg">
              Buy
            </button>
          </div>
        </div>"""

    products = f"""export default function Products() {{
  return (
    <div className="max-w-7xl mx-auto px-6 py-12" style={{fontFamily: 'Comic Sans MS, cursive, sans-serif'}}>
      <h1 className="text-5xl font-bold text-center mb-16 text-white underline decoration-wavy decoration-yellow-200 underline-offset-8">
        What's in stock
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{products_html}
      </div>
    </div>
  );
}}"""

    about = """export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16" style={{fontFamily: 'Comic Sans MS, cursive, sans-serif'}}>
      <div className="border-4 border-white p-8 md:p-16 rounded-3xl" style={{borderStyle: 'dashed'}}>
        <h1 className="text-5xl font-bold text-center mb-12 text-pink-200">About the Doc</h1>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Doc" className="w-full rounded-2xl filter grayscale sepia-[20%] border-4 border-white" />
            <p className="text-center mt-4 text-xl">Dr. H</p>
          </div>
          <div className="w-full md:w-2/3 text-2xl leading-relaxed space-y-6 text-blue-100">
            <p>He broke almost every bone in his body. Not fun.</p>
            <p>But while healing, he figured out exactly what the body needs to rebuild muscle fast. No fluff, just the raw ingredients.</p>
          </div>
        </div>
      </div>
    </div>
  );
}"""

    contact = """export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20" style={{fontFamily: 'Comic Sans MS, cursive, sans-serif'}}>
      <div className="border-4 border-white p-12 rounded-3xl" style={{borderStyle: 'dashed'}}>
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-200">Write us a note</h1>
        <form className="space-y-8">
          <div>
            <label className="block text-2xl mb-2 text-yellow-100">Your Name:</label>
            <input type="text" className="w-full bg-transparent border-b-4 border-white/50 text-2xl p-2 outline-none focus:border-white transition-colors" style={{borderBottomStyle: 'dashed'}} />
          </div>
          <div>
            <label className="block text-2xl mb-2 text-yellow-100">Message:</label>
            <textarea rows={4} className="w-full bg-transparent border-4 border-white/50 text-2xl p-4 rounded-xl outline-none focus:border-white transition-colors resize-none mt-2" style={{borderStyle: 'dashed'}}></textarea>
          </div>
          <div className="text-center pt-8">
            <button className="border-4 border-white text-3xl font-bold px-12 py-4 rounded-full hover:bg-white hover:text-[#2c3e2d] transition-colors transform hover:rotate-3">
              Send!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}"""

    for path, content in [("layout.tsx", layout), ("page.tsx", home), ("products/page.tsx", products), ("about/page.tsx", about), ("contact/page.tsx", contact)]:
        with open(f"src/app/v28/{path}", "w") as f: f.write(content)

write_v27()
write_v28()
