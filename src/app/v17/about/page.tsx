export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 relative z-10">
      <div className="bg-[#1f1035]/80 border-2 border-cyan-400 p-8 md:p-12 rounded-xl shadow-[0_0_30px_rgba(34,211,238,0.3)] backdrop-blur-md">
        <h1 className="text-4xl md:text-5xl font-black italic text-fuchsia-400 uppercase tracking-wider mb-10 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)] border-b border-fuchsia-500/50 pb-4">
          MAINFRAME DATABANKS
        </h1>
        
        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
          <div className="w-full md:w-1/3">
            <div className="border-4 border-cyan-400 rounded-full p-2 shadow-[0_0_15px_rgba(34,211,238,0.8)]">
              <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-full rounded-full filter contrast-150 saturate-200 hue-rotate-180 sepia-[50%] mix-blend-screen" />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold text-cyan-300 mb-2 tracking-widest uppercase">SYS.ADMIN // DR. A. HUTCHINGS</h2>
            <p className="text-fuchsia-200 leading-relaxed mb-4 text-lg">
              IN THE YEAR 1984, DR. HUTCHINGS UPLOADED HIS CONSCIOUSNESS INTO THE NEON GRID TO SYNTHESIZE THE PERFECT MUSCLE RECOVERY ALGORITHM.
            </p>
            <p className="text-fuchsia-200 leading-relaxed text-lg">
              THE RESULT IS A PROTEIN ISOLATE SO PURE, IT TRANSCENDS PHYSICAL REALITY.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
