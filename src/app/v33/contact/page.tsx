export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <div className="bg-black border-8 border-[#333333] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff003c] blur-[60px] opacity-40"></div>
        <h1 className="text-5xl font-black italic uppercase text-white mb-8 border-b-4 border-[#ff003c] pb-2 inline-block">SAY SOMETHING</h1>
        <form className="space-y-6 relative z-10">
          <div>
            <input type="text" placeholder="YOUR TAG (NAME)" className="w-full bg-[#111111] border-2 border-[#333333] p-4 text-white font-bold uppercase outline-none focus:border-white transition-colors" />
          </div>
          <div>
            <textarea rows={5} placeholder="DROP A LINE..." className="w-full bg-[#111111] border-2 border-[#333333] p-4 text-white font-bold uppercase outline-none focus:border-white transition-colors resize-none"></textarea>
          </div>
          <button className="w-full bg-white text-black text-3xl font-black italic uppercase py-4 hover:bg-[#ff003c] hover:text-white transition-colors">
            SPRAY IT
          </button>
        </form>
      </div>
    </div>
  );
}