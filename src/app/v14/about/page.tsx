export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row gap-12 items-center bg-zinc-900 p-8 md:p-12 border-l-8 border-red-600 transform -skew-x-3">
        <div className="w-full md:w-1/3 transform skew-x-3">
          <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-full grayscale border-4 border-white" />
        </div>
        <div className="w-full md:w-2/3 transform skew-x-3">
          <h1 className="text-5xl font-black italic uppercase tracking-tighter mb-4 text-white">THE ENGINEER</h1>
          <h2 className="text-2xl font-bold italic text-red-600 mb-8">DR. ANDREW HUTCHINGS</h2>
          <p className="text-lg text-gray-400 font-bold italic leading-relaxed mb-6">
            BUILT FOR SPEED. BUILT FOR POWER. ANDREW BROKE EVERY BONE IN HIS BODY TO TEST THE LIMITS OF HUMAN ENDURANCE.
          </p>
          <p className="text-lg text-gray-400 font-bold italic leading-relaxed">
            NOW HE FORMULATES THE MOST AGGRESSIVE SUPPLEMENTS ON THE MARKET. NO COMPROMISES. ONLY PODIUM FINISHES.
          </p>
        </div>
      </div>
    </div>
  );
}
