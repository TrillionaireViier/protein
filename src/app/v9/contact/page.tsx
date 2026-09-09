export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-serif text-stone-900 mb-12">Connect with <span className="italic text-green-700">Nature</span></h1>
      <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-stone-100">
        <form className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-stone-600 text-sm mb-2 font-medium">First Name</label>
              <input type="text" className="w-full bg-stone-50 border-none rounded-2xl focus:ring-2 focus:ring-green-700 text-stone-800 p-4 outline-none transition-all" placeholder="Jane" />
            </div>
            <div>
              <label className="block text-stone-600 text-sm mb-2 font-medium">Email Address</label>
              <input type="email" className="w-full bg-stone-50 border-none rounded-2xl focus:ring-2 focus:ring-green-700 text-stone-800 p-4 outline-none transition-all" placeholder="jane@example.com" />
            </div>
          </div>
          <div>
            <label className="block text-stone-600 text-sm mb-2 font-medium">Message</label>
            <textarea rows={5} className="w-full bg-stone-50 border-none rounded-2xl focus:ring-2 focus:ring-green-700 text-stone-800 p-4 outline-none transition-all resize-none" placeholder="How can we help you flourish?"></textarea>
          </div>
          <button className="bg-green-700 text-white font-medium px-10 py-4 rounded-full hover:bg-green-800 transition-all shadow-md hover:shadow-lg w-full md:w-auto">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
