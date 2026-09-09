export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="border-4 border-double border-[#5d4037] p-12 bg-[#fcf8e3]">
        <h1 className="text-4xl font-bold mb-12 text-center uppercase tracking-widest">Our Philosophy</h1>
        <div className="float-left mr-8 mb-4 border-2 border-[#5d4037] p-1">
          <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-48 h-48 object-cover sepia contrast-125" />
        </div>
        <p className="text-lg leading-loose italic mb-6">
          Dr. Andrew Hutchings, a learned man of science and vigor, hath dedicated his life to the pursuit of physical perfection. Having suffered myriad fractures and ailments of the bone, he sought a cure in the purest forms of nutrition.
        </p>
        <p className="text-lg leading-loose italic">
          Thus, Hutchings Health was born. We dispense only the finest isolates, guaranteed to fortify the blood and mend the tendon. Accept no substitutes.
        </p>
        <div className="clear-both"></div>
      </div>
    </div>
  );
}
