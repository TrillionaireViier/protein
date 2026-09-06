import React from 'react';
import Link from 'next/link';

export default function Version8() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased selection:bg-blue-200">
      
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-xl border-b border-zinc-100 z-50">
        <div className="max-w-[980px] mx-auto px-4 h-12 flex items-center justify-between text-[13px] font-medium text-zinc-500">
          <Link href="/" className="hover:text-black transition-colors">
            Каталог
          </Link>
          <div className="text-black font-semibold tracking-tight">
            HutchingsHealth
          </div>
          <button className="text-blue-600 hover:text-blue-700 transition-colors">
            Купить
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-[980px] mx-auto">
          <h1 className="text-[56px] md:text-[80px] font-semibold tracking-[-0.03em] leading-[1.05] text-black mb-6">
            Хотите лучшего?
          </h1>
          <h2 className="text-[28px] md:text-[40px] font-medium tracking-tight text-zinc-500 leading-tight mb-10 max-w-2xl mx-auto">
            Чистый белок.<br/>
            Бескомпромиссное качество.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium text-[17px] transition-all">
              Купить сейчас
            </button>
            <button className="text-blue-600 hover:underline px-8 py-3 rounded-full font-medium text-[17px] transition-all flex items-center">
              Подробнее &gt;
            </button>
          </div>
          
          {/* Extremely minimalist product shot */}
          <div className="relative w-full max-w-3xl mx-auto h-[500px] flex justify-center">
            {/* The "Product" */}
            <div className="w-[340px] h-[480px] bg-[#fbfbfd] rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-zinc-100 flex flex-col items-center justify-center relative overflow-hidden transition-transform duration-700 hover:scale-[1.02]">
              {/* Subtle lighting gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-100/50 to-transparent"></div>
              
              <div className="z-10 text-center">
                <div className="text-[10px] font-semibold tracking-widest text-zinc-400 mb-8">HUTCHINGS HEALTH</div>
                <div className="text-4xl font-semibold tracking-tight mb-2">PRO Изолят</div>
                <div className="text-lg text-zinc-500">25г Белка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 100% Natural Section */}
      <section className="py-24 bg-[#fbfbfd] border-t border-zinc-100">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[40px] md:text-[56px] font-semibold tracking-tight text-black mb-4">
              100% Натуральный.
            </h2>
            <p className="text-[21px] text-zinc-500 max-w-2xl mx-auto">
              Продукты Хатчингс Здоровье содержат всё необходимое и ничего лишнего! Мы добавляем только полезное и исключаем вредное.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="bg-white rounded-[32px] p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-zinc-100">
              <h3 className="text-2xl font-semibold mb-4 text-black">Без химии.</h3>
              <p className="text-[17px] text-zinc-500 leading-relaxed">
                Здесь нет ничего ненатурального и никаких ненужных добавок: никаких искусственных подсластителей, ароматизаторов или красителей.
              </p>
            </div>
            
            <div className="bg-white rounded-[32px] p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-zinc-100">
              <h3 className="text-2xl font-semibold mb-4 text-black">На каждый день.</h3>
              <p className="text-[17px] text-zinc-500 leading-relaxed">
                Идеально подходит для людей, ведущих здоровый образ жизни и употребляющих продукт ежедневно для поддержания формы.
              </p>
            </div>

            <div className="bg-white rounded-[32px] p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-zinc-100 md:col-span-2 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
              <div className="flex-1">
                <h3 className="text-3xl font-semibold mb-4 text-black">Забота о микрофлоре.</h3>
                <p className="text-[17px] text-zinc-500 leading-relaxed max-w-lg">
                  Многие продукты содержат потенциально нежелательные ингредиенты, которые могут нарушать баланс кишечника. Наши продукты разработаны так, чтобы исключать этот вред.
                </p>
              </div>
              <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-blue-100 to-blue-50 flex flex-col items-center justify-center shrink-0">
                <div className="text-4xl font-semibold text-blue-600">100%</div>
                <div className="text-[13px] font-medium text-blue-400 uppercase tracking-widest mt-1">Органик</div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-[280px] h-[340px] bg-[#fbfbfd] rounded-[32px] border border-zinc-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex items-center justify-center text-zinc-400 font-medium">
                Фото Эндрю
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-[40px] font-semibold tracking-tight text-black mb-2">Хатчингс Эндрю Энтони</h2>
              <p className="text-[17px] text-blue-600 font-medium mb-8">Основатель, директор и разработчик продукции</p>
              
              <div className="space-y-6 text-[17px] text-zinc-500 leading-relaxed">
                <p>
                  Эндрю — основатель и движущая сила ООО Хатчингс Здоровье. Он изучал химию и биологию в Университет Калифорния Ирвайн (UCI) и получил образование в области молекулярной биологии.
                </p>
                <p>
                  Он мастер спорта по пауэрлифтингу и участник соревнований по бодибилдингу. Занимается спортом почти два десятилетия. Травмы и восстановление — его специализация.
                </p>
                <p>
                  За годы он сломал почти все кости своего тела и получил множество разрывов сухожилий. Несмотря на это, он продолжает активно заниматься спортом, опираясь на правильное питание.
                </p>
                <p className="pt-6 border-t border-zinc-100 text-[15px] text-zinc-400">
                  Эндрю также является автором книги «Систематическое руководство по борьбе с тендинитом», которая в настоящее время доступна только на английском языке.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#fbfbfd] border-t border-zinc-100 py-12">
        <div className="max-w-[980px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[17px] font-semibold text-black tracking-tight">
            HutchingsHealth
          </div>
          
          <div className="flex gap-8 text-[13px] text-zinc-500">
            <Link href="#" className="hover:text-black transition-colors">О НАС</Link>
            <Link href="#" className="hover:text-black transition-colors">ПРОДУКТЫ</Link>
            <Link href="#" className="hover:text-black transition-colors">КОНТАКТ</Link>
          </div>
          
          <div className="text-[11px] text-zinc-400">
            Made on Tilda
          </div>
        </div>
      </footer>
      
    </div>
  );
}
