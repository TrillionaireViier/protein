import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-pink-500 selection:text-white">
      <nav className="fixed w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/v8" className="text-2xl font-mono font-bold text-white tracking-widest flex items-center gap-2">
            HUTCHINGS<span className="text-cyan-400">_OS</span>
            <span className="w-3 h-6 bg-pink-500 animate-pulse"></span>
          </Link>
          <div className="hidden md:flex gap-8 font-mono text-sm">
            <Link href="/v8/about" className="hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(0,243,255,0.5)] transition-all">/ABOUT</Link>
            <Link href="/v8/products" className="hover:text-pink-400 hover:shadow-[0_0_10px_rgba(255,0,240,0.5)] transition-all">/CATALOG</Link>
            <Link href="/v8/contact" className="hover:text-green-400 hover:shadow-[0_0_10px_rgba(57,255,20,0.5)] transition-all">/LINK</Link>
          </div>
          <button className="md:hidden text-cyan-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </nav>
      <div className="pt-20">
        {children}
      </div>
      <footer className="bg-zinc-950 border-t border-cyan-500/30 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-xl text-white opacity-50">
            SYSTEM.<span className="text-pink-500">HALT</span>
          </div>
          <div className="font-mono text-xs text-cyan-500/50">
            © 2026 / ASSEMBLED ON TILDA
          </div>
        </div>
      </footer>
    </div>
  );
}
