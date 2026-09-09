'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Shield, Beaker, Pill, User } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export default function Version1() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center text-slate-500 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium">В каталог</span>
          </Link>
          <div className="font-bold text-2xl tracking-tight text-blue-900">
            Hutchings<span className="text-blue-600">Health</span>
          </div>
          <Link href="/v1/products" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm shadow-blue-200">
            Заказать
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-6 border border-blue-100">
              <Shield className="w-4 h-4" />
              <span>Клинически разработано</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Хотите <br/>
              <span className="text-blue-600">ЛУЧШЕГО?</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              Все продукты Хатчингс Здоровье разрабатываются индивидуально врачом, учёным и мастером спорта Эндрю Хатчингсом.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/v1/products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center">
                Купить сейчас
              </Link>
              <button className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg border border-slate-200 transition-all flex items-center justify-center">
                Читать исследования
              </button>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            {/* Medical Cross Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-50 rounded-3xl"></div>
            
            <div className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50 flex flex-col items-center justify-center aspect-square">
              {/* Mock Product Image */}
              <div className="w-48 h-64 bg-transparent flex items-center justify-center relative">
                <img src="https://static.tildacdn.com/tild3730-3339-4535-b561-303735323337/logo_alternate_very_.png" alt="Hutchings PRO Isolate" className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
              </div>
              
              {/* Product Badges */}
              <div className="absolute -right-4 top-1/4 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-xl text-blue-600"><Beaker className="w-5 h-5"/></div>
                <div>
                  <div className="text-sm font-bold">25г</div>
                  <div className="text-xs text-slate-500">Белок</div>
                </div>
              </div>
              
              <div className="absolute -left-4 bottom-1/4 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="bg-emerald-50 p-2 rounded-xl text-emerald-600"><CheckCircle2 className="w-5 h-5"/></div>
                <div>
                  <div className="text-sm font-bold">100%</div>
                  <div className="text-xs text-slate-500">Натуральный</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 100% Natural Section */}
      <section className="py-20 bg-white border-y border-slate-200 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">100% Натуральный</h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Продукты Хатчингс Здоровье содержат всё необходимое и ничего лишнего! Мы добавляем только полезное и исключаем вредное.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Beaker, title: "Без искусственного", desc: "Здесь нет ничего ненатурального и никаких ненужных добавок: никаких искусственных подсластителей, ароматизаторов или красителей — ничего!" },
              { icon: Shield, title: "Идеально на каждый день", desc: "Это особенно важно, когда вы планируете употреблять продукт каждый день для поддержания своего здоровья и образа жизни." },
              { icon: Pill, title: "Забота о микрофлоре", desc: "Многие продукты содержат нежелательные ингредиенты, которые могут нарушать баланс кишечной микрофлоры. Наши продукты разработаны иначе." }
            ].map((feature, i) => (
              <Tilt key={i} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.02} transitionSpeed={2500} className="h-full">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-blue-50/50 hover:border-blue-100 transition-colors group h-full">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="w-48 h-48 bg-slate-200 rounded-full mb-6 border-4 border-white shadow-lg overflow-hidden flex items-center justify-center">
              <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 text-center">Dr. Andrew Hutchings</h3>
            <p className="text-blue-600 font-medium text-center mb-2">Основатель, директор и разработчик продукции.</p>
          </div>
          
          <div className="w-full md:w-2/3 space-y-4 text-slate-600 leading-relaxed">
            <p>
              <strong className="text-slate-900">Познакомьтесь с Хатчингс Эндрю Энтони (Андрей)</strong>
            </p>
            <p>
              Эндрю — основатель и движущая сила ООО Хатчингс Здоровье. Он изучал химию и биологию в Университет Калифорния Ирвайн (UCI) и получил образование в области молекулярной биологии.
            </p>
            <p>
              Он мастер спорта по пауэрлифтингу и участник соревнований по бодибилдингу. Он изучает устройство и функционирование человеческого организма и занимается спортом почти два десятилетия.
            </p>
            <p>
              Травмы и восстановление — его специализация. За годы он сломал почти все кости своего тела и получил множество разрывов и повреждений сухожилий и связок. Несмотря на это, он продолжает активно заниматься спортом, опираясь на правильное питание и грамотные добавки.
            </p>
            <p className="italic bg-blue-50 p-4 rounded-xl text-blue-900 border border-blue-100">
              Эндрю также является автором книги «Систематическое руководство по борьбе с тендинитом» (A Systematic Guide to Defeating Tendonitis), которая в настоящее время доступна только на английском языке.
            </p>
          </div>
        </div>
      </section>
      {/* 1. Benefits Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-16">Ключевые преимущества</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Рост мышц', desc: 'Ускоряет синтез белка и помогает набирать сухую мышечную массу.', icon: '💪' },
              { title: 'Быстрое восстановление', desc: 'Снижает мышечную усталость и боль после интенсивных тренировок.', icon: '⚡' },
              { title: 'Легкое усвоение', desc: 'Не вызывает вздутия живота благодаря специальной формуле ферментов.', icon: '🍃' }
            ].map((b, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-6">{b.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{b.title}</h3>
                <p className="text-slate-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Ingredients Section */}
      <section className="py-24 px-6 bg-blue-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" alt="Ingredients" className="rounded-3xl shadow-xl w-full" />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Идеально чистый состав</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Мы верим, что ваше тело заслуживает только лучшего. Поэтому наш протеин содержит минимум ингредиентов при максимуме пользы.
            </p>
            <ul className="space-y-4 text-slate-700 font-medium">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</div>
                100% Изолят сывороточного белка
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</div>
                Натуральные ароматизаторы
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center">✕</div>
                Без добавленного сахара
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center">✕</div>
                Без искусственных красителей
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Testimonials Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-16">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
              <div className="text-blue-500 text-4xl absolute top-6 right-8 opacity-20">"</div>
              <p className="text-slate-700 mb-6 relative z-10 italic">
                «Лучший протеин, который я когда-либо пробовал. Он не только отлично на вкус, но и не вызывает никаких проблем с желудком, в отличие от многих других брендов».
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-300 rounded-full flex-shrink-0"></div>
                <div>
                  <div className="font-bold text-slate-900">Александр М.</div>
                  <div className="text-sm text-slate-500">Профессиональный атлет</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
              <div className="text-blue-500 text-4xl absolute top-6 right-8 opacity-20">"</div>
              <p className="text-slate-700 mb-6 relative z-10 italic">
                «Как врач, я всегда внимательно изучаю составы. Hutchings Health превзошел все ожидания — чистейший изолят без лишней химии. Рекомендую всем своим пациентам».
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-300 rounded-full flex-shrink-0"></div>
                <div>
                  <div className="font-bold text-slate-900">Елена С.</div>
                  <div className="text-sm text-slate-500">Спортивный врач</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="py-24 px-6 bg-slate-900 text-slate-300">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-16">Частые вопросы</h2>
          <div className="space-y-6">
            <div className="border-b border-slate-700 pb-6">
              <h4 className="text-xl font-bold text-white mb-2">Как принимать этот протеин?</h4>
              <p>Смешайте одну мерную ложку с 250-300 мл воды или молока. Принимайте сразу после тренировки или между приемами пищи.</p>
            </div>
            <div className="border-b border-slate-700 pb-6">
              <h4 className="text-xl font-bold text-white mb-2">Подходит ли он для людей с непереносимостью лактозы?</h4>
              <p>Наш изолят проходит высокую степень очистки, поэтому содержание лактозы в нем минимально. Однако при сильной непереносимости рекомендуем проконсультироваться с врачом.</p>
            </div>
            <div className="border-b border-slate-700 pb-6">
              <h4 className="text-xl font-bold text-white mb-2">Где производится продукт?</h4>
              <p>Вся продукция производится на сертифицированном предприятии с соблюдением строгих стандартов качества.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA Section */}
      <section className="py-24 px-6 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Готовы вывести свои тренировки на новый уровень?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Попробуйте премиальный протеин, разработанный профессионалами для тех, кто не согласен на компромиссы.
          </p>
          <Link href="/v1/products" className="inline-block bg-white text-blue-600 hover:bg-slate-50 font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            Перейти в каталог
          </Link>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-bold text-2xl tracking-tight text-white">
            Hutchings<span className="text-blue-500">Health</span>
          </div>
          
          <div className="flex gap-8 font-semibold tracking-wider uppercase text-sm">
            <Link href="/v1/about" className="hover:text-white transition-colors">О НАС</Link>
            <Link href="/v1/products" className="hover:text-white transition-colors">ПРОДУКТЫ</Link>
            <Link href="/v1/contact" className="hover:text-white transition-colors">КОНТАКТ</Link>
          </div>
          
          <div className="text-sm opacity-50">
            Made on Tilda
          </div>
        </div>
      </footer>
    </div>
  );
}
