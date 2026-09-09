import Link from 'next/link';
export default function Home() {
  return (
    <>
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <div className="p-12 rounded-[3rem] shadow-[12px_12px_24px_rgb(163,177,198,0.6),-12px_-12px_24px_rgba(255,255,255,0.5)] max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-48 h-48 rounded-full p-4 shadow-[inset_8px_8px_16px_rgb(163,177,198,0.6),inset_-8px_-8px_16px_rgba(255,255,255,0.5)] mb-12 flex justify-center items-center">
             <div className="w-40 h-40 rounded-full shadow-[8px_8px_16px_rgb(163,177,198,0.6),-8px_-8px_16px_rgba(255,255,255,0.5)] overflow-hidden">
                <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full h-full object-cover filter contrast-125 saturate-50 mix-blend-multiply opacity-80" alt="Soft Protein" />
             </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#2d3748]">
            Seamless Growth.
          </h1>
          <p className="text-xl text-[#718096] mb-12 max-w-2xl font-medium">
            Formulas designed to integrate perfectly into your biology. No friction, just pure synthesis.
          </p>
          
          <Link href="/v30/products" className="px-12 py-5 rounded-2xl font-bold text-lg text-[#2d3748] shadow-[8px_8px_16px_rgb(163,177,198,0.6),-8px_-8px_16px_rgba(255,255,255,0.5)] hover:shadow-[inset_8px_8px_16px_rgb(163,177,198,0.6),inset_-8px_-8px_16px_rgba(255,255,255,0.5)] transition-all duration-300">
            View Collection
          </Link>
        </div>
      </section>
    </>
  );
}