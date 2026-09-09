export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <div className="mb-12 transform -skew-x-12 inline-block bg-red-600 px-8 py-4">
        <h1 className="text-4xl font-black italic uppercase tracking-tighter transform skew-x-12">PIT STOP / COMMUNICATE</h1>
      </div>
      
      <form className="space-y-6 bg-zinc-900 p-8 border-l-4 border-white transform -skew-x-3">
        <div className="transform skew-x-3 space-y-6">
          <div>
            <label className="block text-gray-400 font-black italic uppercase mb-2 tracking-widest">DRIVER NAME</label>
            <input type="text" className="w-full bg-black border-2 border-zinc-800 focus:border-red-600 text-white p-4 font-bold outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-gray-400 font-black italic uppercase mb-2 tracking-widest">RADIO FREQ (EMAIL)</label>
            <input type="email" className="w-full bg-black border-2 border-zinc-800 focus:border-red-600 text-white p-4 font-bold outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-gray-400 font-black italic uppercase mb-2 tracking-widest">TELEMETRY DATA (MESSAGE)</label>
            <textarea rows={5} className="w-full bg-black border-2 border-zinc-800 focus:border-red-600 text-white p-4 font-bold outline-none transition-colors"></textarea>
          </div>
          <button className="bg-white text-black font-black italic px-12 py-4 uppercase tracking-widest hover:bg-red-600 hover:text-white transition-colors">
            SEND &gt;&gt;
          </button>
        </div>
      </form>
    </div>
  );
}
