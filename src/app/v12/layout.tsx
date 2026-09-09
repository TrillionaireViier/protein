import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-600/30 via-slate-900 to-slate-900"></div>
      <div className="fixed -bottom-[300px] -left-[300px] w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[120px] mix-blend-screen z-0"></div>
      <div className="fixed top-[20%] right-[10%] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] mix-blend-screen z-0"></div>

      <nav className="fixed w-full z-50 top-4 px-4">
        <div className="max-w-5xl mx-auto rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl px-6 h-16 flex items-center justify-between">
          <Link href="/v12" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Hutchings UI
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="/v12/about" className="hover:text-purple-300 transition-colors opacity-70 hover:opacity-100">About</Link>
            <Link href="/v12/products" className="hover:text-purple-300 transition-colors opacity-70 hover:opacity-100">Store</Link>
            <Link href="/v12/contact" className="hover:text-purple-300 transition-colors opacity-70 hover:opacity-100">Contact</Link>
          </div>
        </div>
      </nav>
      
      <div className="pt-32 relative z-10">
        {children}
      </div>
      
      <footer className="relative z-10 border-t border-white/10 mt-24 py-12 bg-black/20 backdrop-blur-md text-center">
        <p className="text-white/40 text-sm">Glassmorphism Edition © 2026</p>
      </footer>
    </div>
  );
}
