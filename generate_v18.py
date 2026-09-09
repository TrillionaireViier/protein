import os

images = [
    "https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg",
    "https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg",
] * 2
names = ["MRE ISOLATE", "TACTICAL MASS", "COMBAT ENERGY", "BCAA RATION", "CREATINE AMMO", "VITA-MEDKIT", "OMEGA ARMOR", "TEST-COMMAND"]

layout = """import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#4b5320] text-[#e0dacd] font-mono uppercase bg-[url('https://www.transparenttextures.com/patterns/camo.png')]">
      <nav className="border-b-4 border-black bg-[#2d3319] p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <Link href="/v18" className="text-3xl font-black tracking-widest text-black bg-[#e0dacd] px-4 py-1 mb-4 md:mb-0 transform -skew-x-6">
            BASECAMP // HUTCHINGS
          </Link>
          <div className="flex gap-6 text-sm font-bold">
            <Link href="/v18/about" className="hover:text-black hover:bg-[#e0dacd] px-2 py-1 transition-colors border border-transparent hover:border-black">DOSSIER</Link>
            <Link href="/v18/products" className="hover:text-black hover:bg-[#e0dacd] px-2 py-1 transition-colors border border-transparent hover:border-black">ARMORY</Link>
            <Link href="/v18/contact" className="hover:text-black hover:bg-[#e0dacd] px-2 py-1 transition-colors border border-transparent hover:border-black">COMMS</Link>
          </div>
        </div>
      </nav>
      
      <div className="py-12 px-4">
        {children}
      </div>
      
      <footer className="bg-[#1a1f10] text-[#6b7548] p-8 text-center border-t-8 border-black">
        <p className="font-bold tracking-widest text-xs mb-2">PROPERTY OF HUTCHINGS TACTICAL DIV.</p>
        <p className="font-bold tracking-widest text-xs">CLASSIFIED INFORMATION // DO NOT DISTRIBUTE</p>
      </footer>
    </div>
  );
}
"""

home = """import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="max-w-5xl mx-auto bg-[#3a4018] border-8 border-black p-8 relative shadow-[16px_16px_0_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 right-0 bg-black text-[#e0dacd] p-2 font-bold text-xs">
          STRICTLY CONFIDENTIAL
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center mt-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-bold mb-2 border-b-2 border-black pb-2">OPERATION: MASS GAIN</h2>
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-black tracking-tighter leading-none">
              TACTICAL <br/> ISOLATE
            </h1>
            <p className="text-lg font-bold mb-8 text-[#e0dacd] max-w-md bg-black/40 p-4 border-l-4 border-black">
              MILITARY-GRADE PROTEIN SYNTHESIS. DEPLOY FOR MAXIMUM MUSCLE RECOVERY AND SURVIVABILITY IN HOSTILE ENVIRONMENTS.
            </p>
            <Link href="/v18/products" className="inline-block bg-black text-[#e0dacd] font-black text-2xl px-8 py-4 hover:bg-[#e0dacd] hover:text-black border-4 border-black transition-colors transform -skew-x-6">
              ACCESS ARMORY &gt;&gt;
            </Link>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="bg-[#2d3319] p-4 border-4 border-black">
              <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full max-w-sm filter grayscale contrast-125 sepia-[30%] hue-rotate-60" alt="Tactical Gear" />
              <div className="mt-4 text-center text-xs font-bold bg-black text-[#e0dacd] py-1">
                ITEM #492-A-ISOLATE
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-black mb-8 border-b-4 border-black pb-2">MISSION OBJECTIVES</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#2d3319] border-4 border-black p-6 relative">
            <div className="absolute -top-4 -left-4 bg-black text-white w-10 h-10 flex items-center justify-center font-black text-xl">01</div>
            <h3 className="text-xl font-bold mb-4 mt-2 text-[#e0dacd]">RAPID DEPLOYMENT</h3>
            <p className="text-sm font-bold text-[#b5bca3]">Hydrolyzed formulation enters the bloodstream immediately upon consumption.</p>
          </div>
          <div className="bg-[#2d3319] border-4 border-black p-6 relative">
            <div className="absolute -top-4 -left-4 bg-black text-white w-10 h-10 flex items-center justify-center font-black text-xl">02</div>
            <h3 className="text-xl font-bold mb-4 mt-2 text-[#e0dacd]">COMBAT READY</h3>
            <p className="text-sm font-bold text-[#b5bca3]">Zero GI distress. Perform at peak physical condition without compromise.</p>
          </div>
          <div className="bg-[#2d3319] border-4 border-black p-6 relative">
            <div className="absolute -top-4 -left-4 bg-black text-white w-10 h-10 flex items-center justify-center font-black text-xl">03</div>
            <h3 className="text-xl font-bold mb-4 mt-2 text-[#e0dacd]">RUGGED PURITY</h3>
            <p className="text-sm font-bold text-[#b5bca3]">No synthetic fillers or artificial flavorings. Only mission-critical amino acids.</p>
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
        <div className="bg-[#3a4018] border-4 border-black p-4 flex flex-col shadow-[8px_8px_0_rgba(0,0,0,0.4)]">
          <div className="bg-[#2d3319] border-2 border-black p-4 mb-4 relative flex-1 flex items-center justify-center">
            <div className="absolute top-1 left-1 text-[10px] text-[#b5bca3] font-bold">MRE-{i+100}</div>
            <img src="{img}" className="h-40 object-contain filter grayscale contrast-125 sepia-[30%] hue-rotate-60" alt="{name}" />
          </div>
          <h2 className="text-lg font-black text-black mb-1">{name}</h2>
          <p className="text-xs font-bold text-[#b5bca3] mb-4">SPEC: PERFORMANCE ENHANCER</p>
          <div className="flex justify-between items-center mt-auto border-t-2 border-black pt-4">
            <span className="text-2xl font-black">${price}</span>
            <button className="bg-black text-[#e0dacd] font-bold px-4 py-2 text-xs hover:bg-[#e0dacd] hover:text-black transition-colors">
              REQUISITION
            </button>
          </div>
        </div>"""

products = f"""export default function Products() {{
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-black text-[#e0dacd] p-6 mb-12 inline-block">
        <h1 className="text-4xl font-black tracking-widest">ARMORY / SUPPLY</h1>
        <p className="text-sm font-bold mt-2 text-[#6b7548]">AUTHORIZED PERSONNEL ONLY</p>
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
    <div className="max-w-4xl mx-auto">
      <div className="bg-[#3a4018] border-8 border-black p-8 md:p-12 shadow-[16px_16px_0_rgba(0,0,0,0.5)]">
        <h1 className="text-4xl font-black text-black mb-8 border-b-4 border-black pb-4">TARGET DOSSIER: DR. HUTCHINGS</h1>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3">
            <div className="bg-[#2d3319] p-2 border-4 border-black relative">
              <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 z-10 transform rotate-12 origin-bottom-left">CLASSIFIED</div>
              <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-full filter grayscale contrast-150 relative z-0" />
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="space-y-4 font-bold text-sm">
              <div className="grid grid-cols-3 border-b-2 border-black pb-2">
                <span className="text-[#b5bca3]">CODENAME:</span>
                <span className="col-span-2 text-black">THE ALCHEMIST</span>
              </div>
              <div className="grid grid-cols-3 border-b-2 border-black pb-2">
                <span className="text-[#b5bca3]">STATUS:</span>
                <span className="col-span-2 text-black">ACTIVE</span>
              </div>
              <div className="grid grid-cols-3 border-b-2 border-black pb-2">
                <span className="text-[#b5bca3]">BACKGROUND:</span>
                <span className="col-span-2 text-black">
                  Following multiple catastrophic physical traumas, subject dedicated life to researching extreme tissue regeneration. 
                  Resulting formula (Project: Isolate) demonstrated unprecedented recovery metrics.
                </span>
              </div>
              <div className="grid grid-cols-3 border-b-2 border-black pb-2">
                <span className="text-[#b5bca3]">DIRECTIVE:</span>
                <span className="col-span-2 text-black">
                  Manufacture and supply tactical-grade nutritional support to frontline operators.
                </span>
              </div>
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
    <div className="max-w-2xl mx-auto">
      <div className="bg-[#3a4018] border-8 border-black p-8 md:p-12 shadow-[16px_16px_0_rgba(0,0,0,0.5)]">
        <h1 className="text-3xl font-black text-black mb-8 border-b-4 border-black pb-4 text-center">COMMUNICATIONS LINK</h1>
        
        <form className="space-y-6">
          <div className="bg-black/30 p-6 border-2 border-black space-y-4">
            <div>
              <label className="block text-xs font-bold text-black mb-1">OPERATIVE ID</label>
              <input type="text" className="w-full bg-[#e0dacd] border-2 border-black p-3 font-bold text-black focus:outline-none focus:bg-white" />
            </div>
            <div>
              <label className="block text-xs font-bold text-black mb-1">SECURE FREQUENCY (EMAIL)</label>
              <input type="email" className="w-full bg-[#e0dacd] border-2 border-black p-3 font-bold text-black focus:outline-none focus:bg-white" />
            </div>
            <div>
              <label className="block text-xs font-bold text-black mb-1">INTEL REPORT</label>
              <textarea rows={5} className="w-full bg-[#e0dacd] border-2 border-black p-3 font-bold text-black focus:outline-none focus:bg-white resize-none"></textarea>
            </div>
          </div>
          
          <button className="w-full bg-black text-[#e0dacd] font-black text-xl py-4 border-4 border-black hover:bg-[#e0dacd] hover:text-black transition-colors transform -skew-x-6">
            TRANSMIT INTEL
          </button>
        </form>
      </div>
    </div>
  );
}
"""

with open("src/app/v18/layout.tsx", "w") as f: f.write(layout)
with open("src/app/v18/page.tsx", "w") as f: f.write(home)
with open("src/app/v18/products/page.tsx", "w") as f: f.write(products)
with open("src/app/v18/about/page.tsx", "w") as f: f.write(about)
with open("src/app/v18/contact/page.tsx", "w") as f: f.write(contact)
