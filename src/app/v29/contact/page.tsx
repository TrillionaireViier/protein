export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <div className="bg-[#00bcd4] border-8 border-black p-12 shadow-[15px_15px_0_#ffeb3b]">
        <h1 className="text-5xl font-black uppercase text-white mb-8 drop-shadow-[4px_4px_0_#000000]">Hit us up!</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-2xl font-black uppercase bg-white border-2 border-black px-2 py-1 mb-2 w-max">Your Name</label>
            <input type="text" className="w-full bg-white border-4 border-black p-4 text-xl font-bold outline-none focus:bg-[#ffeb3b] transition-colors shadow-[4px_4px_0_#000000]" />
          </div>
          <div>
            <label className="block text-2xl font-black uppercase bg-white border-2 border-black px-2 py-1 mb-2 w-max">Message</label>
            <textarea rows={4} className="w-full bg-white border-4 border-black p-4 text-xl font-bold outline-none focus:bg-[#ffeb3b] transition-colors shadow-[4px_4px_0_#000000] resize-none"></textarea>
          </div>
          <button className="w-full bg-[#ff4081] text-white text-3xl font-black uppercase py-6 border-4 border-black shadow-[8px_8px_0_#000000] hover:translate-x-2 hover:translate-y-2 hover:shadow-[0_0_0_#000000] transition-all">
            SEND IT!
          </button>
        </form>
      </div>
    </div>
  );
}