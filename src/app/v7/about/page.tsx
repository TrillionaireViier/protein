import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AboutV7() {
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
          <div className="w-48"></div>
        </div>
      </nav>

      <section className="flex-1 p-12 bg-white flex flex-col">
        <h1 className="text-7xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-12 border-b-8 border-black pb-8">
          О НАС
        </h1>
        <div className="max-w-4xl space-y-8 text-2xl md:text-3xl font-bold uppercase">
          <p className="bg-yellow-400 p-8 border-8 border-black shadow-[16px_16px_0_0_rgba(0,0,0,1)]">
            ДОБРО ПОЖАЛОВАТЬ В ХАТЧИНГС ЗДОРОВЬЕ. МЫ СТРЕМИМСЯ К СОЗДАНИЮ ПРОДУКТОВ ВЫСОЧАЙШЕГО КАЧЕСТВА, ИСПОЛЬЗУЯ ТОЛЬКО КЛИНИЧЕСКИ ДОКАЗАННЫЕ И НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ.
          </p>
          <p className="p-8 border-l-8 border-black">
            НАША МИССИЯ — ПОМОЧЬ ВАМ ДОСТИЧЬ ЛУЧШИХ РЕЗУЛЬТАТОВ В СПОРТЕ И ЗАБОТЕ О СВОЕМ ТЕЛЕ, БЕЗ ВРЕДА ДЛЯ МИКРОФЛОРЫ И ОБЩЕГО ЗДОРОВЬЯ.
          </p>
        </div>
      </section>
    </div>
  );
}
