export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-[#3a4018] border-8 border-black p-8 md:p-12 shadow-[16px_16px_0_rgba(0,0,0,0.5)]">
        <h1 className="text-3xl font-black text-black mb-8 border-b-4 border-black pb-4 text-center">COMMUNICATIONS LINK</h1>
        
        <form className="space-y-6">
          <div className="bg-black/30 p-6 border-2 border-black space-y-4">
            <div>
              <label className="block text-xs font-bold text-black mb-1">OPERATIVE ID</label>
              <input type="text" className="w-full bg-[#e0dacd] border-2 border-black p-3 font-bold text-black focus:outline-none focus:bg-white" />
            </div>
            <div>
              <label className="block text-xs font-bold text-black mb-1">SECURE FREQUENCY (EMAIL)</label>
              <input type="email" className="w-full bg-[#e0dacd] border-2 border-black p-3 font-bold text-black focus:outline-none focus:bg-white" />
            </div>
            <div>
              <label className="block text-xs font-bold text-black mb-1">INTEL REPORT</label>
              <textarea rows={5} className="w-full bg-[#e0dacd] border-2 border-black p-3 font-bold text-black focus:outline-none focus:bg-white resize-none"></textarea>
            </div>
          </div>
          
          <button className="w-full bg-black text-[#e0dacd] font-black text-xl py-4 border-4 border-black hover:bg-[#e0dacd] hover:text-black transition-colors transform -skew-x-6">
            TRANSMIT INTEL
          </button>
        </form>
      </div>
    </div>
  );
}
