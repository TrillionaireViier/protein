images = [
    "https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg",
    "https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg",
] * 2

with open("src/app/v4/products/page.tsx", "r") as f:
    content = f.read()

names = ["Signature", "Gold", "Platinum", "Diamond", "Elite", "Pro", "Ultra", "Master"]
types = ["Isolate", "Mass", "Energy", "BCAA", "Creatine", "Vitamins", "Omega", "Test"]

for i in range(8):
    target = f"""              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#d4af37]/10 blur-[80px] rounded-full"></div>
              <div className="w-48 h-64 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-xl border border-white/10 shadow-2xl flex flex-col items-center p-6 relative z-10">
                <div className="w-full h-6 bg-gradient-to-r from-[#111] via-[#333] to-[#111] rounded-t-lg -mt-8 mb-6 border-b border-white/5"></div>
                <Crown className="w-6 h-6 text-[#d4af37] mb-4" />
                <div className="text-center w-full border-y border-white/10 py-4 mb-4">
                  <div className="font-serif text-xl font-light text-white tracking-[0.2em] uppercase mb-1">Hutchings</div>
                  <div className="text-[#d4af37] text-[10px] tracking-[0.4em] uppercase">{names[i]}</div>
                </div>
                <div className="mt-auto w-full flex justify-between text-[8px] text-zinc-500 tracking-[0.2em] uppercase">
                  <span>2lbs</span>
                  <span>{types[i]}</span>
                </div>
              </div>"""
    
    repl = f'<img src="{images[i]}" alt="Product" className="max-h-full object-contain relative z-10 hover:scale-110 transition-transform duration-700 mix-blend-screen" />'
    content = content.replace(target, repl)

with open("src/app/v4/products/page.tsx", "w") as f:
    f.write(content)


with open("src/app/v7/products/page.tsx", "r") as f:
    content = f.read()

v7_vals = ["25Г", "50Г", "300МГ", "5Г", "5Г", "100%", "1000МГ", "500МГ"]
v7_units = ["Белок", "Белок", "Кофеин", "Лейцин", "Креатин", "Суточная", "EPA/DHA", "Трибулус"]

for i in range(8):
    target = f"""              <div className="w-48 h-64 border-8 border-black bg-white shadow-[12px_12px_0_0_rgba(0,0,0,1)] flex flex-col p-4 transform -rotate-3">
                <div className="border-b-4 border-black pb-2 mb-2 text-center">
                  <div className="font-black text-2xl uppercase tracking-tighter">H-PRO</div>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <div className="font-black text-4xl">{v7_vals[i]}</div>
                  <div className="font-bold uppercase">{v7_units[i]}</div>
                </div>
              </div>"""
    
    repl = f'<img src="{images[i]}" alt="Product" className="w-48 h-64 border-8 border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)] object-cover transform -rotate-3 hover:rotate-0 transition-transform" />'
    content = content.replace(target, repl)

with open("src/app/v7/products/page.tsx", "w") as f:
    f.write(content)
