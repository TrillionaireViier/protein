export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <div className="border-8 border-black bg-yellow-400 p-12 shadow-[20px_20px_0_rgba(0,0,255,1)]">
        <h1 className="text-6xl italic text-red-600 drop-shadow-[4px_4px_0_rgba(0,0,0,1)] mb-12 text-center">SEND MESSAGE!!</h1>
        
        <form className="space-y-8">
          <div>
            <label className="block text-3xl mb-2 drop-shadow-[2px_2px_0_rgba(255,255,255,1)]">PLAYER NAME</label>
            <input type="text" className="w-full border-4 border-black p-4 text-2xl shadow-[6px_6px_0_rgba(0,0,0,1)] outline-none focus:bg-blue-100" />
          </div>
          <div>
            <label className="block text-3xl mb-2 drop-shadow-[2px_2px_0_rgba(255,255,255,1)]">EMAIL ADDRESS</label>
            <input type="email" className="w-full border-4 border-black p-4 text-2xl shadow-[6px_6px_0_rgba(0,0,0,1)] outline-none focus:bg-blue-100" />
          </div>
          <div>
            <label className="block text-3xl mb-2 drop-shadow-[2px_2px_0_rgba(255,255,255,1)]">MESSAGE</label>
            <textarea rows={4} className="w-full border-4 border-black p-4 text-2xl shadow-[6px_6px_0_rgba(0,0,0,1)] outline-none focus:bg-blue-100"></textarea>
          </div>
          <button className="w-full bg-red-600 text-white border-4 border-black text-4xl py-6 italic drop-shadow-[4px_4px_0_rgba(0,0,0,1)] shadow-[8px_8px_0_rgba(0,0,0,1)] hover:translate-y-2 hover:shadow-none transition-all mt-8">
            SUBMIT! &gt;&gt;
          </button>
        </form>
      </div>
    </div>
  );
}
