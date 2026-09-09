export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-mono font-bold text-white mb-12 uppercase">PING <span className="text-green-400">US</span></h1>
      <div className="grid md:grid-cols-2 gap-12">
        <form className="space-y-6 font-mono">
          <div>
            <label className="block text-cyan-500 text-sm mb-2">INPUT_NAME</label>
            <input type="text" className="w-full bg-zinc-900 border border-zinc-700 focus:border-cyan-500 text-white p-3 outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-cyan-500 text-sm mb-2">INPUT_COMMLINK</label>
            <input type="email" className="w-full bg-zinc-900 border border-zinc-700 focus:border-cyan-500 text-white p-3 outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-cyan-500 text-sm mb-2">INPUT_DATA</label>
            <textarea rows={4} className="w-full bg-zinc-900 border border-zinc-700 focus:border-cyan-500 text-white p-3 outline-none transition-colors"></textarea>
          </div>
          <button className="bg-cyan-500 text-black font-bold uppercase tracking-widest px-8 py-3 hover:bg-pink-500 hover:text-white transition-colors w-full">
            TRANSMIT
          </button>
        </form>
      </div>
    </div>
  );
}
