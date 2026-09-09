export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[3rem] p-12 shadow-[0_8px_32px_rgba(31,38,135,0.05)] relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-cyan-300 rounded-full blur-[80px] opacity-50"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-pink-300 rounded-full blur-[80px] opacity-50"></div>
        
        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl font-black tracking-tighter mb-8 text-black/80">Refraction.</h1>
            <p className="text-lg font-medium text-black/60 leading-relaxed mb-6">
              When light hits a prism, it reveals its true spectrum. When protein hits your muscles, it reveals your true potential.
            </p>
            <p className="text-lg font-medium text-black/60 leading-relaxed">
              Dr. Andrew Hutchings designed this iridescent matrix after an accident changed his perception of healing. Recovery isn't just physical; it's light overcoming darkness.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-pink-400 rounded-3xl rotate-6 opacity-30 blur-sm"></div>
            <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Hutchings" className="relative w-full rounded-3xl border-2 border-white/80 shadow-xl filter contrast-125 sepia-[20%] hue-rotate-[280deg]" />
          </div>
        </div>
      </div>
    </div>
  );
}