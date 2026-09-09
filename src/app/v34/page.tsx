import Link from 'next/link';
export default function Home() {
  return (
    <>
      <section className="min-h-[85vh] flex items-center justify-center px-6 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-white opacity-[0.03] transform -skew-x-12 -translate-x-1/4"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border-[40px] border-white/5 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
        
        <div className="text-center relative z-10 max-w-4xl">
          <h2 className="text-white/50 text-xs tracking-[0.5em] uppercase mb-8">Absolute Zero</h2>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-none">
            Void of <br/><span className="text-transparent" style={{WebkitTextStroke: '2px white'}}>Color.</span><br/>Full of Mass.
          </h1>
          <div className="flex justify-center mb-16 group">
             <div className="w-64 h-64 border border-white/20 rounded-full flex justify-center items-center p-8 bg-white/5 backdrop-blur-sm group-hover:border-white transition-colors duration-500">
                <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full h-full object-cover rounded-full filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-700" alt="Monochrome Protein" />
             </div>
          </div>
          <Link href="/v34/products" className="inline-block bg-white text-black text-sm font-black uppercase tracking-widest px-12 py-5 hover:bg-transparent hover:text-white border-2 border-white transition-all">
            Enter The Void
          </Link>
        </div>
      </section>
    </>
  );
}