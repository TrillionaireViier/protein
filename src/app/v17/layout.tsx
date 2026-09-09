import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-fuchsia-300 font-sans overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20"></div>
      
      {/* Synthwave Sun */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-yellow-400 via-orange-500 to-fuchsia-600 rounded-full blur-[100px] opacity-20 z-0"></div>
      
      {/* Grid Floor */}
      <div className="fixed bottom-0 w-full h-[40vh] z-0" style={{
        backgroundImage: 'linear-gradient(transparent 95%, #ec4899 100%), linear-gradient(90deg, transparent 95%, #ec4899 100%)',
        backgroundSize: '40px 40px',
        transform: 'perspective(500px) rotateX(60deg)',
        transformOrigin: 'top',
        opacity: 0.3
      }}></div>

      <nav className="fixed w-full z-50 top-0 bg-[#0b0c10]/80 backdrop-blur-sm border-b-2 border-fuchsia-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/v17" className="text-3xl font-black italic tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-blue-600 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] uppercase">
            Hutchings<span className="text-fuchsia-500 drop-shadow-[0_0_5px_rgba(236,72,153,0.8)]">1984</span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest uppercase">
            <Link href="/v17/about" className="text-cyan-400 hover:text-white transition-colors drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">Database</Link>
            <Link href="/v17/products" className="text-cyan-400 hover:text-white transition-colors drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">Arsenal</Link>
            <Link href="/v17/contact" className="text-cyan-400 hover:text-white transition-colors drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">Uplink</Link>
          </div>
        </div>
      </nav>
      
      <div className="pt-20 relative z-10">
        {children}
      </div>
      
      <footer className="relative z-10 border-t-2 border-cyan-500 mt-24 py-8 bg-[#0b0c10]/90 text-center shadow-[0_-5px_15px_rgba(34,211,238,0.3)]">
        <p className="text-cyan-400 font-bold tracking-widest uppercase text-xs drop-shadow-[0_0_2px_rgba(34,211,238,0.8)]">END OF LINE // 1984</p>
      </footer>
    </div>
  );
}
