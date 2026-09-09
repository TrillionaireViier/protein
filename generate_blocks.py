images = [
    "https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg",
    "https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg",
] * 2

names = ["CYBER_ISO", "NEON_MASS", "GLITCH_NRG", "HACK_BCAA", "OVERCLOCK", "SYNTH_VIT", "MECH_OMEGA", "TEST_PROTOCOL"]

products_html = ""
for i in range(24):
    img = images[i % 8]
    name = names[i % 8]
    price = 99 - (i % 4) * 10
    products_html += f"""
          <div className="bg-zinc-900 border border-cyan-500/30 p-6 relative group hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all">
            <div className="absolute top-0 left-0 w-2 h-2 bg-pink-500"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-500"></div>
            <div className="w-full h-64 relative mb-6 overflow-hidden">
              <div className="absolute inset-0 bg-cyan-500/10 mix-blend-color-dodge z-10 group-hover:bg-pink-500/20 transition-colors"></div>
              <img src="{img}" className="w-full h-full object-cover filter contrast-125 saturate-150 relative z-0" alt="{name}" />
            </div>
            <h2 className="text-2xl font-mono text-white mb-2 tracking-widest">{name}</h2>
            <div className="text-cyan-400 font-mono text-sm mb-6 opacity-70">SYS.REQ // OPTIMAL</div>
            <div className="flex justify-between items-center border-t border-zinc-800 pt-4">
              <span className="text-3xl font-mono text-pink-500 font-bold">${price}</span>
              <button className="bg-transparent border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black font-mono text-sm px-4 py-2 transition-all uppercase tracking-widest">
                EXECUTE
              </button>
            </div>
          </div>"""

with open("v8_blocks.txt", "w") as f:
    f.write(products_html)
