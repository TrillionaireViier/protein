import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#e0e5ec] text-[#4a5568] font-sans selection:bg-[#a0aec0] selection:text-white">
      <nav className="p-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-6 rounded-3xl shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]">
          <Link href="/v30" className="text-2xl font-bold tracking-tight text-[#2d3748]">
            Hutchings
          </Link>
          <div className="flex gap-8 text-sm font-medium mt-4 md:mt-0">
            <Link href="/v30/about" className="px-6 py-2 rounded-xl shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] hover:shadow-[inset_5px_5px_10px_rgb(163,177,198,0.6),inset_-5px_-5px_10px_rgba(255,255,255,0.5)] transition-shadow text-[#718096] hover:text-[#2d3748]">About</Link>
            <Link href="/v30/products" className="px-6 py-2 rounded-xl shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] hover:shadow-[inset_5px_5px_10px_rgb(163,177,198,0.6),inset_-5px_-5px_10px_rgba(255,255,255,0.5)] transition-shadow text-[#718096] hover:text-[#2d3748]">Products</Link>
            <Link href="/v30/contact" className="px-6 py-2 rounded-xl shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] hover:shadow-[inset_5px_5px_10px_rgb(163,177,198,0.6),inset_-5px_-5px_10px_rgba(255,255,255,0.5)] transition-shadow text-[#718096] hover:text-[#2d3748]">Contact</Link>
          </div>
        </div>
      </nav>
      <div className="py-12">
        {children}
      </div>
    </div>
  );
}