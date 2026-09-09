import Link from 'next/link';
export default function Home() {
  return (
    <>
      <section className="px-6 py-20 min-h-[80vh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-[#ff003c] text-white font-black italic px-4 py-1 text-2xl inline-block transform -rotate-3 mb-6">RAW POWER</div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              NO<br/>RULES.<br/><span className="text-transparent" style={{WebkitTextStroke: '2px white'}}>JUST GAINS.</span>
            </h1>
            <p className="text-xl text-[#aaaaaa] font-bold max-w-md mb-10 border-l-4 border-[#ff003c] pl-4">
              Stop playing nice. Rip the muscle fibers and fuel them with the most aggressive isolate on the street.
            </p>
            <Link href="/v33/products" className="inline-block bg-white text-black text-3xl font-black italic uppercase px-10 py-4 hover:bg-[#ff003c] hover:text-white transition-colors shadow-[8px_8px_0_#ff003c]">
              RAID THE STASH
            </Link>
          </div>
          
          <div className="relative flex justify-center items-center">
             <div className="absolute inset-0 bg-black border-8 border-white transform rotate-6"></div>
             <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full h-auto object-cover relative z-10 filter contrast-[1.5] saturate-0 shadow-[10px_10px_0_#ff003c] transform -rotate-3" alt="Grunge Protein" />
             <div className="absolute -bottom-6 -right-6 bg-[#ff003c] text-white font-black text-4xl p-4 rotate-12 z-20 shadow-xl border-4 border-white">SOLD OUT?</div>
          </div>
        </div>
      </section>
    </>
  );
}