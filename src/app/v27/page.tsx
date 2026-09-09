import Link from 'next/link';
export default function Home() {
  return (
    <>
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-7xl md:text-[150px] font-black italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-[#ff00ff] to-[#00ffff] filter drop-shadow-[0_0_20px_rgba(255,0,255,0.5)] leading-none mb-8 hover:scale-105 transition-transform duration-500">
          AWAKEN
        </h1>
        <p className="text-2xl md:text-4xl font-bold text-[#00ffff] max-w-3xl leading-relaxed mb-12 drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
          Expand your consciousness and your muscle mass. Pure isolate from another dimension.
        </p>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-[#ff00ff] rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-70"></div>
          <Link href="/v27/products" className="relative bg-[#110022] text-[#ffff00] border-4 border-[#00ffff] text-2xl font-black italic uppercase px-12 py-6 rounded-full inline-block group-hover:bg-[#ff00ff] group-hover:text-white transition-colors">
            Enter The Void
          </Link>
        </div>
      </section>
    </>
  );
}