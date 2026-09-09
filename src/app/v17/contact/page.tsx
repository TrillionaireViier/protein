export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 relative z-10">
      <div className="bg-[#1f1035]/80 border-2 border-fuchsia-500 p-8 md:p-12 rounded-xl shadow-[0_0_30px_rgba(236,72,153,0.3)] backdrop-blur-md">
        <h1 className="text-4xl font-black italic text-cyan-400 uppercase tracking-wider mb-8 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] text-center">
          ESTABLISH UPLINK
        </h1>
        
        <form className="space-y-6">
          <div>
            <label className="block text-fuchsia-400 font-bold tracking-widest uppercase text-sm mb-2">USER ID</label>
            <input type="text" className="w-full bg-black/50 border-2 border-fuchsia-900 focus:border-cyan-400 text-cyan-300 p-3 outline-none transition-colors shadow-inner font-mono" />
          </div>
          <div>
            <label className="block text-fuchsia-400 font-bold tracking-widest uppercase text-sm mb-2">COMM FREQUENCY (EMAIL)</label>
            <input type="email" className="w-full bg-black/50 border-2 border-fuchsia-900 focus:border-cyan-400 text-cyan-300 p-3 outline-none transition-colors shadow-inner font-mono" />
          </div>
          <div>
            <label className="block text-fuchsia-400 font-bold tracking-widest uppercase text-sm mb-2">DATA PACKET</label>
            <textarea rows={5} className="w-full bg-black/50 border-2 border-fuchsia-900 focus:border-cyan-400 text-cyan-300 p-3 outline-none transition-colors shadow-inner font-mono resize-none"></textarea>
          </div>
          <button className="w-full bg-transparent border-2 border-fuchsia-500 text-fuchsia-400 font-black italic tracking-widest uppercase py-4 hover:bg-fuchsia-500 hover:text-white transition-colors shadow-[0_0_15px_rgba(236,72,153,0.5)]">
            TRANSMIT
          </button>
        </form>
      </div>
    </div>
  );
}
