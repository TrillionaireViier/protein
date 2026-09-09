import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050510] text-slate-300 font-sans overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-50"></div>
      
      {/* Earth glow */}
      <div className="fixed -bottom-[40vh] left-1/2 transform -translate-x-1/2 w-[150vw] h-[100vh] rounded-t-[100%] border-t-[1px] border-blue-500/30 bg-gradient-to-b from-blue-900/20 to-[#050510] z-0 blur-sm"></div>

      <nav className="fixed w-full z-50 top-0 bg-[#050510]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-mono text-xs uppercase tracking-widest">
          <Link href="/v22" className="flex items-center gap-3 text-white">
            <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16" />
            </svg>
            <span className="tracking-[0.3em]">HUTCHINGS // AEROSPACE</span>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/v22/about" className="hover:text-blue-400 transition-colors">MISSION.LOG</Link>
            <Link href="/v22/products" className="hover:text-blue-400 transition-colors">PAYLOAD.DATA</Link>
            <Link href="/v22/contact" className="hover:text-blue-400 transition-colors">COMM.LINK</Link>
          </div>
        </div>
      </nav>
      
      <div className="pt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between font-mono text-[10px] text-blue-500/50 uppercase tracking-widest border-b border-white/5">
          <span>SYS.ON</span>
          <span>LAT: 28.5721° N // LON: 80.6480° W</span>
          <span>T - MINUS</span>
        </div>
        {children}
      </div>
      
      <footer className="relative z-10 border-t border-white/10 mt-24 py-12 bg-[#050510]/90 text-center font-mono text-xs text-slate-600">
        <p className="tracking-[0.2em] uppercase">HUTCHINGS AEROSPACE NUTRITION © 2026 // END TRANSMISSION</p>
      </footer>
    </div>
  );
}
