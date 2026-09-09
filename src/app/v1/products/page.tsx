import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Beaker } from 'lucide-react';

export default function ProductsV1() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/v1" className="flex items-center text-slate-500 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium">Назад</span>
          </Link>
          <div className="font-bold text-2xl tracking-tight text-blue-900">
            Hutchings<span className="text-blue-600">Health</span>
          </div>
          <div className="w-24"></div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-12 text-center">ПРОДУКТЫ</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl flex flex-col items-center">
            <div className="w-full h-48 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center p-4">
              <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" alt="Hutchings PRO Isolate Vanilla" className="max-h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-center">H-PRO Vanilla</h2>
            <p className="text-slate-500 text-sm text-center mb-6">100% чистый изолят со вкусом ванили.</p>
            <div className="w-full flex justify-between items-center mt-auto">
              <span className="text-xl font-black text-blue-600">$49.99</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-bold transition-colors">
                Купить
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl flex flex-col items-center">
            <div className="w-full h-48 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center p-4">
              <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" alt="Hutchings PRO Isolate Chocolate" className="max-h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-center">H-PRO Chocolate</h2>
            <p className="text-slate-500 text-sm text-center mb-6">100% чистый изолят со вкусом шоколада.</p>
            <div className="w-full flex justify-between items-center mt-auto">
              <span className="text-xl font-black text-blue-600">$49.99</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-bold transition-colors">
                Купить
              </button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl flex flex-col items-center">
            <div className="w-full h-48 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center p-4">
              <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" alt="Hutchings PRO Mass" className="max-h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-center">H-PRO Mass</h2>
            <p className="text-slate-500 text-sm text-center mb-6">Гейнер для набора качественной массы.</p>
            <div className="w-full flex justify-between items-center mt-auto">
              <span className="text-xl font-black text-blue-600">$59.99</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-bold transition-colors">
                Купить
              </button>
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl flex flex-col items-center">
            <div className="w-full h-48 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center p-4">
              <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" alt="Hutchings PRO Energy" className="max-h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-center">H-PRO Energy</h2>
            <p className="text-slate-500 text-sm text-center mb-6">Предтренировочный комплекс.</p>
            <div className="w-full flex justify-between items-center mt-auto">
              <span className="text-xl font-black text-blue-600">$39.99</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-bold transition-colors">
                Купить
              </button>
            </div>
          </div>

          {/* Product 5 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl flex flex-col items-center">
            <div className="w-full h-48 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center p-4">
              <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" alt="Hutchings PRO BCAA" className="max-h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-center">H-PRO BCAA</h2>
            <p className="text-slate-500 text-sm text-center mb-6">Комплекс аминокислот для восстановления.</p>
            <div className="w-full flex justify-between items-center mt-auto">
              <span className="text-xl font-black text-blue-600">$34.99</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-bold transition-colors">
                Купить
              </button>
            </div>
          </div>

          {/* Product 6 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl flex flex-col items-center">
            <div className="w-full h-48 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center p-4">
              <img src="https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg" alt="Hutchings PRO Creatine" className="max-h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-center">H-PRO Creatine</h2>
            <p className="text-slate-500 text-sm text-center mb-6">Чистый креатин моногидрат.</p>
            <div className="w-full flex justify-between items-center mt-auto">
              <span className="text-xl font-black text-blue-600">$29.99</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-bold transition-colors">
                Купить
              </button>
            </div>
          </div>
          
          {/* Product 7 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl flex flex-col items-center">
            <div className="w-full h-48 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center p-4">
              <img src="https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg" alt="Hutchings PRO Vitamins" className="max-h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-center">H-PRO Vitamins</h2>
            <p className="text-slate-500 text-sm text-center mb-6">Мультивитаминный комплекс.</p>
            <div className="w-full flex justify-between items-center mt-auto">
              <span className="text-xl font-black text-blue-600">$24.99</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-bold transition-colors">
                Купить
              </button>
            </div>
          </div>

          {/* Product 8 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl flex flex-col items-center">
            <div className="w-full h-48 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center p-4">
              <img src="https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg" alt="Hutchings PRO Omega" className="max-h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-center">H-PRO Omega</h2>
            <p className="text-slate-500 text-sm text-center mb-6">Омега-3 для поддержания здоровья.</p>
            <div className="w-full flex justify-between items-center mt-auto">
              <span className="text-xl font-black text-blue-600">$27.99</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-bold transition-colors">
                Купить
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
