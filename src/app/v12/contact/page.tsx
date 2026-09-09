export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24">
      <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Get in Touch</h1>
        <form className="space-y-6">
          <div>
            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white/30 focus:bg-white/10 transition-all placeholder:text-white/30" placeholder="Name" />
          </div>
          <div>
            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white/30 focus:bg-white/10 transition-all placeholder:text-white/30" placeholder="Email" />
          </div>
          <div>
            <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white/30 focus:bg-white/10 transition-all placeholder:text-white/30 resize-none" placeholder="Message"></textarea>
          </div>
          <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 font-bold hover:opacity-90 transition-opacity">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
