import os

images = [
    "https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg",
    "https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg",
] * 2
names = ["Isolate Elixir", "Mass Tonic", "Energy Draught", "BCAA Remedy", "Creatine Extract", "Vitamin Cure", "Omega Tincture", "Test Serum"]

layout = """import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f4ebd0] text-[#3e2723] font-serif bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]">
      <div className="border-b-4 border-double border-[#5d4037] p-2 mx-4 mt-4">
        <nav className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-4">
          <Link href="/v13" className="text-3xl font-bold tracking-widest uppercase mb-4 md:mb-0">
            Hutchings Apothecary
          </Link>
          <div className="flex gap-8 text-sm tracking-widest uppercase font-bold">
            <Link href="/v13/about" className="hover:text-[#8d6e63] transition-colors border-b border-transparent hover:border-[#8d6e63]">Philosophy</Link>
            <Link href="/v13/products" className="hover:text-[#8d6e63] transition-colors border-b border-transparent hover:border-[#8d6e63]">Remedies</Link>
            <Link href="/v13/contact" className="hover:text-[#8d6e63] transition-colors border-b border-transparent hover:border-[#8d6e63]">Telegraph</Link>
          </div>
        </nav>
      </div>
      
      <div className="py-12">
        {children}
      </div>
      
      <footer className="border-t-4 border-double border-[#5d4037] mx-4 mt-12 p-8 text-center">
        <p className="tracking-widest uppercase text-xs mb-2">Established MMX</p>
        <p className="tracking-widest uppercase text-xs">Purveyors of Fine Supplements</p>
      </footer>
    </div>
  );
}
"""

home = """import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="px-4">
        <div className="max-w-4xl mx-auto border-4 border-double border-[#5d4037] p-8 text-center bg-[#fcf8e3] bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]">
          <p className="tracking-widest uppercase text-sm mb-4">The Original & Genuine</p>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 uppercase tracking-wider text-[#3e2723]">
            Whey Isolate <br/> Elixir
          </h1>
          
          <div className="w-full h-1 bg-[#5d4037] mb-8"></div>
          <div className="w-full h-0.5 bg-[#5d4037] mb-12"></div>
          
          <div className="flex justify-center mb-12">
            <div className="border-8 border-[#3e2723] rounded-t-full p-2">
              <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-64 h-80 object-cover rounded-t-full sepia contrast-125" alt="Elixir" />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto italic leading-relaxed">
            A miraculous preparation for the restoration of vitality and the rapid synthesis of muscular tissue. Formulated without deception or foul-tasting additives.
          </p>
          
          <Link href="/v13/products" className="inline-block border-2 border-[#5d4037] text-[#5d4037] hover:bg-[#5d4037] hover:text-[#f4ebd0] px-12 py-4 tracking-widest uppercase font-bold transition-colors">
            Procure Now
          </Link>
        </div>
      </section>
      
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <h2 className="text-4xl text-center mb-16 tracking-widest uppercase border-b-2 border-[#5d4037] pb-4">Virtues of our Preparation</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 uppercase">I. Purity</h3>
            <p className="italic">Distilled to its most potent essence. No fraudulent fillers.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 uppercase">II. Vigor</h3>
            <p className="italic">Imparts immense strength and banishes fatigue post-exertion.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 uppercase">III. Digestion</h3>
            <p className="italic">Sits gently upon the stomach, causing no ill winds or discomfort.</p>
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
    products_html += f"""
        <div className="border-2 border-[#5d4037] p-4 bg-[#fcf8e3] text-center flex flex-col group">
          <div className="border border-[#5d4037] p-2 mb-4">
            <img src="{img}" className="w-full h-48 object-cover sepia contrast-125 group-hover:scale-105 transition-transform" alt="{name}" />
          </div>
          <h2 className="text-xl font-bold mb-2 uppercase tracking-wider">{name}</h2>
          <p className="italic text-sm mb-6 flex-1">A fine remedy for athletes.</p>
          <div className="flex flex-col items-center gap-4 mt-auto">
            <span className="text-2xl font-bold">${99 - (i%4)*10}</span>
            <button className="border border-[#5d4037] px-6 py-2 tracking-widest uppercase text-xs hover:bg-[#5d4037] hover:text-[#f4ebd0] transition-colors w-full">
              Add to Satchel
            </button>
          </div>
        </div>"""

products = f"""export default function Products() {{
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold uppercase tracking-widest mb-4">Our Remedies</h1>
        <div className="w-32 h-1 bg-[#5d4037] mx-auto mb-2"></div>
        <div className="w-24 h-0.5 bg-[#5d4037] mx-auto"></div>
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
    <div className="max-w-3xl mx-auto px-4">
      <div className="border-4 border-double border-[#5d4037] p-12 bg-[#fcf8e3]">
        <h1 className="text-4xl font-bold mb-12 text-center uppercase tracking-widest">Our Philosophy</h1>
        <div className="float-left mr-8 mb-4 border-2 border-[#5d4037] p-1">
          <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-48 h-48 object-cover sepia contrast-125" />
        </div>
        <p className="text-lg leading-loose italic mb-6">
          Dr. Andrew Hutchings, a learned man of science and vigor, hath dedicated his life to the pursuit of physical perfection. Having suffered myriad fractures and ailments of the bone, he sought a cure in the purest forms of nutrition.
        </p>
        <p className="text-lg leading-loose italic">
          Thus, Hutchings Health was born. We dispense only the finest isolates, guaranteed to fortify the blood and mend the tendon. Accept no substitutes.
        </p>
        <div className="clear-both"></div>
      </div>
    </div>
  );
}
"""

contact = """export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="border-4 border-double border-[#5d4037] p-12 bg-[#fcf8e3]">
        <h1 className="text-3xl font-bold mb-8 text-center uppercase tracking-widest">Send a Telegraph</h1>
        <form className="space-y-6">
          <div>
            <label className="block tracking-widest uppercase text-xs font-bold mb-2">Your Name, Sir or Madam</label>
            <input type="text" className="w-full bg-transparent border-b-2 border-[#5d4037] p-2 outline-none focus:bg-[#5d4037]/5 transition-colors font-serif" />
          </div>
          <div>
            <label className="block tracking-widest uppercase text-xs font-bold mb-2">Return Address</label>
            <input type="text" className="w-full bg-transparent border-b-2 border-[#5d4037] p-2 outline-none focus:bg-[#5d4037]/5 transition-colors font-serif" />
          </div>
          <div>
            <label className="block tracking-widest uppercase text-xs font-bold mb-2">Your Dispatch</label>
            <textarea rows={5} className="w-full bg-transparent border-2 border-[#5d4037] p-2 outline-none focus:bg-[#5d4037]/5 transition-colors font-serif"></textarea>
          </div>
          <div className="pt-4 text-center">
            <button className="border-2 border-[#5d4037] px-12 py-4 tracking-widest uppercase font-bold hover:bg-[#5d4037] hover:text-[#f4ebd0] transition-colors">
              Dispatch Courier
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
"""

with open("src/app/v13/layout.tsx", "w") as f: f.write(layout)
with open("src/app/v13/page.tsx", "w") as f: f.write(home)
with open("src/app/v13/products/page.tsx", "w") as f: f.write(products)
with open("src/app/v13/about/page.tsx", "w") as f: f.write(about)
with open("src/app/v13/contact/page.tsx", "w") as f: f.write(contact)
