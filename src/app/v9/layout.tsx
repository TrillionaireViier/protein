import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-stone-800 font-sans selection:bg-green-200">
      <nav className="fixed w-full z-50 bg-[#fdfbf7]/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/v9" className="text-3xl font-serif text-stone-800 tracking-tight flex items-center gap-2">
            Hutchings<span className="text-green-700 italic">Health</span>
          </Link>
          <div className="hidden md:flex gap-10 font-medium text-stone-600 uppercase tracking-widest text-xs">
            <Link href="/v9/about" className="hover:text-green-700 transition-colors">Our Roots</Link>
            <Link href="/v9/products" className="hover:text-green-700 transition-colors">Botanicals</Link>
            <Link href="/v9/contact" className="hover:text-green-700 transition-colors">Connect</Link>
          </div>
          <button className="md:hidden text-stone-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </nav>
      <div className="pt-24">
        {children}
      </div>
      <footer className="bg-stone-900 text-stone-400 py-16 px-6 mt-20 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-2xl text-stone-200">
            100% Natural Harmony
          </div>
          <div className="text-sm">
            © 2026 / Made with care on Tilda
          </div>
        </div>
      </footer>
    </div>
  );
}
