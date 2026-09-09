import os

images = [
    "https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg",
    "https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg",
] * 2
names = ["ISO-GHOST", "HOLO-MASS", "AURA-ENERGY", "BCAA-PRISM", "CREA-LUCID", "VITA-SPHERE", "OMEGA-FLUX", "TEST-NOVA"]

layout = """import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-600/30 via-slate-900 to-slate-900"></div>
      <div className="fixed -bottom-[300px] -left-[300px] w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[120px] mix-blend-screen z-0"></div>
      <div className="fixed top-[20%] right-[10%] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] mix-blend-screen z-0"></div>

      <nav className="fixed w-full z-50 top-4 px-4">
        <div className="max-w-5xl mx-auto rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl px-6 h-16 flex items-center justify-between">
          <Link href="/v12" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Hutchings UI
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="/v12/about" className="hover:text-purple-300 transition-colors opacity-70 hover:opacity-100">About</Link>
            <Link href="/v12/products" className="hover:text-purple-300 transition-colors opacity-70 hover:opacity-100">Store</Link>
            <Link href="/v12/contact" className="hover:text-purple-300 transition-colors opacity-70 hover:opacity-100">Contact</Link>
          </div>
        </div>
      </nav>
      
      <div className="pt-32 relative z-10">
        {children}
      </div>
      
      <footer className="relative z-10 border-t border-white/10 mt-24 py-12 bg-black/20 backdrop-blur-md text-center">
        <p className="text-white/40 text-sm">Glassmorphism Edition © 2026</p>
      </footer>
    </div>
  );
}
"""

home = """import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="min-h-[80vh] flex flex-col items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 text-sm text-purple-200">
            Experience the future of recovery
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/30">
            Transparent.
          </h1>
          <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto">
            A protein isolate so pure, it's virtually invisible. No fillers. No hidden blends. Just results.
          </p>
          
          <div className="flex justify-center gap-6">
            <Link href="/v12/products" className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xl transition-all shadow-[0_8px_32px_rgba(31,38,135,0.37)] font-medium">
              Explore Store
            </Link>
          </div>
        </div>
        
        <div className="mt-24 relative w-full max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30 transform -rotate-2"></div>
          <div className="relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl p-4">
             <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full h-auto rounded-2xl mix-blend-luminosity opacity-80" alt="Protein" />
          </div>
        </div>
      </section>
      
      <section className="py-32 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[1,2,3].map(i => (
            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-purple-400 mb-6 flex items-center justify-center font-bold">0{i}</div>
              <h3 className="text-xl font-bold mb-3">Crystal Clear</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Micro-filtered for the highest biological value. What you see is exactly what you get.
              </p>
            </div>
          ))}
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
        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl hover:bg-white/10 transition-all group flex flex-col">
          <div className="w-full h-48 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img src="{img}" className="h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" alt="{name}" />
          </div>
          <h2 className="text-lg font-bold mb-1">{name}</h2>
          <p className="text-white/40 text-xs mb-4 flex-1">Ultra-pure isolate formula</p>
          <div className="flex justify-between items-center mt-auto">
            <span className="text-xl font-light">${99 - (i%4)*10}</span>
            <button className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-sm transition-colors">
              Add +
            </button>
          </div>
        </div>"""

products = f"""export default function Products() {{
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Catalog.</h1>
      <p className="text-white/50 mb-12">Premium glass-grade supplements.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{products_html}
      </div>
    </div>
  );
}}
"""

about = """export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24">
      <div className="p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl text-center">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="w-32 h-32 mx-auto rounded-full bg-white/10 p-2 mb-8">
          <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-full h-full object-cover rounded-full mix-blend-luminosity" />
        </div>
        <p className="text-white/70 leading-relaxed mb-6">
          Founded by Dr. Andrew Hutchings. We believe in transparency. 
          No proprietary blends, no hidden ingredients. We utilize cutting edge filtration technology to provide the clearest, most bioavailable protein on the market.
        </p>
      </div>
    </div>
  );
}
"""

contact = """export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24">
      <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Get in Touch</h1>
        <form className="space-y-6">
          <div>
            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white/30 focus:bg-white/10 transition-all placeholder:text-white/30" placeholder="Name" />
          </div>
          <div>
            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white/30 focus:bg-white/10 transition-all placeholder:text-white/30" placeholder="Email" />
          </div>
          <div>
            <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white/30 focus:bg-white/10 transition-all placeholder:text-white/30 resize-none" placeholder="Message"></textarea>
          </div>
          <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 font-bold hover:opacity-90 transition-opacity">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
"""

with open("src/app/v12/layout.tsx", "w") as f: f.write(layout)
with open("src/app/v12/page.tsx", "w") as f: f.write(home)
with open("src/app/v12/products/page.tsx", "w") as f: f.write(products)
with open("src/app/v12/about/page.tsx", "w") as f: f.write(about)
with open("src/app/v12/contact/page.tsx", "w") as f: f.write(contact)
