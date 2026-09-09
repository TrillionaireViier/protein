import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-8 text-center bg-white">
        <h1 className="text-6xl md:text-9xl font-light tracking-tighter text-black mb-6">
          Pro.<span className="font-medium">tein</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-2xl font-light mb-12 max-w-2xl">
          The ultimate formula for recovery. Completely re-engineered from the ground up.
        </p>
        <div className="flex gap-6">
          <Link href="/v10/products" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform">
            Buy
          </Link>
          <Link href="/v10/about" className="text-black px-8 py-3 font-medium hover:text-gray-500 transition-colors">
            Learn more &gt;
          </Link>
        </div>
        
        <div className="mt-24 w-full max-w-5xl mx-auto">
          <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full h-auto object-cover grayscale-[50%] brightness-110" alt="Protein" />
        </div>
      </section>
      
      <section className="py-32 px-8 bg-gray-50">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-20">Innovation in every scoop.</h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <div className="text-6xl font-light mb-6 text-black">99%</div>
              <h3 className="text-xl font-medium mb-3">Pure Isolate.</h3>
              <p className="text-gray-500 font-light text-lg">No fillers, no fluff. Just pure performance.</p>
            </div>
            <div>
              <div className="text-6xl font-light mb-6 text-black">0g</div>
              <h3 className="text-xl font-medium mb-3">Sugar Added.</h3>
              <p className="text-gray-500 font-light text-lg">Sweetened naturally. Better for your body.</p>
            </div>
            <div>
              <div className="text-6xl font-light mb-6 text-black">2x</div>
              <h3 className="text-xl font-medium mb-3">Faster Absorption.</h3>
              <p className="text-gray-500 font-light text-lg">Micro-filtered for immediate muscle repair.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
