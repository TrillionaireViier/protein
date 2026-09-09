export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="p-12 md:p-16 rounded-[3rem] shadow-[12px_12px_24px_rgb(163,177,198,0.6),-12px_-12px_24px_rgba(255,255,255,0.5)]">
        <h1 className="text-4xl font-bold text-center mb-16 text-[#2d3748]">Our Founder</h1>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-full p-6 shadow-[inset_8px_8px_16px_rgb(163,177,198,0.6),inset_-8px_-8px_16px_rgba(255,255,255,0.5)] aspect-square">
            <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Doc" className="w-full h-full object-cover rounded-full shadow-[8px_8px_16px_rgb(163,177,198,0.6),-8px_-8px_16px_rgba(255,255,255,0.5)] filter grayscale opacity-80" />
          </div>
          <div className="space-y-6 text-lg text-[#718096] font-medium leading-relaxed p-8 rounded-3xl shadow-[inset_5px_5px_10px_rgb(163,177,198,0.6),inset_-5px_-5px_10px_rgba(255,255,255,0.5)]">
            <p>Following a severe accident, Dr. Andrew Hutchings experienced the painful friction of recovery.</p>
            <p>He created a line of supplements designed to work smoothly with the body's natural processes, removing the harsh edges of traditional sports nutrition.</p>
          </div>
        </div>
      </div>
    </div>
  );
}