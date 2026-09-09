import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-black font-black uppercase tracking-tight bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] overflow-x-hidden">
      <nav className="fixed w-full z-50 top-0 border-b-8 border-black bg-yellow-400">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/v15" className="text-4xl italic text-red-600 drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
            HUTCHINGS<span className="text-white">プロ</span>
          </Link>
          <div className="hidden md:flex gap-6 text-xl">
            <Link href="/v15/about" className="hover:text-white hover:drop-shadow-[2px_2px_0_rgba(0,0,0,1)] transition-all">アバウト (ABOUT)</Link>
            <Link href="/v15/products" className="hover:text-white hover:drop-shadow-[2px_2px_0_rgba(0,0,0,1)] transition-all">ショップ (STORE)</Link>
            <Link href="/v15/contact" className="hover:text-white hover:drop-shadow-[2px_2px_0_rgba(0,0,0,1)] transition-all">コンタクト (CONTACT)</Link>
          </div>
        </div>
      </nav>
      
      <div className="pt-20">
        {children}
      </div>
      
      <footer className="bg-blue-600 border-t-8 border-black p-8 text-center text-white mt-16">
        <h2 className="text-4xl italic drop-shadow-[4px_4px_0_rgba(0,0,0,1)] mb-4">HUTCHINGS TOKYO © 2026</h2>
        <p className="text-xl">THE STRONGEST PROTEIN IN THE UNIVERSE!</p>
      </footer>
    </div>
  );
}
