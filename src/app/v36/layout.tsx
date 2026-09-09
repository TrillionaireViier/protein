import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#deb887] text-[#4a3525] font-serif selection:bg-[#4a3525] selection:text-[#deb887] bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]">
      <nav className="border-b-4 border-[#4a3525] bg-[#c19a6b] p-6 shadow-md relative z-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <Link href="/v36" className="text-4xl font-black uppercase tracking-tighter" style={{fontFamily: 'Playfair Display, serif'}}>
            ★ Hutchings ★
          </Link>
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest mt-4 md:mt-0 border-t-2 md:border-t-0 md:border-l-2 border-[#4a3525] md:pl-8 pt-4 md:pt-0">
            <Link href="/v36/about" className="hover:text-black transition-colors">The Tale</Link>
            <Link href="/v36/products" className="hover:text-black transition-colors">General Store</Link>
            <Link href="/v36/contact" className="hover:text-black transition-colors">Telegraph</Link>
          </div>
        </div>
      </nav>
      {children}
      <footer className="mt-20 border-t-4 border-[#4a3525] bg-[#c19a6b] p-6 text-center text-xs font-bold uppercase tracking-widest">
        Est. 1884 • Premium Provisions
      </footer>
    </div>
  );
}