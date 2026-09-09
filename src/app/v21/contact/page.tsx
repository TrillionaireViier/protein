export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <div className="bg-[#0000ff] border-8 border-black p-12 shadow-[16px_16px_0_rgba(255,0,0,1)] text-white">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-12 border-b-4 border-white pb-4">COMMUNICATION</h1>
        
        <form className="space-y-8 text-black">
          <div>
            <label className="block text-white font-bold tracking-widest uppercase mb-2">IDENTIFICATION</label>
            <input type="text" className="w-full bg-white border-4 border-black p-4 font-bold outline-none focus:bg-[#ffff00] transition-colors" />
          </div>
          <div>
            <label className="block text-white font-bold tracking-widest uppercase mb-2">ELECTRONIC MAIL</label>
            <input type="email" className="w-full bg-white border-4 border-black p-4 font-bold outline-none focus:bg-[#ffff00] transition-colors" />
          </div>
          <div>
            <label className="block text-white font-bold tracking-widest uppercase mb-2">DATA TRANSMISSION</label>
            <textarea rows={5} className="w-full bg-white border-4 border-black p-4 font-bold outline-none focus:bg-[#ffff00] transition-colors resize-none"></textarea>
          </div>
          <button className="bg-[#ff0000] text-white border-4 border-black font-black uppercase tracking-widest text-2xl py-6 w-full hover:bg-black transition-colors">
            SUBMIT DATA
          </button>
        </form>
      </div>
    </div>
  );
}
