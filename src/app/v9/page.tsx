import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="relative min-h-[85vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-[#fdfbf7]"></div>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-green-100 rounded-full blur-[100px] opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10 w-full grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-green-100 text-green-800 text-sm px-4 py-1 rounded-full mb-8 font-medium">
              100% Plant-Powered Purity
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-stone-900 leading-[1.1] mb-8">
              Nourish Your <br/>
              <span className="text-green-700 italic">True Nature.</span>
            </h1>
            <p className="text-stone-600 text-xl mb-12 max-w-lg leading-relaxed">
              Experience the cleanest, most natural whey isolate on the planet. Sourced ethically, formulated perfectly.
            </p>
            <Link href="/v9/products" className="inline-block bg-green-700 text-white font-medium px-10 py-5 rounded-full hover:bg-green-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Explore Our Blends
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-white/40 blur-3xl rounded-full"></div>
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="relative z-10 w-full max-w-md mx-auto rounded-[3rem] shadow-2xl sepia-[20%] hue-rotate-[-10deg]" alt="Natural Protein" />
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-16 text-center">Rooted in <span className="italic text-green-700">Wellness</span></h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow border border-stone-100">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-8 text-3xl">🌱</div>
              <h3 className="text-2xl font-serif text-stone-900 mb-4">Clean Growth</h3>
              <p className="text-stone-600 leading-relaxed">Pure protein synthesis without artificial additives. Build muscle naturally.</p>
            </div>
            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow border border-stone-100">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-8 text-3xl">🌿</div>
              <h3 className="text-2xl font-serif text-stone-900 mb-4">Gentle Recovery</h3>
              <p className="text-stone-600 leading-relaxed">Formulated with natural digestive enzymes for zero bloating and fast absorption.</p>
            </div>
            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow border border-stone-100">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-8 text-3xl">🍃</div>
              <h3 className="text-2xl font-serif text-stone-900 mb-4">Ethical Sourcing</h3>
              <p className="text-stone-600 leading-relaxed">Ingredients sourced from sustainable farms that care for the earth.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
