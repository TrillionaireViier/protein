export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-serif text-stone-900 mb-12">Our <span className="italic text-green-700">Roots</span></h1>
      <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-stone-100 flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/3">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-50 mx-auto">
            <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-serif text-stone-900 mb-2">Dr. Andrew Hutchings</h2>
          <p className="text-green-700 font-medium mb-6">Founder & Naturalist</p>
          <p className="text-stone-600 leading-relaxed mb-4">
            Andrew is the driving force behind Hutchings Health. With a background in chemistry and biology from UC Irvine, he believes in the healing power of pure, unadulterated nutrition.
          </p>
          <p className="text-stone-600 leading-relaxed">
            After suffering numerous sports injuries, he discovered that true recovery comes from within, powered by clean ingredients and ethical sourcing.
          </p>
        </div>
      </div>
    </div>
  );
}
