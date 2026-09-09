import os

images = [
    "https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg",
    "https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg",
] * 2
names = ["FORM 01", "FORM 02", "FORM 03", "FORM 04", "FORM 05", "FORM 06", "FORM 07", "FORM 08"]

layout = """import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f5f5dc] text-black font-sans selection:bg-[#ff0000] selection:text-white">
      <nav className="border-b-4 border-black bg-white">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/v21" className="text-4xl font-bold tracking-tighter flex items-center">
            <div className="flex mr-4">
              <div className="w-8 h-8 bg-[#ff0000] rounded-full"></div>
              <div className="w-8 h-8 bg-[#0000ff] -ml-4"></div>
              <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-b-[#ffff00] -ml-4 mt-1"></div>
            </div>
            HUTCHINGS
          </Link>
          <div className="hidden md:flex gap-12 text-sm font-bold tracking-widest uppercase">
            <Link href="/v21/about" className="hover:text-[#ff0000] transition-colors">Design</Link>
            <Link href="/v21/products" className="hover:text-[#0000ff] transition-colors">Catalog</Link>
            <Link href="/v21/contact" className="hover:text-[#ffbb00] transition-colors">Connect</Link>
          </div>
        </div>
      </nav>
      
      <div>
        {children}
      </div>
      
      <footer className="border-t-4 border-black bg-white px-6 py-12 mt-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="font-bold tracking-widest uppercase mb-4 md:mb-0">Hutchings Health / 1920-2026</div>
          <div className="flex gap-4">
            <div className="w-4 h-4 bg-[#ff0000] rounded-full"></div>
            <div className="w-4 h-4 bg-[#0000ff]"></div>
            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-[#ffff00]"></div>
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
      <section className="relative min-h-[80vh] flex items-center border-b-4 border-black overflow-hidden bg-white">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[#ff0000] border-l-4 border-black hidden md:block z-0"></div>
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#ffff00] rounded-full border-4 border-black hidden md:block z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-12 border-4 border-black shadow-[16px_16px_0_rgba(0,0,255,1)]">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4 border-b-4 border-black pb-2 inline-block">FORM FOLLOWS FUNCTION</h2>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
              PURE <br/> PROTEIN
            </h1>
            <p className="text-xl font-medium mb-12 max-w-sm">
              Construct your body with the most basic, essential building blocks. No unnecessary ornamentation.
            </p>
            <Link href="/v21/products" className="inline-block bg-[#0000ff] text-white font-bold text-xl tracking-widest uppercase px-12 py-6 border-4 border-black hover:bg-black transition-colors">
              VIEW CATALOG
            </Link>
          </div>
          <div className="flex justify-center relative">
            <div className="bg-white border-4 border-black p-4 relative z-20 transform rotate-6 hover:rotate-0 transition-transform duration-500 shadow-[16px_16px_0_rgba(255,0,0,1)]">
              <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full max-w-sm filter grayscale contrast-125" alt="Protein Element" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6 bg-[#f5f5dc]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-0 border-4 border-black shadow-[16px_16px_0_rgba(0,0,0,1)]">
          <div className="bg-white p-12 border-b-4 md:border-b-0 md:border-r-4 border-black text-center group hover:bg-[#ff0000] hover:text-white transition-colors">
            <div className="w-24 h-24 bg-[#ff0000] group-hover:bg-white rounded-full mx-auto mb-8 border-4 border-black"></div>
            <h3 className="text-3xl font-black uppercase mb-4">SIMPLICITY</h3>
            <p className="font-medium">Reduced to only the essential amino acids.</p>
          </div>
          <div className="bg-white p-12 border-b-4 md:border-b-0 md:border-r-4 border-black text-center group hover:bg-[#0000ff] hover:text-white transition-colors">
            <div className="w-24 h-24 bg-[#0000ff] group-hover:bg-white mx-auto mb-8 border-4 border-black"></div>
            <h3 className="text-3xl font-black uppercase mb-4">STRUCTURE</h3>
            <p className="font-medium">The foundation for structural muscular integrity.</p>
          </div>
          <div className="bg-white p-12 text-center group hover:bg-[#ffff00] transition-colors">
            <div className="w-0 h-0 border-l-[48px] border-l-transparent border-r-[48px] border-r-transparent border-b-[83px] border-b-[#ffff00] group-hover:border-b-black mx-auto mb-8"></div>
            <h3 className="text-3xl font-black uppercase mb-4">GEOMETRY</h3>
            <p className="font-medium">Perfectly formulated at the molecular level.</p>
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
    colors = ["#ff0000", "#0000ff", "#ffff00", "white"]
    color = colors[i % 4]
    text_color = "black" if color != "#0000ff" else "white"
    
    products_html += f"""
        <div className="border-4 border-black flex flex-col hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-shadow">
          <div className="bg-white border-b-4 border-black p-8 flex items-center justify-center relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img src="{img}" className="h-full object-contain filter grayscale contrast-125 relative z-10" alt="{name}" />
            <div className="absolute top-4 left-4 font-bold text-sm tracking-widest">{i+1:02}</div>
          </div>
          <div className="p-6 bg-[{color}] text-{text_color} flex-1 flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">{name}</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold">${price}</span>
              <button className="border-2 border-{text_color} px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-{text_color} hover:text-[{color}] transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>"""

products = f"""export default function Products() {{
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-16 border-b-8 border-black pb-8 flex flex-col md:flex-row justify-between items-end">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">CATALOG</h1>
        <div className="text-xl font-bold uppercase tracking-widest mt-4 md:mt-0">Elements of Growth</div>
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
    <div className="max-w-5xl mx-auto px-6 py-24">
      <div className="border-8 border-black bg-white grid md:grid-cols-2 shadow-[24px_24px_0_rgba(0,0,255,1)]">
        <div className="border-b-8 md:border-b-0 md:border-r-8 border-black p-12 bg-[#ffff00]">
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-12">THE ARCHITECT</h1>
          <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-full filter grayscale contrast-200 border-4 border-black mix-blend-multiply" />
        </div>
        <div className="p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold uppercase mb-6">Dr. Andrew Hutchings</h2>
          <div className="w-16 h-4 bg-[#ff0000] mb-8"></div>
          <p className="text-xl font-medium leading-relaxed mb-6">
            Healing requires structure. When my own bones were broken, I realized that true recovery is an architectural problem.
          </p>
          <p className="text-xl font-medium leading-relaxed">
            Hutchings Health provides the raw materials. Stripped of all artifice, coloring, and deceit. Just the pure geometric necessity of protein.
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
      <div className="bg-[#0000ff] border-8 border-black p-12 shadow-[16px_16px_0_rgba(255,0,0,1)] text-white">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-12 border-b-4 border-white pb-4">COMMUNICATION</h1>
        
        <form className="space-y-8 text-black">
          <div>
            <label className="block text-white font-bold tracking-widest uppercase mb-2">IDENTIFICATION</label>
            <input type="text" className="w-full bg-white border-4 border-black p-4 font-bold outline-none focus:bg-[#ffff00] transition-colors" />
          </div>
          <div>
            <label className="block text-white font-bold tracking-widest uppercase mb-2">ELECTRONIC MAIL</label>
            <input type="email" className="w-full bg-white border-4 border-black p-4 font-bold outline-none focus:bg-[#ffff00] transition-colors" />
          </div>
          <div>
            <label className="block text-white font-bold tracking-widest uppercase mb-2">DATA TRANSMISSION</label>
            <textarea rows={5} className="w-full bg-white border-4 border-black p-4 font-bold outline-none focus:bg-[#ffff00] transition-colors resize-none"></textarea>
          </div>
          <button className="bg-[#ff0000] text-white border-4 border-black font-black uppercase tracking-widest text-2xl py-6 w-full hover:bg-black transition-colors">
            SUBMIT DATA
          </button>
        </form>
      </div>
    </div>
  );
}
"""

with open("src/app/v21/layout.tsx", "w") as f: f.write(layout)
with open("src/app/v21/page.tsx", "w") as f: f.write(home)
with open("src/app/v21/products/page.tsx", "w") as f: f.write(products)
with open("src/app/v21/about/page.tsx", "w") as f: f.write(about)
with open("src/app/v21/contact/page.tsx", "w") as f: f.write(contact)
