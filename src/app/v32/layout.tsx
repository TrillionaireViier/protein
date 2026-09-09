import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#2c3e2d] font-serif selection:bg-[#d4af37] selection:text-white">
      <nav className="absolute w-full top-0 z-50 px-12 py-8 flex justify-between items-center border-b border-[#2c3e2d]/10">
        <Link href="/v32" className="text-2xl tracking-[0.2em] uppercase font-light">
          Hutchings <span className="text-[#d4af37]">Retreat</span>
        </Link>
        <div className="flex gap-12 text-sm tracking-[0.1em] uppercase">
          <Link href="/v32/about" className="hover:text-[#d4af37] transition-colors pb-1 border-b border-transparent hover:border-[#d4af37]">Philosophy</Link>
          <Link href="/v32/products" className="hover:text-[#d4af37] transition-colors pb-1 border-b border-transparent hover:border-[#d4af37]">Amenities</Link>
          <Link href="/v32/contact" className="hover:text-[#d4af37] transition-colors pb-1 border-b border-transparent hover:border-[#d4af37]">Reservations</Link>
        </div>
      </nav>
      {children}
      <footer className="py-12 text-center text-[#2c3e2d]/50 text-xs tracking-[0.2em] uppercase border-t border-[#2c3e2d]/10 mt-24">
        A Sanctuary for Cellular Renewal
      </footer>
    </div>
  );
}