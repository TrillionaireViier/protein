import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-gray-300 font-serif overflow-x-hidden bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]">
      <nav className="border-b border-red-900 bg-black/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
          <Link href="/v19" className="text-4xl font-black text-red-700 tracking-widest uppercase mb-6 md:mb-0" style={{fontFamily: 'serif', letterSpacing: '0.2em'}}>
            Hutchings
          </Link>
          <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-500">
            <Link href="/v19/about" className="hover:text-red-600 transition-colors">Lore</Link>
            <Link href="/v19/products" className="hover:text-red-600 transition-colors">Relics</Link>
            <Link href="/v19/contact" className="hover:text-red-600 transition-colors">Summon</Link>
          </div>
        </div>
      </nav>
      
      <div className="py-16">
        {children}
      </div>
      
      <footer className="bg-black text-red-900 p-12 text-center border-t border-red-900 mt-24">
        <p className="tracking-[0.5em] uppercase text-xs">Hutchings Health © MMXXVI</p>
      </footer>
    </div>
  );
}
