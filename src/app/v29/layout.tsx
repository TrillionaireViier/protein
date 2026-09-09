import Link from 'next/link';
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
}