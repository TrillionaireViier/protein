export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="order-2 md:order-1 space-y-8">
          <h1 className="text-6xl font-black uppercase tracking-tighter border-b border-white/20 pb-6">Identity</h1>
          <div className="text-white/60 text-lg leading-loose space-y-6">
            <p>Dr. Andrew Hutchings stripped everything back to black and white after his accident. No noise. No distractions. Just pure focus on rebuilding what was broken.</p>
            <p>Our isolates are devoid of unnecessary color, flavor, or branding. They are functional objects designed for a singular purpose: cellular repair.</p>
          </div>
        </div>
        <div className="order-1 md:order-2 border border-white/20 p-4">
          <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Hutchings" className="w-full filter grayscale contrast-200" />
        </div>
      </div>
    </div>
  );
}