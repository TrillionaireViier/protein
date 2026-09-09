export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="bg-[#ff4081] border-8 border-black p-12 shadow-[15px_15px_0_#00bcd4] relative">
        <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#ffeb3b] rounded-full border-4 border-black shadow-[5px_5px_0_#000000] animate-bounce"></div>
        <h1 className="text-6xl font-black uppercase text-white mb-12 drop-shadow-[4px_4px_0_#000000]">The Big Boss</h1>
        
        <div className="flex flex-col md:flex-row gap-12 items-center bg-white border-4 border-black p-8 shadow-[8px_8px_0_#000000]">
          <div className="w-full md:w-1/3">
            <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Hutchings" className="w-full border-8 border-black filter grayscale contrast-200 bg-[#ffeb3b]" />
          </div>
          <div className="w-full md:w-2/3 text-2xl font-bold uppercase leading-relaxed text-black">
            <p className="mb-6 bg-[#00bcd4] text-white p-2 border-2 border-black">Dr. Andrew Hutchings got wrecked in an accident. Not cool.</p>
            <p className="bg-[#ffeb3b] p-2 border-2 border-black">So he invented a totally radical protein formula to rebuild himself bigger and better than ever.</p>
          </div>
        </div>
      </div>
    </div>
  );
}