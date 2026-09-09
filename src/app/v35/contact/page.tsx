export default function Contact() {
  return (
    <div className="max-w-xl mx-auto px-6 py-20">
      <div className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[3rem] p-12 shadow-[0_8px_32px_rgba(31,38,135,0.05)]">
        <h1 className="text-4xl font-black text-center mb-12 text-black/80 tracking-tighter">Reflect With Us</h1>
        <form className="space-y-8">
          <div>
            <input type="text" placeholder="Name" className="w-full bg-white/50 border border-white/80 rounded-xl p-4 text-black/80 font-medium outline-none focus:bg-white/80 transition-colors placeholder:text-black/30 shadow-inner" />
          </div>
          <div>
            <textarea rows={4} placeholder="Message" className="w-full bg-white/50 border border-white/80 rounded-xl p-4 text-black/80 font-medium outline-none focus:bg-white/80 transition-colors placeholder:text-black/30 shadow-inner resize-none"></textarea>
          </div>
          <button className="w-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-white font-black uppercase tracking-widest py-5 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all">
            Send Beam
          </button>
        </form>
      </div>
    </div>
  );
}