export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24">
      <div className="bg-[#000a14]/60 backdrop-blur-xl border border-[#003366] p-12 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066ff] blur-[100px] opacity-20"></div>
        <h1 className="text-3xl font-light text-white tracking-[0.2em] uppercase mb-12 text-center drop-shadow-[0_0_8px_#00ffcc]">Send a Sonar Ping</h1>
        <form className="space-y-8 relative z-10">
          <div>
            <input type="text" placeholder="Designation" className="w-full bg-[#000a14] border border-[#003366] rounded p-4 text-[#00ffcc] font-light outline-none focus:border-[#00ffcc] transition-colors placeholder:text-[#003366]" />
          </div>
          <div>
            <textarea rows={4} placeholder="Frequency Data" className="w-full bg-[#000a14] border border-[#003366] rounded p-4 text-[#00ffcc] font-light outline-none focus:border-[#00ffcc] transition-colors placeholder:text-[#003366] resize-none"></textarea>
          </div>
          <button className="w-full bg-[#000a14] border border-[#00ffcc] text-[#00ffcc] text-sm font-bold tracking-[0.3em] uppercase py-5 rounded hover:bg-[#00ffcc] hover:text-[#000a14] hover:shadow-[0_0_20px_#00ffcc] transition-all duration-500">
            Transmit Ping
          </button>
        </form>
      </div>
    </div>
  );
}