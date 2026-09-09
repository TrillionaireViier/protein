import Link from 'next/link';
export default function Home() {
  return (
    <>
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full blur-2xl opacity-60 animate-pulse"></div>
          <div className="relative w-72 h-72 rounded-full p-2 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 shadow-[0_0_50px_rgba(255,255,255,1)]">
             <div className="w-full h-full bg-white/40 backdrop-blur-md rounded-full overflow-hidden flex items-center justify-center p-4 border border-white/50">
               <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full h-full object-cover filter contrast-125 rounded-full mix-blend-multiply opacity-80" alt="Holographic Protein" />
             </div>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500">
          Luminous <br/>Gains.
        </h1>
        <p className="text-xl text-black/60 font-medium max-w-2xl mx-auto mb-12">
          Shimmering isolation. Our holographic protein matrices reflect perfection inside and out.
        </p>
        
        <Link href="/v35/products" className="bg-white/80 backdrop-blur-md text-black font-bold uppercase tracking-widest px-10 py-4 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-white/50 hover:bg-gradient-to-r hover:from-cyan-100 hover:to-pink-100 transition-all hover:-translate-y-1">
          Explore Prisms
        </Link>
      </section>
    </>
  );
}