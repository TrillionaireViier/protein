export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-7xl font-black uppercase tracking-tighter mb-8 bg-[#ff003c] text-white inline-block px-4 leading-none">THE<br/>DOC</h1>
          <p className="text-2xl font-bold italic text-[#aaaaaa] mb-6 border-l-4 border-white pl-4">
            He broke every bone. He hit rock bottom. Then he rebuilt himself.
          </p>
          <p className="text-lg font-medium">
            Dr. Hutchings didn't create these formulas in a sterile lab. He created them in the gutter, fighting for recovery. This is protein for the streets, for the fighters, for the ones who refuse to stay down.
          </p>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="absolute inset-0 bg-[#ff003c] translate-x-4 translate-y-4"></div>
          <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Hutchings" className="relative z-10 w-full filter contrast-[2] saturate-0 brightness-75" />
          <div className="absolute -bottom-6 -left-6 bg-black border-4 border-white p-2 z-20 rotate-12">
            <span className="text-[#ff003c] font-black text-3xl">WANTED</span>
          </div>
        </div>
      </div>
    </div>
  );
}