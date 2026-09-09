export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="bg-[#ccff00] absolute inset-0 -translate-x-4 translate-y-4"></div>
          <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-full relative z-10 filter grayscale border-4 border-black" />
          <div className="absolute -right-8 bottom-12 bg-black text-white font-black uppercase p-4 text-2xl z-20 -rotate-12">
            THE DOCTOR
          </div>
        </div>
        <div className="pl-0 md:pl-12">
          <h1 className="text-[60px] md:text-[80px] font-black uppercase tracking-tighter leading-none mb-8">"ABOUT"</h1>
          <p className="text-3xl font-bold uppercase leading-tight mb-8">
            HE BROKE HIS BONES SO YOU DON'T HAVE TO.
          </p>
          <div className="text-lg font-bold uppercase text-gray-600 space-y-6">
            <p>Hutchings Health is a lifestyle. It's a statement against weak, filler-filled protein supplements.</p>
            <p>We source only the highest grade isolates. No compromises. No apologies.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
