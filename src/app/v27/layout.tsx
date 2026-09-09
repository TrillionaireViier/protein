import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#110022] text-[#ff00ff] font-sans selection:bg-[#00ffff] selection:text-black overflow-x-hidden">
      <div className="fixed inset-0 z-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/psychedelic.png')] pointer-events-none"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-yellow-400 via-pink-500 to-cyan-400 opacity-20 blur-3xl animate-[spin_10s_linear_infinite] pointer-events-none"></div>
      
      <nav className="relative z-50 p-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <Link href="/v27" className="text-5xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#ff00ff] filter drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] mb-6 md:mb-0">
            Hutchings
          </Link>
          <div className="flex gap-8 text-lg font-black uppercase italic text-[#ffff00]">
            <Link href="/v27/about" className="hover:text-[#00ffff] hover:scale-110 transition-transform">Mind</Link>
            <Link href="/v27/products" className="hover:text-[#00ffff] hover:scale-110 transition-transform">Body</Link>
            <Link href="/v27/contact" className="hover:text-[#00ffff] hover:scale-110 transition-transform">Spirit</Link>
          </div>
        </div>
      </nav>
      <div className="relative z-10 pt-12 pb-24">
        {children}
      </div>
    </div>
  );
}