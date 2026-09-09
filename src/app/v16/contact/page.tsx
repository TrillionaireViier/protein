export default function Contact() {
  return (
    <div className="max-w-xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-slate-900 mb-4 text-center">Contact Sales</h1>
      <p className="text-slate-500 mb-12 text-center">Connect with our enterprise team to discuss deployment options.</p>
      
      <form className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
            <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
            <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
          <input type="email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Company Size</label>
          <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white">
            <option>1-50 employees</option>
            <option>51-200 employees</option>
            <option>201-1000 employees</option>
            <option>1000+ employees</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">How can we help?</label>
          <textarea rows={4} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"></textarea>
        </div>
        <button className="w-full bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700 transition-colors">
          Submit Request
        </button>
      </form>
    </div>
  );
}
