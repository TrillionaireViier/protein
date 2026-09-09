export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6">
      <div className="bg-[#220044]/80 backdrop-blur-md p-12 rounded-[3rem] border-4 border-[#ff00ff] shadow-[0_0_50px_rgba(255,0,255,0.3)]">
        <h1 className="text-4xl font-black italic text-[#ffff00] mb-8 text-center drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]">Channel Us</h1>
        <form className="space-y-8">
          <div>
            <input type="text" placeholder="YOUR AURA (NAME)" className="w-full bg-[#110022] border-b-4 border-[#00ffff] text-[#ff00ff] p-4 text-xl font-bold italic outline-none focus:border-[#ffff00] placeholder:text-[#00ffff]/50 transition-colors" />
          </div>
          <div>
            <textarea rows={4} placeholder="YOUR THOUGHTS..." className="w-full bg-[#110022] border-b-4 border-[#00ffff] text-[#ff00ff] p-4 text-xl font-bold italic outline-none focus:border-[#ffff00] placeholder:text-[#00ffff]/50 transition-colors resize-none mt-4"></textarea>
          </div>
          <button className="w-full bg-gradient-to-r from-[#00ffff] to-[#ff00ff] text-white font-black italic text-2xl py-6 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:scale-105 transition-transform">
            TRANSMIT
          </button>
        </form>
      </div>
    </div>
  );
}