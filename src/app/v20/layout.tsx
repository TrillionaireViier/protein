import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#ccff00] selection:text-black">
      <nav className="fixed w-full z-50 mix-blend-difference text-white">
        <div className="px-6 py-8 flex items-center justify-between">
          <Link href="/v20" className="text-4xl font-black tracking-tighter uppercase">
            Hutchings<sup className="text-sm">®</sup>
          </Link>
          <div className="hidden md:flex gap-12 text-sm font-bold uppercase tracking-widest">
            <Link href="/v20/about" className="hover:underline decoration-4 underline-offset-4">"ABOUT"</Link>
            <Link href="/v20/products" className="hover:underline decoration-4 underline-offset-4">"STORE"</Link>
            <Link href="/v20/contact" className="hover:underline decoration-4 underline-offset-4">"CONTACT"</Link>
          </div>
        </div>
      </nav>
      
      <div className="relative pt-24 min-h-[90vh]">
        {children}
      </div>
      
      <footer className="bg-black text-white p-12 overflow-hidden relative">
        <div className="absolute -right-20 -top-20 text-[200px] font-black text-white/5 tracking-tighter">HUTCHINGS</div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-end">
          <div>
            <p className="text-3xl font-black mb-2 tracking-tighter uppercase">Hutchings Health</p>
            <p className="text-sm font-bold uppercase tracking-widest text-[#ccff00]">"FOR NUTRITIONAL USE ONLY"</p>
          </div>
          <p className="text-xs uppercase font-bold tracking-widest mt-8 md:mt-0">©2026. DO NOT COPY.</p>
        </div>
      </footer>
    </div>
  );
}
