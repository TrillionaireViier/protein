import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Zap, Dumbbell, Flame, User } from 'lucide-react';

export default function Version2() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-red-600 selection:text-white">
      {/* Background Texture (subtle noise + gradient) */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/40 via-[#0a0a0a] to-[#0a0a0a]"></div>

      {/* Navigation */}
      <nav className="relative z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center text-zinc-500 hover:text-red-500 transition-colors uppercase tracking-[0.2em] text-xs font-bold">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Назад</span>
          </Link>
          <div className="font-black text-2xl tracking-tighter uppercase italic text-white">
            HUTCHINGS<span className="text-red-600">HEALTH</span>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-2 uppercase tracking-widest text-sm font-black transform skew-x-[-15deg] transition-all hover:scale-105 shadow-[0_0_15px_rgba(220,38,38,0.5)]">
            <span className="inline-block transform skew-x-[15deg]">Купить</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 md:order-1 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-red-600/10 text-red-500 border border-red-500/20 px-4 py-1.5 uppercase tracking-widest text-xs font-black mb-8">
              <Flame className="w-4 h-4" />
              <span>Максимальная отдача</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter text-white leading-[0.9] mb-8">
              Хотите <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">ЛУЧШЕГО?</span>
            </h1>
            
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-lg font-medium">
              Все продукты Хатчингс Здоровье разрабатываются индивидуально врачом, учёным и мастером спорта Эндрю Хатчингсом.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 uppercase tracking-widest text-lg font-black transform skew-x-[-15deg] transition-all hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.4)] group">
                <span className="inline-flex items-center transform skew-x-[15deg]">
                  Забрать банку <Zap className="ml-2 w-5 h-5 group-hover:animate-pulse" />
                </span>
              </button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative h-[500px] flex justify-center items-center">
            {/* Red glow behind product */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-600/30 blur-[100px] rounded-full"></div>
            
            {/* Aggressive Product Mockup */}
            <div className="relative w-72 h-[400px] bg-zinc-900 border-2 border-zinc-800 transform rotate-3 shadow-2xl p-6 flex flex-col clip-path-slant">
              <div className="font-black text-6xl text-zinc-800 uppercase italic tracking-tighter absolute -right-4 top-10 transform rotate-90 origin-bottom-right">
                ISOLATE
              </div>
              
              <div className="mt-8">
                <div className="text-red-600 font-black tracking-widest text-sm uppercase mb-1">HutchingsHealth</div>
                <div className="text-white font-black text-5xl italic tracking-tighter uppercase mb-4">H-PRO</div>
              </div>
              
              <div className="mt-auto border-t-4 border-red-600 pt-4 flex justify-between items-end">
                <div>
                  <div className="text-white font-black text-4xl">25<span className="text-xl text-red-600">Г</span></div>
                  <div className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Чистого белка</div>
                </div>
                <div className="text-right">
                  <div className="text-white font-black text-2xl">0<span className="text-sm text-red-600">Г</span></div>
                  <div className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Сахара</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 100% Natural Section */}
      <section className="relative z-10 py-24 bg-zinc-950 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter text-white mb-6">
              100% <span className="text-red-600">Натуральный</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Продукты Хатчингс Здоровье содержат всё необходимое и ничего лишнего! Мы добавляем только полезное и исключаем вредное.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "БЕЗ ЛИШНЕГО МУСОРА", desc: "Никаких искусственных подсластителей, ароматизаторов или красителей. Только то, что работает." },
              { icon: Dumbbell, title: "ИДЕАЛЬНО НА КАЖДЫЙ ДЕНЬ", desc: "Это особенно важно, когда вы планируете употреблять продукт каждый день для поддержания своего режима." },
              { icon: Flame, title: "ЗАЩИТА МИКРОФЛОРЫ", desc: "Многие продукты содержат ингредиенты, нарушающие баланс кишечника. Наши формулы созданы иначе." }
            ].map((feature, i) => (
              <div key={i} className="bg-black border border-white/10 p-8 transform hover:-translate-y-2 transition-all hover:border-red-600/50 group">
                <feature.icon className="w-12 h-12 text-red-600 mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                <h3 className="text-2xl font-black uppercase italic text-white mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-zinc-500 font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="relative z-10 py-24 px-6 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/3 relative">
            <div className="absolute inset-0 bg-red-600 transform skew-x-[-10deg] translate-x-4 translate-y-4"></div>
            <div className="w-full aspect-square bg-zinc-900 border-4 border-zinc-800 flex items-center justify-center relative z-10 overflow-hidden transform skew-x-[-10deg]">
              <div className="transform skew-x-[10deg] flex flex-col items-center">
                <User className="w-24 h-24 text-zinc-700 mb-4" />
                <span className="text-zinc-600 font-black uppercase tracking-widest text-sm">Фото основателя</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 space-y-6 text-zinc-400 text-lg">
            <h3 className="text-4xl font-black uppercase italic text-white mb-8">
              Доктор <span className="text-red-600">Эндрю Хатчингс</span>
            </h3>
            
            <p className="font-bold text-white border-l-4 border-red-600 pl-4">
              Основатель, директор и разработчик продукции. Эндрю — движущая сила ООО Хатчингс Здоровье.
            </p>
            <p>
              Он изучал химию и биологию в Университет Калифорния Ирвайн (UCI) и получил образование в области молекулярной биологии.
            </p>
            <p>
              Он мастер спорта по пауэрлифтингу и участник соревнований по бодибилдингу. Он изучает устройство и функционирование человеческого организма и занимается спортом почти два десятилетия.
            </p>
            <p>
              Травмы и восстановление — его специализация. За годы он сломал почти все кости своего тела и получил множество разрывов и повреждений сухожилий и связок. Несмотря на это, он продолжает активно заниматься спортом, опираясь на правильное питание и грамотные добавки.
            </p>
            <div className="bg-black border border-white/10 p-6 mt-8">
              <p className="italic text-zinc-500 text-sm">
                Эндрю также является автором книги «Систематическое руководство по борьбе с тендинитом» (A Systematic Guide to Defeating Tendonitis), которая в настоящее время доступна только на английском языке.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black border-t-4 border-red-600 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-black text-3xl tracking-tighter uppercase italic text-white">
            HUTCHINGS<span className="text-red-600">HEALTH</span>
          </div>
          
          <div className="flex gap-8 font-black tracking-widest uppercase text-sm">
            <Link href="#" className="text-zinc-500 hover:text-white transition-colors">О НАС</Link>
            <Link href="#" className="text-zinc-500 hover:text-white transition-colors">ПРОДУКТЫ</Link>
            <Link href="#" className="text-zinc-500 hover:text-white transition-colors">КОНТАКТ</Link>
          </div>
          
          <div className="text-zinc-600 font-bold uppercase tracking-widest text-xs">
            Made on <span className="text-white">Tilda</span>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        .clip-path-slant {
          clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%);
        }
      `}} />
    </div>
  );
}
