import Link from 'next/link';

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
