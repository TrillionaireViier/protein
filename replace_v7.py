import re

with open('src/app/v7/products/page.tsx', 'r') as f:
    content = f.read()

template = """          {{/* Product {i} */}}
          <div className="border-8 border-black bg-yellow-400 shadow-[16px_16px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-4 hover:translate-y-4 transition-all flex flex-col cursor-crosshair">
            <div className="border-b-8 border-black p-6 bg-white">
              <div className="font-black text-4xl uppercase tracking-tighter">H-PRO {name}</div>
              <div className="font-bold text-xl uppercase mt-2">100% ЧИСТЫЙ</div>
            </div>
            
            <div className="flex-1 p-12 flex flex-col justify-center items-center">
              <div className="w-48 h-64 border-8 border-black bg-white shadow-[12px_12px_0_0_rgba(0,0,0,1)] flex flex-col p-4 transform -rotate-3">
                <div className="border-b-4 border-black pb-2 mb-2 text-center">
                  <div className="font-black text-2xl uppercase tracking-tighter">H-PRO</div>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <div className="font-black text-4xl">{value}</div>
                  <div className="font-bold uppercase">{unit}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-black text-white p-6 flex justify-between items-center">
              <span className="font-black text-3xl">${price}</span>
              <button className="font-bold text-xl uppercase bg-yellow-400 text-black px-6 py-2 border-4 border-white hover:bg-white transition-colors">
                КУПИТЬ
              </button>
            </div>
          </div>"""

products = [
    ("ИЗОЛЯТ", "25Г", "Белок", "45", 1),
    ("ГЕЙНЕР", "50Г", "Белок", "55", 2),
    ("ЭНЕРГИЯ", "300МГ", "Кофеин", "35", 3),
    ("BCAA", "5Г", "Лейцин", "30", 4),
    ("КРЕАТИН", "5Г", "Креатин", "25", 5),
    ("ВИТАМИНЫ", "100%", "Суточная", "20", 6),
    ("ОМЕГА", "1000МГ", "EPA/DHA", "25", 7),
    ("ТЕСТ", "500МГ", "Трибулус", "40", 8),
]

blocks = "\n".join(template.format(name=p[0], value=p[1], unit=p[2], price=p[3], i=p[4]) for p in products)

new_content = re.sub(
    r'<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">.*?</div>\n      </section>',
    f'<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">\n{blocks}\n        </div>\n      </section>',
    content,
    flags=re.DOTALL
)

with open('src/app/v7/products/page.tsx', 'w') as f:
    f.write(new_content)
