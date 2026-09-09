export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <div className="bg-[#000022]/80 backdrop-blur-md border-4 border-[#00ffff] p-12 shadow-[15px_15px_0_#ff00ff]">
        <h1 className="text-4xl font-black italic uppercase text-[#ffff00] mb-8 drop-shadow-[2px_2px_0_#ff00ff]">ESTABLISH CONNECTION</h1>
        <form className="space-y-8">
          <div>
            <label className="block text-white font-mono mb-2">USER_ID</label>
            <input type="text" className="w-full bg-[#000022] border-2 border-[#ff00ff] p-4 text-[#00ffff] font-mono outline-none focus:border-[#ffff00] shadow-[0_0_10px_#ff00ff_inset]" />
          </div>
          <div>
            <label className="block text-white font-mono mb-2">DATA_PACKET</label>
            <textarea rows={5} className="w-full bg-[#000022] border-2 border-[#ff00ff] p-4 text-[#00ffff] font-mono outline-none focus:border-[#ffff00] shadow-[0_0_10px_#ff00ff_inset] resize-none"></textarea>
          </div>
          <button className="w-full bg-[#00ffff] text-black text-2xl font-black italic uppercase py-4 border-2 border-white hover:bg-[#ff00ff] hover:text-white transition-colors shadow-[0_0_15px_#00ffff]">
            EXECUTE
          </button>
        </form>
      </div>
    </div>
  );
}