import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#2c3e2d] text-[#f4f4f4] font-sans selection:bg-white selection:text-[#2c3e2d] bg-[url('https://www.transparenttextures.com/patterns/black-board.png')]">
      <nav className="p-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between border-b-2 border-white/20 pb-4" style={{borderBottomStyle: 'dashed'}}>
          <Link href="/v28" className="text-4xl font-bold mb-4 md:mb-0" style={{fontFamily: 'Comic Sans MS, cursive, sans-serif'}}>
            Hutchings Health
          </Link>
          <div className="flex gap-8 text-xl" style={{fontFamily: 'Comic Sans MS, cursive, sans-serif'}}>
            <Link href="/v28/about" className="hover:text-yellow-200 transition-colors">Our Story</Link>
            <Link href="/v28/products" className="hover:text-blue-200 transition-colors">Products</Link>
            <Link href="/v28/contact" className="hover:text-pink-200 transition-colors">Say Hi!</Link>
          </div>
        </div>
      </nav>
      <div className="py-12">
        {children}
      </div>
    </div>
  );
}