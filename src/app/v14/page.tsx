import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="transform -skew-x-6">
            <div className="inline-block bg-red-600 text-white font-black italic px-4 py-1 mb-6 text-xl tracking-wider">
              NEW FORMULA
            </div>
            <h1 className="text-6xl md:text-8xl font-black italic leading-none mb-6 tracking-tighter">
              DOMINATE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-red-800">THE TRACK.</span>
            </h1>
            <p className="text-gray-400 text-xl font-bold italic mb-10 max-w-lg">
              ENGINEERED FOR MAXIMUM SPEED OF ABSORPTION. NO LAG. NO CRASH. JUST PURE HORSEPOWER.
            </p>
            <Link href="/v14/products" className="inline-block bg-white text-black font-black italic px-10 py-5 text-xl tracking-widest uppercase hover:bg-red-600 hover:text-white transition-all transform hover:scale-105 hover:translate-x-2">
              SHOP NOW &gt;&gt;
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-red-600 blur-[100px] opacity-30 rounded-full"></div>
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="relative z-10 w-full max-w-md mx-auto transform rotate-6 hover:rotate-0 transition-transform duration-500 drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]" alt="Hero" />
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6 border-t-4 border-red-600 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black border-l-4 border-red-600 p-8 transform -skew-x-6 hover:-translate-y-2 transition-transform">
              <h3 className="text-3xl font-black italic mb-4 transform skew-x-6">01 // SPEED</h3>
              <p className="text-gray-400 font-bold italic transform skew-x-6">Hydrolyzed for immediate entry into the bloodstream. Faster than the competition.</p>
            </div>
            <div className="bg-black border-l-4 border-white p-8 transform -skew-x-6 hover:-translate-y-2 transition-transform">
              <h3 className="text-3xl font-black italic mb-4 transform skew-x-6">02 // POWER</h3>
              <p className="text-gray-400 font-bold italic transform skew-x-6">Packed with BCAA to keep your engine running at redline.</p>
            </div>
            <div className="bg-black border-l-4 border-red-600 p-8 transform -skew-x-6 hover:-translate-y-2 transition-transform">
              <h3 className="text-3xl font-black italic mb-4 transform skew-x-6">03 // ENDURANCE</h3>
              <p className="text-gray-400 font-bold italic transform skew-x-6">Sustained recovery matrix so you never pit out early.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
