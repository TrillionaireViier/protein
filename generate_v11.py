import os

images = [
    "https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg",
    "https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg",
] * 2
names = ["MEGA_WHEY", "CREA_BLAST", "COLLA_MAX", "PROTEIN_X", "SUPER_MASS", "VITA_BOMB", "OMEGA_STAR", "TEST_TURBO"]

# --- Layout ---
layout = """import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#000080] text-white font-mono bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
      <nav className="border-[3px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white bg-[#c0c0c0] text-black m-4">
        <div className="flex items-center justify-between p-2 bg-[#000080] m-1">
          <Link href="/v11" className="text-white font-bold text-xl tracking-tighter">
            HUTCHINGS_HEALTH.EXE
          </Link>
          <div className="flex gap-2">
            <div className="w-5 h-5 bg-[#c0c0c0] border-[2px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white flex items-center justify-center text-xs font-bold">_</div>
            <div className="w-5 h-5 bg-[#c0c0c0] border-[2px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white flex items-center justify-center text-xs font-bold">□</div>
            <div className="w-5 h-5 bg-[#c0c0c0] border-[2px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white flex items-center justify-center text-xs font-bold">X</div>
          </div>
        </div>
        <div className="flex gap-4 p-2 text-sm font-bold bg-[#c0c0c0]">
          <Link href="/v11/about" className="hover:underline text-blue-800">File</Link>
          <Link href="/v11/products" className="hover:underline text-blue-800">Edit</Link>
          <Link href="/v11/contact" className="hover:underline text-blue-800">Help</Link>
        </div>
      </nav>
      <div className="p-4">
        {children}
      </div>
      <footer className="text-center p-4 mt-8">
        <div className="inline-block bg-yellow-400 text-black px-2 font-bold animate-bounce text-sm">
          BEST VIEWED IN NETSCAPE NAVIGATOR
        </div>
        <div className="mt-2 text-xs text-cyan-300">© 1999 HUTCHINGS HEALTH. All rights reserved.</div>
      </footer>
    </div>
  );
}
"""

# --- Home ---
home = """import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="max-w-4xl mx-auto border-[4px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white bg-[#c0c0c0] text-black p-1 mb-8 shadow-2xl">
        <div className="bg-[#000080] text-white p-1 font-bold flex justify-between">
          <span>Welcome_To_The_Future.html</span>
          <span>[X]</span>
        </div>
        <div className="p-8 text-center bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] bg-white">
          <marquee scrollamount="10" className="text-2xl font-bold text-red-600 mb-6 bg-yellow-300 py-1 border-[2px] border-black">
            🔥🔥🔥 NEW WHEY PROTEIN ISOLATE RELEASED! 🔥🔥🔥
          </marquee>
          
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 mb-4 drop-shadow-[4px_4px_0_rgba(0,0,0,1)] transform -skew-x-12">
            SUPER MASS GAINER 3000
          </h1>
          
          <div className="my-8 flex justify-center">
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" alt="Protein" className="w-64 h-64 object-cover border-[8px] border-x-blue-500 border-y-red-500 image-rendering-pixelated" />
          </div>
          
          <Link href="/v11/products" className="inline-block bg-[#c0c0c0] border-[4px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white px-8 py-4 font-bold text-xl hover:bg-[#e0e0e0] active:border-t-gray-800 active:border-l-gray-800 active:border-b-white active:border-r-white text-blue-800 mb-8">
            ENTER CATALOG &gt;&gt;
          </Link>
          
          <div className="grid grid-cols-3 gap-4 text-left">
            <div className="bg-[#c0c0c0] border-[2px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white p-4">
              <h3 className="font-bold text-red-600 mb-2 border-b-2 border-red-600">100% PURE</h3>
              <p className="text-xs">No fake stuff! Pure isolate only.</p>
            </div>
            <div className="bg-[#c0c0c0] border-[2px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white p-4">
              <h3 className="font-bold text-blue-600 mb-2 border-b-2 border-blue-600">FAST AF</h3>
              <p className="text-xs">Absorbs instantly. Get huge.</p>
            </div>
            <div className="bg-[#c0c0c0] border-[2px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white p-4">
              <h3 className="font-bold text-green-600 mb-2 border-b-2 border-green-600">CHEAP</h3>
              <p className="text-xs">Best prices on the web guaranteed.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
"""

# --- Products ---
products_html = ""
for i in range(24):
    img = images[i % 8]
    name = names[i % 8]
    products_html += f"""
        <div className="bg-[#c0c0c0] border-[3px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white p-2">
          <div className="bg-white border-2 border-inset border-gray-400 p-2 mb-2 h-48 flex items-center justify-center">
            <img src="{img}" className="max-h-full image-rendering-pixelated" alt="{name}" />
          </div>
          <h2 className="font-bold text-blue-800 text-sm mb-2">{name}</h2>
          <div className="flex justify-between items-center">
            <span className="text-red-600 font-bold">${99 - (i%4)*10}.99</span>
            <button className="bg-[#c0c0c0] border-[2px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white px-2 py-1 text-xs font-bold active:border-t-gray-800 active:border-l-gray-800 active:border-b-white active:border-r-white">BUY</button>
          </div>
        </div>"""

products = f"""export default function Products() {{
  return (
    <div className="max-w-6xl mx-auto border-[4px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white bg-[#c0c0c0] text-black p-1">
      <div className="bg-[#000080] text-white p-1 font-bold flex justify-between">
        <span>Web_Store.exe</span>
        <span>[X]</span>
      </div>
      <div className="p-4 bg-teal-600">
        <h1 className="text-4xl font-bold text-yellow-300 mb-6 drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">CATALOG</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
{products_html}
        </div>
      </div>
    </div>
  );
}}
"""

# --- About ---
about = """export default function About() {
  return (
    <div className="max-w-3xl mx-auto border-[4px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white bg-[#c0c0c0] text-black p-1">
      <div className="bg-[#000080] text-white p-1 font-bold flex justify-between">
        <span>About_Us.txt - Notepad</span>
        <span>[X]</span>
      </div>
      <div className="p-4 bg-white border-[2px] border-inset border-gray-400 font-mono text-sm h-96 overflow-y-scroll">
        <p>====================================</p>
        <p>HUTCHINGS HEALTH</p>
        <p>FOUNDER: Dr. Andrew Hutchings</p>
        <p>====================================</p>
        <br/>
        <p>We make the best protein.</p>
        <p>I broke every bone in my body.</p>
        <p>Now I am huge.</p>
        <br/>
        <p>Thanks for visiting my homepage.</p>
        <p>Don't forget to sign the guestbook!</p>
        <br/>
        <p>Under Construction...</p>
      </div>
    </div>
  );
}
"""

# --- Contact ---
contact = """export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto border-[4px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white bg-[#c0c0c0] text-black p-1">
      <div className="bg-[#000080] text-white p-1 font-bold flex justify-between">
        <span>Send_Email.exe</span>
        <span>[X]</span>
      </div>
      <div className="p-6">
        <form className="space-y-4">
          <div className="flex items-center gap-4">
            <label className="w-24 font-bold text-right">To:</label>
            <input type="text" value="webmaster@hutchings.net" readOnly className="flex-1 bg-white border-2 border-inset border-gray-400 p-1 text-gray-500" />
          </div>
          <div className="flex items-center gap-4">
            <label className="w-24 font-bold text-right">Subject:</label>
            <input type="text" className="flex-1 bg-white border-2 border-inset border-gray-400 p-1" />
          </div>
          <div className="flex gap-4">
            <label className="w-24 font-bold text-right pt-2">Message:</label>
            <textarea rows={6} className="flex-1 bg-white border-2 border-inset border-gray-400 p-1"></textarea>
          </div>
          <div className="flex justify-end pt-4">
            <button className="bg-[#c0c0c0] border-[3px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white px-8 py-2 font-bold active:border-t-gray-800 active:border-l-gray-800 active:border-b-white active:border-r-white">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
"""

with open("src/app/v11/layout.tsx", "w") as f: f.write(layout)
with open("src/app/v11/page.tsx", "w") as f: f.write(home)
with open("src/app/v11/products/page.tsx", "w") as f: f.write(products)
with open("src/app/v11/about/page.tsx", "w") as f: f.write(about)
with open("src/app/v11/contact/page.tsx", "w") as f: f.write(contact)
