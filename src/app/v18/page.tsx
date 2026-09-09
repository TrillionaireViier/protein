import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="max-w-5xl mx-auto bg-[#3a4018] border-8 border-black p-8 relative shadow-[16px_16px_0_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 right-0 bg-black text-[#e0dacd] p-2 font-bold text-xs">
          STRICTLY CONFIDENTIAL
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center mt-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-bold mb-2 border-b-2 border-black pb-2">OPERATION: MASS GAIN</h2>
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-black tracking-tighter leading-none">
              TACTICAL <br/> ISOLATE
            </h1>
            <p className="text-lg font-bold mb-8 text-[#e0dacd] max-w-md bg-black/40 p-4 border-l-4 border-black">
              MILITARY-GRADE PROTEIN SYNTHESIS. DEPLOY FOR MAXIMUM MUSCLE RECOVERY AND SURVIVABILITY IN HOSTILE ENVIRONMENTS.
            </p>
            <Link href="/v18/products" className="inline-block bg-black text-[#e0dacd] font-black text-2xl px-8 py-4 hover:bg-[#e0dacd] hover:text-black border-4 border-black transition-colors transform -skew-x-6">
              ACCESS ARMORY &gt;&gt;
            </Link>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="bg-[#2d3319] p-4 border-4 border-black">
              <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full max-w-sm filter grayscale contrast-125 sepia-[30%] hue-rotate-60" alt="Tactical Gear" />
              <div className="mt-4 text-center text-xs font-bold bg-black text-[#e0dacd] py-1">
                ITEM #492-A-ISOLATE
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-black mb-8 border-b-4 border-black pb-2">MISSION OBJECTIVES</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#2d3319] border-4 border-black p-6 relative">
            <div className="absolute -top-4 -left-4 bg-black text-white w-10 h-10 flex items-center justify-center font-black text-xl">01</div>
            <h3 className="text-xl font-bold mb-4 mt-2 text-[#e0dacd]">RAPID DEPLOYMENT</h3>
            <p className="text-sm font-bold text-[#b5bca3]">Hydrolyzed formulation enters the bloodstream immediately upon consumption.</p>
          </div>
          <div className="bg-[#2d3319] border-4 border-black p-6 relative">
            <div className="absolute -top-4 -left-4 bg-black text-white w-10 h-10 flex items-center justify-center font-black text-xl">02</div>
            <h3 className="text-xl font-bold mb-4 mt-2 text-[#e0dacd]">COMBAT READY</h3>
            <p className="text-sm font-bold text-[#b5bca3]">Zero GI distress. Perform at peak physical condition without compromise.</p>
          </div>
          <div className="bg-[#2d3319] border-4 border-black p-6 relative">
            <div className="absolute -top-4 -left-4 bg-black text-white w-10 h-10 flex items-center justify-center font-black text-xl">03</div>
            <h3 className="text-xl font-bold mb-4 mt-2 text-[#e0dacd]">RUGGED PURITY</h3>
            <p className="text-sm font-bold text-[#b5bca3]">No synthetic fillers or artificial flavorings. Only mission-critical amino acids.</p>
          </div>
        </div>
      </section>
    </>
  );
}
