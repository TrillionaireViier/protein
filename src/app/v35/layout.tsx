import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-[#555] font-sans selection:bg-[#f0f0f0] relative overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-300 via-pink-200 to-cyan-100 opacity-60 z-0 pointer-events-none"></div>
      <div className="fixed -bottom-1/2 -right-1/2 w-[150vw] h-[150vh] bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-cyan-200 via-purple-200 to-yellow-100 opacity-40 blur-[100px] animate-[spin_20s_linear_infinite] z-0 pointer-events-none"></div>
      
      <nav className="relative z-50 p-6 bg-white/30 backdrop-blur-xl border-b border-white/50 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <Link href="/v35" className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
            Hutchings
          </Link>
          <div className="flex gap-8 text-sm font-bold uppercase tracking-wider text-black/60 mt-4 md:mt-0">
            <Link href="/v35/about" className="hover:text-black transition-colors">Origins</Link>
            <Link href="/v35/products" className="hover:text-black transition-colors">Prisms</Link>
            <Link href="/v35/contact" className="hover:text-black transition-colors">Connect</Link>
          </div>
        </div>
      </nav>
      <div className="relative z-10 py-12">
        {children}
      </div>
    </div>
  );
}