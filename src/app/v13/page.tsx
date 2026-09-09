import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="px-4">
        <div className="max-w-4xl mx-auto border-4 border-double border-[#5d4037] p-8 text-center bg-[#fcf8e3] bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]">
          <p className="tracking-widest uppercase text-sm mb-4">The Original & Genuine</p>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 uppercase tracking-wider text-[#3e2723]">
            Whey Isolate <br/> Elixir
          </h1>
          
          <div className="w-full h-1 bg-[#5d4037] mb-8"></div>
          <div className="w-full h-0.5 bg-[#5d4037] mb-12"></div>
          
          <div className="flex justify-center mb-12">
            <div className="border-8 border-[#3e2723] rounded-t-full p-2">
              <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-64 h-80 object-cover rounded-t-full sepia contrast-125" alt="Elixir" />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto italic leading-relaxed">
            A miraculous preparation for the restoration of vitality and the rapid synthesis of muscular tissue. Formulated without deception or foul-tasting additives.
          </p>
          
          <Link href="/v13/products" className="inline-block border-2 border-[#5d4037] text-[#5d4037] hover:bg-[#5d4037] hover:text-[#f4ebd0] px-12 py-4 tracking-widest uppercase font-bold transition-colors">
            Procure Now
          </Link>
        </div>
      </section>
      
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <h2 className="text-4xl text-center mb-16 tracking-widest uppercase border-b-2 border-[#5d4037] pb-4">Virtues of our Preparation</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 uppercase">I. Purity</h3>
            <p className="italic">Distilled to its most potent essence. No fraudulent fillers.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 uppercase">II. Vigor</h3>
            <p className="italic">Imparts immense strength and banishes fatigue post-exertion.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 uppercase">III. Digestion</h3>
            <p className="italic">Sits gently upon the stomach, causing no ill winds or discomfort.</p>
          </div>
        </div>
      </section>
    </>
  );
}
