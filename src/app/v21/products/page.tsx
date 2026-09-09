export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-16 border-b-8 border-black pb-8 flex flex-col md:flex-row justify-between items-end">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">CATALOG</h1>
        <div className="text-xl font-bold uppercase tracking-widest mt-4 md:mt-0">Elements of Growth</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className="border-4 border-black flex flex-col hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-shadow">
          <div className="bg-white border-b-4 border-black p-8 flex items-center justify-center relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="h-full object-contain filter grayscale contrast-125 relative z-10" alt="FORM 01" />
            <div className="absolute top-4 left-4 font-bold text-sm tracking-widest">01</div>
          </div>
          <div className="p-6 bg-[#ff0000] text-black flex-1 flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">FORM 01</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold">$99</span>
              <button className="border-2 border-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-[#ff0000] transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>
        <div className="border-4 border-black flex flex-col hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-shadow">
          <div className="bg-white border-b-4 border-black p-8 flex items-center justify-center relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="h-full object-contain filter grayscale contrast-125 relative z-10" alt="FORM 02" />
            <div className="absolute top-4 left-4 font-bold text-sm tracking-widest">02</div>
          </div>
          <div className="p-6 bg-[#0000ff] text-white flex-1 flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">FORM 02</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold">$89</span>
              <button className="border-2 border-white px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-[#0000ff] transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>
        <div className="border-4 border-black flex flex-col hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-shadow">
          <div className="bg-white border-b-4 border-black p-8 flex items-center justify-center relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="h-full object-contain filter grayscale contrast-125 relative z-10" alt="FORM 03" />
            <div className="absolute top-4 left-4 font-bold text-sm tracking-widest">03</div>
          </div>
          <div className="p-6 bg-[#ffff00] text-black flex-1 flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">FORM 03</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold">$79</span>
              <button className="border-2 border-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-[#ffff00] transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>
        <div className="border-4 border-black flex flex-col hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-shadow">
          <div className="bg-white border-b-4 border-black p-8 flex items-center justify-center relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="h-full object-contain filter grayscale contrast-125 relative z-10" alt="FORM 04" />
            <div className="absolute top-4 left-4 font-bold text-sm tracking-widest">04</div>
          </div>
          <div className="p-6 bg-[white] text-black flex-1 flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">FORM 04</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold">$69</span>
              <button className="border-2 border-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-[white] transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>
        <div className="border-4 border-black flex flex-col hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-shadow">
          <div className="bg-white border-b-4 border-black p-8 flex items-center justify-center relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="h-full object-contain filter grayscale contrast-125 relative z-10" alt="FORM 05" />
            <div className="absolute top-4 left-4 font-bold text-sm tracking-widest">05</div>
          </div>
          <div className="p-6 bg-[#ff0000] text-black flex-1 flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">FORM 05</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold">$99</span>
              <button className="border-2 border-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-[#ff0000] transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>
        <div className="border-4 border-black flex flex-col hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-shadow">
          <div className="bg-white border-b-4 border-black p-8 flex items-center justify-center relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="h-full object-contain filter grayscale contrast-125 relative z-10" alt="FORM 06" />
            <div className="absolute top-4 left-4 font-bold text-sm tracking-widest">06</div>
          </div>
          <div className="p-6 bg-[#0000ff] text-white flex-1 flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">FORM 06</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold">$89</span>
              <button className="border-2 border-white px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-[#0000ff] transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>
        <div className="border-4 border-black flex flex-col hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-shadow">
          <div className="bg-white border-b-4 border-black p-8 flex items-center justify-center relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="h-full object-contain filter grayscale contrast-125 relative z-10" alt="FORM 07" />
            <div className="absolute top-4 left-4 font-bold text-sm tracking-widest">07</div>
          </div>
          <div className="p-6 bg-[#ffff00] text-black flex-1 flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">FORM 07</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold">$79</span>
              <button className="border-2 border-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-[#ffff00] transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>
        <div className="border-4 border-black flex flex-col hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-shadow">
          <div className="bg-white border-b-4 border-black p-8 flex items-center justify-center relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="h-full object-contain filter grayscale contrast-125 relative z-10" alt="FORM 08" />
            <div className="absolute top-4 left-4 font-bold text-sm tracking-widest">08</div>
          </div>
          <div className="p-6 bg-[white] text-black flex-1 flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">FORM 08</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold">$69</span>
              <button className="border-2 border-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-[white] transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>
        <div className="border-4 border-black flex flex-col hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-shadow">
          <div className="bg-white border-b-4 border-black p-8 flex items-center justify-center relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="h-full object-contain filter grayscale contrast-125 relative z-10" alt="FORM 01" />
            <div className="absolute top-4 left-4 font-bold text-sm tracking-widest">09</div>
          </div>
          <div className="p-6 bg-[#ff0000] text-black flex-1 flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">FORM 01</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold">$99</span>
              <button className="border-2 border-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-[#ff0000] transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>
        <div className="border-4 border-black flex flex-col hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-shadow">
          <div className="bg-white border-b-4 border-black p-8 flex items-center justify-center relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="h-full object-contain filter grayscale contrast-125 relative z-10" alt="FORM 02" />
            <div className="absolute top-4 left-4 font-bold text-sm tracking-widest">10</div>
          </div>
          <div className="p-6 bg-[#0000ff] text-white flex-1 flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">FORM 02</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold">$89</span>
              <button className="border-2 border-white px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-[#0000ff] transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>
        <div className="border-4 border-black flex flex-col hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-shadow">
          <div className="bg-white border-b-4 border-black p-8 flex items-center justify-center relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="h-full object-contain filter grayscale contrast-125 relative z-10" alt="FORM 03" />
            <div className="absolute top-4 left-4 font-bold text-sm tracking-widest">11</div>
          </div>
          <div className="p-6 bg-[#ffff00] text-black flex-1 flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">FORM 03</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold">$79</span>
              <button className="border-2 border-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-[#ffff00] transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>
        <div className="border-4 border-black flex flex-col hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-shadow">
          <div className="bg-white border-b-4 border-black p-8 flex items-center justify-center relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="h-full object-contain filter grayscale contrast-125 relative z-10" alt="FORM 04" />
            <div className="absolute top-4 left-4 font-bold text-sm tracking-widest">12</div>
          </div>
          <div className="p-6 bg-[white] text-black flex-1 flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">FORM 04</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold">$69</span>
              <button className="border-2 border-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-[white] transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>
        <div className="border-4 border-black flex flex-col hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-shadow">
          <div className="bg-white border-b-4 border-black p-8 flex items-center justify-center relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="h-full object-contain filter grayscale contrast-125 relative z-10" alt="FORM 05" />
            <div className="absolute top-4 left-4 font-bold text-sm tracking-widest">13</div>
          </div>
          <div className="p-6 bg-[#ff0000] text-black flex-1 flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">FORM 05</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold">$99</span>
              <button className="border-2 border-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-[#ff0000] transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>
        <div className="border-4 border-black flex flex-col hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-shadow">
          <div className="bg-white border-b-4 border-black p-8 flex items-center justify-center relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="h-full object-contain filter grayscale contrast-125 relative z-10" alt="FORM 06" />
            <div className="absolute top-4 left-4 font-bold text-sm tracking-widest">14</div>
          </div>
          <div className="p-6 bg-[#0000ff] text-white flex-1 flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">FORM 06</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold">$89</span>
              <button className="border-2 border-white px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-[#0000ff] transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>
        <div className="border-4 border-black flex flex-col hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-shadow">
          <div className="bg-white border-b-4 border-black p-8 flex items-center justify-center relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="h-full object-contain filter grayscale contrast-125 relative z-10" alt="FORM 07" />
            <div className="absolute top-4 left-4 font-bold text-sm tracking-widest">15</div>
          </div>
          <div className="p-6 bg-[#ffff00] text-black flex-1 flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">FORM 07</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold">$79</span>
              <button className="border-2 border-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-[#ffff00] transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>
        <div className="border-4 border-black flex flex-col hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-shadow">
          <div className="bg-white border-b-4 border-black p-8 flex items-center justify-center relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="h-full object-contain filter grayscale contrast-125 relative z-10" alt="FORM 08" />
            <div className="absolute top-4 left-4 font-bold text-sm tracking-widest">16</div>
          </div>
          <div className="p-6 bg-[white] text-black flex-1 flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">FORM 08</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold">$69</span>
              <button className="border-2 border-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-[white] transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>
        <div className="border-4 border-black flex flex-col hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-shadow">
          <div className="bg-white border-b-4 border-black p-8 flex items-center justify-center relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="h-full object-contain filter grayscale contrast-125 relative z-10" alt="FORM 01" />
            <div className="absolute top-4 left-4 font-bold text-sm tracking-widest">17</div>
          </div>
          <div className="p-6 bg-[#ff0000] text-black flex-1 flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">FORM 01</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold">$99</span>
              <button className="border-2 border-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-[#ff0000] transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>
        <div className="border-4 border-black flex flex-col hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-shadow">
          <div className="bg-white border-b-4 border-black p-8 flex items-center justify-center relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="h-full object-contain filter grayscale contrast-125 relative z-10" alt="FORM 02" />
            <div className="absolute top-4 left-4 font-bold text-sm tracking-widest">18</div>
          </div>
          <div className="p-6 bg-[#0000ff] text-white flex-1 flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">FORM 02</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold">$89</span>
              <button className="border-2 border-white px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-[#0000ff] transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>
        <div className="border-4 border-black flex flex-col hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-shadow">
          <div className="bg-white border-b-4 border-black p-8 flex items-center justify-center relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="h-full object-contain filter grayscale contrast-125 relative z-10" alt="FORM 03" />
            <div className="absolute top-4 left-4 font-bold text-sm tracking-widest">19</div>
          </div>
          <div className="p-6 bg-[#ffff00] text-black flex-1 flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">FORM 03</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold">$79</span>
              <button className="border-2 border-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-[#ffff00] transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>
        <div className="border-4 border-black flex flex-col hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-shadow">
          <div className="bg-white border-b-4 border-black p-8 flex items-center justify-center relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="h-full object-contain filter grayscale contrast-125 relative z-10" alt="FORM 04" />
            <div className="absolute top-4 left-4 font-bold text-sm tracking-widest">20</div>
          </div>
          <div className="p-6 bg-[white] text-black flex-1 flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">FORM 04</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold">$69</span>
              <button className="border-2 border-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-[white] transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>
        <div className="border-4 border-black flex flex-col hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-shadow">
          <div className="bg-white border-b-4 border-black p-8 flex items-center justify-center relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="h-full object-contain filter grayscale contrast-125 relative z-10" alt="FORM 05" />
            <div className="absolute top-4 left-4 font-bold text-sm tracking-widest">21</div>
          </div>
          <div className="p-6 bg-[#ff0000] text-black flex-1 flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">FORM 05</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold">$99</span>
              <button className="border-2 border-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-[#ff0000] transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>
        <div className="border-4 border-black flex flex-col hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-shadow">
          <div className="bg-white border-b-4 border-black p-8 flex items-center justify-center relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="h-full object-contain filter grayscale contrast-125 relative z-10" alt="FORM 06" />
            <div className="absolute top-4 left-4 font-bold text-sm tracking-widest">22</div>
          </div>
          <div className="p-6 bg-[#0000ff] text-white flex-1 flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">FORM 06</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold">$89</span>
              <button className="border-2 border-white px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-[#0000ff] transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>
        <div className="border-4 border-black flex flex-col hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-shadow">
          <div className="bg-white border-b-4 border-black p-8 flex items-center justify-center relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="h-full object-contain filter grayscale contrast-125 relative z-10" alt="FORM 07" />
            <div className="absolute top-4 left-4 font-bold text-sm tracking-widest">23</div>
          </div>
          <div className="p-6 bg-[#ffff00] text-black flex-1 flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">FORM 07</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold">$79</span>
              <button className="border-2 border-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-[#ffff00] transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>
        <div className="border-4 border-black flex flex-col hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-shadow">
          <div className="bg-white border-b-4 border-black p-8 flex items-center justify-center relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="h-full object-contain filter grayscale contrast-125 relative z-10" alt="FORM 08" />
            <div className="absolute top-4 left-4 font-bold text-sm tracking-widest">24</div>
          </div>
          <div className="p-6 bg-[white] text-black flex-1 flex flex-col">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">FORM 08</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold">$69</span>
              <button className="border-2 border-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-[white] transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
