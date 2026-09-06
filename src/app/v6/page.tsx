import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CircleDashed, ShieldCheck, HeartPulse, User } from 'lucide-react';

export default function Version6() {
  return (
    <div className="min-h-screen bg-[#E0E5EC] text-[#4A5568] font-sans">
      
      {/* Navigation */}
      <nav className="w-full px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="w-12 h-12 rounded-full flex items-center justify-center bg-[#E0E5EC] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.7),inset_-6px_-6px_10px_0_rgba(255,255,255,0.8)] transition-all text-slate-500">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="font-bold text-xl tracking-wide text-slate-600">
            HUTCHINGS<span className="text-blue-500">HEALTH</span>
          </div>
          <button className="px-6 py-3 rounded-full font-bold text-blue-500 bg-[#E0E5EC] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.7),inset_-6px_-6px_10px_0_rgba(255,255,255,0.8)] transition-all active:scale-95">
            Корзина (0)
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 pb-20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-block px-6 py-3 rounded-full bg-[#E0E5EC] shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.7),inset_-6px_-6px_10px_0_rgba(255,255,255,0.8)] mb-10">
              <span className="text-sm font-bold text-blue-500 tracking-wider">ЛУЧШАЯ ФОРМУЛА</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-slate-700 leading-[1.2] mb-8">
              Хотите <br/>
              <span className="text-blue-500">ЛУЧШЕГО?</span>
            </h1>
            
            <p className="text-lg text-slate-500 mb-12 max-w-lg mx-auto lg:mx-0">
              Все продукты Хатчингс Здоровье разрабатываются индивидуально врачом, учёным и мастером спорта Эндрю Хатчингсом.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button className="px-10 py-5 rounded-2xl font-bold text-lg text-white bg-blue-400 shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:bg-blue-500 transition-all active:shadow-[inset_6px_6px_10px_0_rgba(0,0,0,0.1)]">
                Купить Протеин
              </button>
              <button className="px-10 py-5 rounded-2xl font-bold text-lg text-slate-600 bg-[#E0E5EC] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.7),inset_-6px_-6px_10px_0_rgba(255,255,255,0.8)] transition-all">
                Состав
              </button>
            </div>
          </div>
          
          <div className="flex-1 order-1 lg:order-2 flex justify-center items-center w-full">
            {/* Neumorphic Product Container */}
            <div className="relative w-72 h-96 rounded-[3rem] bg-[#E0E5EC] shadow-[18px_18px_30px_rgb(163,177,198,0.6),-18px_-18px_30px_rgba(255,255,255,0.6)] flex flex-col items-center justify-center p-8 border-4 border-white/40">
              
              <div className="absolute top-8 w-40 h-8 rounded-full bg-[#E0E5EC] shadow-[inset_4px_4px_8px_0_rgba(163,177,198,0.7),inset_-4px_-4px_8px_0_rgba(255,255,255,0.8)]"></div>
              
              <div className="w-32 h-32 rounded-full bg-[#E0E5EC] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] flex items-center justify-center mb-8 border border-white/50">
                <span className="text-3xl font-black text-slate-400">PRO</span>
              </div>
              
              <div className="w-full h-2 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_0_rgba(163,177,198,0.7),inset_-2px_-2px_4px_0_rgba(255,255,255,0.8)] mb-6">
                <div className="w-2/3 h-full rounded-full bg-blue-400"></div>
              </div>
              
              <div className="flex justify-between w-full text-slate-500 font-bold px-2">
                <span>25г Б</span>
                <span>0г С</span>
              </div>
              
            </div>
          </div>
          
        </div>
      </section>

      {/* 100% Natural Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-700 mb-6">100% Натуральный</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Продукты Хатчингс Здоровье содержат всё необходимое и ничего лишнего! Мы добавляем только полезное и исключаем вредное.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: CircleDashed, title: "Без Мусора", desc: "Никаких искусственных подсластителей, ароматизаторов или красителей — ничего лишнего." },
              { icon: HeartPulse, title: "На Каждый День", desc: "Это особенно важно, когда вы планируете употреблять продукт ежедневно." },
              { icon: ShieldCheck, title: "Забота о Кишечнике", desc: "Многие продукты нарушают баланс микрофлоры. Наши добавки исключают вредные компоненты." }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-10 rounded-3xl bg-[#E0E5EC] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]">
                <div className="w-20 h-20 rounded-full bg-[#E0E5EC] shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.7),inset_-6px_-6px_10px_0_rgba(255,255,255,0.8)] flex items-center justify-center text-blue-500 mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-700 mb-4">{feature.title}</h3>
                <p className="text-slate-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto p-12 rounded-[3rem] bg-[#E0E5EC] shadow-[18px_18px_30px_rgb(163,177,198,0.6),-18px_-18px_30px_rgba(255,255,255,0.6)] flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-56 h-56 rounded-full bg-[#E0E5EC] shadow-[inset_9px_9px_16px_rgba(163,177,198,0.6),inset_-9px_-9px_16px_rgba(255,255,255,0.6)] flex items-center justify-center border-4 border-[#E0E5EC]">
              <User className="w-20 h-20 text-slate-400" />
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-black text-slate-700 mb-2">Хатчингс Эндрю Энтони</h2>
            <p className="text-blue-500 font-bold mb-8">Основатель, директор и разработчик продукции.</p>
            
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Эндрю — основатель и движущая сила ООО Хатчингс Здоровье. Он изучал химию и биологию в Университет Калифорния Ирвайн (UCI) и получил образование в области молекулярной биологии.
              </p>
              <p>
                Он мастер спорта по пауэрлифтингу и участник соревнований по бодибилдингу. Он изучает устройство и функционирование человеческого организма и занимается спортом почти два десятилетия.
              </p>
              <p>
                Травмы и восстановление — его специализация. За годы он сломал почти все кости своего тела и получил множество разрывов и повреждений сухожилий и связок. Несмотря на это, он продолжает активно заниматься спортом.
              </p>
              
              <div className="mt-6 p-6 rounded-2xl bg-[#E0E5EC] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.7)]">
                <p className="italic text-slate-500 text-sm">
                  Эндрю также является автором книги «Систематическое руководство по борьбе с тендинитом» (A Systematic Guide to Defeating Tendonitis), которая в настоящее время доступна только на английском языке.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-bold text-xl tracking-wide text-slate-600">
            HUTCHINGS<span className="text-blue-500">HEALTH</span>
          </div>
          
          <div className="flex gap-8 font-bold tracking-wider uppercase text-sm text-slate-500">
            <Link href="#" className="hover:text-blue-500 transition-colors">О НАС</Link>
            <Link href="#" className="hover:text-blue-500 transition-colors">ПРОДУКТЫ</Link>
            <Link href="#" className="hover:text-blue-500 transition-colors">КОНТАКТ</Link>
          </div>
          
          <div className="text-sm text-slate-400 font-bold">
            Made on Tilda
          </div>
        </div>
      </footer>
    </div>
  );
}
