export default function Contact() {
  return (
    <div className="max-w-xl mx-auto px-6 py-20">
      <div className="p-12 rounded-[3rem] shadow-[12px_12px_24px_rgb(163,177,198,0.6),-12px_-12px_24px_rgba(255,255,255,0.5)]">
        <h1 className="text-3xl font-bold text-center mb-12 text-[#2d3748]">Get in Touch</h1>
        <form className="space-y-8">
          <div>
            <input type="text" placeholder="Name" className="w-full bg-[#e0e5ec] p-6 rounded-2xl shadow-[inset_6px_6px_12px_rgb(163,177,198,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.5)] outline-none text-[#4a5568] placeholder:text-[#a0aec0] font-medium focus:shadow-[inset_8px_8px_16px_rgb(163,177,198,0.7),inset_-8px_-8px_16px_rgba(255,255,255,0.6)] transition-shadow" />
          </div>
          <div>
            <textarea rows={4} placeholder="Message" className="w-full bg-[#e0e5ec] p-6 rounded-2xl shadow-[inset_6px_6px_12px_rgb(163,177,198,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.5)] outline-none text-[#4a5568] placeholder:text-[#a0aec0] font-medium resize-none focus:shadow-[inset_8px_8px_16px_rgb(163,177,198,0.7),inset_-8px_-8px_16px_rgba(255,255,255,0.6)] transition-shadow"></textarea>
          </div>
          <button className="w-full py-6 rounded-2xl text-xl font-bold text-[#2d3748] shadow-[8px_8px_16px_rgb(163,177,198,0.6),-8px_-8px_16px_rgba(255,255,255,0.5)] hover:shadow-[inset_8px_8px_16px_rgb(163,177,198,0.6),inset_-8px_-8px_16px_rgba(255,255,255,0.5)] transition-all duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}