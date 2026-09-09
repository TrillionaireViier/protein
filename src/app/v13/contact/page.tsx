export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="border-4 border-double border-[#5d4037] p-12 bg-[#fcf8e3]">
        <h1 className="text-3xl font-bold mb-8 text-center uppercase tracking-widest">Send a Telegraph</h1>
        <form className="space-y-6">
          <div>
            <label className="block tracking-widest uppercase text-xs font-bold mb-2">Your Name, Sir or Madam</label>
            <input type="text" className="w-full bg-transparent border-b-2 border-[#5d4037] p-2 outline-none focus:bg-[#5d4037]/5 transition-colors font-serif" />
          </div>
          <div>
            <label className="block tracking-widest uppercase text-xs font-bold mb-2">Return Address</label>
            <input type="text" className="w-full bg-transparent border-b-2 border-[#5d4037] p-2 outline-none focus:bg-[#5d4037]/5 transition-colors font-serif" />
          </div>
          <div>
            <label className="block tracking-widest uppercase text-xs font-bold mb-2">Your Dispatch</label>
            <textarea rows={5} className="w-full bg-transparent border-2 border-[#5d4037] p-2 outline-none focus:bg-[#5d4037]/5 transition-colors font-serif"></textarea>
          </div>
          <div className="pt-4 text-center">
            <button className="border-2 border-[#5d4037] px-12 py-4 tracking-widest uppercase font-bold hover:bg-[#5d4037] hover:text-[#f4ebd0] transition-colors">
              Dispatch Courier
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
