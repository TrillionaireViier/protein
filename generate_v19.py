import os

images = [
    "https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg",
    "https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg",
] * 2
names = ["BLOOD WHEY", "DOOM MASS", "HELL ENERGY", "BCAA REAPER", "CREA-SKULL", "VITA-VOID", "OMEGA BEAST", "TEST DEMON"]

layout = """import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-gray-300 font-serif overflow-x-hidden bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]">
      <nav className="border-b border-red-900 bg-black/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
          <Link href="/v19" className="text-4xl font-black text-red-700 tracking-widest uppercase mb-6 md:mb-0" style={{fontFamily: 'serif', letterSpacing: '0.2em'}}>
            Hutchings
          </Link>
          <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-500">
            <Link href="/v19/about" className="hover:text-red-600 transition-colors">Lore</Link>
            <Link href="/v19/products" className="hover:text-red-600 transition-colors">Relics</Link>
            <Link href="/v19/contact" className="hover:text-red-600 transition-colors">Summon</Link>
          </div>
        </div>
      </nav>
      
      <div className="py-16">
        {children}
      </div>
      
      <footer className="bg-black text-red-900 p-12 text-center border-t border-red-900 mt-24">
        <p className="tracking-[0.5em] uppercase text-xs">Hutchings Health © MMXXVI</p>
      </footer>
    </div>
  );
}
"""

home = """import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="min-h-[80vh] flex items-center justify-center relative px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#3f0000_0%,_#000000_70%)] opacity-40"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-red-800 tracking-[0.5em] uppercase text-sm mb-8">Ascend from weakness</h2>
          <h1 className="text-7xl md:text-9xl font-black text-red-600 mb-8 uppercase tracking-widest" style={{fontFamily: 'serif', textShadow: '2px 2px 10px rgba(220, 38, 38, 0.5)'}}>
            ISOLATE
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-16 italic max-w-2xl mx-auto leading-relaxed border-t border-b border-red-900 py-8">
            Forged in the fires of discipline. A pure, unadulterated protein matrix designed to resurrect broken muscle tissue.
          </p>
          
          <div className="flex justify-center mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-red-600 blur-[50px] opacity-20 rounded-full"></div>
              <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="relative z-10 w-64 grayscale contrast-150 brightness-75" alt="Dark Protein" />
            </div>
          </div>
          
          <Link href="/v19/products" className="inline-block border border-red-800 text-red-600 hover:bg-red-900 hover:text-black uppercase tracking-[0.3em] px-12 py-4 transition-all duration-500 text-sm">
            Enter the Crypt
          </Link>
        </div>
      </section>
      
      <section className="py-24 px-6 border-t border-red-900/50 max-w-6xl mx-auto mt-24">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center p-8 border border-red-900/30 hover:border-red-600/50 transition-colors bg-black/50">
            <h3 className="text-2xl text-red-500 mb-4 uppercase tracking-widest" style={{fontFamily: 'serif'}}>Absolute Purity</h3>
            <p className="text-gray-500 italic">Cleansed of all earthly impurities. No false idols, no cheap fillers.</p>
          </div>
          <div className="text-center p-8 border border-red-900/30 hover:border-red-600/50 transition-colors bg-black/50">
            <h3 className="text-2xl text-red-500 mb-4 uppercase tracking-widest" style={{fontFamily: 'serif'}}>Dark Energy</h3>
            <p className="text-gray-500 italic">Harness the raw, untamed power necessary to shatter your plateaus.</p>
          </div>
          <div className="text-center p-8 border border-red-900/30 hover:border-red-600/50 transition-colors bg-black/50">
            <h3 className="text-2xl text-red-500 mb-4 uppercase tracking-widest" style={{fontFamily: 'serif'}}>Immortal Recovery</h3>
            <p className="text-gray-500 italic">Rise from the ashes of your workout stronger than before.</p>
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
        <div className="border border-red-900/40 p-6 flex flex-col items-center text-center group hover:border-red-600 transition-colors bg-black">
          <div className="w-full h-48 mb-6 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-red-900/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img src="{img}" className="h-full object-contain filter grayscale contrast-150 brightness-75 group-hover:scale-110 transition-transform duration-700" alt="{name}" />
          </div>
          <h2 className="text-xl text-red-500 uppercase tracking-widest mb-2" style={{fontFamily: 'serif'}}>{name}</h2>
          <p className="text-gray-600 text-xs italic mb-6">Sacred nutritional artifact.</p>
          <div className="w-full flex justify-between items-center border-t border-red-900/40 pt-4 mt-auto">
            <span className="text-lg text-gray-300 font-bold tracking-widest">${price}</span>
            <button className="text-red-600 uppercase tracking-[0.2em] text-xs hover:text-red-400 transition-colors">
              Claim [ + ]
            </button>
          </div>
        </div>"""

products = f"""export default function Products() {{
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20 border-b border-red-900/50 pb-12">
        <h1 className="text-5xl text-red-600 uppercase tracking-[0.3em] mb-6" style={{fontFamily: 'serif'}}>
          Sacred Relics
        </h1>
        <p className="text-gray-500 italic">Choose your instrument of power.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
{products_html}
      </div>
    </div>
  );
}}
"""

about = """export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="border border-red-900/50 p-12 bg-black/80">
        <h1 className="text-4xl text-red-600 uppercase tracking-[0.3em] mb-12 text-center border-b border-red-900/50 pb-6" style={{fontFamily: 'serif'}}>
          The Master
        </h1>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <div className="border border-red-900 p-2">
              <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-full filter grayscale contrast-200 brightness-50" />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl text-red-500 tracking-widest uppercase mb-4" style={{fontFamily: 'serif'}}>Dr. Andrew Hutchings</h2>
            <div className="space-y-6 text-gray-400 italic leading-loose">
              <p>
                He walked through the valley of shattered bones and torn ligaments. Where others found defeat, he found inspiration for a darker, more potent science.
              </p>
              <p>
                Hutchings Health is not for the weak. It is a covenant. A promise that through discipline, suffering, and the purest isolates on this earth, you shall become unbreakable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
"""

contact = """export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6">
      <div className="border border-red-900/50 p-12 bg-black/80">
        <h1 className="text-3xl text-red-600 uppercase tracking-[0.3em] mb-12 text-center" style={{fontFamily: 'serif'}}>
          Summon Us
        </h1>
        
        <form className="space-y-8">
          <div>
            <label className="block text-gray-500 uppercase tracking-widest text-xs mb-2">Your Name</label>
            <input type="text" className="w-full bg-transparent border-b border-red-900 focus:border-red-500 text-red-500 p-2 outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-gray-500 uppercase tracking-widest text-xs mb-2">Your Mark (Email)</label>
            <input type="email" className="w-full bg-transparent border-b border-red-900 focus:border-red-500 text-red-500 p-2 outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-gray-500 uppercase tracking-widest text-xs mb-2">The Invocation</label>
            <textarea rows={4} className="w-full bg-transparent border border-red-900 focus:border-red-500 text-red-500 p-2 outline-none transition-colors mt-2"></textarea>
          </div>
          <button className="w-full border border-red-900 text-red-600 hover:bg-red-900 hover:text-black uppercase tracking-[0.3em] py-4 transition-colors text-sm mt-8">
            Cast
          </button>
        </form>
      </div>
    </div>
  );
}
"""

with open("src/app/v19/layout.tsx", "w") as f: f.write(layout)
with open("src/app/v19/page.tsx", "w") as f: f.write(home)
with open("src/app/v19/products/page.tsx", "w") as f: f.write(products)
with open("src/app/v19/about/page.tsx", "w") as f: f.write(about)
with open("src/app/v19/contact/page.tsx", "w") as f: f.write(contact)
