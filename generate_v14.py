import os

images = [
    "https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg",
    "https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg",
] * 2
names = ["ISO-RAPID", "MASS-AERO", "TURBO-NRG", "BCAA-SHIFT", "CREA-F1", "VITA-MAX", "OMEGA-DRIVE", "TEST-BOOST"]

layout = """import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0f0f11] text-white font-sans bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
      <nav className="fixed w-full z-50 bg-[#0f0f11]/90 border-b-2 border-red-600 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/v14" className="text-3xl font-black italic tracking-tighter flex items-center gap-2 transform -skew-x-12">
            HUTCHINGS<span className="text-red-600">PRO</span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-black italic uppercase tracking-wider">
            <Link href="/v14/about" className="hover:text-red-600 transition-colors transform hover:translate-x-1">/ TEAM</Link>
            <Link href="/v14/products" className="hover:text-red-600 transition-colors transform hover:translate-x-1">/ GEAR</Link>
            <Link href="/v14/contact" className="hover:text-red-600 transition-colors transform hover:translate-x-1">/ PIT STOP</Link>
          </div>
        </div>
      </nav>
      
      <div className="pt-20">
        {children}
      </div>
      
      <footer className="bg-red-600 text-white mt-24 py-8 px-6 transform -skew-y-2 translate-y-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 transform skew-y-2">
          <div className="font-black italic text-2xl tracking-tighter">
            HUTCHINGS<span className="text-black">PRO</span>
          </div>
          <div className="text-sm font-bold uppercase tracking-widest">
            PERFORMANCE DIVISION © 2026
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
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="transform -skew-x-6">
            <div className="inline-block bg-red-600 text-white font-black italic px-4 py-1 mb-6 text-xl tracking-wider">
              NEW FORMULA
            </div>
            <h1 className="text-6xl md:text-8xl font-black italic leading-none mb-6 tracking-tighter">
              DOMINATE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-red-800">THE TRACK.</span>
            </h1>
            <p className="text-gray-400 text-xl font-bold italic mb-10 max-w-lg">
              ENGINEERED FOR MAXIMUM SPEED OF ABSORPTION. NO LAG. NO CRASH. JUST PURE HORSEPOWER.
            </p>
            <Link href="/v14/products" className="inline-block bg-white text-black font-black italic px-10 py-5 text-xl tracking-widest uppercase hover:bg-red-600 hover:text-white transition-all transform hover:scale-105 hover:translate-x-2">
              SHOP NOW &gt;&gt;
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-red-600 blur-[100px] opacity-30 rounded-full"></div>
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="relative z-10 w-full max-w-md mx-auto transform rotate-6 hover:rotate-0 transition-transform duration-500 drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]" alt="Hero" />
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6 border-t-4 border-red-600 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black border-l-4 border-red-600 p-8 transform -skew-x-6 hover:-translate-y-2 transition-transform">
              <h3 className="text-3xl font-black italic mb-4 transform skew-x-6">01 // SPEED</h3>
              <p className="text-gray-400 font-bold italic transform skew-x-6">Hydrolyzed for immediate entry into the bloodstream. Faster than the competition.</p>
            </div>
            <div className="bg-black border-l-4 border-white p-8 transform -skew-x-6 hover:-translate-y-2 transition-transform">
              <h3 className="text-3xl font-black italic mb-4 transform skew-x-6">02 // POWER</h3>
              <p className="text-gray-400 font-bold italic transform skew-x-6">Packed with BCAA to keep your engine running at redline.</p>
            </div>
            <div className="bg-black border-l-4 border-red-600 p-8 transform -skew-x-6 hover:-translate-y-2 transition-transform">
              <h3 className="text-3xl font-black italic mb-4 transform skew-x-6">03 // ENDURANCE</h3>
              <p className="text-gray-400 font-bold italic transform skew-x-6">Sustained recovery matrix so you never pit out early.</p>
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
        <div className="bg-zinc-900 p-6 transform -skew-x-6 hover:bg-zinc-800 transition-colors border-b-4 border-transparent hover:border-red-600 group">
          <div className="transform skew-x-6">
            <div className="w-full h-48 flex items-center justify-center mb-6 relative">
              <img src="{img}" className="h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" alt="{name}" />
            </div>
            <h2 className="text-2xl font-black italic mb-1 uppercase tracking-tighter">{name}</h2>
            <div className="text-red-600 font-bold italic text-sm mb-4">AERO DYNAMICS</div>
            <div className="flex justify-between items-end">
              <span className="text-3xl font-black">${price}</span>
              <button className="bg-white text-black font-black italic px-4 py-2 uppercase tracking-widest hover:bg-red-600 hover:text-white transition-colors">
                ADD +
              </button>
            </div>
          </div>
        </div>"""

products = f"""export default function Products() {{
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-16 transform -skew-x-12 inline-block bg-red-600 px-8 py-4">
        <h1 className="text-5xl font-black italic uppercase tracking-tighter transform skew-x-12">PERFORMANCE GEAR</h1>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
{products_html}
      </div>
    </div>
  );
}}
"""

about = """export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row gap-12 items-center bg-zinc-900 p-8 md:p-12 border-l-8 border-red-600 transform -skew-x-3">
        <div className="w-full md:w-1/3 transform skew-x-3">
          <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-full grayscale border-4 border-white" />
        </div>
        <div className="w-full md:w-2/3 transform skew-x-3">
          <h1 className="text-5xl font-black italic uppercase tracking-tighter mb-4 text-white">THE ENGINEER</h1>
          <h2 className="text-2xl font-bold italic text-red-600 mb-8">DR. ANDREW HUTCHINGS</h2>
          <p className="text-lg text-gray-400 font-bold italic leading-relaxed mb-6">
            BUILT FOR SPEED. BUILT FOR POWER. ANDREW BROKE EVERY BONE IN HIS BODY TO TEST THE LIMITS OF HUMAN ENDURANCE.
          </p>
          <p className="text-lg text-gray-400 font-bold italic leading-relaxed">
            NOW HE FORMULATES THE MOST AGGRESSIVE SUPPLEMENTS ON THE MARKET. NO COMPROMISES. ONLY PODIUM FINISHES.
          </p>
        </div>
      </div>
    </div>
  );
}
"""

contact = """export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <div className="mb-12 transform -skew-x-12 inline-block bg-red-600 px-8 py-4">
        <h1 className="text-4xl font-black italic uppercase tracking-tighter transform skew-x-12">PIT STOP / COMMUNICATE</h1>
      </div>
      
      <form className="space-y-6 bg-zinc-900 p-8 border-l-4 border-white transform -skew-x-3">
        <div className="transform skew-x-3 space-y-6">
          <div>
            <label className="block text-gray-400 font-black italic uppercase mb-2 tracking-widest">DRIVER NAME</label>
            <input type="text" className="w-full bg-black border-2 border-zinc-800 focus:border-red-600 text-white p-4 font-bold outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-gray-400 font-black italic uppercase mb-2 tracking-widest">RADIO FREQ (EMAIL)</label>
            <input type="email" className="w-full bg-black border-2 border-zinc-800 focus:border-red-600 text-white p-4 font-bold outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-gray-400 font-black italic uppercase mb-2 tracking-widest">TELEMETRY DATA (MESSAGE)</label>
            <textarea rows={5} className="w-full bg-black border-2 border-zinc-800 focus:border-red-600 text-white p-4 font-bold outline-none transition-colors"></textarea>
          </div>
          <button className="bg-white text-black font-black italic px-12 py-4 uppercase tracking-widest hover:bg-red-600 hover:text-white transition-colors">
            SEND &gt;&gt;
          </button>
        </div>
      </form>
    </div>
  );
}
"""

with open("src/app/v14/layout.tsx", "w") as f: f.write(layout)
with open("src/app/v14/page.tsx", "w") as f: f.write(home)
with open("src/app/v14/products/page.tsx", "w") as f: f.write(products)
with open("src/app/v14/about/page.tsx", "w") as f: f.write(about)
with open("src/app/v14/contact/page.tsx", "w") as f: f.write(contact)
