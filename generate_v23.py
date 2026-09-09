import os

images = [
    "https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg",
    "https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg",
] * 2
names = ["SUMMER WHEY", "OASIS MASS", "BEACH ENERGY", "SUNSET BCAA", "COAST CREATINE", "PALM VITA", "REEF OMEGA", "CORAL TEST"]

layout = """import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fffae6] text-[#2c4c3b] font-sans selection:bg-[#ff7f50] selection:text-white relative">
      <div className="fixed inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/aztle.png')] opacity-20 pointer-events-none"></div>
      
      {/* Sun gradient */}
      <div className="fixed top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-[#ff7f50] to-[#ffda75] rounded-full blur-[80px] opacity-40 z-0 pointer-events-none"></div>

      <nav className="relative w-full z-50 bg-[#fffae6]/80 backdrop-blur-md border-b-2 border-[#ff7f50]/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/v23" className="text-3xl font-black text-[#ff7f50] tracking-tighter uppercase">
            Hutchings <span className="font-light text-[#20b2aa]">Oasis</span>
          </Link>
          <div className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-widest text-[#2c4c3b]">
            <Link href="/v23/about" className="hover:text-[#ff7f50] transition-colors">The Retreat</Link>
            <Link href="/v23/products" className="hover:text-[#ff7f50] transition-colors">Juice Bar</Link>
            <Link href="/v23/contact" className="hover:text-[#ff7f50] transition-colors">Reservations</Link>
          </div>
        </div>
      </nav>
      
      <div className="relative z-10">
        {children}
      </div>
      
      <footer className="relative z-10 bg-[#20b2aa] text-white mt-24 py-16 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-4 opacity-80 uppercase tracking-tighter">Stay Hydrated.</h2>
          <p className="font-bold tracking-widest text-sm opacity-60 uppercase">Hutchings Tropical Nutrition © 2026</p>
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
      <section className="min-h-[85vh] flex items-center px-6 py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="order-2 md:order-1">
            <h2 className="text-[#20b2aa] font-black uppercase tracking-[0.2em] mb-4">Summer Collection</h2>
            <h1 className="text-6xl md:text-8xl font-black text-[#2c4c3b] tracking-tighter leading-[0.9] mb-8 uppercase">
              Refresh <br/> <span className="text-[#ff7f50]">Your Gains.</span>
            </h1>
            <p className="text-xl text-[#2c4c3b]/70 font-medium mb-10 max-w-lg leading-relaxed">
              Ditch the heavy, chalky shakes. Our ultra-filtered isolate is light, refreshing, and tastes like a tropical vacation.
            </p>
            <div className="flex gap-4">
              <Link href="/v23/products" className="bg-[#ff7f50] text-white font-black uppercase tracking-widest px-8 py-4 rounded-full shadow-[0_10px_30px_rgba(255,127,80,0.3)] hover:shadow-[0_15px_40px_rgba(255,127,80,0.5)] hover:-translate-y-1 transition-all">
                Shop The Bar
              </Link>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center relative">
            <div className="absolute inset-0 bg-[#20b2aa]/20 rounded-full blur-3xl transform scale-150"></div>
            <div className="relative bg-white/50 backdrop-blur-sm p-8 rounded-[3rem] border-4 border-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full max-w-sm filter saturate-150 brightness-110" alt="Tropical Protein" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6 bg-white/50 backdrop-blur-md relative z-10 border-y-2 border-[#ff7f50]/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border-2 border-[#fffae6] hover:-translate-y-2 transition-transform text-center">
            <div className="w-16 h-16 bg-[#ffda75] rounded-full mx-auto mb-6 flex items-center justify-center text-3xl">☀️</div>
            <h3 className="text-2xl font-black text-[#2c4c3b] mb-4 uppercase">Light & Clear</h3>
            <p className="text-[#2c4c3b]/70 font-medium">Mixes perfectly clear like juice. Say goodbye to thick, milky textures.</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border-2 border-[#fffae6] hover:-translate-y-2 transition-transform text-center">
            <div className="w-16 h-16 bg-[#20b2aa] rounded-full mx-auto mb-6 flex items-center justify-center text-3xl">🌊</div>
            <h3 className="text-2xl font-black text-[#2c4c3b] mb-4 uppercase">Ocean Pure</h3>
            <p className="text-[#2c4c3b]/70 font-medium">Triple-filtered for maximum bioavailability and zero stomach discomfort.</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border-2 border-[#fffae6] hover:-translate-y-2 transition-transform text-center">
            <div className="w-16 h-16 bg-[#ff7f50] rounded-full mx-auto mb-6 flex items-center justify-center text-3xl">🍹</div>
            <h3 className="text-2xl font-black text-[#2c4c3b] mb-4 uppercase">Island Flavors</h3>
            <p className="text-[#2c4c3b]/70 font-medium">Naturally flavored with real fruit extracts for a refreshing post-workout treat.</p>
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
        <div className="bg-white p-6 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#ff7f50]/30 group">
          <div className="bg-[#fffae6] rounded-3xl p-6 mb-6 flex items-center justify-center relative overflow-hidden h-56">
            <div className="absolute inset-0 bg-gradient-to-br from-[#20b2aa]/10 to-[#ff7f50]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img src="{img}" className="h-full object-contain filter saturate-150 group-hover:scale-110 transition-transform duration-500 relative z-10" alt="{name}" />
          </div>
          <h2 className="text-xl font-black text-[#2c4c3b] uppercase mb-1">{name}</h2>
          <p className="text-[#20b2aa] font-bold text-sm uppercase tracking-widest mb-4">Clear Isolate</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-black text-[#ff7f50]">${price}</span>
            <button className="bg-[#2c4c3b] text-white font-bold uppercase text-xs px-6 py-3 rounded-full hover:bg-[#ff7f50] transition-colors">
              Add +
            </button>
          </div>
        </div>"""

products = f"""export default function Products() {{
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black text-[#ff7f50] uppercase tracking-tighter mb-4">The Juice Bar</h1>
        <p className="text-xl text-[#2c4c3b]/70 font-medium">Select your refreshing recovery formula.</p>
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
    <div className="max-w-5xl mx-auto px-6 py-24 relative z-10">
      <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 border-4 border-[#fffae6]">
        <h1 className="text-5xl font-black text-[#20b2aa] uppercase tracking-tighter mb-12 text-center">The Retreat</h1>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <div className="relative p-2 bg-[#ff7f50] rounded-full transform -rotate-6 shadow-xl">
              <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-full rounded-full filter contrast-125 saturate-150 border-4 border-white" />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-black text-[#2c4c3b] uppercase mb-4">Dr. Andrew Hutchings</h2>
            <p className="text-lg text-[#2c4c3b]/80 font-medium leading-relaxed mb-6">
              After years of grueling rehabilitation and thick, heavy protein shakes, Dr. Hutchings decided recovery shouldn't feel like a chore.
            </p>
            <p className="text-lg text-[#2c4c3b]/80 font-medium leading-relaxed mb-6">
              He retreated to the coast to develop a lighter, clearer, and more refreshing approach to muscle synthesis. 
            </p>
            <p className="text-lg text-[#ff7f50] font-black uppercase tracking-widest">
              Welcome to the oasis.
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
    <div className="max-w-3xl mx-auto px-6 py-24 relative z-10">
      <div className="bg-white rounded-[3rem] shadow-2xl p-12 border-4 border-[#fffae6]">
        <h1 className="text-4xl font-black text-[#2c4c3b] uppercase tracking-tighter mb-4 text-center">Say Aloha</h1>
        <p className="text-center text-[#20b2aa] font-bold uppercase tracking-widest mb-12">Drop us a line</p>
        
        <form className="space-y-6">
          <div>
            <label className="block text-[#2c4c3b] font-bold uppercase text-sm mb-2">Name</label>
            <input type="text" className="w-full bg-[#fffae6] border-2 border-transparent focus:border-[#ff7f50] rounded-2xl p-4 font-medium outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-[#2c4c3b] font-bold uppercase text-sm mb-2">Email</label>
            <input type="email" className="w-full bg-[#fffae6] border-2 border-transparent focus:border-[#ff7f50] rounded-2xl p-4 font-medium outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-[#2c4c3b] font-bold uppercase text-sm mb-2">Message</label>
            <textarea rows={5} className="w-full bg-[#fffae6] border-2 border-transparent focus:border-[#ff7f50] rounded-2xl p-4 font-medium outline-none transition-colors resize-none"></textarea>
          </div>
          <div className="pt-4">
            <button className="w-full bg-[#ff7f50] text-white font-black uppercase tracking-widest text-lg py-4 rounded-full shadow-[0_10px_20px_rgba(255,127,80,0.3)] hover:shadow-[0_15px_30px_rgba(255,127,80,0.5)] hover:-translate-y-1 transition-all">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
"""

with open("src/app/v23/layout.tsx", "w") as f: f.write(layout)
with open("src/app/v23/page.tsx", "w") as f: f.write(home)
with open("src/app/v23/products/page.tsx", "w") as f: f.write(products)
with open("src/app/v23/about/page.tsx", "w") as f: f.write(about)
with open("src/app/v23/contact/page.tsx", "w") as f: f.write(contact)
