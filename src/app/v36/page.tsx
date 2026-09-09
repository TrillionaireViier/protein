import Link from 'next/link';
export default function Home() {
  return (
    <>
      <section className="min-h-[75vh] flex flex-col items-center justify-center px-6 text-center py-20">
        <div className="border-8 border-double border-[#4a3525] p-2 bg-[#d2b48c] max-w-4xl mx-auto shadow-2xl transform -rotate-1">
          <div className="border-4 border-[#4a3525] p-8 md:p-16 relative">
            {/* Corner pins */}
            <div className="absolute top-2 left-2 w-3 h-3 bg-[#4a3525] rounded-full shadow-sm"></div>
            <div className="absolute top-2 right-2 w-3 h-3 bg-[#4a3525] rounded-full shadow-sm"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 bg-[#4a3525] rounded-full shadow-sm"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 bg-[#4a3525] rounded-full shadow-sm"></div>
            
            <h2 className="text-xl tracking-[0.3em] uppercase mb-4">Wanted:</h2>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8" style={{fontFamily: 'Playfair Display, serif'}}>
              MASSIVE <br/>GAINS
            </h1>
            <p className="text-xl font-medium max-w-2xl mx-auto mb-12 border-y-2 border-[#4a3525] py-4">
              Reward offered for the toughest cowpokes who dare to consume the frontier's most potent protein isolate.
            </p>
            
            <div className="flex justify-center mb-12">
               <div className="w-64 h-64 p-2 border-4 border-[#4a3525] bg-white transform rotate-3">
                 <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full h-full object-cover filter sepia-[0.8] contrast-150" alt="Wanted Protein" />
               </div>
            </div>
            
            <Link href="/v36/products" className="inline-block bg-[#4a3525] text-[#deb887] text-xl font-black uppercase tracking-widest px-12 py-4 border-2 border-black hover:bg-black transition-colors shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
              Enter The Store
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}