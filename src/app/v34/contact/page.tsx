export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <h1 className="text-5xl font-black uppercase tracking-tighter mb-16 border-b border-white/20 pb-8">Signal</h1>
      <form className="space-y-12">
        <div>
          <input type="text" placeholder="IDENTIFIER" className="w-full bg-transparent border-b border-white/20 py-4 text-center text-xl font-bold tracking-widest uppercase outline-none focus:border-white transition-colors placeholder:text-white/20" />
        </div>
        <div>
          <textarea rows={3} placeholder="DATA PAYLOAD" className="w-full bg-transparent border-b border-white/20 py-4 text-center text-xl font-bold tracking-widest uppercase outline-none focus:border-white transition-colors placeholder:text-white/20 resize-none"></textarea>
        </div>
        <button className="bg-white text-black font-black uppercase tracking-widest px-16 py-6 hover:bg-black hover:text-white border-2 border-white transition-all">
          Transmit
        </button>
      </form>
    </div>
  );
}