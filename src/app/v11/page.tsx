import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="max-w-4xl mx-auto border-[4px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white bg-[#c0c0c0] text-black p-1 mb-8 shadow-2xl">
        <div className="bg-[#000080] text-white p-1 font-bold flex justify-between">
          <span>Welcome_To_The_Future.html</span>
          <span>[X]</span>
        </div>
        <div className="p-8 text-center bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] bg-white">
          {/* @ts-ignore */}
          <marquee scrollamount="10" className="text-2xl font-bold text-red-600 mb-6 bg-yellow-300 py-1 border-[2px] border-black">
            🔥🔥🔥 NEW WHEY PROTEIN ISOLATE RELEASED! 🔥🔥🔥
          {/* @ts-ignore */}
          </marquee>
          
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 mb-4 drop-shadow-[4px_4px_0_rgba(0,0,0,1)] transform -skew-x-12">
            SUPER MASS GAINER 3000
          </h1>
          
          <div className="my-8 flex justify-center">
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" alt="Protein" className="w-64 h-64 object-cover border-[8px] border-x-blue-500 border-y-red-500 image-rendering-pixelated" />
          </div>
          
          <Link href="/v11/products" className="inline-block bg-[#c0c0c0] border-[4px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white px-8 py-4 font-bold text-xl hover:bg-[#e0e0e0] active:border-t-gray-800 active:border-l-gray-800 active:border-b-white active:border-r-white text-blue-800 mb-8">
            ENTER CATALOG &gt;&gt;
          </Link>
          
          <div className="grid grid-cols-3 gap-4 text-left">
            <div className="bg-[#c0c0c0] border-[2px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white p-4">
              <h3 className="font-bold text-red-600 mb-2 border-b-2 border-red-600">100% PURE</h3>
              <p className="text-xs">No fake stuff! Pure isolate only.</p>
            </div>
            <div className="bg-[#c0c0c0] border-[2px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white p-4">
              <h3 className="font-bold text-blue-600 mb-2 border-b-2 border-blue-600">FAST AF</h3>
              <p className="text-xs">Absorbs instantly. Get huge.</p>
            </div>
            <div className="bg-[#c0c0c0] border-[2px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white p-4">
              <h3 className="font-bold text-green-600 mb-2 border-b-2 border-green-600">CHEAP</h3>
              <p className="text-xs">Best prices on the web guaranteed.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
