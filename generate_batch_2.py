import os

images = [
    "https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg",
    "https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg",
] * 2

def write_v29():
    # Memphis Design (80s colorful abstract)
    os.makedirs("src/app/v29/products", exist_ok=True)
    os.makedirs("src/app/v29/about", exist_ok=True)
    os.makedirs("src/app/v29/contact", exist_ok=True)
    
    names = ["POP WHEY", "ZAP MASS", "BAM ENERGY", "POW BCAA", "ZING CREATINE", "WHAM VITA", "BOOM OMEGA", "CRASH TEST"]
    
    layout = """import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fcf5e5] text-black font-sans selection:bg-[#ffeb3b] selection:text-black overflow-x-hidden relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <pattern id="memphis-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="4" fill="#ff4081" />
            <rect x="60" y="40" width="10" height="10" fill="#00bcd4" transform="rotate(45 65 45)" />
            <path d="M10,80 Q20,70 30,80 T50,80" fill="none" stroke="#ffeb3b" strokeWidth="3" />
            <polygon points="80,80 90,95 70,95" fill="none" stroke="#000000" strokeWidth="2" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#memphis-pattern)" />
        </svg>
      </div>

      <nav className="relative z-50 p-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <Link href="/v29" className="text-4xl font-black uppercase tracking-tighter bg-[#ffeb3b] px-4 py-2 border-4 border-black shadow-[6px_6px_0_#000000] rotate-2 hover:-rotate-2 transition-transform">
            Hutchings!
          </Link>
          <div className="flex gap-6 mt-6 md:mt-0">
            <Link href="/v29/about" className="text-xl font-bold uppercase bg-[#00bcd4] text-white px-4 py-2 border-4 border-black shadow-[4px_4px_0_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0_0_0_#000000] transition-all">Story</Link>
            <Link href="/v29/products" className="text-xl font-bold uppercase bg-[#ff4081] text-white px-4 py-2 border-4 border-black shadow-[4px_4px_0_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0_0_0_#000000] transition-all">Stuff</Link>
            <Link href="/v29/contact" className="text-xl font-bold uppercase bg-white text-black px-4 py-2 border-4 border-black shadow-[4px_4px_0_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0_0_0_#000000] transition-all">Holla</Link>
          </div>
        </div>
      </nav>
      <div className="relative z-10 py-12">
        {children}
      </div>
    </div>
  );
}"""

    home = """import Link from 'next/link';
export default function Home() {
  return (
    <>
      <section className="px-6 py-20 text-center flex flex-col items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-[#ffeb3b] border-4 border-black shadow-[8px_8px_0_#ff4081] -rotate-3 rounded-[30px]"></div>
          <h1 className="relative text-7xl md:text-9xl font-black uppercase tracking-tighter text-black z-10 px-8 py-4">
            BAM!
          </h1>
        </div>
        <p className="text-3xl font-bold uppercase mt-12 mb-16 bg-[#00bcd4] text-white p-4 border-4 border-black shadow-[6px_6px_0_#000000] rotate-1 max-w-2xl">
          Radical protein for totally tubular gains. No bogus fillers.
        </p>
        
        <div className="relative mb-20 group cursor-pointer">
          <div className="absolute -inset-2 bg-[#ff4081] border-4 border-black shadow-[10px_10px_0_#00bcd4] rounded-full rotate-6 group-hover:-rotate-6 transition-transform duration-300"></div>
          <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-80 h-80 object-cover rounded-full border-8 border-black relative z-10 filter contrast-125 saturate-150" alt="Memphis Protein" />
        </div>
        
        <Link href="/v29/products" className="text-4xl font-black uppercase bg-white px-12 py-6 border-[6px] border-black shadow-[12px_12px_0_#ff4081] hover:bg-[#ffeb3b] hover:shadow-[6px_6px_0_#00bcd4] hover:translate-x-2 hover:translate-y-2 transition-all">
          Get Swole
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
        colors = ["#ffeb3b", "#00bcd4", "#ff4081", "#ffffff"]
        bg_color = colors[i % 4]
        shadow_color = colors[(i+1) % 4]
        
        products_html += f"""
        <div className="bg-[{bg_color}] border-4 border-black p-6 shadow-[8px_8px_0_#000000] hover:shadow-[12px_12px_0_{shadow_color}] hover:-translate-y-2 transition-all group">
          <div className="w-full h-48 bg-white border-4 border-black flex items-center justify-center p-4 mb-6 shadow-inner">
            <img src="{img}" className="h-full object-contain filter contrast-125 saturate-150 group-hover:scale-110 transition-transform" alt="{name}" />
          </div>
          <h2 className="text-2xl font-black uppercase mb-4 px-2 bg-white border-2 border-black inline-block">{name}</h2>
          <div className="flex justify-between items-center mt-4 border-t-4 border-black pt-4">
            <span className="text-3xl font-black bg-white px-2 border-2 border-black">${price}</span>
            <button className="text-xl font-bold uppercase bg-black text-white px-4 py-2 hover:bg-white hover:text-black hover:border-2 hover:border-black transition-colors">
              GRAB IT
            </button>
          </div>
        </div>"""

    products = f"""export default function Products() {{
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-6xl font-black uppercase text-center mb-16 bg-white inline-block px-8 py-4 border-8 border-black shadow-[10px_10px_0_#ffeb3b] rotate-2 mx-auto block w-max">
        The Goods
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-16">
{products_html}
      </div>
    </div>
  );
}}"""

    about = """export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="bg-[#ff4081] border-8 border-black p-12 shadow-[15px_15px_0_#00bcd4] relative">
        <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#ffeb3b] rounded-full border-4 border-black shadow-[5px_5px_0_#000000] animate-bounce"></div>
        <h1 className="text-6xl font-black uppercase text-white mb-12 drop-shadow-[4px_4px_0_#000000]">The Big Boss</h1>
        
        <div className="flex flex-col md:flex-row gap-12 items-center bg-white border-4 border-black p-8 shadow-[8px_8px_0_#000000]">
          <div className="w-full md:w-1/3">
            <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Hutchings" className="w-full border-8 border-black filter grayscale contrast-200 bg-[#ffeb3b]" />
          </div>
          <div className="w-full md:w-2/3 text-2xl font-bold uppercase leading-relaxed text-black">
            <p className="mb-6 bg-[#00bcd4] text-white p-2 border-2 border-black">Dr. Andrew Hutchings got wrecked in an accident. Not cool.</p>
            <p className="bg-[#ffeb3b] p-2 border-2 border-black">So he invented a totally radical protein formula to rebuild himself bigger and better than ever.</p>
          </div>
        </div>
      </div>
    </div>
  );
}"""

    contact = """export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <div className="bg-[#00bcd4] border-8 border-black p-12 shadow-[15px_15px_0_#ffeb3b]">
        <h1 className="text-5xl font-black uppercase text-white mb-8 drop-shadow-[4px_4px_0_#000000]">Hit us up!</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-2xl font-black uppercase bg-white border-2 border-black px-2 py-1 mb-2 w-max">Your Name</label>
            <input type="text" className="w-full bg-white border-4 border-black p-4 text-xl font-bold outline-none focus:bg-[#ffeb3b] transition-colors shadow-[4px_4px_0_#000000]" />
          </div>
          <div>
            <label className="block text-2xl font-black uppercase bg-white border-2 border-black px-2 py-1 mb-2 w-max">Message</label>
            <textarea rows={4} className="w-full bg-white border-4 border-black p-4 text-xl font-bold outline-none focus:bg-[#ffeb3b] transition-colors shadow-[4px_4px_0_#000000] resize-none"></textarea>
          </div>
          <button className="w-full bg-[#ff4081] text-white text-3xl font-black uppercase py-6 border-4 border-black shadow-[8px_8px_0_#000000] hover:translate-x-2 hover:translate-y-2 hover:shadow-[0_0_0_#000000] transition-all">
            SEND IT!
          </button>
        </form>
      </div>
    </div>
  );
}"""

    for path, content in [("layout.tsx", layout), ("page.tsx", home), ("products/page.tsx", products), ("about/page.tsx", about), ("contact/page.tsx", contact)]:
        with open(f"src/app/v29/{path}", "w") as f: f.write(content)


def write_v30():
    # Neumorphism (Soft UI)
    os.makedirs("src/app/v30/products", exist_ok=True)
    os.makedirs("src/app/v30/about", exist_ok=True)
    os.makedirs("src/app/v30/contact", exist_ok=True)
    
    names = ["Soft Whey", "Smooth Mass", "Gentle Energy", "Fluid BCAA", "Clean Creatine", "Pure Vita", "Clear Omega", "Light Test"]
    
    layout = """import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#e0e5ec] text-[#4a5568] font-sans selection:bg-[#a0aec0] selection:text-white">
      <nav className="p-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-6 rounded-3xl shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]">
          <Link href="/v30" className="text-2xl font-bold tracking-tight text-[#2d3748]">
            Hutchings
          </Link>
          <div className="flex gap-8 text-sm font-medium mt-4 md:mt-0">
            <Link href="/v30/about" className="px-6 py-2 rounded-xl shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] hover:shadow-[inset_5px_5px_10px_rgb(163,177,198,0.6),inset_-5px_-5px_10px_rgba(255,255,255,0.5)] transition-shadow text-[#718096] hover:text-[#2d3748]">About</Link>
            <Link href="/v30/products" className="px-6 py-2 rounded-xl shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] hover:shadow-[inset_5px_5px_10px_rgb(163,177,198,0.6),inset_-5px_-5px_10px_rgba(255,255,255,0.5)] transition-shadow text-[#718096] hover:text-[#2d3748]">Products</Link>
            <Link href="/v30/contact" className="px-6 py-2 rounded-xl shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] hover:shadow-[inset_5px_5px_10px_rgb(163,177,198,0.6),inset_-5px_-5px_10px_rgba(255,255,255,0.5)] transition-shadow text-[#718096] hover:text-[#2d3748]">Contact</Link>
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
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <div className="p-12 rounded-[3rem] shadow-[12px_12px_24px_rgb(163,177,198,0.6),-12px_-12px_24px_rgba(255,255,255,0.5)] max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-48 h-48 rounded-full p-4 shadow-[inset_8px_8px_16px_rgb(163,177,198,0.6),inset_-8px_-8px_16px_rgba(255,255,255,0.5)] mb-12 flex justify-center items-center">
             <div className="w-40 h-40 rounded-full shadow-[8px_8px_16px_rgb(163,177,198,0.6),-8px_-8px_16px_rgba(255,255,255,0.5)] overflow-hidden">
                <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full h-full object-cover filter contrast-125 saturate-50 mix-blend-multiply opacity-80" alt="Soft Protein" />
             </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#2d3748]">
            Seamless Growth.
          </h1>
          <p className="text-xl text-[#718096] mb-12 max-w-2xl font-medium">
            Formulas designed to integrate perfectly into your biology. No friction, just pure synthesis.
          </p>
          
          <Link href="/v30/products" className="px-12 py-5 rounded-2xl font-bold text-lg text-[#2d3748] shadow-[8px_8px_16px_rgb(163,177,198,0.6),-8px_-8px_16px_rgba(255,255,255,0.5)] hover:shadow-[inset_8px_8px_16px_rgb(163,177,198,0.6),inset_-8px_-8px_16px_rgba(255,255,255,0.5)] transition-all duration-300">
            View Collection
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
        <div className="p-8 rounded-3xl shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] flex flex-col items-center group">
          <div className="w-full h-48 rounded-2xl shadow-[inset_6px_6px_12px_rgb(163,177,198,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.5)] p-6 mb-8 flex items-center justify-center">
            <img src="{img}" className="h-full object-contain filter contrast-125 saturate-50 mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500" alt="{name}" />
          </div>
          <h2 className="text-xl font-bold text-[#4a5568] mb-2">{name}</h2>
          <span className="text-lg text-[#718096] font-medium mb-6">${price}</span>
          <button className="w-full py-4 rounded-xl text-[#2d3748] font-bold shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] hover:shadow-[inset_5px_5px_10px_rgb(163,177,198,0.6),inset_-5px_-5px_10px_rgba(255,255,255,0.5)] transition-all duration-300">
            Add to Cart
          </button>
        </div>"""

    products = f"""export default function Products() {{
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-16 text-[#2d3748]">The Formulas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
{products_html}
      </div>
    </div>
  );
}}"""

    about = """export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="p-12 md:p-16 rounded-[3rem] shadow-[12px_12px_24px_rgb(163,177,198,0.6),-12px_-12px_24px_rgba(255,255,255,0.5)]">
        <h1 className="text-4xl font-bold text-center mb-16 text-[#2d3748]">Our Founder</h1>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-full p-6 shadow-[inset_8px_8px_16px_rgb(163,177,198,0.6),inset_-8px_-8px_16px_rgba(255,255,255,0.5)] aspect-square">
            <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Doc" className="w-full h-full object-cover rounded-full shadow-[8px_8px_16px_rgb(163,177,198,0.6),-8px_-8px_16px_rgba(255,255,255,0.5)] filter grayscale opacity-80" />
          </div>
          <div className="space-y-6 text-lg text-[#718096] font-medium leading-relaxed p-8 rounded-3xl shadow-[inset_5px_5px_10px_rgb(163,177,198,0.6),inset_-5px_-5px_10px_rgba(255,255,255,0.5)]">
            <p>Following a severe accident, Dr. Andrew Hutchings experienced the painful friction of recovery.</p>
            <p>He created a line of supplements designed to work smoothly with the body's natural processes, removing the harsh edges of traditional sports nutrition.</p>
          </div>
        </div>
      </div>
    </div>
  );
}"""

    contact = """export default function Contact() {
  return (
    <div className="max-w-xl mx-auto px-6 py-20">
      <div className="p-12 rounded-[3rem] shadow-[12px_12px_24px_rgb(163,177,198,0.6),-12px_-12px_24px_rgba(255,255,255,0.5)]">
        <h1 className="text-3xl font-bold text-center mb-12 text-[#2d3748]">Get in Touch</h1>
        <form className="space-y-8">
          <div>
            <input type="text" placeholder="Name" className="w-full bg-[#e0e5ec] p-6 rounded-2xl shadow-[inset_6px_6px_12px_rgb(163,177,198,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.5)] outline-none text-[#4a5568] placeholder:text-[#a0aec0] font-medium focus:shadow-[inset_8px_8px_16px_rgb(163,177,198,0.7),inset_-8px_-8px_16px_rgba(255,255,255,0.6)] transition-shadow" />
          </div>
          <div>
            <textarea rows={4} placeholder="Message" className="w-full bg-[#e0e5ec] p-6 rounded-2xl shadow-[inset_6px_6px_12px_rgb(163,177,198,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.5)] outline-none text-[#4a5568] placeholder:text-[#a0aec0] font-medium resize-none focus:shadow-[inset_8px_8px_16px_rgb(163,177,198,0.7),inset_-8px_-8px_16px_rgba(255,255,255,0.6)] transition-shadow"></textarea>
          </div>
          <button className="w-full py-6 rounded-2xl text-xl font-bold text-[#2d3748] shadow-[8px_8px_16px_rgb(163,177,198,0.6),-8px_-8px_16px_rgba(255,255,255,0.5)] hover:shadow-[inset_8px_8px_16px_rgb(163,177,198,0.6),inset_-8px_-8px_16px_rgba(255,255,255,0.5)] transition-all duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}"""

    for path, content in [("layout.tsx", layout), ("page.tsx", home), ("products/page.tsx", products), ("about/page.tsx", about), ("contact/page.tsx", contact)]:
        with open(f"src/app/v30/{path}", "w") as f: f.write(content)


def write_v31():
    # Web 1.0 (GeoCities)
    os.makedirs("src/app/v31/products", exist_ok=True)
    os.makedirs("src/app/v31/about", exist_ok=True)
    os.makedirs("src/app/v31/contact", exist_ok=True)
    
    names = ["MEGA WHEY", "ULTRA MASS", "SUPER ENERGY", "EXTREME BCAA", "POWER CREATINE", "MAX VITA", "HYPER OMEGA", "GIGA TEST"]
    
    layout = """import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-[#000080] text-white" style={{fontFamily: '"Times New Roman", Times, serif'}}>
      <div className="max-w-4xl mx-auto bg-[#c0c0c0] min-h-screen text-black border-l-4 border-r-4 border-[#808080] p-2">
        <div className="text-center bg-[#000080] text-white p-4 border-4 border-outset border-[#c0c0c0] mb-4">
          <marquee scrollAmount={10} className="text-2xl font-bold text-yellow-300">★★★ WELCOME TO HUTCHINGS HEALTH OFFICIAL HOMEPAGE ★★★</marquee>
        </div>
        
        <table className="w-full border-collapse border border-black mb-4">
          <tbody>
            <tr>
              <td className="border border-black p-2 bg-[#008080] text-white text-center hover:bg-yellow-300 hover:text-blue-800 font-bold"><Link href="/v31">HOME</Link></td>
              <td className="border border-black p-2 bg-[#008080] text-white text-center hover:bg-yellow-300 hover:text-blue-800 font-bold"><Link href="/v31/about">ABOUT DR. H</Link></td>
              <td className="border border-black p-2 bg-[#008080] text-white text-center hover:bg-yellow-300 hover:text-blue-800 font-bold"><Link href="/v31/products">CATALOG</Link></td>
              <td className="border border-black p-2 bg-[#008080] text-white text-center hover:bg-yellow-300 hover:text-blue-800 font-bold"><Link href="/v31/contact">GUESTBOOK</Link></td>
            </tr>
          </tbody>
        </table>
        
        <div className="bg-white border-2 border-inset border-[#808080] p-4 min-h-[60vh]">
          {children}
        </div>
        
        <div className="text-center mt-4 text-xs font-bold p-2 bg-[#000080] text-white">
          <p>Best viewed in Netscape Navigator 4.0 at 800x600 resolution</p>
          <p>Hit Counter: 0048291</p>
        </div>
      </div>
    </div>
  );
}"""

    home = """import Link from 'next/link';
export default function Home() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4 underline">GET HUGE FAST!!!</h1>
        <p className="text-xl mb-6">Are you tired of being small? Do you want to build <b>MASSIVE MUSCLES</b>?</p>
        
        <div className="flex justify-center mb-6">
          <div className="border-8 border-ridge border-yellow-400 bg-black p-2">
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-64 h-64 object-cover filter contrast-150 saturate-200" alt="Protein gif" />
          </div>
        </div>
        
        <h2 className="text-2xl text-blue-800 font-bold mb-4 blink">NEW FORMULA JUST RELEASED!</h2>
        <p className="mb-8 bg-yellow-200 p-4 border border-black">
          "I used Hutchings Health for 3 weeks and gained 20lbs of pure muscle!" - Anonymous User
        </p>
        
        <Link href="/v31/products" className="inline-block bg-blue-600 text-white font-bold text-2xl py-2 px-8 border-4 border-outset border-blue-400 hover:bg-red-600 cursor-pointer">
          CLICK HERE TO ENTER THE STORE
        </Link>
      </div>
    </>
  );
}"""

    products_html = ""
    for i in range(24):
        img = images[i % 8]
        name = names[i % 8]
        price = 99 - (i % 4) * 10
        products_html += f"""
        <div className="border-2 border-black p-2 bg-[#e0e0e0] text-center">
          <div className="w-full h-32 bg-white border border-gray-400 flex justify-center items-center mb-2">
            <img src="{img}" className="h-full object-contain filter contrast-150" alt="{name}" />
          </div>
          <h3 className="text-lg font-bold text-blue-800 underline mb-1">{name}</h3>
          <p className="text-red-600 font-bold text-xl mb-2">${price}.99</p>
          <button className="bg-[#c0c0c0] border-2 border-outset border-white px-2 py-1 text-sm font-bold active:border-inset">ADD TO CART</button>
        </div>"""

    products = f"""export default function Products() {{
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6 text-purple-800 border-b-2 border-black pb-2">ONLINE CATALOG</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
{products_html}
      </div>
    </div>
  );
}}"""

    about = """export default function About() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6 text-green-800 border-b-2 border-black pb-2">WHO IS DR. HUTCHINGS?</h1>
      <div className="float-left mr-4 mb-4 border-4 border-ridge border-gray-500">
        <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Doc" className="w-48 filter grayscale contrast-150" />
      </div>
      <p className="text-lg leading-relaxed">
        <b>Dr. Andrew Hutchings</b> is a world-renowned scientist. After a terrible accident in 1994, he dedicated his life to researching the ultimate protein formula.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        <i>"I was broken. But science rebuilt me."</i> - Dr. H
      </p>
      <div className="clear-both"></div>
      <br/>
      <hr className="border-t border-black border-dashed" />
      <br/>
      <div className="text-center">
        <img src="https://web.archive.org/web/20091027055743im_/http://www.geocities.com/CollegePark/4592/undercon.gif" alt="Under construction" />
      </div>
    </div>
  );
}"""

    contact = """export default function Contact() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6 text-red-800">SIGN MY GUESTBOOK</h1>
      <form className="max-w-md mx-auto text-left bg-yellow-100 p-4 border-2 border-black">
        <div className="mb-4">
          <label className="font-bold">Name:</label><br/>
          <input type="text" className="w-full border-2 border-inset border-gray-400 bg-white p-1" />
        </div>
        <div className="mb-4">
          <label className="font-bold">Email:</label><br/>
          <input type="email" className="w-full border-2 border-inset border-gray-400 bg-white p-1" />
        </div>
        <div className="mb-4">
          <label className="font-bold">Comments:</label><br/>
          <textarea rows={4} className="w-full border-2 border-inset border-gray-400 bg-white p-1"></textarea>
        </div>
        <div className="text-center">
          <button className="bg-[#c0c0c0] border-2 border-outset border-white px-4 py-2 font-bold active:border-inset">SUBMIT FORM</button>
        </div>
      </form>
      <br/>
      <a href="mailto:webmaster@hutchings.com" className="text-blue-800 underline font-bold">Email the Webmaster</a>
    </div>
  );
}"""

    for path, content in [("layout.tsx", layout), ("page.tsx", home), ("products/page.tsx", products), ("about/page.tsx", about), ("contact/page.tsx", contact)]:
        with open(f"src/app/v31/{path}", "w") as f: f.write(content)

write_v29()
write_v30()
write_v31()
