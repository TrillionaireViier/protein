import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans selection:bg-[#ff003c] selection:text-white bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]">
      <nav className="border-b-4 border-white bg-black/90 p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <Link href="/v33" className="text-4xl font-black italic tracking-tighter text-[#ff003c] drop-shadow-[2px_2px_0_#ffffff] transform -rotate-2">
            HUTCHINGS
          </Link>
          <div className="flex gap-6 mt-4 md:mt-0 font-bold text-xl uppercase italic">
            <Link href="/v33/about" className="hover:text-[#ff003c] hover:bg-white px-2 transition-all">Crew</Link>
            <Link href="/v33/products" className="hover:text-[#ff003c] hover:bg-white px-2 transition-all">Stash</Link>
            <Link href="/v33/contact" className="hover:text-[#ff003c] hover:bg-white px-2 transition-all">Holler</Link>
          </div>
        </div>
      </nav>
      <div className="relative overflow-hidden">
        {/* Fake spray paint splatters */}
        <div className="absolute top-20 -left-10 w-64 h-64 bg-[#ff003c] rounded-full blur-[80px] opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-40 -right-20 w-80 h-80 bg-white rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
        {children}
      </div>
    </div>
  );
}