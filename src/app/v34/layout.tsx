import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <nav className="border-b border-white/20 p-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <Link href="/v34" className="text-3xl font-black uppercase tracking-widest hover:tracking-[0.25em] transition-all">
            Hutchings
          </Link>
          <div className="flex gap-12 text-sm font-bold uppercase tracking-widest mt-6 md:mt-0">
            <Link href="/v34/about" className="hover:line-through transition-all">Identity</Link>
            <Link href="/v34/products" className="hover:line-through transition-all">Objects</Link>
            <Link href="/v34/contact" className="hover:line-through transition-all">Signal</Link>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}