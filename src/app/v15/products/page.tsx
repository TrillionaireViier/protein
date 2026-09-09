export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-8xl italic text-yellow-400 drop-shadow-[6px_6px_0_rgba(0,0,0,1)] stroke-black">ITEM SHOP</h1>
        <p className="text-3xl mt-4 bg-red-500 text-white inline-block px-6 py-2 border-4 border-black shadow-[6px_6px_0_rgba(0,0,0,1)]">CHOOSE YOUR WEAPON</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        <div className="bg-white border-8 border-black shadow-[12px_12px_0_rgba(0,0,255,1)] p-4 hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(255,0,0,1)] transition-all">
          <div className="border-4 border-black mb-4 bg-yellow-300 relative overflow-hidden group h-56 flex items-center justify-center">
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="h-full object-cover group-hover:scale-110 transition-transform" alt="ULTRA WHEY 9000" />
          </div>
          <h2 className="text-3xl italic text-red-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-2">ULTRA WHEY 9000</h2>
          <div className="text-xl text-black mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">アイテム (ITEM)</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-white">$99</span>
            <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 text-2xl italic hover:bg-red-500 transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BUY!
            </button>
          </div>
        </div>
        <div className="bg-white border-8 border-black shadow-[12px_12px_0_rgba(0,0,255,1)] p-4 hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(255,0,0,1)] transition-all">
          <div className="border-4 border-black mb-4 bg-yellow-300 relative overflow-hidden group h-56 flex items-center justify-center">
            <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="h-full object-cover group-hover:scale-110 transition-transform" alt="MECHA MASS" />
          </div>
          <h2 className="text-3xl italic text-red-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-2">MECHA MASS</h2>
          <div className="text-xl text-black mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">アイテム (ITEM)</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-white">$89</span>
            <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 text-2xl italic hover:bg-red-500 transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BUY!
            </button>
          </div>
        </div>
        <div className="bg-white border-8 border-black shadow-[12px_12px_0_rgba(0,0,255,1)] p-4 hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(255,0,0,1)] transition-all">
          <div className="border-4 border-black mb-4 bg-yellow-300 relative overflow-hidden group h-56 flex items-center justify-center">
            <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="h-full object-cover group-hover:scale-110 transition-transform" alt="ENERGY BURST!!" />
          </div>
          <h2 className="text-3xl italic text-red-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-2">ENERGY BURST!!</h2>
          <div className="text-xl text-black mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">アイテム (ITEM)</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-white">$79</span>
            <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 text-2xl italic hover:bg-red-500 transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BUY!
            </button>
          </div>
        </div>
        <div className="bg-white border-8 border-black shadow-[12px_12px_0_rgba(0,0,255,1)] p-4 hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(255,0,0,1)] transition-all">
          <div className="border-4 border-black mb-4 bg-yellow-300 relative overflow-hidden group h-56 flex items-center justify-center">
            <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="h-full object-cover group-hover:scale-110 transition-transform" alt="BCAA STRIKE" />
          </div>
          <h2 className="text-3xl italic text-red-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-2">BCAA STRIKE</h2>
          <div className="text-xl text-black mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">アイテム (ITEM)</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-white">$69</span>
            <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 text-2xl italic hover:bg-red-500 transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BUY!
            </button>
          </div>
        </div>
        <div className="bg-white border-8 border-black shadow-[12px_12px_0_rgba(0,0,255,1)] p-4 hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(255,0,0,1)] transition-all">
          <div className="border-4 border-black mb-4 bg-yellow-300 relative overflow-hidden group h-56 flex items-center justify-center">
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="h-full object-cover group-hover:scale-110 transition-transform" alt="CREA-PUNCH" />
          </div>
          <h2 className="text-3xl italic text-red-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-2">CREA-PUNCH</h2>
          <div className="text-xl text-black mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">アイテム (ITEM)</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-white">$99</span>
            <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 text-2xl italic hover:bg-red-500 transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BUY!
            </button>
          </div>
        </div>
        <div className="bg-white border-8 border-black shadow-[12px_12px_0_rgba(0,0,255,1)] p-4 hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(255,0,0,1)] transition-all">
          <div className="border-4 border-black mb-4 bg-yellow-300 relative overflow-hidden group h-56 flex items-center justify-center">
            <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="h-full object-cover group-hover:scale-110 transition-transform" alt="VITA-FLASH" />
          </div>
          <h2 className="text-3xl italic text-red-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-2">VITA-FLASH</h2>
          <div className="text-xl text-black mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">アイテム (ITEM)</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-white">$89</span>
            <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 text-2xl italic hover:bg-red-500 transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BUY!
            </button>
          </div>
        </div>
        <div className="bg-white border-8 border-black shadow-[12px_12px_0_rgba(0,0,255,1)] p-4 hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(255,0,0,1)] transition-all">
          <div className="border-4 border-black mb-4 bg-yellow-300 relative overflow-hidden group h-56 flex items-center justify-center">
            <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="h-full object-cover group-hover:scale-110 transition-transform" alt="OMEGA-SHIELD" />
          </div>
          <h2 className="text-3xl italic text-red-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-2">OMEGA-SHIELD</h2>
          <div className="text-xl text-black mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">アイテム (ITEM)</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-white">$79</span>
            <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 text-2xl italic hover:bg-red-500 transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BUY!
            </button>
          </div>
        </div>
        <div className="bg-white border-8 border-black shadow-[12px_12px_0_rgba(0,0,255,1)] p-4 hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(255,0,0,1)] transition-all">
          <div className="border-4 border-black mb-4 bg-yellow-300 relative overflow-hidden group h-56 flex items-center justify-center">
            <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="h-full object-cover group-hover:scale-110 transition-transform" alt="TEST-POWER" />
          </div>
          <h2 className="text-3xl italic text-red-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-2">TEST-POWER</h2>
          <div className="text-xl text-black mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">アイテム (ITEM)</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-white">$69</span>
            <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 text-2xl italic hover:bg-red-500 transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BUY!
            </button>
          </div>
        </div>
        <div className="bg-white border-8 border-black shadow-[12px_12px_0_rgba(0,0,255,1)] p-4 hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(255,0,0,1)] transition-all">
          <div className="border-4 border-black mb-4 bg-yellow-300 relative overflow-hidden group h-56 flex items-center justify-center">
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="h-full object-cover group-hover:scale-110 transition-transform" alt="ULTRA WHEY 9000" />
          </div>
          <h2 className="text-3xl italic text-red-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-2">ULTRA WHEY 9000</h2>
          <div className="text-xl text-black mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">アイテム (ITEM)</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-white">$99</span>
            <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 text-2xl italic hover:bg-red-500 transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BUY!
            </button>
          </div>
        </div>
        <div className="bg-white border-8 border-black shadow-[12px_12px_0_rgba(0,0,255,1)] p-4 hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(255,0,0,1)] transition-all">
          <div className="border-4 border-black mb-4 bg-yellow-300 relative overflow-hidden group h-56 flex items-center justify-center">
            <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="h-full object-cover group-hover:scale-110 transition-transform" alt="MECHA MASS" />
          </div>
          <h2 className="text-3xl italic text-red-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-2">MECHA MASS</h2>
          <div className="text-xl text-black mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">アイテム (ITEM)</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-white">$89</span>
            <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 text-2xl italic hover:bg-red-500 transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BUY!
            </button>
          </div>
        </div>
        <div className="bg-white border-8 border-black shadow-[12px_12px_0_rgba(0,0,255,1)] p-4 hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(255,0,0,1)] transition-all">
          <div className="border-4 border-black mb-4 bg-yellow-300 relative overflow-hidden group h-56 flex items-center justify-center">
            <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="h-full object-cover group-hover:scale-110 transition-transform" alt="ENERGY BURST!!" />
          </div>
          <h2 className="text-3xl italic text-red-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-2">ENERGY BURST!!</h2>
          <div className="text-xl text-black mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">アイテム (ITEM)</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-white">$79</span>
            <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 text-2xl italic hover:bg-red-500 transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BUY!
            </button>
          </div>
        </div>
        <div className="bg-white border-8 border-black shadow-[12px_12px_0_rgba(0,0,255,1)] p-4 hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(255,0,0,1)] transition-all">
          <div className="border-4 border-black mb-4 bg-yellow-300 relative overflow-hidden group h-56 flex items-center justify-center">
            <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="h-full object-cover group-hover:scale-110 transition-transform" alt="BCAA STRIKE" />
          </div>
          <h2 className="text-3xl italic text-red-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-2">BCAA STRIKE</h2>
          <div className="text-xl text-black mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">アイテム (ITEM)</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-white">$69</span>
            <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 text-2xl italic hover:bg-red-500 transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BUY!
            </button>
          </div>
        </div>
        <div className="bg-white border-8 border-black shadow-[12px_12px_0_rgba(0,0,255,1)] p-4 hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(255,0,0,1)] transition-all">
          <div className="border-4 border-black mb-4 bg-yellow-300 relative overflow-hidden group h-56 flex items-center justify-center">
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="h-full object-cover group-hover:scale-110 transition-transform" alt="CREA-PUNCH" />
          </div>
          <h2 className="text-3xl italic text-red-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-2">CREA-PUNCH</h2>
          <div className="text-xl text-black mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">アイテム (ITEM)</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-white">$99</span>
            <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 text-2xl italic hover:bg-red-500 transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BUY!
            </button>
          </div>
        </div>
        <div className="bg-white border-8 border-black shadow-[12px_12px_0_rgba(0,0,255,1)] p-4 hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(255,0,0,1)] transition-all">
          <div className="border-4 border-black mb-4 bg-yellow-300 relative overflow-hidden group h-56 flex items-center justify-center">
            <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="h-full object-cover group-hover:scale-110 transition-transform" alt="VITA-FLASH" />
          </div>
          <h2 className="text-3xl italic text-red-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-2">VITA-FLASH</h2>
          <div className="text-xl text-black mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">アイテム (ITEM)</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-white">$89</span>
            <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 text-2xl italic hover:bg-red-500 transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BUY!
            </button>
          </div>
        </div>
        <div className="bg-white border-8 border-black shadow-[12px_12px_0_rgba(0,0,255,1)] p-4 hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(255,0,0,1)] transition-all">
          <div className="border-4 border-black mb-4 bg-yellow-300 relative overflow-hidden group h-56 flex items-center justify-center">
            <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="h-full object-cover group-hover:scale-110 transition-transform" alt="OMEGA-SHIELD" />
          </div>
          <h2 className="text-3xl italic text-red-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-2">OMEGA-SHIELD</h2>
          <div className="text-xl text-black mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">アイテム (ITEM)</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-white">$79</span>
            <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 text-2xl italic hover:bg-red-500 transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BUY!
            </button>
          </div>
        </div>
        <div className="bg-white border-8 border-black shadow-[12px_12px_0_rgba(0,0,255,1)] p-4 hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(255,0,0,1)] transition-all">
          <div className="border-4 border-black mb-4 bg-yellow-300 relative overflow-hidden group h-56 flex items-center justify-center">
            <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="h-full object-cover group-hover:scale-110 transition-transform" alt="TEST-POWER" />
          </div>
          <h2 className="text-3xl italic text-red-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-2">TEST-POWER</h2>
          <div className="text-xl text-black mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">アイテム (ITEM)</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-white">$69</span>
            <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 text-2xl italic hover:bg-red-500 transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BUY!
            </button>
          </div>
        </div>
        <div className="bg-white border-8 border-black shadow-[12px_12px_0_rgba(0,0,255,1)] p-4 hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(255,0,0,1)] transition-all">
          <div className="border-4 border-black mb-4 bg-yellow-300 relative overflow-hidden group h-56 flex items-center justify-center">
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="h-full object-cover group-hover:scale-110 transition-transform" alt="ULTRA WHEY 9000" />
          </div>
          <h2 className="text-3xl italic text-red-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-2">ULTRA WHEY 9000</h2>
          <div className="text-xl text-black mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">アイテム (ITEM)</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-white">$99</span>
            <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 text-2xl italic hover:bg-red-500 transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BUY!
            </button>
          </div>
        </div>
        <div className="bg-white border-8 border-black shadow-[12px_12px_0_rgba(0,0,255,1)] p-4 hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(255,0,0,1)] transition-all">
          <div className="border-4 border-black mb-4 bg-yellow-300 relative overflow-hidden group h-56 flex items-center justify-center">
            <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="h-full object-cover group-hover:scale-110 transition-transform" alt="MECHA MASS" />
          </div>
          <h2 className="text-3xl italic text-red-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-2">MECHA MASS</h2>
          <div className="text-xl text-black mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">アイテム (ITEM)</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-white">$89</span>
            <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 text-2xl italic hover:bg-red-500 transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BUY!
            </button>
          </div>
        </div>
        <div className="bg-white border-8 border-black shadow-[12px_12px_0_rgba(0,0,255,1)] p-4 hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(255,0,0,1)] transition-all">
          <div className="border-4 border-black mb-4 bg-yellow-300 relative overflow-hidden group h-56 flex items-center justify-center">
            <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="h-full object-cover group-hover:scale-110 transition-transform" alt="ENERGY BURST!!" />
          </div>
          <h2 className="text-3xl italic text-red-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-2">ENERGY BURST!!</h2>
          <div className="text-xl text-black mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">アイテム (ITEM)</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-white">$79</span>
            <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 text-2xl italic hover:bg-red-500 transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BUY!
            </button>
          </div>
        </div>
        <div className="bg-white border-8 border-black shadow-[12px_12px_0_rgba(0,0,255,1)] p-4 hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(255,0,0,1)] transition-all">
          <div className="border-4 border-black mb-4 bg-yellow-300 relative overflow-hidden group h-56 flex items-center justify-center">
            <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="h-full object-cover group-hover:scale-110 transition-transform" alt="BCAA STRIKE" />
          </div>
          <h2 className="text-3xl italic text-red-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-2">BCAA STRIKE</h2>
          <div className="text-xl text-black mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">アイテム (ITEM)</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-white">$69</span>
            <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 text-2xl italic hover:bg-red-500 transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BUY!
            </button>
          </div>
        </div>
        <div className="bg-white border-8 border-black shadow-[12px_12px_0_rgba(0,0,255,1)] p-4 hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(255,0,0,1)] transition-all">
          <div className="border-4 border-black mb-4 bg-yellow-300 relative overflow-hidden group h-56 flex items-center justify-center">
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="h-full object-cover group-hover:scale-110 transition-transform" alt="CREA-PUNCH" />
          </div>
          <h2 className="text-3xl italic text-red-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-2">CREA-PUNCH</h2>
          <div className="text-xl text-black mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">アイテム (ITEM)</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-white">$99</span>
            <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 text-2xl italic hover:bg-red-500 transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BUY!
            </button>
          </div>
        </div>
        <div className="bg-white border-8 border-black shadow-[12px_12px_0_rgba(0,0,255,1)] p-4 hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(255,0,0,1)] transition-all">
          <div className="border-4 border-black mb-4 bg-yellow-300 relative overflow-hidden group h-56 flex items-center justify-center">
            <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="h-full object-cover group-hover:scale-110 transition-transform" alt="VITA-FLASH" />
          </div>
          <h2 className="text-3xl italic text-red-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-2">VITA-FLASH</h2>
          <div className="text-xl text-black mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">アイテム (ITEM)</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-white">$89</span>
            <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 text-2xl italic hover:bg-red-500 transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BUY!
            </button>
          </div>
        </div>
        <div className="bg-white border-8 border-black shadow-[12px_12px_0_rgba(0,0,255,1)] p-4 hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(255,0,0,1)] transition-all">
          <div className="border-4 border-black mb-4 bg-yellow-300 relative overflow-hidden group h-56 flex items-center justify-center">
            <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="h-full object-cover group-hover:scale-110 transition-transform" alt="OMEGA-SHIELD" />
          </div>
          <h2 className="text-3xl italic text-red-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-2">OMEGA-SHIELD</h2>
          <div className="text-xl text-black mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">アイテム (ITEM)</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-white">$79</span>
            <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 text-2xl italic hover:bg-red-500 transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BUY!
            </button>
          </div>
        </div>
        <div className="bg-white border-8 border-black shadow-[12px_12px_0_rgba(0,0,255,1)] p-4 hover:-translate-y-2 hover:shadow-[16px_16px_0_rgba(255,0,0,1)] transition-all">
          <div className="border-4 border-black mb-4 bg-yellow-300 relative overflow-hidden group h-56 flex items-center justify-center">
            <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="h-full object-cover group-hover:scale-110 transition-transform" alt="TEST-POWER" />
          </div>
          <h2 className="text-3xl italic text-red-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mb-2">TEST-POWER</h2>
          <div className="text-xl text-black mb-4 bg-yellow-400 inline-block px-2 border-2 border-black">アイテム (ITEM)</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] text-white">$69</span>
            <button className="bg-blue-600 text-white border-4 border-black px-4 py-2 text-2xl italic hover:bg-red-500 transition-colors shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BUY!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
