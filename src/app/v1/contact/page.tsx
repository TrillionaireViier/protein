import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ContactV1() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/v1" className="flex items-center text-slate-500 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium">Назад</span>
          </Link>
          <div className="font-bold text-2xl tracking-tight text-blue-900">
            Hutchings<span className="text-blue-600">Health</span>
          </div>
          <div className="w-24"></div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-8">КОНТАКТ</h1>
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 space-y-6 text-slate-600 leading-relaxed text-lg">
          <p>
            Свяжитесь с нами для получения дополнительной информации о наших продуктах.
          </p>
          <div className="space-y-4">
            <div>
              <strong>Email:</strong> contact@hutchingshealth.com
            </div>
            <div>
              <strong>Телефон:</strong> +1 (555) 123-4567
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
