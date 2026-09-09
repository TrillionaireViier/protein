export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="border-8 border-black p-12 bg-[#ccff00] relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 text-[250px] font-black text-black/10 tracking-tighter leading-none pointer-events-none">?</div>
        
        <h1 className="text-[60px] md:text-[80px] font-black uppercase tracking-tighter leading-none mb-12 relative z-10">"CONTACT"</h1>
        
        <form className="space-y-8 relative z-10">
          <div>
            <label className="block text-2xl font-black uppercase mb-2">"WHO ARE YOU"</label>
            <input type="text" className="w-full bg-white border-4 border-black p-4 text-xl font-bold uppercase focus:outline-none" />
          </div>
          <div>
            <label className="block text-2xl font-black uppercase mb-2">"EMAIL"</label>
            <input type="email" className="w-full bg-white border-4 border-black p-4 text-xl font-bold uppercase focus:outline-none" />
          </div>
          <div>
            <label className="block text-2xl font-black uppercase mb-2">"YOUR INQUIRY"</label>
            <textarea rows={4} className="w-full bg-white border-4 border-black p-4 text-xl font-bold uppercase focus:outline-none resize-none"></textarea>
          </div>
          <button className="bg-black text-white font-black uppercase text-3xl px-12 py-6 hover:bg-white hover:text-black hover:border-black border-4 border-transparent transition-colors mt-8 w-full md:w-auto">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
