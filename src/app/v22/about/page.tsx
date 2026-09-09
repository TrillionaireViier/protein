export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <div className="border border-white/10 bg-[#050510]/80 backdrop-blur-md p-12 relative">
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blue-500/50 -mt-2 -mr-2"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-blue-500/50 -mb-2 -ml-2"></div>
        
        <h1 className="text-4xl text-white font-light tracking-tight mb-12 border-b border-white/10 pb-6">Commander's Log</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="p-4 border border-white/10 bg-black">
              <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-full filter grayscale contrast-125" />
              <div className="mt-4 flex justify-between font-mono text-[10px] text-blue-400 tracking-widest uppercase">
                <span>CDR. A. HUTCHINGS</span>
                <span>BIO-METRICS: STABLE</span>
              </div>
            </div>
          </div>
          <div className="space-y-6 text-slate-400 font-light leading-relaxed">
            <p>
              "Gravity is the ultimate enemy of recovery. To truly understand muscle synthesis, we had to leave the atmosphere behind."
            </p>
            <p>
              Dr. Hutchings suffered catastrophic structural failure during atmospheric re-entry simulations. The solution wasn't earth-bound medicine, but aerospace-grade nutritional synthesis.
            </p>
            <p>
              Hutchings Aerospace provides the purest, most rapidly assimilated protein matrix in the known universe. Designed for astronauts, available to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
