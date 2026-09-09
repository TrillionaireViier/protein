import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#000080] text-white font-mono bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
      <nav className="border-[3px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white bg-[#c0c0c0] text-black m-4">
        <div className="flex items-center justify-between p-2 bg-[#000080] m-1">
          <Link href="/v11" className="text-white font-bold text-xl tracking-tighter">
            HUTCHINGS_HEALTH.EXE
          </Link>
          <div className="flex gap-2">
            <div className="w-5 h-5 bg-[#c0c0c0] border-[2px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white flex items-center justify-center text-xs font-bold">_</div>
            <div className="w-5 h-5 bg-[#c0c0c0] border-[2px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white flex items-center justify-center text-xs font-bold">□</div>
            <div className="w-5 h-5 bg-[#c0c0c0] border-[2px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white flex items-center justify-center text-xs font-bold">X</div>
          </div>
        </div>
        <div className="flex gap-4 p-2 text-sm font-bold bg-[#c0c0c0]">
          <Link href="/v11/about" className="hover:underline text-blue-800">File</Link>
          <Link href="/v11/products" className="hover:underline text-blue-800">Edit</Link>
          <Link href="/v11/contact" className="hover:underline text-blue-800">Help</Link>
        </div>
      </nav>
      <div className="p-4">
        {children}
      </div>
      <footer className="text-center p-4 mt-8">
        <div className="inline-block bg-yellow-400 text-black px-2 font-bold animate-bounce text-sm">
          BEST VIEWED IN NETSCAPE NAVIGATOR
        </div>
        <div className="mt-2 text-xs text-cyan-300">© 1999 HUTCHINGS HEALTH. All rights reserved.</div>
      </footer>
    </div>
  );
}
