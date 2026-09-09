export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-20 mt-12 flex justify-between items-end border-b-8 border-black pb-8">
        <h1 className="text-[80px] md:text-[120px] font-black uppercase tracking-tighter leading-none">"STORE"</h1>
        <p className="text-xl font-bold uppercase tracking-widest hidden md:block">ALL ITEMS STRICTLY LIMITED.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-24">

        <div className="group relative">
          <div className="bg-[#f4f4f4] aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" alt="ISOLATE" />
            <div className="absolute top-4 left-4 font-black text-xs uppercase tracking-widest z-10 mix-blend-difference text-white">ITEM NO. 000</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">"ISOLATE"</h2>
              <p className="text-sm font-bold text-gray-400 uppercase">"SS26 COLLECTION"</p>
            </div>
            <span className="text-xl font-black">$99</span>
          </div>
          <button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-[#ccff00] hover:text-black transition-colors">
            ADD TO CART
          </button>
        </div>
        <div className="group relative">
          <div className="bg-[#f4f4f4] aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" alt="MASS" />
            <div className="absolute top-4 left-4 font-black text-xs uppercase tracking-widest z-10 mix-blend-difference text-white">ITEM NO. 001</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">"MASS"</h2>
              <p className="text-sm font-bold text-gray-400 uppercase">"SS26 COLLECTION"</p>
            </div>
            <span className="text-xl font-black">$89</span>
          </div>
          <button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-[#ccff00] hover:text-black transition-colors">
            ADD TO CART
          </button>
        </div>
        <div className="group relative">
          <div className="bg-[#f4f4f4] aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" alt="ENERGY" />
            <div className="absolute top-4 left-4 font-black text-xs uppercase tracking-widest z-10 mix-blend-difference text-white">ITEM NO. 002</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">"ENERGY"</h2>
              <p className="text-sm font-bold text-gray-400 uppercase">"SS26 COLLECTION"</p>
            </div>
            <span className="text-xl font-black">$79</span>
          </div>
          <button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-[#ccff00] hover:text-black transition-colors">
            ADD TO CART
          </button>
        </div>
        <div className="group relative">
          <div className="bg-[#f4f4f4] aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" alt="BCAA" />
            <div className="absolute top-4 left-4 font-black text-xs uppercase tracking-widest z-10 mix-blend-difference text-white">ITEM NO. 003</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">"BCAA"</h2>
              <p className="text-sm font-bold text-gray-400 uppercase">"SS26 COLLECTION"</p>
            </div>
            <span className="text-xl font-black">$69</span>
          </div>
          <button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-[#ccff00] hover:text-black transition-colors">
            ADD TO CART
          </button>
        </div>
        <div className="group relative">
          <div className="bg-[#f4f4f4] aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" alt="CREATINE" />
            <div className="absolute top-4 left-4 font-black text-xs uppercase tracking-widest z-10 mix-blend-difference text-white">ITEM NO. 004</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">"CREATINE"</h2>
              <p className="text-sm font-bold text-gray-400 uppercase">"SS26 COLLECTION"</p>
            </div>
            <span className="text-xl font-black">$99</span>
          </div>
          <button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-[#ccff00] hover:text-black transition-colors">
            ADD TO CART
          </button>
        </div>
        <div className="group relative">
          <div className="bg-[#f4f4f4] aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" alt="VITAMIN" />
            <div className="absolute top-4 left-4 font-black text-xs uppercase tracking-widest z-10 mix-blend-difference text-white">ITEM NO. 005</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">"VITAMIN"</h2>
              <p className="text-sm font-bold text-gray-400 uppercase">"SS26 COLLECTION"</p>
            </div>
            <span className="text-xl font-black">$89</span>
          </div>
          <button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-[#ccff00] hover:text-black transition-colors">
            ADD TO CART
          </button>
        </div>
        <div className="group relative">
          <div className="bg-[#f4f4f4] aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" alt="OMEGA" />
            <div className="absolute top-4 left-4 font-black text-xs uppercase tracking-widest z-10 mix-blend-difference text-white">ITEM NO. 006</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">"OMEGA"</h2>
              <p className="text-sm font-bold text-gray-400 uppercase">"SS26 COLLECTION"</p>
            </div>
            <span className="text-xl font-black">$79</span>
          </div>
          <button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-[#ccff00] hover:text-black transition-colors">
            ADD TO CART
          </button>
        </div>
        <div className="group relative">
          <div className="bg-[#f4f4f4] aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" alt="TEST" />
            <div className="absolute top-4 left-4 font-black text-xs uppercase tracking-widest z-10 mix-blend-difference text-white">ITEM NO. 007</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">"TEST"</h2>
              <p className="text-sm font-bold text-gray-400 uppercase">"SS26 COLLECTION"</p>
            </div>
            <span className="text-xl font-black">$69</span>
          </div>
          <button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-[#ccff00] hover:text-black transition-colors">
            ADD TO CART
          </button>
        </div>
        <div className="group relative">
          <div className="bg-[#f4f4f4] aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" alt="ISOLATE" />
            <div className="absolute top-4 left-4 font-black text-xs uppercase tracking-widest z-10 mix-blend-difference text-white">ITEM NO. 008</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">"ISOLATE"</h2>
              <p className="text-sm font-bold text-gray-400 uppercase">"SS26 COLLECTION"</p>
            </div>
            <span className="text-xl font-black">$99</span>
          </div>
          <button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-[#ccff00] hover:text-black transition-colors">
            ADD TO CART
          </button>
        </div>
        <div className="group relative">
          <div className="bg-[#f4f4f4] aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" alt="MASS" />
            <div className="absolute top-4 left-4 font-black text-xs uppercase tracking-widest z-10 mix-blend-difference text-white">ITEM NO. 009</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">"MASS"</h2>
              <p className="text-sm font-bold text-gray-400 uppercase">"SS26 COLLECTION"</p>
            </div>
            <span className="text-xl font-black">$89</span>
          </div>
          <button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-[#ccff00] hover:text-black transition-colors">
            ADD TO CART
          </button>
        </div>
        <div className="group relative">
          <div className="bg-[#f4f4f4] aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" alt="ENERGY" />
            <div className="absolute top-4 left-4 font-black text-xs uppercase tracking-widest z-10 mix-blend-difference text-white">ITEM NO. 0010</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">"ENERGY"</h2>
              <p className="text-sm font-bold text-gray-400 uppercase">"SS26 COLLECTION"</p>
            </div>
            <span className="text-xl font-black">$79</span>
          </div>
          <button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-[#ccff00] hover:text-black transition-colors">
            ADD TO CART
          </button>
        </div>
        <div className="group relative">
          <div className="bg-[#f4f4f4] aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" alt="BCAA" />
            <div className="absolute top-4 left-4 font-black text-xs uppercase tracking-widest z-10 mix-blend-difference text-white">ITEM NO. 0011</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">"BCAA"</h2>
              <p className="text-sm font-bold text-gray-400 uppercase">"SS26 COLLECTION"</p>
            </div>
            <span className="text-xl font-black">$69</span>
          </div>
          <button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-[#ccff00] hover:text-black transition-colors">
            ADD TO CART
          </button>
        </div>
        <div className="group relative">
          <div className="bg-[#f4f4f4] aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" alt="CREATINE" />
            <div className="absolute top-4 left-4 font-black text-xs uppercase tracking-widest z-10 mix-blend-difference text-white">ITEM NO. 0012</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">"CREATINE"</h2>
              <p className="text-sm font-bold text-gray-400 uppercase">"SS26 COLLECTION"</p>
            </div>
            <span className="text-xl font-black">$99</span>
          </div>
          <button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-[#ccff00] hover:text-black transition-colors">
            ADD TO CART
          </button>
        </div>
        <div className="group relative">
          <div className="bg-[#f4f4f4] aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" alt="VITAMIN" />
            <div className="absolute top-4 left-4 font-black text-xs uppercase tracking-widest z-10 mix-blend-difference text-white">ITEM NO. 0013</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">"VITAMIN"</h2>
              <p className="text-sm font-bold text-gray-400 uppercase">"SS26 COLLECTION"</p>
            </div>
            <span className="text-xl font-black">$89</span>
          </div>
          <button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-[#ccff00] hover:text-black transition-colors">
            ADD TO CART
          </button>
        </div>
        <div className="group relative">
          <div className="bg-[#f4f4f4] aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" alt="OMEGA" />
            <div className="absolute top-4 left-4 font-black text-xs uppercase tracking-widest z-10 mix-blend-difference text-white">ITEM NO. 0014</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">"OMEGA"</h2>
              <p className="text-sm font-bold text-gray-400 uppercase">"SS26 COLLECTION"</p>
            </div>
            <span className="text-xl font-black">$79</span>
          </div>
          <button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-[#ccff00] hover:text-black transition-colors">
            ADD TO CART
          </button>
        </div>
        <div className="group relative">
          <div className="bg-[#f4f4f4] aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" alt="TEST" />
            <div className="absolute top-4 left-4 font-black text-xs uppercase tracking-widest z-10 mix-blend-difference text-white">ITEM NO. 0015</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">"TEST"</h2>
              <p className="text-sm font-bold text-gray-400 uppercase">"SS26 COLLECTION"</p>
            </div>
            <span className="text-xl font-black">$69</span>
          </div>
          <button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-[#ccff00] hover:text-black transition-colors">
            ADD TO CART
          </button>
        </div>
        <div className="group relative">
          <div className="bg-[#f4f4f4] aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" alt="ISOLATE" />
            <div className="absolute top-4 left-4 font-black text-xs uppercase tracking-widest z-10 mix-blend-difference text-white">ITEM NO. 0016</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">"ISOLATE"</h2>
              <p className="text-sm font-bold text-gray-400 uppercase">"SS26 COLLECTION"</p>
            </div>
            <span className="text-xl font-black">$99</span>
          </div>
          <button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-[#ccff00] hover:text-black transition-colors">
            ADD TO CART
          </button>
        </div>
        <div className="group relative">
          <div className="bg-[#f4f4f4] aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" alt="MASS" />
            <div className="absolute top-4 left-4 font-black text-xs uppercase tracking-widest z-10 mix-blend-difference text-white">ITEM NO. 0017</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">"MASS"</h2>
              <p className="text-sm font-bold text-gray-400 uppercase">"SS26 COLLECTION"</p>
            </div>
            <span className="text-xl font-black">$89</span>
          </div>
          <button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-[#ccff00] hover:text-black transition-colors">
            ADD TO CART
          </button>
        </div>
        <div className="group relative">
          <div className="bg-[#f4f4f4] aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" alt="ENERGY" />
            <div className="absolute top-4 left-4 font-black text-xs uppercase tracking-widest z-10 mix-blend-difference text-white">ITEM NO. 0018</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">"ENERGY"</h2>
              <p className="text-sm font-bold text-gray-400 uppercase">"SS26 COLLECTION"</p>
            </div>
            <span className="text-xl font-black">$79</span>
          </div>
          <button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-[#ccff00] hover:text-black transition-colors">
            ADD TO CART
          </button>
        </div>
        <div className="group relative">
          <div className="bg-[#f4f4f4] aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" alt="BCAA" />
            <div className="absolute top-4 left-4 font-black text-xs uppercase tracking-widest z-10 mix-blend-difference text-white">ITEM NO. 0019</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">"BCAA"</h2>
              <p className="text-sm font-bold text-gray-400 uppercase">"SS26 COLLECTION"</p>
            </div>
            <span className="text-xl font-black">$69</span>
          </div>
          <button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-[#ccff00] hover:text-black transition-colors">
            ADD TO CART
          </button>
        </div>
        <div className="group relative">
          <div className="bg-[#f4f4f4] aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" alt="CREATINE" />
            <div className="absolute top-4 left-4 font-black text-xs uppercase tracking-widest z-10 mix-blend-difference text-white">ITEM NO. 0020</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">"CREATINE"</h2>
              <p className="text-sm font-bold text-gray-400 uppercase">"SS26 COLLECTION"</p>
            </div>
            <span className="text-xl font-black">$99</span>
          </div>
          <button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-[#ccff00] hover:text-black transition-colors">
            ADD TO CART
          </button>
        </div>
        <div className="group relative">
          <div className="bg-[#f4f4f4] aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" alt="VITAMIN" />
            <div className="absolute top-4 left-4 font-black text-xs uppercase tracking-widest z-10 mix-blend-difference text-white">ITEM NO. 0021</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">"VITAMIN"</h2>
              <p className="text-sm font-bold text-gray-400 uppercase">"SS26 COLLECTION"</p>
            </div>
            <span className="text-xl font-black">$89</span>
          </div>
          <button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-[#ccff00] hover:text-black transition-colors">
            ADD TO CART
          </button>
        </div>
        <div className="group relative">
          <div className="bg-[#f4f4f4] aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" alt="OMEGA" />
            <div className="absolute top-4 left-4 font-black text-xs uppercase tracking-widest z-10 mix-blend-difference text-white">ITEM NO. 0022</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">"OMEGA"</h2>
              <p className="text-sm font-bold text-gray-400 uppercase">"SS26 COLLECTION"</p>
            </div>
            <span className="text-xl font-black">$79</span>
          </div>
          <button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-[#ccff00] hover:text-black transition-colors">
            ADD TO CART
          </button>
        </div>
        <div className="group relative">
          <div className="bg-[#f4f4f4] aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10" alt="TEST" />
            <div className="absolute top-4 left-4 font-black text-xs uppercase tracking-widest z-10 mix-blend-difference text-white">ITEM NO. 0023</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">"TEST"</h2>
              <p className="text-sm font-bold text-gray-400 uppercase">"SS26 COLLECTION"</p>
            </div>
            <span className="text-xl font-black">$69</span>
          </div>
          <button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-[#ccff00] hover:text-black transition-colors">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
