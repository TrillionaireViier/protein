'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Target, Zap, Shield, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export default function Version7() {
  return (
    <div className="min-h-screen bg-yellow-400 text-black font-mono selection:bg-black selection:text-yellow-400 flex flex-col">
      
      {/* Brutalist Top Banner */}
      <div className="w-full bg-black text-white py-2 border-b-4 border-black overflow-hidden flex whitespace-nowrap">
        <div className="font-black uppercase tracking-tighter text-xl flex gap-8 animate-[marquee_5s_linear_infinite]">
          <span>100% ЧИСТЫЙ БЕЛОК</span><span>///</span>
          <span>100% ЧИСТЫЙ БЕЛОК</span><span>///</span>
          <span>100% ЧИСТЫЙ БЕЛОК</span><span>///</span>
          <span>100% ЧИСТЫЙ БЕЛОК</span><span>///</span>
          <span>100% ЧИСТЫЙ БЕЛОК</span><span>///</span>
          <span>100% ЧИСТЫЙ БЕЛОК</span><span>///</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full border-b-8 border-black bg-white">
        <div className="flex items-center justify-between">
          <Link href="/" className="px-8 py-6 font-black text-2xl uppercase border-r-8 border-black hover:bg-black hover:text-white transition-colors">
            ← НАЗАД
          </Link>
          <div className="font-black text-3xl md:text-5xl tracking-tighter uppercase px-8">
            HUTCHINGS_HEALTH
          </div>
          <Link href="http://hutchingshealth.tilda.ws/products111" className="px-8 py-6 font-black text-2xl uppercase border-l-8 border-black hover:bg-black hover:text-white transition-colors block text-center">
            КУПИТЬ
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b-8 border-black flex flex-col md:flex-row">
        
        <div className="flex-1 border-r-8 border-black p-12 bg-yellow-400 flex flex-col justify-center">
          <h1 className="text-7xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-8 break-words mix-blend-multiply">
            ХОТИТЕ<br/>ЛУЧШЕГО?
          </h1>
          <p className="text-2xl md:text-3xl font-bold uppercase max-w-xl border-l-8 border-black pl-6 mb-12">
            Все продукты разрабатываются врачом, учёным и мастером спорта.
          </p>
          <Link href="http://hutchingshealth.tilda.ws/products111" className="w-full bg-black text-white font-black text-4xl uppercase py-8 border-8 border-black hover:bg-white hover:text-black transition-colors shadow-[16px_16px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-4 hover:translate-y-4 block text-center">
            В КОРЗИНУ
          </Link>
        </div>
        
        <div className="flex-1 bg-white p-12 flex items-center justify-center relative overflow-hidden">
          {/* Brutalist Graphics */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-black rounded-full mix-blend-overlay"></div>
          <div className="absolute bottom-10 left-10 text-9xl font-black text-yellow-400 mix-blend-difference">WHEY</div>
          
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2500} className="z-10 relative">
            <div className="w-64 h-96 border-8 border-black bg-yellow-400 shadow-[24px_24px_0_0_rgba(0,0,0,1)] flex flex-col p-6">
              <div className="border-b-8 border-black pb-4 mb-4">
                <div className="font-black text-4xl uppercase tracking-tighter">H-PRO</div>
                <div className="font-bold text-xl uppercase">Изолят</div>
              </div>
              
              <div className="flex-1 border-4 border-black bg-white mb-4 p-4 flex flex-col justify-center items-center text-center">
                <div className="font-black text-6xl">25Г</div>
                <div className="font-bold text-xl uppercase">Белок</div>
              </div>
              
              <div className="mt-auto flex justify-between font-bold uppercase border-t-8 border-black pt-4">
                <span>VOL. 1</span>
                <span>2 LBS</span>
              </div>
            </div>
          </Tilt>
        </div>
        
      </section>

      {/* 100% Natural Section Grid */}
      <section className="grid md:grid-cols-3 border-b-8 border-black bg-white">
        {[
          { title: "БЕЗ ХИМИИ", desc: "ЗДЕСЬ НЕТ НИЧЕГО НЕНАТУРАЛЬНОГО. НИКАКИХ ИСКУССТВЕННЫХ ПОДСЛАСТИТЕЛЕЙ." },
          { title: "НА КАЖДЫЙ ДЕНЬ", desc: "ИДЕАЛЬНО, ЕСЛИ ВЫ ПЛАНИРУЕТЕ УПОТРЕБЛЯТЬ ПРОДУКТ ЕЖЕДНЕВНО ДЛЯ ПОДДЕРЖАНИЯ ЗДОРОВЬЯ." },
          { title: "ЖИВАЯ МИКРОФЛОРА", desc: "МНОГИЕ ДОБАВКИ УБИВАЮТ КИШЕЧНИК. МЫ ДОБАВЛЯЕМ ТОЛЬКО ПОЛЕЗНОЕ И ИСКЛЮЧАЕМ ВРЕДНОЕ." }
        ].map((feature, i) => (
          <Tilt key={i} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2500} className={`p-12 ${i !== 2 ? 'border-r-8 border-black' : ''} hover:bg-black hover:text-white transition-colors group cursor-crosshair`}>
            <div className="text-8xl font-black mb-8 opacity-20 group-hover:opacity-100 group-hover:text-yellow-400 transition-colors">0{i+1}</div>
            <h3 className="text-3xl font-black uppercase mb-4">{feature.title}</h3>
            <p className="text-xl font-bold uppercase">{feature.desc}</p>
          </Tilt>
        ))}
      </section>

      {/* Founder Section */}
      <section className="border-b-8 border-black flex flex-col lg:flex-row bg-yellow-400">
        <div className="w-full lg:w-1/3 border-b-8 lg:border-b-0 lg:border-r-8 border-black p-12 flex flex-col justify-center items-center bg-white">
          <div className="w-full aspect-square border-8 border-black bg-yellow-400 flex items-center justify-center mb-6 shadow-[16px_16px_0_0_rgba(0,0,0,1)]">
            <span className="font-black text-2xl uppercase">ФОТО ЭНДРЮ</span>
          </div>
          <h2 className="text-4xl font-black uppercase text-center">DR. ANDREW HUTCHINGS</h2>
        </div>
        
        <div className="w-full lg:w-2/3 p-12 flex flex-col justify-center">
          <h3 className="text-5xl font-black uppercase mb-8 mix-blend-multiply">ОСНОВАТЕЛЬ И РАЗРАБОТЧИК</h3>
          
          <div className="text-xl font-bold uppercase space-y-6">
            <p className="bg-white p-6 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
              ЭНДРЮ ИЗУЧАЛ ХИМИЮ И БИОЛОГИЮ В УНИВЕРСИТЕТЕ КАЛИФОРНИЯ ИРВАЙН (UCI). ОН МАСТЕР СПОРТА ПО ПАУЭРЛИФТИНГУ И УЧАСТНИК СОРЕВНОВАНИЙ ПО БОДИБИЛДИНГУ.
            </p>
            <p className="bg-white p-6 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
              ТРАВМЫ И ВОССТАНОВЛЕНИЕ — ЕГО СПЕЦИАЛИЗАЦИЯ. ЗА ГОДЫ ОН СЛОМАЛ ПОЧТИ ВСЕ КОСТИ СВОЕГО ТЕЛА. ОН ПРОДОЛЖАЕТ ТРЕНИРОВАТЬСЯ, ОПИРАЯСЬ НА ПРАВИЛЬНОЕ ПИТАНИЕ И ГРАМОТНЫЕ ДОБАВКИ.
            </p>
            <p className="bg-black text-yellow-400 p-6 border-4 border-black">
              АВТОР КНИГИ «СИСТЕМАТИЧЕСКОЕ РУКОВОДСТВО ПО БОРЬБЕ С ТЕНДИНИТОМ» (ДОСТУПНА НА АНГЛИЙСКОМ).
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black text-white p-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-black text-4xl uppercase">
            HUTCHINGS_HEALTH
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 font-black text-2xl uppercase">
            <Link href="/v7/about" className="hover:text-yellow-400 transition-colors">О НАС</Link>
            <Link href="http://hutchingshealth.tilda.ws/products111" className="hover:text-yellow-400 transition-colors">ПРОДУКТЫ</Link>
            <Link href="/v7/contact" className="hover:text-yellow-400 transition-colors">КОНТАКТ</Link>
          </div>
          
          <div className="font-bold text-xl uppercase bg-yellow-400 text-black px-4 py-2 border-4 border-black">
            MADE ON TILDA
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
