'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Crown, Star, Sparkles, Shield, User } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export default function Version4() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#d4af37] selection:text-black">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center text-zinc-500 hover:text-[#d4af37] transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="text-sm uppercase tracking-[0.2em]">В каталог</span>
          </Link>
          <div className="font-serif text-2xl tracking-[0.3em] uppercase">
            Hutchings<span className="text-[#d4af37]">Health</span>
          </div>
          <Link href="http://hutchingshealth.tilda.ws/products111" className="text-[#d4af37] hover:text-white border border-[#d4af37] hover:border-white px-8 py-3 text-sm uppercase tracking-[0.2em] transition-all">
            Купить
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center min-h-[75vh]">
          
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center space-x-3 text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-8">
              <Crown className="w-4 h-4" />
              <span>Премиальная коллекция</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.15] mb-8">
              Хотите <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f9e596] to-[#d4af37]">ЛУЧШЕГО?</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-12">
              Все продукты Хатчингс Здоровье разрабатываются индивидуально врачом, учёным и мастером спорта Эндрю Хатчингсом.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="http://hutchingshealth.tilda.ws/products111" className="bg-gradient-to-r from-[#b38f22] to-[#d4af37] hover:from-[#d4af37] hover:to-[#f9e596] text-black px-10 py-4 text-sm uppercase tracking-[0.2em] font-medium transition-all shadow-[0_0_40px_rgba(212,175,55,0.2)] inline-block">
                Приобрести
              </Link>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative flex justify-center items-center h-full">
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 blur-[120px] rounded-full"></div>
            
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2500} glareEnable={true} glareMaxOpacity={0.45} glareColor="#d4af37" glarePosition="all" className="relative w-64 h-[400px]">
              <div className="w-full h-full bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-xl border border-white/10 shadow-2xl flex flex-col items-center p-8">
                <div className="w-full h-8 bg-gradient-to-r from-[#111] via-[#333] to-[#111] rounded-t-lg -mt-10 mb-8 border-b border-white/5"></div>
                <Crown className="w-8 h-8 text-[#d4af37] mb-6" />
                <div className="text-center w-full border-y border-white/10 py-6 mb-6">
                  <div className="font-serif text-3xl font-light text-white tracking-[0.2em] uppercase mb-2">Hutchings</div>
                  <div className="text-[#d4af37] text-xs tracking-[0.4em] uppercase">Signature</div>
                </div>
                <div className="mt-auto w-full flex justify-between text-[10px] text-zinc-500 tracking-[0.2em] uppercase">
                  <span>Масса 2lbs</span>
                  <span>Изолят</span>
                </div>
              </div>
            </Tilt>
          </div>
          
        </div>
      </section>

      {/* 100% Natural Section */}
      <section className="py-24 bg-[#111] px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif text-white tracking-widest uppercase font-light mb-6">
              100% <span className="text-[#d4af37]">Натуральный</span>
            </h2>
            <p className="text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
              Продукты Хатчингс Здоровье содержат всё необходимое и ничего лишнего! Мы добавляем только полезное и исключаем вредное.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              { icon: Star, title: "Идеальная Чистота", desc: "Здесь нет ничего ненатурального: никаких искусственных подсластителей, ароматизаторов или красителей." },
              { icon: Sparkles, title: "На Каждый День", desc: "Это особенно важно, когда вы планируете употреблять продукт каждый день для поддержания здоровья." },
              { icon: Shield, title: "Забота о Теле", desc: "Многие продукты содержат нежелательные ингредиенты, нарушающие баланс кишечника. Мы это исключили." }
            ].map((feature, i) => (
              <Tilt key={i} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2500} className="group text-center">
                <feature.icon className="w-8 h-8 text-[#d4af37] mb-6 mx-auto transition-transform group-hover:scale-110" />
                <h3 className="text-xl font-serif text-white tracking-wider mb-4">{feature.title}</h3>
                <p className="text-zinc-500 font-light leading-relaxed">{feature.desc}</p>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 px-8 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-64 h-80 border border-[#d4af37]/30 flex flex-col items-center justify-center p-4 relative group hover:border-[#d4af37] transition-colors">
              <div className="absolute inset-2 border border-white/5"></div>
              <User className="w-16 h-16 text-zinc-700 group-hover:text-[#d4af37] transition-colors" />
              <div className="mt-4 text-[#d4af37] text-[10px] tracking-[0.3em] uppercase">Фото</div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="mb-10">
              <h2 className="text-4xl font-serif text-white tracking-wider font-light mb-2">Dr. Andrew Hutchings</h2>
              <p className="text-[#d4af37] text-xs tracking-[0.3em] uppercase">
                Основатель, директор и разработчик продукции
              </p>
            </div>
            
            <div className="space-y-6 text-zinc-400 font-light leading-relaxed text-lg">
              <p>
                Эндрю — основатель и движущая сила ООО Хатчингс Здоровье. Он изучал химию и биологию в Университет Калифорния Ирвайн (UCI) и получил образование в области молекулярной биологии.
              </p>
              <p>
                Он мастер спорта по пауэрлифтингу и участник соревнований по бодибилдингу. Он изучает устройство и функционирование человеческого организма и занимается спортом почти два десятилетия.
              </p>
              <p>
                Травмы и восстановление — его специализация. За годы он сломал почти все кости своего тела и получил множество разрывов и повреждений сухожилий и связок. Несмотря на это, он продолжает активно заниматься спортом.
              </p>
              <div className="pt-6 border-t border-white/10 mt-8">
                <p className="italic text-zinc-500 text-base">
                  Эндрю также является автором книги «Систематическое руководство по борьбе с тендинитом» (A Systematic Guide to Defeating Tendonitis), которая в настоящее время доступна только на английском языке.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#d4af37]/20 bg-[#050505] py-16 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="font-serif text-2xl tracking-[0.3em] uppercase">
            Hutchings<span className="text-[#d4af37]">Health</span>
          </div>
          
          <div className="flex gap-10 text-xs tracking-[0.2em] uppercase">
            <Link href="http://hutchingshealth.tilda.ws/products111" className="text-zinc-500 hover:text-[#d4af37] transition-colors">О НАС</Link>
            <Link href="http://hutchingshealth.tilda.ws/products111" className="text-zinc-500 hover:text-[#d4af37] transition-colors">ПРОДУКТЫ</Link>
            <Link href="http://hutchingshealth.tilda.ws/products111" className="text-zinc-500 hover:text-[#d4af37] transition-colors">КОНТАКТ</Link>
          </div>
          
          <div className="text-zinc-700 text-[10px] tracking-[0.3em] uppercase">
            Made on Tilda
          </div>
        </div>
      </footer>
    </div>
  );
}
