import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-[#000080] text-white" style={{fontFamily: '"Times New Roman", Times, serif'}}>
      <div className="max-w-4xl mx-auto bg-[#c0c0c0] min-h-screen text-black border-l-4 border-r-4 border-[#808080] p-2">
        <div className="text-center bg-[#000080] text-white p-4 border-4 border-outset border-[#c0c0c0] mb-4 overflow-hidden">
          {/* @ts-ignore */}
          <marquee scrollAmount={10} className="text-2xl font-bold text-yellow-300 whitespace-nowrap">★★★ WELCOME TO HUTCHINGS HEALTH OFFICIAL HOMEPAGE ★★★</marquee>
        </div>
        
        <table className="w-full border-collapse border border-black mb-4">
          <tbody>
            <tr>
              <td className="border border-black p-2 bg-[#008080] text-white text-center hover:bg-yellow-300 hover:text-blue-800 font-bold"><Link href="/v31">HOME</Link></td>
              <td className="border border-black p-2 bg-[#008080] text-white text-center hover:bg-yellow-300 hover:text-blue-800 font-bold"><Link href="/v31/about">ABOUT DR. H</Link></td>
              <td className="border border-black p-2 bg-[#008080] text-white text-center hover:bg-yellow-300 hover:text-blue-800 font-bold"><Link href="/v31/products">CATALOG</Link></td>
              <td className="border border-black p-2 bg-[#008080] text-white text-center hover:bg-yellow-300 hover:text-blue-800 font-bold"><Link href="/v31/contact">GUESTBOOK</Link></td>
            </tr>
          </tbody>
        </table>
        
        <div className="bg-white border-2 border-inset border-[#808080] p-4 min-h-[60vh]">
          {children}
        </div>
        
        <div className="text-center mt-4 text-xs font-bold p-2 bg-[#000080] text-white">
          <p>Best viewed in Netscape Navigator 4.0 at 800x600 resolution</p>
          <p>Hit Counter: 0048291</p>
        </div>
      </div>
    </div>
  );
}