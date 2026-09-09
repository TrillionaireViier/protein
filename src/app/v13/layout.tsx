import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f4ebd0] text-[#3e2723] font-serif bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]">
      <div className="border-b-4 border-double border-[#5d4037] p-2 mx-4 mt-4">
        <nav className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-4">
          <Link href="/v13" className="text-3xl font-bold tracking-widest uppercase mb-4 md:mb-0">
            Hutchings Apothecary
          </Link>
          <div className="flex gap-8 text-sm tracking-widest uppercase font-bold">
            <Link href="/v13/about" className="hover:text-[#8d6e63] transition-colors border-b border-transparent hover:border-[#8d6e63]">Philosophy</Link>
            <Link href="/v13/products" className="hover:text-[#8d6e63] transition-colors border-b border-transparent hover:border-[#8d6e63]">Remedies</Link>
            <Link href="/v13/contact" className="hover:text-[#8d6e63] transition-colors border-b border-transparent hover:border-[#8d6e63]">Telegraph</Link>
          </div>
        </nav>
      </div>
      
      <div className="py-12">
        {children}
      </div>
      
      <footer className="border-t-4 border-double border-[#5d4037] mx-4 mt-12 p-8 text-center">
        <p className="tracking-widest uppercase text-xs mb-2">Established MMX</p>
        <p className="tracking-widest uppercase text-xs">Purveyors of Fine Supplements</p>
      </footer>
    </div>
  );
}
