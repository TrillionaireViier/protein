import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="relative min-h-[90vh] flex flex-col md:flex-row border-b-8 border-black">
        <div className="w-full md:w-1/2 bg-red-500 border-r-8 border-black p-12 flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_20%,_#000_150%)] opacity-20"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-30"></div>
          <div className="relative z-10 transform -skew-x-6">
            <div className="bg-yellow-400 text-black border-4 border-black px-6 py-2 inline-block text-3xl mb-6 shadow-[8px_8px_0_rgba(0,0,0,1)]">
              LEVEL UP! レベルアップ
            </div>
            <h1 className="text-6xl md:text-8xl italic text-white drop-shadow-[6px_6px_0_rgba(0,0,0,1)] leading-none mb-8">
              UNLEASH YOUR <br/> <span className="text-yellow-400">ULTIMATE</span> POWER!!
            </h1>
            <p className="text-2xl text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-12">
              100% PURE ISOLATE. NO FILLERS. JUST RAW STRENGTH.
            </p>
            <Link href="/v15/products" className="inline-block bg-blue-600 text-white border-4 border-black text-3xl px-12 py-6 italic shadow-[8px_8px_0_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
              GO TO STORE &gt;&gt;
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-blue-400 flex items-center justify-center relative p-12">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/halftone.png')] opacity-50"></div>
          <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full max-w-lg relative z-10 border-8 border-black shadow-[16px_16px_0_rgba(255,255,0,1)] transform rotate-3" alt="Protein" />
        </div>
      </section>
      
      <section className="py-24 px-6 bg-white border-b-8 border-black">
        <h2 className="text-6xl text-center italic mb-16 drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-blue-600">SPECIAL ATTACKS (BENEFITS)</h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="border-8 border-black bg-yellow-400 p-8 shadow-[12px_12px_0_rgba(0,0,0,1)] transform -rotate-2 hover:rotate-0 transition-transform">
            <h3 className="text-4xl text-white drop-shadow-[3px_3px_0_rgba(0,0,0,1)] mb-4">💥 INSTANT RECOVERY</h3>
            <p className="text-xl">Heal your muscles at lightning speed!</p>
          </div>
          <div className="border-8 border-black bg-red-500 p-8 shadow-[12px_12px_0_rgba(0,0,0,1)] transform rotate-2 hover:rotate-0 transition-transform">
            <h3 className="text-4xl text-white drop-shadow-[3px_3px_0_rgba(0,0,0,1)] mb-4">🔥 PURE ENERGY</h3>
            <p className="text-xl">Zero bloat, 100% absorption matrix.</p>
          </div>
          <div className="border-8 border-black bg-green-400 p-8 shadow-[12px_12px_0_rgba(0,0,0,1)] transform -rotate-1 hover:rotate-0 transition-transform">
            <h3 className="text-4xl text-white drop-shadow-[3px_3px_0_rgba(0,0,0,1)] mb-4">💪 MASS BUILDER</h3>
            <p className="text-xl">Become the strongest version of yourself.</p>
          </div>
        </div>
      </section>
    </>
  );
}
