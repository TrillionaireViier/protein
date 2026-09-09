import Link from 'next/link';
export default function Home() {
  return (
    <>
      <section className="px-6 py-20 text-center flex flex-col items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-[#ffeb3b] border-4 border-black shadow-[8px_8px_0_#ff4081] -rotate-3 rounded-[30px]"></div>
          <h1 className="relative text-7xl md:text-9xl font-black uppercase tracking-tighter text-black z-10 px-8 py-4">
            BAM!
          </h1>
        </div>
        <p className="text-3xl font-bold uppercase mt-12 mb-16 bg-[#00bcd4] text-white p-4 border-4 border-black shadow-[6px_6px_0_#000000] rotate-1 max-w-2xl">
          Radical protein for totally tubular gains. No bogus fillers.
        </p>
        
        <div className="relative mb-20 group cursor-pointer">
          <div className="absolute -inset-2 bg-[#ff4081] border-4 border-black shadow-[10px_10px_0_#00bcd4] rounded-full rotate-6 group-hover:-rotate-6 transition-transform duration-300"></div>
          <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-80 h-80 object-cover rounded-full border-8 border-black relative z-10 filter contrast-125 saturate-150" alt="Memphis Protein" />
        </div>
        
        <Link href="/v29/products" className="text-4xl font-black uppercase bg-white px-12 py-6 border-[6px] border-black shadow-[12px_12px_0_#ff4081] hover:bg-[#ffeb3b] hover:shadow-[6px_6px_0_#00bcd4] hover:translate-x-2 hover:translate-y-2 transition-all">
          Get Swole
        </Link>
      </section>
    </>
  );
}