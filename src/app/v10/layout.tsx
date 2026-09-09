import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white antialiased">
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-8 h-16 flex items-center justify-between">
          <Link href="/v10" className="text-xl font-medium tracking-tight">
            Hutchings
          </Link>
          <div className="hidden md:flex gap-8 text-xs font-medium tracking-widest text-gray-500 uppercase">
            <Link href="/v10/about" className="hover:text-black transition-colors">Philosophy</Link>
            <Link href="/v10/products" className="hover:text-black transition-colors">Store</Link>
            <Link href="/v10/contact" className="hover:text-black transition-colors">Support</Link>
          </div>
          <button className="md:hidden text-black">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </nav>
      <div className="pt-16">
        {children}
      </div>
      <footer className="bg-gray-50 text-gray-500 py-12 px-8 border-t border-gray-100 mt-32">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <div>
            Design by Hutchings.
          </div>
          <div>
            Copyright © 2026 Tilda.
          </div>
        </div>
      </footer>
    </div>
  );
}
