import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Activity, Fingerprint, Hexagon, Shield, User } from 'lucide-react';

export default function Version5() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans overflow-hidden relative selection:bg-fuchsia-500/30">
      
      {/* Abstract Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-fuchsia-600/30 mix-blend-screen blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyan-600/30 mix-blend-screen blur-[120px] animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-violet-600/30 mix-blend-screen blur-[80px] animate-pulse" style={{animationDelay: '4s'}}></div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 pt-6 px-6">
        <div className="max-w-7xl mx-auto h-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl flex items-center justify-between px-8 shadow-2xl">
          <Link href="/" className="flex items-center text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium">Каталог</span>
          </Link>
          <div className="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400">
            HutchingsHealth
          </div>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full font-medium transition-all shadow-lg">
            В магазин
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 min-h-[70vh]">
          
          <div className="flex-1">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-sm font-medium mb-8 text-fuchsia-300">
              <Activity className="w-4 h-4" />
              <span>Формула Нового Поколения</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Хотите <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400">
                ЛУЧШЕГО?
              </span>
            </h1>
            <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-lg">
              Все продукты Хатчингс Здоровье разрабатываются индивидуально врачом, учёным и мастером спорта Эндрю Хатчингсом.
            </p>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-fuchsia-600 to-cyan-600 hover:from-fuchsia-500 hover:to-cyan-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(192,38,211,0.3)]">
                Купить
              </button>
              <button className="bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all">
                Узнать больше
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative flex justify-center">
            {/* Glass Product Card */}
            <div className="w-[300px] h-[400px] bg-white/5 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] shadow-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <Hexagon className="w-16 h-16 text-cyan-400 mb-6 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
              <div className="text-center z-10">
                <div className="text-3xl font-bold text-white mb-2">PRO-ISOLATE</div>
                <div className="text-fuchsia-300 font-medium tracking-widest uppercase text-sm mb-8">Ультрачистый</div>
                
                <div className="flex justify-center gap-4 text-center">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                    <div className="font-bold text-xl text-cyan-300">25г</div>
                    <div className="text-xs text-white/50">Белок</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                    <div className="font-bold text-xl text-fuchsia-300">0г</div>
                    <div className="text-xs text-white/50">Сахар</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 100% Natural Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">100% Натуральный</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
              Продукты Хатчингс Здоровье содержат всё необходимое и ничего лишнего! Мы добавляем только полезное и исключаем вредное.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Fingerprint, title: "Без Искусственного", desc: "Здесь нет ничего ненатурального и никаких ненужных добавок: ни подсластителей, ни красителей." },
              { icon: Shield, title: "На Каждый День", desc: "Это особенно важно, когда вы планируете употреблять продукт каждый день для поддержания своего здоровья." },
              { icon: Hexagon, title: "Чистая Матрица", desc: "Многие продукты содержат нежелательные ингредиенты, нарушающие микрофлору. Наши формулы созданы иначе." }
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row gap-16 items-center shadow-2xl">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="w-48 h-48 bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 rounded-full border-4 border-white/10 flex items-center justify-center overflow-hidden mb-6 relative">
              <div className="absolute inset-0 backdrop-blur-md"></div>
              <User className="w-16 h-16 text-white/50 z-10" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center">Dr. Andrew Hutchings</h3>
            <p className="text-cyan-400 font-medium text-center">Основатель и директор</p>
          </div>
          
          <div className="w-full md:w-2/3 space-y-6 text-white/70 text-lg leading-relaxed">
            <p className="text-white font-medium text-xl">
              Познакомьтесь с Хатчингс Эндрю Энтони
            </p>
            <p>
              Эндрю — основатель и движущая сила ООО Хатчингс Здоровье. Он изучал химию и биологию в Университет Калифорния Ирвайн (UCI) и получил образование в области молекулярной биологии.
            </p>
            <p>
              Он мастер спорта по пауэрлифтингу и участник соревнований по бодибилдингу. Он изучает устройство и функционирование человеческого организма и занимается спортом почти два десятилетия.
            </p>
            <p>
              Травмы и восстановление — его специализация. За годы он сломал почти все кости своего тела и получил множество разрывов и повреждений сухожилий и связок. Несмотря на это, он продолжает активно заниматься спортом.
            </p>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
              <p className="italic text-cyan-200">
                Эндрю также является автором книги «Систематическое руководство по борьбе с тендинитом» (A Systematic Guide to Defeating Tendonitis), которая в настоящее время доступна только на английском языке.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 mt-12 py-12 px-6 backdrop-blur-md bg-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400">
            HutchingsHealth
          </div>
          
          <div className="flex gap-8 font-medium tracking-widest uppercase text-sm">
            <Link href="#" className="text-white/60 hover:text-white transition-colors">О НАС</Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors">ПРОДУКТЫ</Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors">КОНТАКТ</Link>
          </div>
          
          <div className="text-white/30 text-sm">
            Made on Tilda
          </div>
        </div>
      </footer>
    </div>
  );
}
