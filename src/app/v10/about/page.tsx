export default function About() {
  return (
    <div className="max-w-[800px] mx-auto px-8 py-32 text-center">
      <h1 className="text-5xl md:text-7xl font-light tracking-tight text-black mb-12">Philosophy.</h1>
      
      <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-64 h-64 mx-auto object-cover rounded-full mb-12 grayscale" />
      
      <h2 className="text-2xl font-medium mb-4">Dr. Andrew Hutchings</h2>
      <p className="text-gray-500 font-light text-xl mb-12">Founder & Lead Scientist</p>
      
      <p className="text-xl text-black font-light leading-relaxed mb-8">
        "Simplicity is the ultimate sophistication. When we designed our protein formula, we stripped away everything that wasn't essential. No artificial colors, no hidden blends. Just the precise building blocks your body needs."
      </p>
    </div>
  );
}
