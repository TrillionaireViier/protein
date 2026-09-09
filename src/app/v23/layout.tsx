import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fffae6] text-[#2c4c3b] font-sans selection:bg-[#ff7f50] selection:text-white relative">
      <div className="fixed inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/aztle.png')] opacity-20 pointer-events-none"></div>
      
      {/* Sun gradient */}
      <div className="fixed top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-[#ff7f50] to-[#ffda75] rounded-full blur-[80px] opacity-40 z-0 pointer-events-none"></div>

      <nav className="relative w-full z-50 bg-[#fffae6]/80 backdrop-blur-md border-b-2 border-[#ff7f50]/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/v23" className="text-3xl font-black text-[#ff7f50] tracking-tighter uppercase">
            Hutchings <span className="font-light text-[#20b2aa]">Oasis</span>
          </Link>
          <div className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-widest text-[#2c4c3b]">
            <Link href="/v23/about" className="hover:text-[#ff7f50] transition-colors">The Retreat</Link>
            <Link href="/v23/products" className="hover:text-[#ff7f50] transition-colors">Juice Bar</Link>
            <Link href="/v23/contact" className="hover:text-[#ff7f50] transition-colors">Reservations</Link>
          </div>
        </div>
      </nav>
      
      <div className="relative z-10">
        {children}
      </div>
      
      <footer className="relative z-10 bg-[#20b2aa] text-white mt-24 py-16 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-4 opacity-80 uppercase tracking-tighter">Stay Hydrated.</h2>
          <p className="font-bold tracking-widest text-sm opacity-60 uppercase">Hutchings Tropical Nutrition © 2026</p>
        </div>
      </footer>
    </div>
  );
}
