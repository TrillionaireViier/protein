export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="border border-red-900/50 p-12 bg-black/80">
        <h1 className="text-4xl text-red-600 uppercase tracking-[0.3em] mb-12 text-center border-b border-red-900/50 pb-6" style={{fontFamily: 'serif'}}>
          The Master
        </h1>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <div className="border border-red-900 p-2">
              <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-full filter grayscale contrast-200 brightness-50" />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl text-red-500 tracking-widest uppercase mb-4" style={{fontFamily: 'serif'}}>Dr. Andrew Hutchings</h2>
            <div className="space-y-6 text-gray-400 italic leading-loose">
              <p>
                He walked through the valley of shattered bones and torn ligaments. Where others found defeat, he found inspiration for a darker, more potent science.
              </p>
              <p>
                Hutchings Health is not for the weak. It is a covenant. A promise that through discipline, suffering, and the purest isolates on this earth, you shall become unbreakable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
