export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-6xl font-black uppercase tracking-tighter mb-24 border-b border-white/20 pb-8 text-center">The Objects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className="border border-white/20 p-8 hover:border-white transition-colors group cursor-pointer">
          <div className="w-full aspect-square bg-white/5 mb-8 flex items-center justify-center p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="h-full object-contain filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-500" alt="BLACK WHEY" />
          </div>
          <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-white transition-colors">
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-1">Object 1</h3>
              <h2 className="text-xl font-black uppercase tracking-tight">BLACK WHEY</h2>
            </div>
            <span className="text-lg">$99</span>
          </div>
        </div>
        <div className="border border-white/20 p-8 hover:border-white transition-colors group cursor-pointer">
          <div className="w-full aspect-square bg-white/5 mb-8 flex items-center justify-center p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="h-full object-contain filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-500" alt="WHITE MASS" />
          </div>
          <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-white transition-colors">
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-1">Object 2</h3>
              <h2 className="text-xl font-black uppercase tracking-tight">WHITE MASS</h2>
            </div>
            <span className="text-lg">$89</span>
          </div>
        </div>
        <div className="border border-white/20 p-8 hover:border-white transition-colors group cursor-pointer">
          <div className="w-full aspect-square bg-white/5 mb-8 flex items-center justify-center p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="h-full object-contain filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-500" alt="GREY ENERGY" />
          </div>
          <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-white transition-colors">
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-1">Object 3</h3>
              <h2 className="text-xl font-black uppercase tracking-tight">GREY ENERGY</h2>
            </div>
            <span className="text-lg">$79</span>
          </div>
        </div>
        <div className="border border-white/20 p-8 hover:border-white transition-colors group cursor-pointer">
          <div className="w-full aspect-square bg-white/5 mb-8 flex items-center justify-center p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="h-full object-contain filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-500" alt="DARK BCAA" />
          </div>
          <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-white transition-colors">
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-1">Object 4</h3>
              <h2 className="text-xl font-black uppercase tracking-tight">DARK BCAA</h2>
            </div>
            <span className="text-lg">$69</span>
          </div>
        </div>
        <div className="border border-white/20 p-8 hover:border-white transition-colors group cursor-pointer">
          <div className="w-full aspect-square bg-white/5 mb-8 flex items-center justify-center p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="h-full object-contain filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-500" alt="LIGHT CREATINE" />
          </div>
          <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-white transition-colors">
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-1">Object 5</h3>
              <h2 className="text-xl font-black uppercase tracking-tight">LIGHT CREATINE</h2>
            </div>
            <span className="text-lg">$99</span>
          </div>
        </div>
        <div className="border border-white/20 p-8 hover:border-white transition-colors group cursor-pointer">
          <div className="w-full aspect-square bg-white/5 mb-8 flex items-center justify-center p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="h-full object-contain filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-500" alt="VOID VITA" />
          </div>
          <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-white transition-colors">
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-1">Object 6</h3>
              <h2 className="text-xl font-black uppercase tracking-tight">VOID VITA</h2>
            </div>
            <span className="text-lg">$89</span>
          </div>
        </div>
        <div className="border border-white/20 p-8 hover:border-white transition-colors group cursor-pointer">
          <div className="w-full aspect-square bg-white/5 mb-8 flex items-center justify-center p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="h-full object-contain filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-500" alt="BLANC OMEGA" />
          </div>
          <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-white transition-colors">
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-1">Object 7</h3>
              <h2 className="text-xl font-black uppercase tracking-tight">BLANC OMEGA</h2>
            </div>
            <span className="text-lg">$79</span>
          </div>
        </div>
        <div className="border border-white/20 p-8 hover:border-white transition-colors group cursor-pointer">
          <div className="w-full aspect-square bg-white/5 mb-8 flex items-center justify-center p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="h-full object-contain filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-500" alt="NOIR TEST" />
          </div>
          <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-white transition-colors">
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-1">Object 8</h3>
              <h2 className="text-xl font-black uppercase tracking-tight">NOIR TEST</h2>
            </div>
            <span className="text-lg">$69</span>
          </div>
        </div>
        <div className="border border-white/20 p-8 hover:border-white transition-colors group cursor-pointer">
          <div className="w-full aspect-square bg-white/5 mb-8 flex items-center justify-center p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="h-full object-contain filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-500" alt="BLACK WHEY" />
          </div>
          <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-white transition-colors">
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-1">Object 9</h3>
              <h2 className="text-xl font-black uppercase tracking-tight">BLACK WHEY</h2>
            </div>
            <span className="text-lg">$99</span>
          </div>
        </div>
        <div className="border border-white/20 p-8 hover:border-white transition-colors group cursor-pointer">
          <div className="w-full aspect-square bg-white/5 mb-8 flex items-center justify-center p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="h-full object-contain filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-500" alt="WHITE MASS" />
          </div>
          <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-white transition-colors">
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-1">Object 10</h3>
              <h2 className="text-xl font-black uppercase tracking-tight">WHITE MASS</h2>
            </div>
            <span className="text-lg">$89</span>
          </div>
        </div>
        <div className="border border-white/20 p-8 hover:border-white transition-colors group cursor-pointer">
          <div className="w-full aspect-square bg-white/5 mb-8 flex items-center justify-center p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="h-full object-contain filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-500" alt="GREY ENERGY" />
          </div>
          <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-white transition-colors">
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-1">Object 11</h3>
              <h2 className="text-xl font-black uppercase tracking-tight">GREY ENERGY</h2>
            </div>
            <span className="text-lg">$79</span>
          </div>
        </div>
        <div className="border border-white/20 p-8 hover:border-white transition-colors group cursor-pointer">
          <div className="w-full aspect-square bg-white/5 mb-8 flex items-center justify-center p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="h-full object-contain filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-500" alt="DARK BCAA" />
          </div>
          <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-white transition-colors">
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-1">Object 12</h3>
              <h2 className="text-xl font-black uppercase tracking-tight">DARK BCAA</h2>
            </div>
            <span className="text-lg">$69</span>
          </div>
        </div>
        <div className="border border-white/20 p-8 hover:border-white transition-colors group cursor-pointer">
          <div className="w-full aspect-square bg-white/5 mb-8 flex items-center justify-center p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="h-full object-contain filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-500" alt="LIGHT CREATINE" />
          </div>
          <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-white transition-colors">
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-1">Object 13</h3>
              <h2 className="text-xl font-black uppercase tracking-tight">LIGHT CREATINE</h2>
            </div>
            <span className="text-lg">$99</span>
          </div>
        </div>
        <div className="border border-white/20 p-8 hover:border-white transition-colors group cursor-pointer">
          <div className="w-full aspect-square bg-white/5 mb-8 flex items-center justify-center p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="h-full object-contain filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-500" alt="VOID VITA" />
          </div>
          <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-white transition-colors">
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-1">Object 14</h3>
              <h2 className="text-xl font-black uppercase tracking-tight">VOID VITA</h2>
            </div>
            <span className="text-lg">$89</span>
          </div>
        </div>
        <div className="border border-white/20 p-8 hover:border-white transition-colors group cursor-pointer">
          <div className="w-full aspect-square bg-white/5 mb-8 flex items-center justify-center p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="h-full object-contain filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-500" alt="BLANC OMEGA" />
          </div>
          <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-white transition-colors">
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-1">Object 15</h3>
              <h2 className="text-xl font-black uppercase tracking-tight">BLANC OMEGA</h2>
            </div>
            <span className="text-lg">$79</span>
          </div>
        </div>
        <div className="border border-white/20 p-8 hover:border-white transition-colors group cursor-pointer">
          <div className="w-full aspect-square bg-white/5 mb-8 flex items-center justify-center p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="h-full object-contain filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-500" alt="NOIR TEST" />
          </div>
          <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-white transition-colors">
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-1">Object 16</h3>
              <h2 className="text-xl font-black uppercase tracking-tight">NOIR TEST</h2>
            </div>
            <span className="text-lg">$69</span>
          </div>
        </div>
        <div className="border border-white/20 p-8 hover:border-white transition-colors group cursor-pointer">
          <div className="w-full aspect-square bg-white/5 mb-8 flex items-center justify-center p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="h-full object-contain filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-500" alt="BLACK WHEY" />
          </div>
          <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-white transition-colors">
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-1">Object 17</h3>
              <h2 className="text-xl font-black uppercase tracking-tight">BLACK WHEY</h2>
            </div>
            <span className="text-lg">$99</span>
          </div>
        </div>
        <div className="border border-white/20 p-8 hover:border-white transition-colors group cursor-pointer">
          <div className="w-full aspect-square bg-white/5 mb-8 flex items-center justify-center p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="h-full object-contain filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-500" alt="WHITE MASS" />
          </div>
          <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-white transition-colors">
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-1">Object 18</h3>
              <h2 className="text-xl font-black uppercase tracking-tight">WHITE MASS</h2>
            </div>
            <span className="text-lg">$89</span>
          </div>
        </div>
        <div className="border border-white/20 p-8 hover:border-white transition-colors group cursor-pointer">
          <div className="w-full aspect-square bg-white/5 mb-8 flex items-center justify-center p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="h-full object-contain filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-500" alt="GREY ENERGY" />
          </div>
          <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-white transition-colors">
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-1">Object 19</h3>
              <h2 className="text-xl font-black uppercase tracking-tight">GREY ENERGY</h2>
            </div>
            <span className="text-lg">$79</span>
          </div>
        </div>
        <div className="border border-white/20 p-8 hover:border-white transition-colors group cursor-pointer">
          <div className="w-full aspect-square bg-white/5 mb-8 flex items-center justify-center p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="h-full object-contain filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-500" alt="DARK BCAA" />
          </div>
          <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-white transition-colors">
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-1">Object 20</h3>
              <h2 className="text-xl font-black uppercase tracking-tight">DARK BCAA</h2>
            </div>
            <span className="text-lg">$69</span>
          </div>
        </div>
        <div className="border border-white/20 p-8 hover:border-white transition-colors group cursor-pointer">
          <div className="w-full aspect-square bg-white/5 mb-8 flex items-center justify-center p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="h-full object-contain filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-500" alt="LIGHT CREATINE" />
          </div>
          <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-white transition-colors">
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-1">Object 21</h3>
              <h2 className="text-xl font-black uppercase tracking-tight">LIGHT CREATINE</h2>
            </div>
            <span className="text-lg">$99</span>
          </div>
        </div>
        <div className="border border-white/20 p-8 hover:border-white transition-colors group cursor-pointer">
          <div className="w-full aspect-square bg-white/5 mb-8 flex items-center justify-center p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" className="h-full object-contain filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-500" alt="VOID VITA" />
          </div>
          <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-white transition-colors">
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-1">Object 22</h3>
              <h2 className="text-xl font-black uppercase tracking-tight">VOID VITA</h2>
            </div>
            <span className="text-lg">$89</span>
          </div>
        </div>
        <div className="border border-white/20 p-8 hover:border-white transition-colors group cursor-pointer">
          <div className="w-full aspect-square bg-white/5 mb-8 flex items-center justify-center p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" className="h-full object-contain filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-500" alt="BLANC OMEGA" />
          </div>
          <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-white transition-colors">
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-1">Object 23</h3>
              <h2 className="text-xl font-black uppercase tracking-tight">BLANC OMEGA</h2>
            </div>
            <span className="text-lg">$79</span>
          </div>
        </div>
        <div className="border border-white/20 p-8 hover:border-white transition-colors group cursor-pointer">
          <div className="w-full aspect-square bg-white/5 mb-8 flex items-center justify-center p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" className="h-full object-contain filter grayscale contrast-200 group-hover:scale-110 transition-transform duration-500" alt="NOIR TEST" />
          </div>
          <div className="flex justify-between items-end border-t border-white/20 pt-6 group-hover:border-white transition-colors">
            <div>
              <h3 className="text-white/50 text-xs tracking-widest uppercase mb-1">Object 24</h3>
              <h2 className="text-xl font-black uppercase tracking-tight">NOIR TEST</h2>
            </div>
            <span className="text-lg">$69</span>
          </div>
        </div>
      </div>
    </div>
  );
}