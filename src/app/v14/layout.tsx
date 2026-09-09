import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0f0f11] text-white font-sans bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
      <nav className="fixed w-full z-50 bg-[#0f0f11]/90 border-b-2 border-red-600 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/v14" className="text-3xl font-black italic tracking-tighter flex items-center gap-2 transform -skew-x-12">
            HUTCHINGS<span className="text-red-600">PRO</span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-black italic uppercase tracking-wider">
            <Link href="/v14/about" className="hover:text-red-600 transition-colors transform hover:translate-x-1">/ TEAM</Link>
            <Link href="/v14/products" className="hover:text-red-600 transition-colors transform hover:translate-x-1">/ GEAR</Link>
            <Link href="/v14/contact" className="hover:text-red-600 transition-colors transform hover:translate-x-1">/ PIT STOP</Link>
          </div>
        </div>
      </nav>
      
      <div className="pt-20">
        {children}
      </div>
      
      <footer className="bg-red-600 text-white mt-24 py-8 px-6 transform -skew-y-2 translate-y-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 transform skew-y-2">
          <div className="font-black italic text-2xl tracking-tighter">
            HUTCHINGS<span className="text-black">PRO</span>
          </div>
          <div className="text-sm font-bold uppercase tracking-widest">
            PERFORMANCE DIVISION © 2026
          </div>
        </div>
      </footer>
    </div>
  );
}
