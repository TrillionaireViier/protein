import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="px-6 py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block text-xs font-bold tracking-wider text-blue-600 uppercase mb-4 bg-blue-50 px-3 py-1 rounded-full">
              Enterprise-Grade Nutrition
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Optimize your workforce's physical infrastructure.
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg">
              HutchingsCorp delivers scalable, high-availability protein isolates designed to maximize recovery ROI and minimize muscular downtime.
            </p>
            <div className="flex gap-4">
              <Link href="/v16/products" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                View Solutions
              </Link>
              <Link href="/v16/contact" className="bg-white text-slate-700 border border-slate-300 px-6 py-3 rounded-md font-medium hover:bg-slate-50 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
          <div className="relative rounded-lg p-8 bg-slate-50 border border-gray-200 shadow-inner flex justify-center">
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-full max-w-sm rounded shadow-sm bg-white" alt="Protein Product" />
          </div>
        </div>
      </section>
      
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-8">Trusted by industry leaders globally</p>
          <div className="flex justify-center gap-12 opacity-40 grayscale">
            {/* Fake logos */}
            <div className="text-2xl font-black">ACME Corp</div>
            <div className="text-2xl font-black">Globex</div>
            <div className="text-2xl font-black">Initech</div>
            <div className="text-2xl font-black">Soylent</div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mt-24">
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Rapid Deployment</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Hydrolyzed formulation ensures immediate nutrient delivery to target tissue sectors.</p>
          </div>
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Enterprise Security</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Rigorous third-party auditing guarantees zero prohibited substances or unauthorized fillers.</p>
          </div>
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Scalable Architecture</h3>
            <p className="text-slate-600 text-sm leading-relaxed">From single-user deployments to entire athletic departments, our supply chain scales with your needs.</p>
          </div>
        </div>
      </section>
    </>
  );
}
