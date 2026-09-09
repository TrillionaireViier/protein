import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#000022] text-[#00ffff] font-sans selection:bg-[#ff00ff] selection:text-white overflow-x-hidden relative">
      {/* Sun */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-gradient-to-b from-[#ffff00] via-[#ff00ff] to-[#000022] opacity-40 z-0 pointer-events-none blur-sm" style={{clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)', bottom: '-20vw'}}></div>
      {/* Grid */}
      <div className="fixed bottom-0 left-0 w-full h-[50vh] z-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(#ff00ff 1px, transparent 1px), linear-gradient(90deg, #ff00ff 1px, transparent 1px)',
        backgroundSize: '40px 20px',
        transform: 'perspective(500px) rotateX(60deg)',
        transformOrigin: 'bottom',
        opacity: 0.5
      }}></div>

      <nav className="relative z-50 p-6 bg-[#000022]/80 backdrop-blur-md border-b-2 border-[#00ffff]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <Link href="/v37" className="text-4xl font-black italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#ff00ff] drop-shadow-[2px_2px_0_#ffffff]">
            HUTCHINGS
          </Link>
          <div className="flex gap-8 mt-4 md:mt-0 font-bold uppercase tracking-widest text-[#ffff00]">
            <Link href="/v37/about" className="hover:text-[#ff00ff] transition-colors drop-shadow-[0_0_5px_#ffff00]">System</Link>
            <Link href="/v37/products" className="hover:text-[#ff00ff] transition-colors drop-shadow-[0_0_5px_#ffff00]">Files</Link>
            <Link href="/v37/contact" className="hover:text-[#ff00ff] transition-colors drop-shadow-[0_0_5px_#ffff00]">Network</Link>
          </div>
        </div>
      </nav>
      <div className="relative z-10 py-12">
        {children}
      </div>
    </div>
  );
}