import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="relative min-h-[80vh] flex items-center border-b-4 border-black overflow-hidden bg-white">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[#ff0000] border-l-4 border-black hidden md:block z-0"></div>
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#ffff00] rounded-full border-4 border-black hidden md:block z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-12 border-4 border-black shadow-[16px_16px_0_rgba(0,0,255,1)]">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4 border-b-4 border-black pb-2 inline-block">FORM FOLLOWS FUNCTION</h2>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
              PURE <br/> PROTEIN
            </h1>
            <p className="text-xl font-medium mb-12 max-w-sm">
              Construct your body with the most basic, essential building blocks. No unnecessary ornamentation.
            </p>
            <Link href="/v21/products" className="inline-block bg-[#0000ff] text-white font-bold text-xl tracking-widest uppercase px-12 py-6 border-4 border-black hover:bg-black transition-colors">
              VIEW CATALOG
            </Link>
          </div>
          <div className="flex justify-center relative">
            <div className="bg-white border-4 border-black p-4 relative z-20 transform rotate-6 hover:rotate-0 transition-transform duration-500 shadow-[16px_16px_0_rgba(255,0,0,1)]">
              <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full max-w-sm filter grayscale contrast-125" alt="Protein Element" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6 bg-[#f5f5dc]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-0 border-4 border-black shadow-[16px_16px_0_rgba(0,0,0,1)]">
          <div className="bg-white p-12 border-b-4 md:border-b-0 md:border-r-4 border-black text-center group hover:bg-[#ff0000] hover:text-white transition-colors">
            <div className="w-24 h-24 bg-[#ff0000] group-hover:bg-white rounded-full mx-auto mb-8 border-4 border-black"></div>
            <h3 className="text-3xl font-black uppercase mb-4">SIMPLICITY</h3>
            <p className="font-medium">Reduced to only the essential amino acids.</p>
          </div>
          <div className="bg-white p-12 border-b-4 md:border-b-0 md:border-r-4 border-black text-center group hover:bg-[#0000ff] hover:text-white transition-colors">
            <div className="w-24 h-24 bg-[#0000ff] group-hover:bg-white mx-auto mb-8 border-4 border-black"></div>
            <h3 className="text-3xl font-black uppercase mb-4">STRUCTURE</h3>
            <p className="font-medium">The foundation for structural muscular integrity.</p>
          </div>
          <div className="bg-white p-12 text-center group hover:bg-[#ffff00] transition-colors">
            <div className="w-0 h-0 border-l-[48px] border-l-transparent border-r-[48px] border-r-transparent border-b-[83px] border-b-[#ffff00] group-hover:border-b-black mx-auto mb-8"></div>
            <h3 className="text-3xl font-black uppercase mb-4">GEOMETRY</h3>
            <p className="font-medium">Perfectly formulated at the molecular level.</p>
          </div>
        </div>
      </section>
    </>
  );
}
