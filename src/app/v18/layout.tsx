import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#4b5320] text-[#e0dacd] font-mono uppercase bg-[url('https://www.transparenttextures.com/patterns/camo.png')]">
      <nav className="border-b-4 border-black bg-[#2d3319] p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <Link href="/v18" className="text-3xl font-black tracking-widest text-black bg-[#e0dacd] px-4 py-1 mb-4 md:mb-0 transform -skew-x-6">
            BASECAMP // HUTCHINGS
          </Link>
          <div className="flex gap-6 text-sm font-bold">
            <Link href="/v18/about" className="hover:text-black hover:bg-[#e0dacd] px-2 py-1 transition-colors border border-transparent hover:border-black">DOSSIER</Link>
            <Link href="/v18/products" className="hover:text-black hover:bg-[#e0dacd] px-2 py-1 transition-colors border border-transparent hover:border-black">ARMORY</Link>
            <Link href="/v18/contact" className="hover:text-black hover:bg-[#e0dacd] px-2 py-1 transition-colors border border-transparent hover:border-black">COMMS</Link>
          </div>
        </div>
      </nav>
      
      <div className="py-12 px-4">
        {children}
      </div>
      
      <footer className="bg-[#1a1f10] text-[#6b7548] p-8 text-center border-t-8 border-black">
        <p className="font-bold tracking-widest text-xs mb-2">PROPERTY OF HUTCHINGS TACTICAL DIV.</p>
        <p className="font-bold tracking-widest text-xs">CLASSIFIED INFORMATION // DO NOT DISTRIBUTE</p>
      </footer>
    </div>
  );
}
