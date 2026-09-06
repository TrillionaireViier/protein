import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Leaf, Droplets, Sun, Sprout, User } from 'lucide-react';

export default function Version3() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A5D23] font-serif selection:bg-[#E8F0D6]">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#FDFBF7]/80 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between border-b border-[#E8F0D6]">
          <Link href="/" className="flex items-center text-[#8C9870] hover:text-[#4A5D23] transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-sans text-sm tracking-widest uppercase">В каталог</span>
          </Link>
          <div className="font-bold text-2xl tracking-wide">
            Hutchings<span className="text-[#8C9870] font-light">Health</span>
          </div>
          <button className="font-sans bg-[#4A5D23] hover:bg-[#3A491C] text-[#FDFBF7] px-6 py-2 rounded-sm tracking-widest uppercase text-sm transition-colors">
            Магазин
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 min-h-[70vh]">
          
          <div className="flex-1 order-2 md:order-1 relative">
            <div className="absolute -inset-4 bg-[#E8F0D6] rounded-full blur-3xl opacity-50"></div>
            <div className="relative w-64 h-80 mx-auto bg-[#F5F2E9] rounded-t-full shadow-md flex flex-col items-center justify-end pb-8 border border-[#E8F0D6]">
              {/* Product Mockup */}
              <div className="absolute top-8 text-center w-full">
                <Leaf className="w-8 h-8 mx-auto text-[#8C9870] mb-2" />
                <div className="text-xs font-sans tracking-[0.2em] uppercase text-[#8C9870]">Organic</div>
              </div>
              <div className="text-3xl mb-1 text-[#4A5D23]">PRO Blend</div>
              <div className="text-sm font-sans tracking-widest uppercase text-[#8C9870]">Чистый Белок</div>
            </div>
          </div>

          <div className="flex-1 order-1 md:order-2 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-[#8C9870] font-sans text-sm tracking-widest uppercase mb-6">
              <Sprout className="w-4 h-4" />
              <span>Создано природой и наукой</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              Хотите<br/>
              <span className="italic text-[#8C9870]">ЛУЧШЕГО?</span>
            </h1>
            <p className="font-sans text-lg text-[#6B7552] mb-10 leading-relaxed max-w-md mx-auto md:mx-0">
              Все продукты Хатчингс Здоровье разрабатываются индивидуально врачом, учёным и мастером спорта Эндрю Хатчингсом.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start font-sans">
              <button className="bg-[#4A5D23] hover:bg-[#3A491C] text-[#FDFBF7] px-8 py-4 rounded-sm tracking-widest uppercase text-sm transition-colors">
                Выбрать продукт
              </button>
            </div>
          </div>
          
        </div>
      </section>

      {/* 100% Natural Section */}
      <section className="py-24 bg-[#F5F2E9] px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">100% Натуральный</h2>
            <p className="font-sans text-[#6B7552] max-w-2xl mx-auto leading-relaxed">
              Продукты Хатчингс Здоровье содержат всё необходимое и ничего лишнего! Мы добавляем только полезное и исключаем вредное.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 font-sans">
            {[
              { icon: Leaf, title: "Без Химии", desc: "Здесь нет ничего ненатурального: никаких искусственных подсластителей, ароматизаторов или красителей — ничего!" },
              { icon: Droplets, title: "На Каждый День", desc: "Идеально подходит для людей, ведущих здоровый образ жизни и употребляющих продукт ежедневно." },
              { icon: Sun, title: "Защита Микрофлоры", desc: "Многие продукты содержат искусственные добавки, нарушающие баланс кишечника. Мы это исключили." }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#E8F0D6] flex items-center justify-center text-[#4A5D23] mb-6">
                  <feature.icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-serif text-[#4A5D23] mb-3">{feature.title}</h3>
                <p className="text-[#6B7552] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 px-6 border-t border-[#E8F0D6]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-64 h-80 bg-[#F5F2E9] rounded-t-full border border-[#E8F0D6] flex items-center justify-center shadow-sm relative overflow-hidden">
              <User className="w-20 h-20 text-[#8C9870] opacity-50" />
              <div className="absolute bottom-4 text-xs font-sans tracking-widest uppercase text-[#8C9870]">Фото Андрея</div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl mb-2">Хатчингс Эндрю Энтони</h2>
            <p className="font-sans text-[#8C9870] tracking-widest uppercase text-sm mb-8">
              Основатель, директор и разработчик продукции.
            </p>
            
            <div className="space-y-6 font-sans text-[#6B7552] leading-relaxed">
              <p>
                Эндрю — основатель и движущая сила ООО Хатчингс Здоровье. Он изучал химию и биологию в Университет Калифорния Ирвайн (UCI) и получил образование в области молекулярной биологии.
              </p>
              <p>
                Он мастер спорта по пауэрлифтингу и участник соревнований по бодибилдингу. Он изучает устройство и функционирование человеческого организма и занимается спортом почти два десятилетия.
              </p>
              <p>
                Травмы и восстановление — его специализация. За годы он сломал почти все кости своего тела и получил множество разрывов и повреждений сухожилий и связок. Несмотря на это, он продолжает активно заниматься спортом, опираясь на правильное питание и грамотные добавки.
              </p>
              <div className="p-6 bg-[#F5F2E9] border-l-2 border-[#8C9870]">
                <p className="italic">
                  Эндрю также является автором книги «Систематическое руководство по борьбе с тендинитом» (A Systematic Guide to Defeating Tendonitis), которая в настоящее время доступна только на английском языке.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A5D23] text-[#FDFBF7] py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-bold text-2xl tracking-wide">
            Hutchings<span className="text-[#A5B384] font-light">Health</span>
          </div>
          
          <div className="flex gap-8 font-sans tracking-widest uppercase text-sm">
            <Link href="#" className="hover:text-[#A5B384] transition-colors">О НАС</Link>
            <Link href="#" className="hover:text-[#A5B384] transition-colors">ПРОДУКТЫ</Link>
            <Link href="#" className="hover:text-[#A5B384] transition-colors">КОНТАКТ</Link>
          </div>
          
          <div className="font-sans text-sm text-[#A5B384]">
            Made on Tilda
          </div>
        </div>
      </footer>
    </div>
  );
}
