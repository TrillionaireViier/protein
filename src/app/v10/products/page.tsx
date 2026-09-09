import Link from "next/link";

export default function Products() {
  return (
    <div className="max-w-[1400px] mx-auto px-8 py-20">
      <div className="text-center mb-24">
        <h1 className="text-5xl font-light tracking-tight text-black mb-4">Store.</h1>
        <p className="text-xl text-gray-500 font-light">The finest selection of supplements.</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 gap-y-24">

          <div className="flex flex-col items-center group">
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-8 mb-8 transition-transform group-hover:scale-[1.02]">
              <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="max-w-full max-h-full object-contain grayscale-[20%]" alt="Isolate Pro" />
            </div>
            <h2 className="text-xl font-medium tracking-tight mb-2 text-black">Isolate Pro</h2>
            <div className="text-gray-500 font-light mb-6">Pro Series</div>
            <div className="text-lg font-medium text-black mb-6">$99</div>
            <button className="text-blue-600 font-medium hover:underline">
              Buy &gt;
            </button>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-8 mb-8 transition-transform group-hover:scale-[1.02]">
              <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="max-w-full max-h-full object-contain grayscale-[20%]" alt="Mass Air" />
            </div>
            <h2 className="text-xl font-medium tracking-tight mb-2 text-black">Mass Air</h2>
            <div className="text-gray-500 font-light mb-6">Pro Series</div>
            <div className="text-lg font-medium text-black mb-6">$89</div>
            <button className="text-blue-600 font-medium hover:underline">
              Buy &gt;
            </button>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-8 mb-8 transition-transform group-hover:scale-[1.02]">
              <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="max-w-full max-h-full object-contain grayscale-[20%]" alt="Energy Max" />
            </div>
            <h2 className="text-xl font-medium tracking-tight mb-2 text-black">Energy Max</h2>
            <div className="text-gray-500 font-light mb-6">Pro Series</div>
            <div className="text-lg font-medium text-black mb-6">$79</div>
            <button className="text-blue-600 font-medium hover:underline">
              Buy &gt;
            </button>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-8 mb-8 transition-transform group-hover:scale-[1.02]">
              <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="max-w-full max-h-full object-contain grayscale-[20%]" alt="BCAA Ultra" />
            </div>
            <h2 className="text-xl font-medium tracking-tight mb-2 text-black">BCAA Ultra</h2>
            <div className="text-gray-500 font-light mb-6">Pro Series</div>
            <div className="text-lg font-medium text-black mb-6">$69</div>
            <button className="text-blue-600 font-medium hover:underline">
              Buy &gt;
            </button>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-8 mb-8 transition-transform group-hover:scale-[1.02]">
              <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="max-w-full max-h-full object-contain grayscale-[20%]" alt="Creatine Core" />
            </div>
            <h2 className="text-xl font-medium tracking-tight mb-2 text-black">Creatine Core</h2>
            <div className="text-gray-500 font-light mb-6">Pro Series</div>
            <div className="text-lg font-medium text-black mb-6">$99</div>
            <button className="text-blue-600 font-medium hover:underline">
              Buy &gt;
            </button>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-8 mb-8 transition-transform group-hover:scale-[1.02]">
              <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="max-w-full max-h-full object-contain grayscale-[20%]" alt="Vitamins Plus" />
            </div>
            <h2 className="text-xl font-medium tracking-tight mb-2 text-black">Vitamins Plus</h2>
            <div className="text-gray-500 font-light mb-6">Pro Series</div>
            <div className="text-lg font-medium text-black mb-6">$89</div>
            <button className="text-blue-600 font-medium hover:underline">
              Buy &gt;
            </button>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-8 mb-8 transition-transform group-hover:scale-[1.02]">
              <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="max-w-full max-h-full object-contain grayscale-[20%]" alt="Omega Flow" />
            </div>
            <h2 className="text-xl font-medium tracking-tight mb-2 text-black">Omega Flow</h2>
            <div className="text-gray-500 font-light mb-6">Pro Series</div>
            <div className="text-lg font-medium text-black mb-6">$79</div>
            <button className="text-blue-600 font-medium hover:underline">
              Buy &gt;
            </button>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-8 mb-8 transition-transform group-hover:scale-[1.02]">
              <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="max-w-full max-h-full object-contain grayscale-[20%]" alt="Test Boost" />
            </div>
            <h2 className="text-xl font-medium tracking-tight mb-2 text-black">Test Boost</h2>
            <div className="text-gray-500 font-light mb-6">Pro Series</div>
            <div className="text-lg font-medium text-black mb-6">$69</div>
            <button className="text-blue-600 font-medium hover:underline">
              Buy &gt;
            </button>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-8 mb-8 transition-transform group-hover:scale-[1.02]">
              <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="max-w-full max-h-full object-contain grayscale-[20%]" alt="Isolate Pro" />
            </div>
            <h2 className="text-xl font-medium tracking-tight mb-2 text-black">Isolate Pro</h2>
            <div className="text-gray-500 font-light mb-6">Pro Series</div>
            <div className="text-lg font-medium text-black mb-6">$99</div>
            <button className="text-blue-600 font-medium hover:underline">
              Buy &gt;
            </button>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-8 mb-8 transition-transform group-hover:scale-[1.02]">
              <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="max-w-full max-h-full object-contain grayscale-[20%]" alt="Mass Air" />
            </div>
            <h2 className="text-xl font-medium tracking-tight mb-2 text-black">Mass Air</h2>
            <div className="text-gray-500 font-light mb-6">Pro Series</div>
            <div className="text-lg font-medium text-black mb-6">$89</div>
            <button className="text-blue-600 font-medium hover:underline">
              Buy &gt;
            </button>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-8 mb-8 transition-transform group-hover:scale-[1.02]">
              <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="max-w-full max-h-full object-contain grayscale-[20%]" alt="Energy Max" />
            </div>
            <h2 className="text-xl font-medium tracking-tight mb-2 text-black">Energy Max</h2>
            <div className="text-gray-500 font-light mb-6">Pro Series</div>
            <div className="text-lg font-medium text-black mb-6">$79</div>
            <button className="text-blue-600 font-medium hover:underline">
              Buy &gt;
            </button>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-8 mb-8 transition-transform group-hover:scale-[1.02]">
              <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="max-w-full max-h-full object-contain grayscale-[20%]" alt="BCAA Ultra" />
            </div>
            <h2 className="text-xl font-medium tracking-tight mb-2 text-black">BCAA Ultra</h2>
            <div className="text-gray-500 font-light mb-6">Pro Series</div>
            <div className="text-lg font-medium text-black mb-6">$69</div>
            <button className="text-blue-600 font-medium hover:underline">
              Buy &gt;
            </button>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-8 mb-8 transition-transform group-hover:scale-[1.02]">
              <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="max-w-full max-h-full object-contain grayscale-[20%]" alt="Creatine Core" />
            </div>
            <h2 className="text-xl font-medium tracking-tight mb-2 text-black">Creatine Core</h2>
            <div className="text-gray-500 font-light mb-6">Pro Series</div>
            <div className="text-lg font-medium text-black mb-6">$99</div>
            <button className="text-blue-600 font-medium hover:underline">
              Buy &gt;
            </button>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-8 mb-8 transition-transform group-hover:scale-[1.02]">
              <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="max-w-full max-h-full object-contain grayscale-[20%]" alt="Vitamins Plus" />
            </div>
            <h2 className="text-xl font-medium tracking-tight mb-2 text-black">Vitamins Plus</h2>
            <div className="text-gray-500 font-light mb-6">Pro Series</div>
            <div className="text-lg font-medium text-black mb-6">$89</div>
            <button className="text-blue-600 font-medium hover:underline">
              Buy &gt;
            </button>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-8 mb-8 transition-transform group-hover:scale-[1.02]">
              <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="max-w-full max-h-full object-contain grayscale-[20%]" alt="Omega Flow" />
            </div>
            <h2 className="text-xl font-medium tracking-tight mb-2 text-black">Omega Flow</h2>
            <div className="text-gray-500 font-light mb-6">Pro Series</div>
            <div className="text-lg font-medium text-black mb-6">$79</div>
            <button className="text-blue-600 font-medium hover:underline">
              Buy &gt;
            </button>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-8 mb-8 transition-transform group-hover:scale-[1.02]">
              <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="max-w-full max-h-full object-contain grayscale-[20%]" alt="Test Boost" />
            </div>
            <h2 className="text-xl font-medium tracking-tight mb-2 text-black">Test Boost</h2>
            <div className="text-gray-500 font-light mb-6">Pro Series</div>
            <div className="text-lg font-medium text-black mb-6">$69</div>
            <button className="text-blue-600 font-medium hover:underline">
              Buy &gt;
            </button>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-8 mb-8 transition-transform group-hover:scale-[1.02]">
              <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="max-w-full max-h-full object-contain grayscale-[20%]" alt="Isolate Pro" />
            </div>
            <h2 className="text-xl font-medium tracking-tight mb-2 text-black">Isolate Pro</h2>
            <div className="text-gray-500 font-light mb-6">Pro Series</div>
            <div className="text-lg font-medium text-black mb-6">$99</div>
            <button className="text-blue-600 font-medium hover:underline">
              Buy &gt;
            </button>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-8 mb-8 transition-transform group-hover:scale-[1.02]">
              <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="max-w-full max-h-full object-contain grayscale-[20%]" alt="Mass Air" />
            </div>
            <h2 className="text-xl font-medium tracking-tight mb-2 text-black">Mass Air</h2>
            <div className="text-gray-500 font-light mb-6">Pro Series</div>
            <div className="text-lg font-medium text-black mb-6">$89</div>
            <button className="text-blue-600 font-medium hover:underline">
              Buy &gt;
            </button>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-8 mb-8 transition-transform group-hover:scale-[1.02]">
              <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="max-w-full max-h-full object-contain grayscale-[20%]" alt="Energy Max" />
            </div>
            <h2 className="text-xl font-medium tracking-tight mb-2 text-black">Energy Max</h2>
            <div className="text-gray-500 font-light mb-6">Pro Series</div>
            <div className="text-lg font-medium text-black mb-6">$79</div>
            <button className="text-blue-600 font-medium hover:underline">
              Buy &gt;
            </button>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-8 mb-8 transition-transform group-hover:scale-[1.02]">
              <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="max-w-full max-h-full object-contain grayscale-[20%]" alt="BCAA Ultra" />
            </div>
            <h2 className="text-xl font-medium tracking-tight mb-2 text-black">BCAA Ultra</h2>
            <div className="text-gray-500 font-light mb-6">Pro Series</div>
            <div className="text-lg font-medium text-black mb-6">$69</div>
            <button className="text-blue-600 font-medium hover:underline">
              Buy &gt;
            </button>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-8 mb-8 transition-transform group-hover:scale-[1.02]">
              <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="max-w-full max-h-full object-contain grayscale-[20%]" alt="Creatine Core" />
            </div>
            <h2 className="text-xl font-medium tracking-tight mb-2 text-black">Creatine Core</h2>
            <div className="text-gray-500 font-light mb-6">Pro Series</div>
            <div className="text-lg font-medium text-black mb-6">$99</div>
            <button className="text-blue-600 font-medium hover:underline">
              Buy &gt;
            </button>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-8 mb-8 transition-transform group-hover:scale-[1.02]">
              <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="max-w-full max-h-full object-contain grayscale-[20%]" alt="Vitamins Plus" />
            </div>
            <h2 className="text-xl font-medium tracking-tight mb-2 text-black">Vitamins Plus</h2>
            <div className="text-gray-500 font-light mb-6">Pro Series</div>
            <div className="text-lg font-medium text-black mb-6">$89</div>
            <button className="text-blue-600 font-medium hover:underline">
              Buy &gt;
            </button>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-8 mb-8 transition-transform group-hover:scale-[1.02]">
              <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="max-w-full max-h-full object-contain grayscale-[20%]" alt="Omega Flow" />
            </div>
            <h2 className="text-xl font-medium tracking-tight mb-2 text-black">Omega Flow</h2>
            <div className="text-gray-500 font-light mb-6">Pro Series</div>
            <div className="text-lg font-medium text-black mb-6">$79</div>
            <button className="text-blue-600 font-medium hover:underline">
              Buy &gt;
            </button>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-full h-80 bg-gray-50 flex items-center justify-center p-8 mb-8 transition-transform group-hover:scale-[1.02]">
              <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="max-w-full max-h-full object-contain grayscale-[20%]" alt="Test Boost" />
            </div>
            <h2 className="text-xl font-medium tracking-tight mb-2 text-black">Test Boost</h2>
            <div className="text-gray-500 font-light mb-6">Pro Series</div>
            <div className="text-lg font-medium text-black mb-6">$69</div>
            <button className="text-blue-600 font-medium hover:underline">
              Buy &gt;
            </button>
          </div>
      </div>
    </div>
  );
}
