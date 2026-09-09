export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16" style={{fontFamily: 'Comic Sans MS, cursive, sans-serif'}}>
      <div className="border-4 border-white p-8 md:p-16 rounded-3xl" style={{borderStyle: 'dashed'}}>
        <h1 className="text-5xl font-bold text-center mb-12 text-pink-200">About the Doc</h1>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Doc" className="w-full rounded-2xl filter grayscale sepia-[20%] border-4 border-white" />
            <p className="text-center mt-4 text-xl">Dr. H</p>
          </div>
          <div className="w-full md:w-2/3 text-2xl leading-relaxed space-y-6 text-blue-100">
            <p>He broke almost every bone in his body. Not fun.</p>
            <p>But while healing, he figured out exactly what the body needs to rebuild muscle fast. No fluff, just the raw ingredients.</p>
          </div>
        </div>
      </div>
    </div>
  );
}