export default function Contact() {
  return (
    <div className="max-w-xl mx-auto px-6 py-20">
      <div className="bg-[#d2b48c] border-4 border-[#4a3525] p-12 shadow-[8px_8px_0_#4a3525]">
        <h1 className="text-4xl font-black uppercase text-center mb-10 border-b-2 border-[#4a3525] pb-4" style={{fontFamily: 'Playfair Display, serif'}}>Wire a Message</h1>
        <form className="space-y-6">
          <div>
            <label className="block font-bold uppercase tracking-widest text-xs mb-2">Cowpoke Name</label>
            <input type="text" className="w-full bg-transparent border-2 border-[#4a3525] p-3 text-lg font-bold outline-none focus:bg-white transition-colors" />
          </div>
          <div>
            <label className="block font-bold uppercase tracking-widest text-xs mb-2">The Wire</label>
            <textarea rows={4} className="w-full bg-transparent border-2 border-[#4a3525] p-3 text-lg font-bold outline-none focus:bg-white transition-colors resize-none"></textarea>
          </div>
          <button className="w-full bg-[#4a3525] text-[#deb887] text-2xl font-black uppercase tracking-widest py-4 border-2 border-black hover:bg-black transition-colors shadow-[4px_4px_0_rgba(0,0,0,0.5)] mt-4">
            Send Telegram
          </button>
        </form>
      </div>
    </div>
  );
}