export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20" style={{fontFamily: 'Comic Sans MS, cursive, sans-serif'}}>
      <div className="border-4 border-white p-12 rounded-3xl" style={{borderStyle: 'dashed'}}>
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-200">Write us a note</h1>
        <form className="space-y-8">
          <div>
            <label className="block text-2xl mb-2 text-yellow-100">Your Name:</label>
            <input type="text" className="w-full bg-transparent border-b-4 border-white/50 text-2xl p-2 outline-none focus:border-white transition-colors" style={{borderBottomStyle: 'dashed'}} />
          </div>
          <div>
            <label className="block text-2xl mb-2 text-yellow-100">Message:</label>
            <textarea rows={4} className="w-full bg-transparent border-4 border-white/50 text-2xl p-4 rounded-xl outline-none focus:border-white transition-colors resize-none mt-2" style={{borderStyle: 'dashed'}}></textarea>
          </div>
          <div className="text-center pt-8">
            <button className="border-4 border-white text-3xl font-bold px-12 py-4 rounded-full hover:bg-white hover:text-[#2c3e2d] transition-colors transform hover:rotate-3">
              Send!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}