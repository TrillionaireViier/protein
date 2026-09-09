export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <div className="border-8 border-black bg-white grid md:grid-cols-2 shadow-[24px_24px_0_rgba(0,0,255,1)]">
        <div className="border-b-8 md:border-b-0 md:border-r-8 border-black p-12 bg-[#ffff00]">
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-12">THE ARCHITECT</h1>
          <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-full filter grayscale contrast-200 border-4 border-black mix-blend-multiply" />
        </div>
        <div className="p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold uppercase mb-6">Dr. Andrew Hutchings</h2>
          <div className="w-16 h-4 bg-[#ff0000] mb-8"></div>
          <p className="text-xl font-medium leading-relaxed mb-6">
            Healing requires structure. When my own bones were broken, I realized that true recovery is an architectural problem.
          </p>
          <p className="text-xl font-medium leading-relaxed">
            Hutchings Health provides the raw materials. Stripped of all artifice, coloring, and deceit. Just the pure geometric necessity of protein.
          </p>
        </div>
      </div>
    </div>
  );
}
