import os

images = [
    "https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg",
    "https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg",
] * 2
names = ["Enterprise Isolate", "Pro Mass Synthesizer", "Corporate Energy", "BCAA Solution", "Creatine Matrix", "Vitamin Suite", "Omega Architecture", "Testosterone Platform"]

layout = """import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-800 font-sans">
      <nav className="fixed w-full z-50 top-0 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/v16" className="text-xl font-bold tracking-tight text-blue-700 flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-700 rounded-sm"></div>
            HutchingsCorp
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
            <Link href="/v16/about" className="hover:text-blue-600 transition-colors">Company</Link>
            <Link href="/v16/products" className="hover:text-blue-600 transition-colors">Solutions</Link>
            <Link href="/v16/contact" className="hover:text-blue-600 transition-colors">Contact Sales</Link>
          </div>
          <div className="hidden md:flex">
            <Link href="/v16/contact" className="bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
              Request Demo
            </Link>
          </div>
        </div>
      </nav>
      
      <div className="pt-16">
        {children}
      </div>
      
      <footer className="bg-white border-t border-gray-200 mt-24 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div>© 2026 Hutchings Health Corporation. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
"""

home = """import Link from 'next/link';

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
"""

products_html = ""
for i in range(24):
    img = images[i % 8]
    name = names[i % 8]
    price = 99 - (i % 4) * 10
    products_html += f"""
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
          <div className="p-6 flex justify-center bg-slate-50 border-b border-gray-100">
            <img src="{img}" className="h-40 object-contain mix-blend-multiply" alt="{name}" />
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Category: Core Infrastructure</div>
            <h2 className="text-lg font-bold text-slate-900 mb-4">{name}</h2>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-bold text-slate-900">${price}</span>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                View Specs &rarr;
              </button>
            </div>
          </div>
        </div>"""

products = f"""export default function Products() {{
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Solutions Catalog</h1>
        <p className="text-slate-500">Browse our enterprise-grade nutritional deployments.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
{products_html}
      </div>
    </div>
  );
}}
"""

about = """export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-slate-900 mb-6">Corporate Overview</h1>
      <p className="text-xl text-slate-600 mb-12">HutchingsCorp is the leading B2B provider of premium nutritional infrastructure.</p>
      
      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center mb-12">
        <div className="w-full md:w-1/3">
          <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-full rounded-full grayscale border-4 border-slate-100" />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Dr. Andrew Hutchings</h2>
          <p className="text-blue-600 font-medium mb-6">Chief Executive Officer</p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Prior to founding HutchingsCorp, Dr. Hutchings spent a decade analyzing human performance metrics in extreme environments.
          </p>
          <p className="text-slate-600 leading-relaxed">
            His data-driven approach to recovery protocols led to the development of our proprietary isolation matrix, now utilized by Fortune 500 athletic departments worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}
"""

contact = """export default function Contact() {
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
"""

with open("src/app/v16/layout.tsx", "w") as f: f.write(layout)
with open("src/app/v16/page.tsx", "w") as f: f.write(home)
with open("src/app/v16/products/page.tsx", "w") as f: f.write(products)
with open("src/app/v16/about/page.tsx", "w") as f: f.write(about)
with open("src/app/v16/contact/page.tsx", "w") as f: f.write(contact)
