export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6">
      <div className="border border-red-900/50 p-12 bg-black/80">
        <h1 className="text-3xl text-red-600 uppercase tracking-[0.3em] mb-12 text-center" style={{fontFamily: 'serif'}}>
          Summon Us
        </h1>
        
        <form className="space-y-8">
          <div>
            <label className="block text-gray-500 uppercase tracking-widest text-xs mb-2">Your Name</label>
            <input type="text" className="w-full bg-transparent border-b border-red-900 focus:border-red-500 text-red-500 p-2 outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-gray-500 uppercase tracking-widest text-xs mb-2">Your Mark (Email)</label>
            <input type="email" className="w-full bg-transparent border-b border-red-900 focus:border-red-500 text-red-500 p-2 outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-gray-500 uppercase tracking-widest text-xs mb-2">The Invocation</label>
            <textarea rows={4} className="w-full bg-transparent border border-red-900 focus:border-red-500 text-red-500 p-2 outline-none transition-colors mt-2"></textarea>
          </div>
          <button className="w-full border border-red-900 text-red-600 hover:bg-red-900 hover:text-black uppercase tracking-[0.3em] py-4 transition-colors text-sm mt-8">
            Cast
          </button>
        </form>
      </div>
    </div>
  );
}
