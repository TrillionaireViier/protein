import re

with open('src/app/v4/products/page.tsx', 'r') as f:
    content = f.read()

template = """          {{/* Product {i} */}}
          <div className="bg-[#111] rounded-2xl border border-white/5 hover:border-[#d4af37]/30 transition-colors group p-8 flex flex-col items-center">
            <div className="w-full h-80 relative flex justify-center items-center mb-8">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#d4af37]/10 blur-[80px] rounded-full"></div>
              <div className="w-48 h-64 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-xl border border-white/10 shadow-2xl flex flex-col items-center p-6 relative z-10">
                <div className="w-full h-6 bg-gradient-to-r from-[#111] via-[#333] to-[#111] rounded-t-lg -mt-8 mb-6 border-b border-white/5"></div>
                <Crown className="w-6 h-6 text-[#d4af37] mb-4" />
                <div className="text-center w-full border-y border-white/10 py-4 mb-4">
                  <div className="font-serif text-xl font-light text-white tracking-[0.2em] uppercase mb-1">Hutchings</div>
                  <div className="text-[#d4af37] text-[10px] tracking-[0.4em] uppercase">{name}</div>
                </div>
                <div className="mt-auto w-full flex justify-between text-[8px] text-zinc-500 tracking-[0.2em] uppercase">
                  <span>2lbs</span>
                  <span>{type}</span>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-serif tracking-wider mb-3 group-hover:text-[#d4af37] transition-colors">Premium {name} {type}</h2>
            <p className="text-zinc-500 font-light text-center mb-8">Идеальная формула, созданная для максимального результата и быстрого усвоения.</p>
            
            <div className="w-full flex justify-between items-center mt-auto border-t border-white/5 pt-6">
              <span className="text-3xl font-serif text-[#d4af37]">${price}</span>
              <button className="bg-gradient-to-r from-[#b38f22] to-[#d4af37] hover:from-[#d4af37] hover:to-[#f9e596] text-black px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-all">
                Приобрести
              </button>
            </div>
          </div>"""

products = [
    ("Signature", "Isolate", "89", 1),
    ("Gold", "Mass", "99", 2),
    ("Platinum", "Energy", "69", 3),
    ("Diamond", "BCAA", "59", 4),
    ("Elite", "Creatine", "49", 5),
    ("Pro", "Vitamins", "39", 6),
    ("Ultra", "Omega", "45", 7),
    ("Master", "Test", "79", 8),
]

blocks = "\n".join(template.format(name=p[0], type=p[1], price=p[2], i=p[3]) for p in products)

new_content = re.sub(
    r'<div className="grid md:grid-cols-2 gap-12">.*?</div>\n      </section>',
    f'<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">\n{blocks}\n        </div>\n      </section>',
    content,
    flags=re.DOTALL
)

with open('src/app/v4/products/page.tsx', 'w') as f:
    f.write(new_content)
