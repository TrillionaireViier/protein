import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f5f5dc] text-black font-sans selection:bg-[#ff0000] selection:text-white">
      <nav className="border-b-4 border-black bg-white">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/v21" className="text-4xl font-bold tracking-tighter flex items-center">
            <div className="flex mr-4">
              <div className="w-8 h-8 bg-[#ff0000] rounded-full"></div>
              <div className="w-8 h-8 bg-[#0000ff] -ml-4"></div>
              <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-b-[#ffff00] -ml-4 mt-1"></div>
            </div>
            HUTCHINGS
          </Link>
          <div className="hidden md:flex gap-12 text-sm font-bold tracking-widest uppercase">
            <Link href="/v21/about" className="hover:text-[#ff0000] transition-colors">Design</Link>
            <Link href="/v21/products" className="hover:text-[#0000ff] transition-colors">Catalog</Link>
            <Link href="/v21/contact" className="hover:text-[#ffbb00] transition-colors">Connect</Link>
          </div>
        </div>
      </nav>
      
      <div>
        {children}
      </div>
      
      <footer className="border-t-4 border-black bg-white px-6 py-12 mt-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="font-bold tracking-widest uppercase mb-4 md:mb-0">Hutchings Health / 1920-2026</div>
          <div className="flex gap-4">
            <div className="w-4 h-4 bg-[#ff0000] rounded-full"></div>
            <div className="w-4 h-4 bg-[#0000ff]"></div>
            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-[#ffff00]"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
