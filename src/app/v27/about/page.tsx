export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-[#220044]/80 backdrop-blur-md p-12 rounded-[3rem] border-4 border-[#00ffff] shadow-[0_0_50px_rgba(0,255,255,0.3)]">
        <h1 className="text-5xl font-black italic text-[#ff00ff] mb-12 text-center drop-shadow-[0_0_10px_rgba(255,0,255,0.8)]">The Guru</h1>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Hutchings" className="w-full rounded-full filter hue-rotate-180 saturate-200 contrast-150 shadow-[0_0_30px_rgba(255,255,0,0.5)]" />
          </div>
          <div className="w-full md:w-1/2 text-xl text-[#00ffff] font-medium leading-loose">
            <p className="mb-6">Dr. Andrew Hutchings didn't just heal his body; he expanded his mind. Through deep meditation and cellular chemistry, he discovered the ultimate truth of protein synthesis.</p>
            <p>Our isolates vibrate at a higher frequency, harmonizing with your muscles to promote spiritual and physical growth.</p>
          </div>
        </div>
      </div>
    </div>
  );
}