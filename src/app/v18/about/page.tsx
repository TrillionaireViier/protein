export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-[#3a4018] border-8 border-black p-8 md:p-12 shadow-[16px_16px_0_rgba(0,0,0,0.5)]">
        <h1 className="text-4xl font-black text-black mb-8 border-b-4 border-black pb-4">TARGET DOSSIER: DR. HUTCHINGS</h1>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3">
            <div className="bg-[#2d3319] p-2 border-4 border-black relative">
              <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 z-10 transform rotate-12 origin-bottom-left">CLASSIFIED</div>
              <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-full filter grayscale contrast-150 relative z-0" />
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="space-y-4 font-bold text-sm">
              <div className="grid grid-cols-3 border-b-2 border-black pb-2">
                <span className="text-[#b5bca3]">CODENAME:</span>
                <span className="col-span-2 text-black">THE ALCHEMIST</span>
              </div>
              <div className="grid grid-cols-3 border-b-2 border-black pb-2">
                <span className="text-[#b5bca3]">STATUS:</span>
                <span className="col-span-2 text-black">ACTIVE</span>
              </div>
              <div className="grid grid-cols-3 border-b-2 border-black pb-2">
                <span className="text-[#b5bca3]">BACKGROUND:</span>
                <span className="col-span-2 text-black">
                  Following multiple catastrophic physical traumas, subject dedicated life to researching extreme tissue regeneration. 
                  Resulting formula (Project: Isolate) demonstrated unprecedented recovery metrics.
                </span>
              </div>
              <div className="grid grid-cols-3 border-b-2 border-black pb-2">
                <span className="text-[#b5bca3]">DIRECTIVE:</span>
                <span className="col-span-2 text-black">
                  Manufacture and supply tactical-grade nutritional support to frontline operators.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
