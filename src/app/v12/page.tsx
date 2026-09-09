import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="min-h-[80vh] flex flex-col items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 text-sm text-purple-200">
            Experience the future of recovery
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/30">
            Transparent.
          </h1>
          <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto">
            A protein isolate so pure, it's virtually invisible. No fillers. No hidden blends. Just results.
          </p>
          
          <div className="flex justify-center gap-6">
            <Link href="/v12/products" className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xl transition-all shadow-[0_8px_32px_rgba(31,38,135,0.37)] font-medium">
              Explore Store
            </Link>
          </div>
        </div>
        
        <div className="mt-24 relative w-full max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30 transform -rotate-2"></div>
          <div className="relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl p-4">
             <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full h-auto rounded-2xl mix-blend-luminosity opacity-80" alt="Protein" />
          </div>
        </div>
      </section>
      
      <section className="py-32 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[1,2,3].map(i => (
            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-purple-400 mb-6 flex items-center justify-center font-bold">0{i}</div>
              <h3 className="text-xl font-bold mb-3">Crystal Clear</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Micro-filtered for the highest biological value. What you see is exactly what you get.
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
