export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h1 className="text-5xl font-light text-white tracking-[0.2em] uppercase mb-10 drop-shadow-[0_0_10px_#00ffcc]">The <br/><span className="font-bold">Architect</span></h1>
          <div className="space-y-6 text-[#88ccff] font-light leading-relaxed text-lg">
            <p>After a catastrophic accident on the surface, Dr. Andrew Hutchings sought refuge in the quiet, crushing depths of the ocean.</p>
            <p>He discovered that under immense pressure, cellular structures rebuild themselves with unprecedented density and strength. He brought this methodology to the surface.</p>
            <p>Our proteins are cold-processed under extreme atmospheric conditions, resulting in an isolate that is undeniably dense.</p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-[#00ffcc] blur-[60px] opacity-20 rounded-full"></div>
          <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Hutchings" className="relative z-10 w-full rounded-2xl filter hue-rotate-[200deg] contrast-150 saturate-50 opacity-80 border border-[#003366]" />
        </div>
      </div>
    </div>
  );
}