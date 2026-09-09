import Link from "next/link";

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-serif text-stone-900 mb-4">Botanical <span className="italic text-green-700">Blends</span></h1>
      <p className="text-stone-600 mb-12 text-lg">Pure, natural supplements for a holistic lifestyle.</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all border border-stone-100 group">
            <div className="w-full h-64 relative mb-6 rounded-3xl overflow-hidden bg-stone-50">
              <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[10%]" alt="Pure Isolate" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Pure Isolate</h2>
            <div className="text-green-700 text-sm mb-6 font-medium">100% Plant Based</div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-serif text-stone-900">$89</span>
              <button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm px-6 py-2 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all border border-stone-100 group">
            <div className="w-full h-64 relative mb-6 rounded-3xl overflow-hidden bg-stone-50">
              <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[10%]" alt="Plant Mass" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Plant Mass</h2>
            <div className="text-green-700 text-sm mb-6 font-medium">100% Plant Based</div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-serif text-stone-900">$79</span>
              <button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm px-6 py-2 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all border border-stone-100 group">
            <div className="w-full h-64 relative mb-6 rounded-3xl overflow-hidden bg-stone-50">
              <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[10%]" alt="Vital Energy" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Vital Energy</h2>
            <div className="text-green-700 text-sm mb-6 font-medium">100% Plant Based</div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-serif text-stone-900">$69</span>
              <button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm px-6 py-2 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all border border-stone-100 group">
            <div className="w-full h-64 relative mb-6 rounded-3xl overflow-hidden bg-stone-50">
              <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[10%]" alt="Clean BCAA" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Clean BCAA</h2>
            <div className="text-green-700 text-sm mb-6 font-medium">100% Plant Based</div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-serif text-stone-900">$59</span>
              <button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm px-6 py-2 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all border border-stone-100 group">
            <div className="w-full h-64 relative mb-6 rounded-3xl overflow-hidden bg-stone-50">
              <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[10%]" alt="Root Creatine" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Root Creatine</h2>
            <div className="text-green-700 text-sm mb-6 font-medium">100% Plant Based</div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-serif text-stone-900">$89</span>
              <button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm px-6 py-2 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all border border-stone-100 group">
            <div className="w-full h-64 relative mb-6 rounded-3xl overflow-hidden bg-stone-50">
              <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[10%]" alt="Earth Vitamins" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Earth Vitamins</h2>
            <div className="text-green-700 text-sm mb-6 font-medium">100% Plant Based</div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-serif text-stone-900">$79</span>
              <button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm px-6 py-2 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all border border-stone-100 group">
            <div className="w-full h-64 relative mb-6 rounded-3xl overflow-hidden bg-stone-50">
              <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[10%]" alt="Algae Omega" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Algae Omega</h2>
            <div className="text-green-700 text-sm mb-6 font-medium">100% Plant Based</div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-serif text-stone-900">$69</span>
              <button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm px-6 py-2 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all border border-stone-100 group">
            <div className="w-full h-64 relative mb-6 rounded-3xl overflow-hidden bg-stone-50">
              <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[10%]" alt="Natural Test" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Natural Test</h2>
            <div className="text-green-700 text-sm mb-6 font-medium">100% Plant Based</div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-serif text-stone-900">$59</span>
              <button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm px-6 py-2 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all border border-stone-100 group">
            <div className="w-full h-64 relative mb-6 rounded-3xl overflow-hidden bg-stone-50">
              <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[10%]" alt="Pure Isolate" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Pure Isolate</h2>
            <div className="text-green-700 text-sm mb-6 font-medium">100% Plant Based</div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-serif text-stone-900">$89</span>
              <button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm px-6 py-2 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all border border-stone-100 group">
            <div className="w-full h-64 relative mb-6 rounded-3xl overflow-hidden bg-stone-50">
              <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[10%]" alt="Plant Mass" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Plant Mass</h2>
            <div className="text-green-700 text-sm mb-6 font-medium">100% Plant Based</div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-serif text-stone-900">$79</span>
              <button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm px-6 py-2 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all border border-stone-100 group">
            <div className="w-full h-64 relative mb-6 rounded-3xl overflow-hidden bg-stone-50">
              <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[10%]" alt="Vital Energy" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Vital Energy</h2>
            <div className="text-green-700 text-sm mb-6 font-medium">100% Plant Based</div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-serif text-stone-900">$69</span>
              <button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm px-6 py-2 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all border border-stone-100 group">
            <div className="w-full h-64 relative mb-6 rounded-3xl overflow-hidden bg-stone-50">
              <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[10%]" alt="Clean BCAA" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Clean BCAA</h2>
            <div className="text-green-700 text-sm mb-6 font-medium">100% Plant Based</div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-serif text-stone-900">$59</span>
              <button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm px-6 py-2 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all border border-stone-100 group">
            <div className="w-full h-64 relative mb-6 rounded-3xl overflow-hidden bg-stone-50">
              <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[10%]" alt="Root Creatine" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Root Creatine</h2>
            <div className="text-green-700 text-sm mb-6 font-medium">100% Plant Based</div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-serif text-stone-900">$89</span>
              <button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm px-6 py-2 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all border border-stone-100 group">
            <div className="w-full h-64 relative mb-6 rounded-3xl overflow-hidden bg-stone-50">
              <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[10%]" alt="Earth Vitamins" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Earth Vitamins</h2>
            <div className="text-green-700 text-sm mb-6 font-medium">100% Plant Based</div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-serif text-stone-900">$79</span>
              <button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm px-6 py-2 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all border border-stone-100 group">
            <div className="w-full h-64 relative mb-6 rounded-3xl overflow-hidden bg-stone-50">
              <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[10%]" alt="Algae Omega" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Algae Omega</h2>
            <div className="text-green-700 text-sm mb-6 font-medium">100% Plant Based</div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-serif text-stone-900">$69</span>
              <button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm px-6 py-2 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all border border-stone-100 group">
            <div className="w-full h-64 relative mb-6 rounded-3xl overflow-hidden bg-stone-50">
              <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[10%]" alt="Natural Test" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Natural Test</h2>
            <div className="text-green-700 text-sm mb-6 font-medium">100% Plant Based</div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-serif text-stone-900">$59</span>
              <button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm px-6 py-2 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all border border-stone-100 group">
            <div className="w-full h-64 relative mb-6 rounded-3xl overflow-hidden bg-stone-50">
              <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[10%]" alt="Pure Isolate" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Pure Isolate</h2>
            <div className="text-green-700 text-sm mb-6 font-medium">100% Plant Based</div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-serif text-stone-900">$89</span>
              <button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm px-6 py-2 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all border border-stone-100 group">
            <div className="w-full h-64 relative mb-6 rounded-3xl overflow-hidden bg-stone-50">
              <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[10%]" alt="Plant Mass" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Plant Mass</h2>
            <div className="text-green-700 text-sm mb-6 font-medium">100% Plant Based</div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-serif text-stone-900">$79</span>
              <button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm px-6 py-2 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all border border-stone-100 group">
            <div className="w-full h-64 relative mb-6 rounded-3xl overflow-hidden bg-stone-50">
              <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[10%]" alt="Vital Energy" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Vital Energy</h2>
            <div className="text-green-700 text-sm mb-6 font-medium">100% Plant Based</div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-serif text-stone-900">$69</span>
              <button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm px-6 py-2 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all border border-stone-100 group">
            <div className="w-full h-64 relative mb-6 rounded-3xl overflow-hidden bg-stone-50">
              <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[10%]" alt="Clean BCAA" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Clean BCAA</h2>
            <div className="text-green-700 text-sm mb-6 font-medium">100% Plant Based</div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-serif text-stone-900">$59</span>
              <button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm px-6 py-2 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all border border-stone-100 group">
            <div className="w-full h-64 relative mb-6 rounded-3xl overflow-hidden bg-stone-50">
              <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[10%]" alt="Root Creatine" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Root Creatine</h2>
            <div className="text-green-700 text-sm mb-6 font-medium">100% Plant Based</div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-serif text-stone-900">$89</span>
              <button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm px-6 py-2 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all border border-stone-100 group">
            <div className="w-full h-64 relative mb-6 rounded-3xl overflow-hidden bg-stone-50">
              <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[10%]" alt="Earth Vitamins" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Earth Vitamins</h2>
            <div className="text-green-700 text-sm mb-6 font-medium">100% Plant Based</div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-serif text-stone-900">$79</span>
              <button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm px-6 py-2 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all border border-stone-100 group">
            <div className="w-full h-64 relative mb-6 rounded-3xl overflow-hidden bg-stone-50">
              <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[10%]" alt="Algae Omega" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Algae Omega</h2>
            <div className="text-green-700 text-sm mb-6 font-medium">100% Plant Based</div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-serif text-stone-900">$69</span>
              <button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm px-6 py-2 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all border border-stone-100 group">
            <div className="w-full h-64 relative mb-6 rounded-3xl overflow-hidden bg-stone-50">
              <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[10%]" alt="Natural Test" />
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Natural Test</h2>
            <div className="text-green-700 text-sm mb-6 font-medium">100% Plant Based</div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-serif text-stone-900">$59</span>
              <button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm px-6 py-2 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
      </div>
    </div>
  );
}
