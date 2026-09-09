export default function Contact() {
  return (
    <div className="max-w-[600px] mx-auto px-8 py-32 text-center">
      <h1 className="text-5xl md:text-7xl font-light tracking-tight text-black mb-6">Support.</h1>
      <p className="text-gray-500 font-light text-xl mb-16">We're here to help.</p>
      
      <form className="space-y-6 text-left">
        <div>
          <input type="text" className="w-full border-b border-gray-300 bg-transparent text-xl font-light py-4 placeholder-gray-400 focus:outline-none focus:border-black transition-colors" placeholder="Name" />
        </div>
        <div>
          <input type="email" className="w-full border-b border-gray-300 bg-transparent text-xl font-light py-4 placeholder-gray-400 focus:outline-none focus:border-black transition-colors" placeholder="Email" />
        </div>
        <div>
          <textarea rows={4} className="w-full border-b border-gray-300 bg-transparent text-xl font-light py-4 placeholder-gray-400 focus:outline-none focus:border-black transition-colors resize-none" placeholder="Message"></textarea>
        </div>
        <div className="pt-8 text-center">
          <button className="bg-black text-white px-12 py-4 rounded-full font-medium hover:scale-105 transition-transform">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
