import Link from 'next/link';
export default function Home() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 py-20 text-center" style={{fontFamily: 'Comic Sans MS, cursive, sans-serif'}}>
        <div className="inline-block border-2 border-white p-4 rounded-xl mb-8 transform -rotate-2" style={{borderStyle: 'dashed'}}>
          <h2 className="text-2xl text-yellow-200">Back to basics!</h2>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-12 text-white drop-shadow-md">
          Pure. <br/>Simple. <br/>Protein.
        </h1>
        <p className="text-2xl text-blue-100 max-w-2xl mx-auto mb-16 leading-relaxed">
          No crazy marketing, no weird chemicals. Just the stuff your muscles actually need to grow.
        </p>
        
        <div className="flex justify-center mb-16">
          <div className="border-4 border-white p-2 rounded-full transform rotate-3" style={{borderStyle: 'dashed'}}>
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-64 h-64 object-cover rounded-full filter grayscale sepia-[20%]" alt="Chalk Protein" />
          </div>
        </div>
        
        <Link href="/v28/products" className="inline-block text-3xl font-bold border-4 border-white px-10 py-4 rounded-2xl hover:bg-white hover:text-[#2c3e2d] transition-colors transform hover:-translate-y-2">
          Shop Now -&gt;
        </Link>
      </section>
    </>
  );
}