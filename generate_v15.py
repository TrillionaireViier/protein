import os

images = [
    "https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg",
    "https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg",
] * 2
names = ["ULTRA WHEY 9000", "MECHA MASS", "ENERGY BURST!!", "BCAA STRIKE", "CREA-PUNCH", "VITA-FLASH", "OMEGA-SHIELD", "TEST-POWER"]

layout = """import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-black font-black uppercase tracking-tight bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] overflow-x-hidden">
      <nav className="fixed w-full z-50 top-0 border-b-8 border-black bg-yellow-400">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/v15" className="text-4xl italic text-red-600 drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
            HUTCHINGS<span className="text-white">プロ</span>
          </Link>
          <div className="hidden md:flex gap-6 text-xl">
            <Link href="/v15/about" className="hover:text-white hover:drop-shadow-[2px_2px_0_rgba(0,0,0,1)] transition-all">アバウト (ABOUT)</Link>
            <Link href="/v15/products" className="hover:text-white hover:drop-shadow-[2px_2px_0_rgba(0,0,0,1)] transition-all">ショップ (STORE)</Link>
            <Link href="/v15/contact" className="hover:text-white hover:drop-shadow-[2px_2px_0_rgba(0,0,0,1)] transition-all">コンタクト (CONTACT)</Link>
          </div>
        </div>
      </nav>
      
      <div className="pt-20">
        {children}
      </div>
      
      <footer className="bg-blue-600 border-t-8 border-black p-8 text-center text-white mt-16">
        <h2 className="text-4xl italic drop-shadow-[4px_4px_0_rgba(0,0,0,1)] mb-4">HUTCHINGS TOKYO © 2026</h2>
        <p className="text-xl">THE STRONGEST PROTEIN IN THE UNIVERSE!</p>
      </footer>
    </div>
  );
}
"""

home = """import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="relative min-h-[90vh] flex flex-col md:flex-row border-b-8 border-black">
        <div className="w-full md:w-1/2 bg-red-500 border-r-8 border-black p-12 flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_20%,_#000_150%)] opacity-20"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-30"></div>
          <div className="relative z-10 transform -skew-x-6">
            <div className="bg-yellow-400 text-black border-4 border-black px-6 py-2 inline-block text-3xl mb-6 shadow-[8px_8px_0_rgba(0,0,0,1)]">
              LEVEL UP! レベルアップ
            </div>
            <h1 className="text-6xl md:text-8xl italic text-white drop-shadow-[6px_6px_0_rgba(0,0,0,1)] leading-none mb-8">
              UNLEASH YOUR <br/> <span className="text-yellow-400">ULTIMATE</span> POWER!!
            </h1>
            <p className="text-2xl text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-12">
              100% PURE ISOLATE. NO FILLERS. JUST RAW STRENGTH.
            </p>
            <Link href="/v15/products" className="inline-block bg-blue-600 text-white border-4 border-black text-3xl px-12 py-6 italic shadow-[8px_8px_0_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
              GO TO STORE &gt;&gt;
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-blue-400 flex items-center justify-center relative p-12">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/halftone.png')] opacity-50"></div>
          <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full max-w-lg relative z-10 border-8 border-black shadow-[16px_16px_0_rgba(255,255,0,1)] transform rotate-3" alt="Protein" />
        </div>
      </section>
      
      <section className="py-24 px-6 bg-white border-b-8 border-black">
        <h2 className="text-6xl text-center italic mb-16 drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-blue-600">SPECIAL ATTACKS (BENEFITS)</h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="border-8 border-black bg-yellow-400 p-8 shadow-[12px_12px_0_rgba(0,0,0,1)] transform -rotate-2 hover:rotate-0 transition-transform">
            <h3 className="text-4xl text-white drop-shadow-[3px_3px_0_rgba(0,0,0,1)] mb-4">💥 INSTANT RECOVERY</h3>
            <p className="text-xl">Heal your muscles at lightning speed!</p>
          </div>
          <div className="border-8 border-black bg-red-500 p-8 shadow-[12px_12px_0_rgba(0,0,0,1)] transform rotate-2 hover:rotate-0 transition-transform">
            <h3 className="text-4xl text-white drop-shadow-[3px_3px_0_rgba(0,0,0,1)] mb-4">🔥 PURE ENERGY</h3>
            <p className="text-xl">Zero bloat, 100% absorption matrix.</p>
          </div>
          <div className="border-8 border-black bg-green-400 p-8 shadow-[12px_12px_0_rgba(0,0,0,1)] transform -rotate-1 hover:rotate-0 transition-transform">
            <h3 className="text-4xl text-white drop-shadow-[3px_3px_0_rgba(0,0,0,1)] mb-4">💪 MASS BUILDER</h3>
            <p className="text-xl">Become the strongest version of yourself.</p>
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
        <div className="bg-white border-8 border-black shadow-[12px_12px_0_rgba(0,0,255,1)] p-4 hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(255,0,0,1)] transition-all">
          <div className="border-4 border-black mb-4 bg-yellow-300 relative overflow-hidden group h-56 flex items-center justify-center">
            <img src="{img}" className="h-full object-cover group-hover:scale-110 transition-transform" alt="{name}" />
          </div>
          <h2 className="text-3xl italic text-red-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-2">{name}</h2>
          <div className="text-xl text-black mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">アイテム (ITEM)</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-white">${price}</span>
            <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 text-2xl italic hover:bg-red-500 transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BUY!
            </button>
          </div>
        </div>"""

products = f"""export default function Products() {{
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-8xl italic text-yellow-400 drop-shadow-[6px_6px_0_rgba(0,0,0,1)] stroke-black">ITEM SHOP</h1>
        <p className="text-3xl mt-4 bg-red-500 text-white inline-block px-6 py-2 border-4 border-black shadow-[6px_6px_0_rgba(0,0,0,1)]">CHOOSE YOUR WEAPON</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
{products_html}
      </div>
    </div>
  );
}}
"""

about = """export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <div className="border-8 border-black bg-blue-500 p-8 shadow-[24px_24px_0_rgba(255,0,0,1)] flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/3">
          <div className="border-8 border-black bg-yellow-400 p-2 transform -rotate-3 shadow-[8px_8px_0_rgba(0,0,0,1)]">
            <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-full filter contrast-125 saturate-150" />
          </div>
        </div>
        <div className="w-full md:w-2/3 text-white">
          <div className="bg-black text-yellow-400 inline-block px-4 py-2 border-4 border-yellow-400 mb-6 text-2xl">
            BOSS BATTLE: THE CREATOR
          </div>
          <h1 className="text-6xl italic drop-shadow-[4px_4px_0_rgba(0,0,0,1)] mb-6">DR. ANDREW HUTCHINGS</h1>
          <p className="text-2xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] leading-relaxed mb-6">
            HE BROKE HIS BONES. HE TRAINED IN THE MOUNTAINS. HE MASTERED THE ALCHEMY OF PROTEIN SYNTHESIS.
          </p>
          <p className="text-2xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] leading-relaxed">
            NOW HE BRINGS YOU THE ULTIMATE FORMULA TO DEFEAT WEAKNESS ONCE AND FOR ALL!
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
      <div className="border-8 border-black bg-yellow-400 p-12 shadow-[20px_20px_0_rgba(0,0,255,1)]">
        <h1 className="text-6xl italic text-red-600 drop-shadow-[4px_4px_0_rgba(0,0,0,1)] mb-12 text-center">SEND MESSAGE!!</h1>
        
        <form className="space-y-8">
          <div>
            <label className="block text-3xl mb-2 drop-shadow-[2px_2px_0_rgba(255,255,255,1)]">PLAYER NAME</label>
            <input type="text" className="w-full border-4 border-black p-4 text-2xl shadow-[6px_6px_0_rgba(0,0,0,1)] outline-none focus:bg-blue-100" />
          </div>
          <div>
            <label className="block text-3xl mb-2 drop-shadow-[2px_2px_0_rgba(255,255,255,1)]">EMAIL ADDRESS</label>
            <input type="email" className="w-full border-4 border-black p-4 text-2xl shadow-[6px_6px_0_rgba(0,0,0,1)] outline-none focus:bg-blue-100" />
          </div>
          <div>
            <label className="block text-3xl mb-2 drop-shadow-[2px_2px_0_rgba(255,255,255,1)]">MESSAGE</label>
            <textarea rows={4} className="w-full border-4 border-black p-4 text-2xl shadow-[6px_6px_0_rgba(0,0,0,1)] outline-none focus:bg-blue-100"></textarea>
          </div>
          <button className="w-full bg-red-600 text-white border-4 border-black text-4xl py-6 italic drop-shadow-[4px_4px_0_rgba(0,0,0,1)] shadow-[8px_8px_0_rgba(0,0,0,1)] hover:translate-y-2 hover:shadow-none transition-all mt-8">
            SUBMIT! &gt;&gt;
          </button>
        </form>
      </div>
    </div>
  );
}
"""

with open("src/app/v15/layout.tsx", "w") as f: f.write(layout)
with open("src/app/v15/page.tsx", "w") as f: f.write(home)
with open("src/app/v15/products/page.tsx", "w") as f: f.write(products)
with open("src/app/v15/about/page.tsx", "w") as f: f.write(about)
with open("src/app/v15/contact/page.tsx", "w") as f: f.write(contact)
