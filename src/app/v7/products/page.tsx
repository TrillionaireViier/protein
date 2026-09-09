import React from 'react';
import Link from 'next/link';

export default function ProductsV7() {
  return (
    <div className="min-h-screen bg-yellow-400 text-black font-mono selection:bg-black selection:text-yellow-400 flex flex-col">
      <nav className="w-full border-b-8 border-black bg-white">
        <div className="flex items-center justify-between">
          <Link href="/v7" className="px-8 py-6 font-black text-2xl uppercase border-r-8 border-black hover:bg-black hover:text-white transition-colors">
            ← НАЗАД
          </Link>
          <div className="font-black text-3xl md:text-5xl tracking-tighter uppercase px-8">
            HUTCHINGS_HEALTH
          </div>
          <div className="w-48 border-l-8 border-black h-[80px]"></div>
        </div>
      </nav>

      <section className="flex-1 p-12 bg-white flex flex-col">
        <h1 className="text-7xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-12 border-b-8 border-black pb-8">
          ПРОДУКТЫ
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product 1 */}
          <div className="border-8 border-black bg-yellow-400 shadow-[16px_16px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-4 hover:translate-y-4 transition-all flex flex-col cursor-crosshair">
            <div className="border-b-8 border-black p-6 bg-white">
              <div className="font-black text-4xl uppercase tracking-tighter">H-PRO ИЗОЛЯТ</div>
              <div className="font-bold text-xl uppercase mt-2">100% ЧИСТЫЙ</div>
            </div>
            
            <div className="flex-1 p-12 flex flex-col justify-center items-center">
              <div className="w-48 h-64 border-8 border-black bg-white shadow-[12px_12px_0_0_rgba(0,0,0,1)] flex flex-col p-4 transform -rotate-3">
                <div className="border-b-4 border-black pb-2 mb-2 text-center">
                  <div className="font-black text-2xl uppercase tracking-tighter">H-PRO</div>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <div className="font-black text-4xl">25Г</div>
                  <div className="font-bold uppercase">Белок</div>
                </div>
              </div>
            </div>
            
            <div className="bg-black text-white p-6 flex justify-between items-center">
              <span className="font-black text-3xl">$45</span>
              <button className="font-bold text-xl uppercase bg-yellow-400 text-black px-6 py-2 border-4 border-white hover:bg-white transition-colors">
                КУПИТЬ
              </button>
            </div>
          </div>
          {/* Product 2 */}
          <div className="border-8 border-black bg-yellow-400 shadow-[16px_16px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-4 hover:translate-y-4 transition-all flex flex-col cursor-crosshair">
            <div className="border-b-8 border-black p-6 bg-white">
              <div className="font-black text-4xl uppercase tracking-tighter">H-PRO ГЕЙНЕР</div>
              <div className="font-bold text-xl uppercase mt-2">100% ЧИСТЫЙ</div>
            </div>
            
            <div className="flex-1 p-12 flex flex-col justify-center items-center">
              <div className="w-48 h-64 border-8 border-black bg-white shadow-[12px_12px_0_0_rgba(0,0,0,1)] flex flex-col p-4 transform -rotate-3">
                <div className="border-b-4 border-black pb-2 mb-2 text-center">
                  <div className="font-black text-2xl uppercase tracking-tighter">H-PRO</div>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <div className="font-black text-4xl">50Г</div>
                  <div className="font-bold uppercase">Белок</div>
                </div>
              </div>
            </div>
            
            <div className="bg-black text-white p-6 flex justify-between items-center">
              <span className="font-black text-3xl">$55</span>
              <button className="font-bold text-xl uppercase bg-yellow-400 text-black px-6 py-2 border-4 border-white hover:bg-white transition-colors">
                КУПИТЬ
              </button>
            </div>
          </div>
          {/* Product 3 */}
          <div className="border-8 border-black bg-yellow-400 shadow-[16px_16px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-4 hover:translate-y-4 transition-all flex flex-col cursor-crosshair">
            <div className="border-b-8 border-black p-6 bg-white">
              <div className="font-black text-4xl uppercase tracking-tighter">H-PRO ЭНЕРГИЯ</div>
              <div className="font-bold text-xl uppercase mt-2">100% ЧИСТЫЙ</div>
            </div>
            
            <div className="flex-1 p-12 flex flex-col justify-center items-center">
              <div className="w-48 h-64 border-8 border-black bg-white shadow-[12px_12px_0_0_rgba(0,0,0,1)] flex flex-col p-4 transform -rotate-3">
                <div className="border-b-4 border-black pb-2 mb-2 text-center">
                  <div className="font-black text-2xl uppercase tracking-tighter">H-PRO</div>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <div className="font-black text-4xl">300МГ</div>
                  <div className="font-bold uppercase">Кофеин</div>
                </div>
              </div>
            </div>
            
            <div className="bg-black text-white p-6 flex justify-between items-center">
              <span className="font-black text-3xl">$35</span>
              <button className="font-bold text-xl uppercase bg-yellow-400 text-black px-6 py-2 border-4 border-white hover:bg-white transition-colors">
                КУПИТЬ
              </button>
            </div>
          </div>
          {/* Product 4 */}
          <div className="border-8 border-black bg-yellow-400 shadow-[16px_16px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-4 hover:translate-y-4 transition-all flex flex-col cursor-crosshair">
            <div className="border-b-8 border-black p-6 bg-white">
              <div className="font-black text-4xl uppercase tracking-tighter">H-PRO BCAA</div>
              <div className="font-bold text-xl uppercase mt-2">100% ЧИСТЫЙ</div>
            </div>
            
            <div className="flex-1 p-12 flex flex-col justify-center items-center">
              <div className="w-48 h-64 border-8 border-black bg-white shadow-[12px_12px_0_0_rgba(0,0,0,1)] flex flex-col p-4 transform -rotate-3">
                <div className="border-b-4 border-black pb-2 mb-2 text-center">
                  <div className="font-black text-2xl uppercase tracking-tighter">H-PRO</div>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <div className="font-black text-4xl">5Г</div>
                  <div className="font-bold uppercase">Лейцин</div>
                </div>
              </div>
            </div>
            
            <div className="bg-black text-white p-6 flex justify-between items-center">
              <span className="font-black text-3xl">$30</span>
              <button className="font-bold text-xl uppercase bg-yellow-400 text-black px-6 py-2 border-4 border-white hover:bg-white transition-colors">
                КУПИТЬ
              </button>
            </div>
          </div>
          {/* Product 5 */}
          <div className="border-8 border-black bg-yellow-400 shadow-[16px_16px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-4 hover:translate-y-4 transition-all flex flex-col cursor-crosshair">
            <div className="border-b-8 border-black p-6 bg-white">
              <div className="font-black text-4xl uppercase tracking-tighter">H-PRO КРЕАТИН</div>
              <div className="font-bold text-xl uppercase mt-2">100% ЧИСТЫЙ</div>
            </div>
            
            <div className="flex-1 p-12 flex flex-col justify-center items-center">
              <div className="w-48 h-64 border-8 border-black bg-white shadow-[12px_12px_0_0_rgba(0,0,0,1)] flex flex-col p-4 transform -rotate-3">
                <div className="border-b-4 border-black pb-2 mb-2 text-center">
                  <div className="font-black text-2xl uppercase tracking-tighter">H-PRO</div>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <div className="font-black text-4xl">5Г</div>
                  <div className="font-bold uppercase">Креатин</div>
                </div>
              </div>
            </div>
            
            <div className="bg-black text-white p-6 flex justify-between items-center">
              <span className="font-black text-3xl">$25</span>
              <button className="font-bold text-xl uppercase bg-yellow-400 text-black px-6 py-2 border-4 border-white hover:bg-white transition-colors">
                КУПИТЬ
              </button>
            </div>
          </div>
          {/* Product 6 */}
          <div className="border-8 border-black bg-yellow-400 shadow-[16px_16px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-4 hover:translate-y-4 transition-all flex flex-col cursor-crosshair">
            <div className="border-b-8 border-black p-6 bg-white">
              <div className="font-black text-4xl uppercase tracking-tighter">H-PRO ВИТАМИНЫ</div>
              <div className="font-bold text-xl uppercase mt-2">100% ЧИСТЫЙ</div>
            </div>
            
            <div className="flex-1 p-12 flex flex-col justify-center items-center">
              <div className="w-48 h-64 border-8 border-black bg-white shadow-[12px_12px_0_0_rgba(0,0,0,1)] flex flex-col p-4 transform -rotate-3">
                <div className="border-b-4 border-black pb-2 mb-2 text-center">
                  <div className="font-black text-2xl uppercase tracking-tighter">H-PRO</div>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <div className="font-black text-4xl">100%</div>
                  <div className="font-bold uppercase">Суточная</div>
                </div>
              </div>
            </div>
            
            <div className="bg-black text-white p-6 flex justify-between items-center">
              <span className="font-black text-3xl">$20</span>
              <button className="font-bold text-xl uppercase bg-yellow-400 text-black px-6 py-2 border-4 border-white hover:bg-white transition-colors">
                КУПИТЬ
              </button>
            </div>
          </div>
          {/* Product 7 */}
          <div className="border-8 border-black bg-yellow-400 shadow-[16px_16px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-4 hover:translate-y-4 transition-all flex flex-col cursor-crosshair">
            <div className="border-b-8 border-black p-6 bg-white">
              <div className="font-black text-4xl uppercase tracking-tighter">H-PRO ОМЕГА</div>
              <div className="font-bold text-xl uppercase mt-2">100% ЧИСТЫЙ</div>
            </div>
            
            <div className="flex-1 p-12 flex flex-col justify-center items-center">
              <div className="w-48 h-64 border-8 border-black bg-white shadow-[12px_12px_0_0_rgba(0,0,0,1)] flex flex-col p-4 transform -rotate-3">
                <div className="border-b-4 border-black pb-2 mb-2 text-center">
                  <div className="font-black text-2xl uppercase tracking-tighter">H-PRO</div>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <div className="font-black text-4xl">1000МГ</div>
                  <div className="font-bold uppercase">EPA/DHA</div>
                </div>
              </div>
            </div>
            
            <div className="bg-black text-white p-6 flex justify-between items-center">
              <span className="font-black text-3xl">$25</span>
              <button className="font-bold text-xl uppercase bg-yellow-400 text-black px-6 py-2 border-4 border-white hover:bg-white transition-colors">
                КУПИТЬ
              </button>
            </div>
          </div>
          {/* Product 8 */}
          <div className="border-8 border-black bg-yellow-400 shadow-[16px_16px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-4 hover:translate-y-4 transition-all flex flex-col cursor-crosshair">
            <div className="border-b-8 border-black p-6 bg-white">
              <div className="font-black text-4xl uppercase tracking-tighter">H-PRO ТЕСТ</div>
              <div className="font-bold text-xl uppercase mt-2">100% ЧИСТЫЙ</div>
            </div>
            
            <div className="flex-1 p-12 flex flex-col justify-center items-center">
              <div className="w-48 h-64 border-8 border-black bg-white shadow-[12px_12px_0_0_rgba(0,0,0,1)] flex flex-col p-4 transform -rotate-3">
                <div className="border-b-4 border-black pb-2 mb-2 text-center">
                  <div className="font-black text-2xl uppercase tracking-tighter">H-PRO</div>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <div className="font-black text-4xl">500МГ</div>
                  <div className="font-bold uppercase">Трибулус</div>
                </div>
              </div>
            </div>
            
            <div className="bg-black text-white p-6 flex justify-between items-center">
              <span className="font-black text-3xl">$40</span>
              <button className="font-bold text-xl uppercase bg-yellow-400 text-black px-6 py-2 border-4 border-white hover:bg-white transition-colors">
                КУПИТЬ
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
