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
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Product */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl flex flex-col items-center">
            <div className="w-full h-64 bg-slate-50 rounded-2xl mb-8 flex items-center justify-center p-4">
              <img src="https://static.tildacdn.com/tild3730-3339-4535-b561-303735323337/logo_alternate_very_.png" alt="Hutchings PRO Isolate" className="max-h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Hutchings PRO Isolate</h2>
            <p className="text-slate-500 text-center mb-6">100% чистый изолят сывороточного белка без искусственных добавок.</p>
            <div className="w-full flex justify-between items-center mt-auto">
              <span className="text-2xl font-black text-blue-600">$49.99</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-bold transition-colors">
                В корзину
              </button>
            </div>
          </div>
          
          {/* Info Card */}
          <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100 flex flex-col justify-center items-center text-center">
            <Beaker className="w-16 h-16 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-blue-900 mb-4">Клинически доказано</h3>
            <p className="text-blue-800/80">
              Наши продукты разрабатываются с учетом строгих медицинских стандартов. Мы гарантируем 100% чистоту и эффективность каждой порции.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
