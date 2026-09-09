import Link from 'next/link';
export default function Home() {
  return (
    <>
      <section className="h-screen relative flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#f4f1eb]">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-[#e8e4db] rounded-l-full opacity-50 transform translate-x-1/4"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border border-[#d4af37] flex items-center justify-center mb-8">
            <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
          </div>
          <h2 className="text-[#d4af37] tracking-[0.3em] uppercase text-sm mb-6">Uncompromising Quality</h2>
          <h1 className="text-5xl md:text-7xl font-light tracking-wide mb-8 leading-tight">
            Elevate Your <br/>Restoration
          </h1>
          <p className="text-[#2c3e2d]/70 text-lg max-w-2xl mx-auto mb-12 font-sans font-light leading-relaxed">
            Experience the pinnacle of nutritional luxury. Pure isolates designed to restore, replenish, and rejuvenate the body at a cellular level.
          </p>
          <Link href="/v32/products" className="text-sm tracking-[0.2em] uppercase border-b border-[#2c3e2d] pb-2 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors">
            Explore the Collection
          </Link>
        </div>
      </section>
    </>
  );
}