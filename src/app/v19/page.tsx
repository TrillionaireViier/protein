import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="min-h-[80vh] flex items-center justify-center relative px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#3f0000_0%,_#000000_70%)] opacity-40"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-red-800 tracking-[0.5em] uppercase text-sm mb-8">Ascend from weakness</h2>
          <h1 className="text-7xl md:text-9xl font-black text-red-600 mb-8 uppercase tracking-widest" style={{fontFamily: 'serif', textShadow: '2px 2px 10px rgba(220, 38, 38, 0.5)'}}>
            ISOLATE
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-16 italic max-w-2xl mx-auto leading-relaxed border-t border-b border-red-900 py-8">
            Forged in the fires of discipline. A pure, unadulterated protein matrix designed to resurrect broken muscle tissue.
          </p>
          
          <div className="flex justify-center mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-red-600 blur-[50px] opacity-20 rounded-full"></div>
              <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="relative z-10 w-64 grayscale contrast-150 brightness-75" alt="Dark Protein" />
            </div>
          </div>
          
          <Link href="/v19/products" className="inline-block border border-red-800 text-red-600 hover:bg-red-900 hover:text-black uppercase tracking-[0.3em] px-12 py-4 transition-all duration-500 text-sm">
            Enter the Crypt
          </Link>
        </div>
      </section>
      
      <section className="py-24 px-6 border-t border-red-900/50 max-w-6xl mx-auto mt-24">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center p-8 border border-red-900/30 hover:border-red-600/50 transition-colors bg-black/50">
            <h3 className="text-2xl text-red-500 mb-4 uppercase tracking-widest" style={{fontFamily: 'serif'}}>Absolute Purity</h3>
            <p className="text-gray-500 italic">Cleansed of all earthly impurities. No false idols, no cheap fillers.</p>
          </div>
          <div className="text-center p-8 border border-red-900/30 hover:border-red-600/50 transition-colors bg-black/50">
            <h3 className="text-2xl text-red-500 mb-4 uppercase tracking-widest" style={{fontFamily: 'serif'}}>Dark Energy</h3>
            <p className="text-gray-500 italic">Harness the raw, untamed power necessary to shatter your plateaus.</p>
          </div>
          <div className="text-center p-8 border border-red-900/30 hover:border-red-600/50 transition-colors bg-black/50">
            <h3 className="text-2xl text-red-500 mb-4 uppercase tracking-widest" style={{fontFamily: 'serif'}}>Immortal Recovery</h3>
            <p className="text-gray-500 italic">Rise from the ashes of your workout stronger than before.</p>
          </div>
        </div>
      </section>
    </>
  );
}
