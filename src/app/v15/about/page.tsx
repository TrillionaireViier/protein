export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <div className="border-8 border-black bg-blue-500 p-8 shadow-[24px_24px_0_rgba(255,0,0,1)] flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/3">
          <div className="border-8 border-black bg-yellow-400 p-2 transform -rotate-3 shadow-[8px_8px_0_rgba(0,0,0,1)]">
            <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-full filter contrast-125 saturate-150" />
          </div>
        </div>
        <div className="w-full md:w-2/3 text-white">
          <div className="bg-black text-yellow-400 inline-block px-4 py-2 border-4 border-yellow-400 mb-6 text-2xl">
            BOSS BATTLE: THE CREATOR
          </div>
          <h1 className="text-6xl italic drop-shadow-[4px_4px_0_rgba(0,0,0,1)] mb-6">DR. ANDREW HUTCHINGS</h1>
          <p className="text-2xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] leading-relaxed mb-6">
            HE BROKE HIS BONES. HE TRAINED IN THE MOUNTAINS. HE MASTERED THE ALCHEMY OF PROTEIN SYNTHESIS.
          </p>
          <p className="text-2xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] leading-relaxed">
            NOW HE BRINGS YOU THE ULTIMATE FORMULA TO DEFEAT WEAKNESS ONCE AND FOR ALL!
          </p>
        </div>
      </div>
    </div>
  );
}
