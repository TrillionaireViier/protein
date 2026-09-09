import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#000a14] text-[#88ccff] font-sans selection:bg-[#00ffcc] selection:text-[#000a14] relative overflow-hidden">
      {/* Bioluminescence */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ffcc] rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0066ff] rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      <nav className="relative z-50 p-8 border-b border-[#003366] bg-[#000a14]/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <Link href="/v38" className="text-3xl font-light tracking-[0.3em] uppercase text-white drop-shadow-[0_0_10px_#00ffcc]">
            Hutchings <span className="font-bold text-[#00ffcc]">Depth</span>
          </Link>
          <div className="flex gap-10 mt-6 md:mt-0 text-xs font-bold uppercase tracking-[0.2em] text-[#0066ff]">
            <Link href="/v38/about" className="hover:text-[#00ffcc] hover:drop-shadow-[0_0_8px_#00ffcc] transition-all">Origin</Link>
            <Link href="/v38/products" className="hover:text-[#00ffcc] hover:drop-shadow-[0_0_8px_#00ffcc] transition-all">Extracts</Link>
            <Link href="/v38/contact" className="hover:text-[#00ffcc] hover:drop-shadow-[0_0_8px_#00ffcc] transition-all">Sonar</Link>
          </div>
        </div>
      </nav>
      <div className="relative z-10 pb-20">
        {children}
      </div>
    </div>
  );
}