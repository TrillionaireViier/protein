export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-12 pt-48 pb-24 text-center">
      <h2 className="text-[#d4af37] tracking-[0.2em] uppercase text-sm mb-6">Reservations</h2>
      <h1 className="text-5xl font-light mb-16">Contact the Concierge</h1>
      <form className="space-y-12">
        <div className="grid grid-cols-2 gap-12">
          <input type="text" placeholder="First Name" className="w-full bg-transparent border-b border-[#2c3e2d]/20 py-4 outline-none focus:border-[#d4af37] transition-colors font-sans placeholder:text-[#2c3e2d]/40" />
          <input type="text" placeholder="Last Name" className="w-full bg-transparent border-b border-[#2c3e2d]/20 py-4 outline-none focus:border-[#d4af37] transition-colors font-sans placeholder:text-[#2c3e2d]/40" />
        </div>
        <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-[#2c3e2d]/20 py-4 outline-none focus:border-[#d4af37] transition-colors font-sans placeholder:text-[#2c3e2d]/40" />
        <textarea rows={3} placeholder="Your Inquiry" className="w-full bg-transparent border-b border-[#2c3e2d]/20 py-4 outline-none focus:border-[#d4af37] transition-colors font-sans placeholder:text-[#2c3e2d]/40 resize-none"></textarea>
        <button className="bg-[#2c3e2d] text-white px-12 py-4 tracking-[0.2em] uppercase text-sm hover:bg-[#d4af37] transition-colors duration-300">
          Request Information
        </button>
      </form>
    </div>
  );
}