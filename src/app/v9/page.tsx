import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Zap, Heart } from 'lucide-react';

export default function Version9() {
  return (
    <div className="min-h-screen bg-[#FFF0F5] text-black font-sans selection:bg-[#FF1493] selection:text-white overflow-hidden relative">
      
      {/* Playful background shapes */}
      <div className="absolute top-20 -left-10 w-64 h-64 bg-[#FF69B4] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-40 -right-10 w-72 h-72 bg-[#FFFF00] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-20 w-80 h-80 bg-[#00FFFF] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      {/* Navigation */}
      <nav className="relative z-50 w-full px-6 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between bg-white border-4 border-black rounded-[2rem] px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <Link href="/" className="flex items-center font-bold hover:text-[#FF1493] transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            НАЗАД
          </Link>
          <div className="font-black text-2xl md:text-3xl tracking-tight uppercase transform -rotate-2">
            Hutchings<span className="text-[#FF1493]">Health</span> 💖
          </div>
          <button className="bg-[#FFFF00] border-4 border-black font-black uppercase px-6 py-2 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all">
            Хочу!
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white border-4 border-black px-6 py-2 rounded-full font-black uppercase text-sm mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-3">
              <Sparkles className="w-5 h-5 text-[#FF1493]" />
              <span>Создано экспертами</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] mb-8 tracking-tight">
              Хотите <br/>
              <span className="text-[#FF1493] inline-block transform rotate-2">ЛУЧШЕГО?</span> <br/>
              Забирайте.
            </h1>
            
            <p className="text-xl font-bold mb-10 max-w-md mx-auto lg:mx-0 border-4 border-black bg-white p-6 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              Все продукты Хатчингс Здоровье разрабатываются индивидуально врачом, учёным и мастером спорта Эндрю Хатчингсом. ✨
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button className="bg-[#FF1493] text-white border-4 border-black font-black uppercase text-xl px-10 py-5 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:translate-y-2 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center">
                Купить сейчас <Zap className="ml-2 w-6 h-6 fill-current" />
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            {/* Playful product container */}
            <div className="relative w-80 h-[450px] mx-auto">
              {/* Background blob */}
              <div className="absolute inset-0 bg-[#00FFFF] border-4 border-black rounded-[3rem] transform rotate-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"></div>
              
              {/* Product */}
              <div className="absolute inset-0 bg-white border-4 border-black rounded-[3rem] transform -rotate-3 p-8 flex flex-col items-center justify-center shadow-[inset_0px_-20px_0px_0px_rgba(0,0,0,0.05)]">
                
                {/* Stickers */}
                <div className="absolute -top-6 -right-6 bg-[#FFFF00] border-4 border-black rounded-full w-20 h-20 flex items-center justify-center font-black text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-12 z-20">
                  ТОП!
                </div>
                <div className="absolute top-1/3 -left-8 bg-[#FF69B4] border-4 border-black rounded-full p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-12 z-20 text-white">
                  <Heart className="w-8 h-8 fill-current" />
                </div>
                
                <div className="font-black text-4xl uppercase mb-2">Hutchings</div>
                <div className="font-black text-6xl text-[#FF1493] uppercase tracking-tighter mb-8 transform -rotate-6">PRO</div>
                
                <div className="w-full bg-gray-100 rounded-xl border-4 border-black p-4 text-center mt-auto">
                  <div className="font-black text-3xl">25Г</div>
                  <div className="font-bold uppercase text-sm">БЕЛКА</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Marquee */}
      <div className="w-full bg-black text-[#00FFFF] py-4 border-y-4 border-black overflow-hidden flex whitespace-nowrap z-10 relative">
        <div className="font-black uppercase text-2xl flex gap-8 animate-[marquee_5s_linear_infinite]">
          <span>ТОЛЬКО ПОЛЕЗНОЕ И ИСКЛЮЧАЕМ ВРЕДНОЕ</span><span>★</span>
          <span>РАЗРАБОТАНО ВРАЧОМ</span><span>★</span>
          <span>100% НАТУРАЛЬНЫЙ</span><span>★</span>
          <span>ТОЛЬКО ПОЛЕЗНОЕ И ИСКЛЮЧАЕМ ВРЕДНОЕ</span><span>★</span>
          <span>РАЗРАБОТАНО ВРАЧОМ</span><span>★</span>
          <span>100% НАТУРАЛЬНЫЙ</span><span>★</span>
        </div>
      </div>

      {/* 100% Natural Section Grid */}
      <section className="py-24 px-6 relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black uppercase tracking-tight mb-4 transform -rotate-1">100% Натуральный 🌿</h2>
          <p className="text-xl font-bold max-w-2xl mx-auto bg-white border-4 border-black p-4 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            Продукты Хатчингс Здоровье содержат всё необходимое и ничего лишнего! Мы добавляем только полезное и исключаем вредное.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "БЕЗ ХИМИИ", desc: "Здесь нет ничего ненатурального и никаких ненужных добавок: никаких искусственных подсластителей, красителей — ничего!" },
            { title: "НА КАЖДЫЙ ДЕНЬ", desc: "Это особенно важно, когда вы планируете употреблять продукт каждый день для поддержания своего здоровья." },
            { title: "ЗАБОТА О ТЕЛЕ", desc: "Многие продукты содержат нежелательные ингредиенты, которые могут нарушать баланс кишечника. У нас такого нет." }
          ].map((feature, i) => (
            <div key={i} className={`bg-white border-4 border-black p-8 rounded-[2rem] shadow-[8px_8px_0_0_rgba(0,0,0,1)] transform hover:-translate-y-2 transition-transform ${i === 1 ? 'rotate-2' : '-rotate-1'}`}>
              <div className="w-16 h-16 bg-[#FFFF00] border-4 border-black rounded-full flex items-center justify-center font-black text-2xl mb-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                {i+1}
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">{feature.title}</h3>
              <p className="font-bold">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 px-6 relative z-10 bg-[#00FFFF] border-y-4 border-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 bg-white border-4 border-black p-8 md:p-16 rounded-[3rem] shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
          
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-56 h-56 bg-[#FF69B4] border-4 border-black rounded-[2rem] transform -rotate-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden">
               <span className="font-black text-white text-xl uppercase transform rotate-6">Фото Эндрю</span>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-2">Хатчингс Эндрю Энтони</h2>
            <p className="font-black text-[#FF1493] uppercase mb-6 inline-block bg-[#FFFF00] border-4 border-black px-4 py-1 rounded-full shadow-[2px_2px_0_0_rgba(0,0,0,1)] transform rotate-2">
              Основатель и директор
            </p>
            
            <div className="font-bold text-lg space-y-4">
              <p>
                Эндрю изучал химию и биологию в Университет Калифорния Ирвайн (UCI) и получил образование в области молекулярной биологии.
              </p>
              <p>
                Он мастер спорта по пауэрлифтингу и участник соревнований по бодибилдингу. Занимается спортом почти два десятилетия. За годы он сломал почти все кости своего тела и получил множество разрывов.
              </p>
              <p className="bg-[#FFF0F5] p-4 border-4 border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                Автор книги «Систематическое руководство по борьбе с тендинитом» (A Systematic Guide to Defeating Tendonitis).
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white px-6 py-12 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 bg-[#FF69B4] border-4 border-black rounded-[2rem] p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] text-white">
          <div className="font-black text-3xl tracking-tight uppercase transform -rotate-2">
            Hutchings<span className="text-[#FFFF00]">Health</span>
          </div>
          
          <div className="flex gap-8 font-black uppercase text-lg">
            <Link href="#" className="hover:text-[#FFFF00] transition-colors">О НАС</Link>
            <Link href="#" className="hover:text-[#FFFF00] transition-colors">ПРОДУКТЫ</Link>
            <Link href="#" className="hover:text-[#FFFF00] transition-colors">КОНТАКТ</Link>
          </div>
          
          <div className="font-bold bg-black text-white px-4 py-2 rounded-xl transform rotate-2">
            Made on Tilda
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
