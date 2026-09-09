export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-12 pt-48 pb-24">
      <div className="grid md:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <div className="aspect-[3/4] bg-[#e8e4db] absolute -top-8 -left-8 w-full h-full"></div>
          <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="The Founder" className="relative w-full aspect-[3/4] object-cover shadow-2xl filter sepia-[30%]" />
        </div>
        <div className="space-y-8">
          <h2 className="text-[#d4af37] tracking-[0.2em] uppercase text-sm">The Philosophy</h2>
          <h1 className="text-5xl font-light leading-tight">Healing is an <br/>Art Form.</h1>
          <div className="space-y-6 text-[#2c3e2d]/70 font-sans font-light leading-relaxed text-lg">
            <p>After a traumatic injury, Dr. Andrew Hutchings sought a sanctuary for healing, both physically and nutritionally.</p>
            <p>Finding the supplement market overly aggressive and artificial, he established Hutchings Retreat—a line of nutritional amenities that treat muscle recovery as a luxurious spa experience for your cells.</p>
          </div>
        </div>
      </div>
    </div>
  );
}