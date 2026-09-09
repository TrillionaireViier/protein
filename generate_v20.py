import os

images = [
    "https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg",
    "https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg",
] * 2
names = ["\"ISOLATE\"", "\"MASS\"", "\"ENERGY\"", "\"BCAA\"", "\"CREATINE\"", "\"VITAMIN\"", "\"OMEGA\"", "\"TEST\""]

layout = """import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#ccff00] selection:text-black">
      <nav className="fixed w-full z-50 mix-blend-difference text-white">
        <div className="px-6 py-8 flex items-center justify-between">
          <Link href="/v20" className="text-4xl font-black tracking-tighter uppercase">
            Hutchings<sup className="text-sm">®</sup>
          </Link>
          <div className="hidden md:flex gap-12 text-sm font-bold uppercase tracking-widest">
            <Link href="/v20/about" className="hover:underline decoration-4 underline-offset-4">"ABOUT"</Link>
            <Link href="/v20/products" className="hover:underline decoration-4 underline-offset-4">"STORE"</Link>
            <Link href="/v20/contact" className="hover:underline decoration-4 underline-offset-4">"CONTACT"</Link>
          </div>
        </div>
      </nav>
      
      <div className="relative pt-24 min-h-[90vh]">
        {children}
      </div>
      
      <footer className="bg-black text-white p-12 overflow-hidden relative">
        <div className="absolute -right-20 -top-20 text-[200px] font-black text-white/5 tracking-tighter">HUTCHINGS</div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-end">
          <div>
            <p className="text-3xl font-black mb-2 tracking-tighter uppercase">Hutchings Health</p>
            <p className="text-sm font-bold uppercase tracking-widest text-[#ccff00]">"FOR NUTRITIONAL USE ONLY"</p>
          </div>
          <p className="text-xs uppercase font-bold tracking-widest mt-8 md:mt-0">©2026. DO NOT COPY.</p>
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
      <section className="relative min-h-[85vh] flex items-center px-6 overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-black rounded-full z-0"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-2xl z-10 flex justify-end">
          <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-[500px] filter grayscale mix-blend-hard-light" alt="Protein" />
          
          <div className="absolute top-20 right-20 bg-[#ccff00] text-black font-black uppercase text-2xl p-4 rotate-12 shadow-2xl">
            SOLD OUT
          </div>
          <div className="absolute bottom-20 left-20 bg-white text-black font-black uppercase text-xl p-2 -rotate-6 border-4 border-black">
            "100% PURE"
          </div>
        </div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4 bg-black text-white inline-block px-2">FALL/WINTER '26</h2>
            <h1 className="text-8xl md:text-[150px] font-black uppercase tracking-tighter leading-[0.8] mb-8 mix-blend-difference text-white">
              ISOLATE
            </h1>
            <p className="text-2xl font-bold max-w-md uppercase mb-12 mix-blend-difference text-white">
              THE ULTIMATE MUSCLE SYNTHESIS GARMENT FOR YOUR INSIDES.
            </p>
            <Link href="/v20/products" className="inline-block bg-[#ccff00] text-black font-black uppercase tracking-widest text-2xl px-12 py-6 hover:bg-black hover:text-[#ccff00] transition-colors border-4 border-transparent hover:border-[#ccff00]">
              SHOP COLLECTION &rarr;
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[100px] md:text-[180px] font-black uppercase tracking-tighter text-black/5 leading-[0.8] mb-[-60px] md:mb-[-100px]">FEATURES</h2>
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            <div className="border-t-4 border-black pt-6">
              <h3 className="text-3xl font-black uppercase mb-4">"SPEED"</h3>
              <p className="font-bold text-gray-500 uppercase">Hydrolyzed. Fast absorbing. No delays.</p>
            </div>
            <div className="border-t-4 border-black pt-6">
              <h3 className="text-3xl font-black uppercase mb-4">"CLARITY"</h3>
              <p className="font-bold text-gray-500 uppercase">Zero proprietary blends. We show you everything.</p>
            </div>
            <div className="border-t-4 border-black pt-6 bg-[#ccff00] p-6 -mt-6">
              <h3 className="text-3xl font-black uppercase mb-4">"POWER"</h3>
              <p className="font-bold text-black uppercase">Maximum muscle protein synthesis unlocked.</p>
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
        <div className="group relative">
          <div className="bg-[#f4f4f4] aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <img src="{img}" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" alt="{name}" />
            <div className="absolute top-4 left-4 font-black text-xs uppercase tracking-widest z-10 mix-blend-difference text-white">ITEM NO. 00{i}</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">{name}</h2>
              <p className="text-sm font-bold text-gray-400 uppercase">"SS26 COLLECTION"</p>
            </div>
            <span className="text-xl font-black">${price}</span>
          </div>
          <button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-[#ccff00] hover:text-black transition-colors">
            ADD TO CART
          </button>
        </div>"""

products = f"""export default function Products() {{
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-20 mt-12 flex justify-between items-end border-b-8 border-black pb-8">
        <h1 className="text-[80px] md:text-[120px] font-black uppercase tracking-tighter leading-none">"STORE"</h1>
        <p className="text-xl font-bold uppercase tracking-widest hidden md:block">ALL ITEMS STRICTLY LIMITED.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-24">
{products_html}
      </div>
    </div>
  );
}}
"""

about = """export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="bg-[#ccff00] absolute inset-0 -translate-x-4 translate-y-4"></div>
          <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-full relative z-10 filter grayscale border-4 border-black" />
          <div className="absolute -right-8 bottom-12 bg-black text-white font-black uppercase p-4 text-2xl z-20 -rotate-12">
            THE DOCTOR
          </div>
        </div>
        <div className="pl-0 md:pl-12">
          <h1 className="text-[60px] md:text-[80px] font-black uppercase tracking-tighter leading-none mb-8">"ABOUT"</h1>
          <p className="text-3xl font-bold uppercase leading-tight mb-8">
            HE BROKE HIS BONES SO YOU DON'T HAVE TO.
          </p>
          <div className="text-lg font-bold uppercase text-gray-600 space-y-6">
            <p>Hutchings Health is a lifestyle. It's a statement against weak, filler-filled protein supplements.</p>
            <p>We source only the highest grade isolates. No compromises. No apologies.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
"""

contact = """export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="border-8 border-black p-12 bg-[#ccff00] relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 text-[250px] font-black text-black/10 tracking-tighter leading-none pointer-events-none">?</div>
        
        <h1 className="text-[60px] md:text-[80px] font-black uppercase tracking-tighter leading-none mb-12 relative z-10">"CONTACT"</h1>
        
        <form className="space-y-8 relative z-10">
          <div>
            <label className="block text-2xl font-black uppercase mb-2">"WHO ARE YOU"</label>
            <input type="text" className="w-full bg-white border-4 border-black p-4 text-xl font-bold uppercase focus:outline-none" />
          </div>
          <div>
            <label className="block text-2xl font-black uppercase mb-2">"EMAIL"</label>
            <input type="email" className="w-full bg-white border-4 border-black p-4 text-xl font-bold uppercase focus:outline-none" />
          </div>
          <div>
            <label className="block text-2xl font-black uppercase mb-2">"YOUR INQUIRY"</label>
            <textarea rows={4} className="w-full bg-white border-4 border-black p-4 text-xl font-bold uppercase focus:outline-none resize-none"></textarea>
          </div>
          <button className="bg-black text-white font-black uppercase text-3xl px-12 py-6 hover:bg-white hover:text-black hover:border-black border-4 border-transparent transition-colors mt-8 w-full md:w-auto">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
"""

with open("src/app/v20/layout.tsx", "w") as f: f.write(layout)
with open("src/app/v20/page.tsx", "w") as f: f.write(home)
with open("src/app/v20/products/page.tsx", "w") as f: f.write(products)
with open("src/app/v20/about/page.tsx", "w") as f: f.write(about)
with open("src/app/v20/contact/page.tsx", "w") as f: f.write(contact)
