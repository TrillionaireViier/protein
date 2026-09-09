export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 relative z-10">
      <div className="bg-white rounded-[3rem] shadow-2xl p-12 border-4 border-[#fffae6]">
        <h1 className="text-4xl font-black text-[#2c4c3b] uppercase tracking-tighter mb-4 text-center">Say Aloha</h1>
        <p className="text-center text-[#20b2aa] font-bold uppercase tracking-widest mb-12">Drop us a line</p>
        
        <form className="space-y-6">
          <div>
            <label className="block text-[#2c4c3b] font-bold uppercase text-sm mb-2">Name</label>
            <input type="text" className="w-full bg-[#fffae6] border-2 border-transparent focus:border-[#ff7f50] rounded-2xl p-4 font-medium outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-[#2c4c3b] font-bold uppercase text-sm mb-2">Email</label>
            <input type="email" className="w-full bg-[#fffae6] border-2 border-transparent focus:border-[#ff7f50] rounded-2xl p-4 font-medium outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-[#2c4c3b] font-bold uppercase text-sm mb-2">Message</label>
            <textarea rows={5} className="w-full bg-[#fffae6] border-2 border-transparent focus:border-[#ff7f50] rounded-2xl p-4 font-medium outline-none transition-colors resize-none"></textarea>
          </div>
          <div className="pt-4">
            <button className="w-full bg-[#ff7f50] text-white font-black uppercase tracking-widest text-lg py-4 rounded-full shadow-[0_10px_20px_rgba(255,127,80,0.3)] hover:shadow-[0_15px_30px_rgba(255,127,80,0.5)] hover:-translate-y-1 transition-all">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
