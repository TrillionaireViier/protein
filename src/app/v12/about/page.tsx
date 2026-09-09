export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24">
      <div className="p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl text-center">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="w-32 h-32 mx-auto rounded-full bg-white/10 p-2 mb-8">
          <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-full h-full object-cover rounded-full mix-blend-luminosity" />
        </div>
        <p className="text-white/70 leading-relaxed mb-6">
          Founded by Dr. Andrew Hutchings. We believe in transparency. 
          No proprietary blends, no hidden ingredients. We utilize cutting edge filtration technology to provide the clearest, most bioavailable protein on the market.
        </p>
      </div>
    </div>
  );
}
