import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const versions = [
    { id: 1, name: "Clean & Medical", path: "/v1", desc: "White, trustworthy, medical-grade aesthetic." },
    { id: 2, name: "Aggressive Gym", path: "/v2", desc: "Dark, neon green/red, bold typography." },
    { id: 3, name: "Eco Organic", path: "/v3", desc: "Earthy tones, greens, natural vibes." },
    { id: 4, name: "Premium Dark", path: "/v4", desc: "Black/Gold, luxurious, sleek." },
    { id: 5, name: "Glassmorphism", path: "/v5", desc: "Frosted glass over abstract gradients." },
    { id: 6, name: "Neumorphism", path: "/v6", desc: "Soft UI, extruded plastic look." },
    { id: 7, name: "Brutalism", path: "/v7", desc: "Raw borders, high contrast, marquee text." },
    { id: 8, name: "Minimalist Apple", path: "/v8", desc: "Huge white space, extreme typography." },
    { id: 9, name: "Playful Gen Z", path: "/v9", desc: "Vibrant pinks/yellows, rounded bubbly fonts." },
    { id: 10, name: "High-Tech Sci-Fi", path: "/v10", desc: "Glow effects, grids, cyber aesthetic." },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 p-8 md:p-24 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Protein Landing Pages
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl">
            10 radically different design explorations for the Hutchings Health protein supplement landing page.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {versions.map((v) => (
            <Link 
              key={v.id} 
              href={v.path}
              className="group block p-6 bg-white rounded-2xl shadow-sm border border-neutral-200 hover:shadow-xl hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 font-bold text-lg">
                  {v.id}
                </span>
                <ArrowRight className="w-5 h-5 text-neutral-300 group-hover:text-blue-500 transition-colors transform group-hover:translate-x-1" />
              </div>
              <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                {v.name}
              </h2>
              <p className="text-neutral-500 text-sm">
                {v.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
