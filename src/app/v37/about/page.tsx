export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="bg-[#000022]/80 backdrop-blur-md border-4 border-[#ff00ff] p-8 md:p-12 shadow-[0_0_30px_#00ffff]">
        <h1 className="text-4xl md:text-5xl font-black italic uppercase text-white mb-12 drop-shadow-[3px_3px_0_#00ffff]">SYSADMIN: DR_HUTCHINGS</h1>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <div className="border-4 border-[#00ffff] p-2 bg-[#ff00ff]/20">
              <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Hutchings" className="w-full filter hue-rotate-[270deg] contrast-150 saturate-200" />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-xl text-white font-mono leading-relaxed space-y-6">
            <p className="border-l-4 border-[#ffff00] pl-4">&gt; HARDWARE FAILURE DETECTED: 1984.</p>
            <p className="border-l-4 border-[#ffff00] pl-4">&gt; INITIATING RECOVERY PROTOCOL.</p>
            <p>&gt; Dr. Hutchings synthesized a digital-grade isolate to patch the physical mainframe. The result is a high-bandwidth protein matrix for maximum upload speed to muscle tissues.</p>
            <p className="text-[#00ffff] animate-pulse">_</p>
          </div>
        </div>
      </div>
    </div>
  );
}