import Link from 'next/link';
export default function Home() {
  return (
    <>
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-[#ff00ff] text-xl tracking-[0.5em] mb-4 font-bold drop-shadow-[0_0_8px_#ff00ff] italic">A E S T H E T I C S</h2>
        <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-[#00ffff] via-[#ff00ff] to-[#ffff00] drop-shadow-[4px_4px_0_#ffffff] leading-none">
          VIRTUAL <br/>GAINS
        </h1>
        <p className="text-2xl text-white max-w-2xl mx-auto mb-12 font-medium bg-[#000022]/60 p-4 border-2 border-[#ff00ff] shadow-[0_0_15px_#00ffff]">
          Download pure muscle mass directly into your physical hardware. No dial-up required.
        </p>
        
        <div className="flex justify-center mb-16 relative">
          <div className="absolute inset-0 bg-[#00ffff] blur-[40px] opacity-30 rounded-full"></div>
          <div className="w-64 h-64 border-4 border-[#ff00ff] p-2 bg-white/10 backdrop-blur-sm relative z-10">
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full h-full object-cover filter hue-rotate-[270deg] contrast-150 saturate-200" alt="Vapor Protein" />
          </div>
        </div>
        
        <Link href="/v37/products" className="inline-block bg-gradient-to-r from-[#00ffff] to-[#ff00ff] text-white text-xl font-black italic uppercase px-12 py-4 border-2 border-white shadow-[0_0_20px_#ff00ff] hover:scale-110 transition-transform">
          INITIALIZE
        </Link>
      </section>
    </>
  );
}