import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const versions = [
    { id: 1, name: "Clean & Medical", path: "/v1", desc: "White, trustworthy, medical-grade aesthetic." },
    { id: 4, name: "Premium Dark", path: "/v4", desc: "Black/Gold, luxurious, sleek." },
    { id: 7, name: "Brutalism", path: "/v7", desc: "Raw borders, high contrast, marquee text." },
    { id: 8, name: "Cyberpunk", path: "/v8", desc: "Neon, glowing tech, biohacker vibes." },
    { id: 9, name: "Eco / Organic", path: "/v9", desc: "Natural greens, soft shapes, earthy." },
    { id: 10, name: "Minimalist", path: "/v10", desc: "Apple-style, clean typography, huge photos." },
    { id: 11, name: "Retro 90s (Y2K)", path: "/v11", desc: "Nostalgic internet, shiny 3D buttons." },
    { id: 12, name: "Glassmorphism", path: "/v12", desc: "Frosted glass, holographic gradients, Web3." },
    { id: 13, name: "Vintage Apothecary", path: "/v13", desc: "19th-century medicine, sepia, serif fonts." },
    { id: 14, name: "Hyper-Athletic", path: "/v14", desc: "Carbon fiber, racing red, intense motion." },
    { id: 15, name: "Anime / Manga", path: "/v15", desc: "Action lines, primary colors, Japanese text." },
    { id: 16, name: "Corporate B2B", path: "/v16", desc: "Sterile blue/gray, enterprise software look." },
    { id: 17, name: "Synthwave 80s", path: "/v17", desc: "Neon grids, Miami vice, retro arcade." },
    { id: 18, name: "Military Tactical", path: "/v18", desc: "Camo, olive drab, stencil fonts." },
    { id: 19, name: "Gothic Metal", path: "/v19", desc: "Black, blood red, dark lore." },
    { id: 20, name: "Streetwear", path: "/v20", desc: "Hypebeast, bold quotes, brutalist." },
    { id: 21, name: "Bauhaus", path: "/v21", desc: "Primary colors, perfect geometry, 1920s." },
    { id: 22, name: "Space / NASA", path: "/v22", desc: "Deep space, technical readouts, zero gravity." },
    { id: 23, name: "Tropical Oasis", path: "/v23", desc: "Corals, teals, beach club, sunny vibes." },
    { id: 24, name: "Steampunk", path: "/v24", desc: "Brass, gears, Victorian fonts, copper colors, steam engine aesthetics." },
    { id: 25, name: "8-Bit Pixel Art", path: "/v25", desc: "Retro arcade, blocky fonts, bright colors, gaming UI." },
    { id: 26, name: "High Fashion", path: "/v26", desc: "Vogue magazine style, extremely thin serif fonts, elegant and chic." },
    { id: 27, name: "Psychedelic / Trippy", path: "/v27", desc: "Swirling neon colors, melting fonts, acid rock poster vibes." },
    { id: 28, name: "Chalkboard", path: "/v28", desc: "Sketchy lines, chalkboard background, handwritten fonts." },
    { id: 29, name: "Memphis Design", path: "/v29", desc: "1980s colorful abstract shapes, bold contrasting pastels." },
    { id: 30, name: "Neumorphism", path: "/v30", desc: "Soft UI, embossed/debossed from soft plastic, futuristic." },
    { id: 31, name: "Web 1.0 (GeoCities)", path: "/v31", desc: "Retro 1996 internet, times new roman, harsh blue links." },
    { id: 32, name: "Luxury Hotel / Spa", path: "/v32", desc: "Serene, gold accents, marble textures, highly premium wellness retreat." },
    { id: 33, name: "Graffiti / Grunge", path: "/v33", desc: "Spray paint, concrete textures, street art, aggressive." },
    { id: 34, name: "Pure Monochrome", path: "/v34", desc: "Strictly black and white. High contrast, intense." },
    { id: 35, name: "Holographic", path: "/v35", desc: "Shimmering pearl colors, fluid gradients, reflective." },
    { id: 36, name: "Wild West / Saloon", path: "/v36", desc: "Wood textures, wanted poster fonts, sepia tones." },
    { id: 37, name: "Vaporwave", path: "/v37", desc: "Windows 95 aesthetics, pastel pinks and purples, grid lines." },
    { id: 38, name: "Deep Ocean", path: "/v38", desc: "Extremely dark blues, bioluminescent glowing text, underwater." },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 p-8 md:p-24 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Protein Landing Pages
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl">
            34 radically different design explorations for the Hutchings Health protein supplement landing page.
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
