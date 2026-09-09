export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24">
      <div className="border border-white/10 bg-[#050510]/80 backdrop-blur-md p-12">
        <h1 className="text-3xl text-white font-light tracking-tight mb-2 text-center">Establish Comm Link</h1>
        <p className="font-mono text-[10px] text-blue-400 text-center tracking-widest uppercase mb-12">Awaiting signal transmission...</p>
        
        <form className="space-y-8 font-mono text-sm">
          <div>
            <label className="block text-slate-500 tracking-widest uppercase mb-2">CALL SIGN (NAME)</label>
            <input type="text" className="w-full bg-black/50 border border-white/10 text-white p-3 focus:border-blue-500 outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-slate-500 tracking-widest uppercase mb-2">COORD (EMAIL)</label>
            <input type="email" className="w-full bg-black/50 border border-white/10 text-white p-3 focus:border-blue-500 outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-slate-500 tracking-widest uppercase mb-2">TRANSMISSION DATA</label>
            <textarea rows={5} className="w-full bg-black/50 border border-white/10 text-white p-3 focus:border-blue-500 outline-none transition-colors resize-none"></textarea>
          </div>
          <div className="pt-4 text-center">
            <button className="bg-white text-black font-bold uppercase tracking-[0.2em] px-12 py-4 hover:bg-blue-500 hover:text-white transition-colors w-full">
              TRANSMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
