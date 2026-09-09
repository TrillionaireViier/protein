export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24 relative z-10">
      <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 border-4 border-[#fffae6]">
        <h1 className="text-5xl font-black text-[#20b2aa] uppercase tracking-tighter mb-12 text-center">The Retreat</h1>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <div className="relative p-2 bg-[#ff7f50] rounded-full transform -rotate-6 shadow-xl">
              <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-full rounded-full filter contrast-125 saturate-150 border-4 border-white" />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-black text-[#2c4c3b] uppercase mb-4">Dr. Andrew Hutchings</h2>
            <p className="text-lg text-[#2c4c3b]/80 font-medium leading-relaxed mb-6">
              After years of grueling rehabilitation and thick, heavy protein shakes, Dr. Hutchings decided recovery shouldn't feel like a chore.
            </p>
            <p className="text-lg text-[#2c4c3b]/80 font-medium leading-relaxed mb-6">
              He retreated to the coast to develop a lighter, clearer, and more refreshing approach to muscle synthesis. 
            </p>
            <p className="text-lg text-[#ff7f50] font-black uppercase tracking-widest">
              Welcome to the oasis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
