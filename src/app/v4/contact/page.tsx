import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ContactV4() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#d4af37] selection:text-black">
      <nav className="fixed w-full bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
          <Link href="/v4" className="flex items-center text-zinc-500 hover:text-[#d4af37] transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="text-sm uppercase tracking-[0.2em]">Назад</span>
          </Link>
          <div className="font-serif text-2xl tracking-[0.3em] uppercase">
            Hutchings<span className="text-[#d4af37]">Health</span>
          </div>
          <div className="w-24"></div>
        </div>
      </nav>

      <section className="pt-40 pb-20 px-8 max-w-4xl mx-auto min-h-[75vh]">
        <div className="inline-flex items-center space-x-3 text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-8">
          <span>Контакт</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-serif font-light leading-[1.15] mb-12">
          Свяжитесь <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f9e596] to-[#d4af37]">с нами</span>
        </h1>
        <div className="space-y-6 text-zinc-400 font-light leading-relaxed text-lg">
          <p>
            Свяжитесь с нами для получения дополнительной информации о наших продуктах.
          </p>
          <div className="mt-12 space-y-4 border-t border-white/10 pt-8">
            <div>
              <strong className="text-[#d4af37] uppercase tracking-wider text-xs block mb-1">Email</strong>
              contact@hutchingshealth.com
            </div>
            <div>
              <strong className="text-[#d4af37] uppercase tracking-wider text-xs block mb-1">Телефон</strong>
              +1 (555) 123-4567
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
