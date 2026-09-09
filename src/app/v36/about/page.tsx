export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="border-8 border-double border-[#4a3525] p-2 bg-[#d2b48c] shadow-2xl">
        <div className="border-4 border-[#4a3525] p-8 md:p-12">
          <h1 className="text-5xl font-black uppercase text-center mb-12" style={{fontFamily: 'Playfair Display, serif'}}>The Legend of Doc Hutchings</h1>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <div className="border-4 border-[#4a3525] p-2 bg-white transform -rotate-3">
                <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Doc" className="w-full filter sepia contrast-150 grayscale" />
                <p className="text-center font-bold mt-2 uppercase tracking-widest text-xs">Doc. H - Circa 1884</p>
              </div>
            </div>
            <div className="w-full md:w-2/3 text-lg font-medium leading-loose space-y-6">
              <p>Doc Andrew Hutchings took a bad fall off a stallion out West. Broke more bones than a man has fingers.</p>
              <p>While recovering in a dusty saloon, he realized the local grub wasn't enough to rebuild a man's frame. He needed something stronger. Something pure.</p>
              <p>Using old apothecary methods, he distilled the first batch of frontier protein isolate. The rest is history.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}