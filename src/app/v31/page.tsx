import Link from 'next/link';
export default function Home() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4 underline">GET HUGE FAST!!!</h1>
        <p className="text-xl mb-6">Are you tired of being small? Do you want to build <b>MASSIVE MUSCLES</b>?</p>
        
        <div className="flex justify-center mb-6">
          <div className="border-8 border-ridge border-yellow-400 bg-black p-2">
            <img src="https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg" className="w-64 h-64 object-cover filter contrast-150 saturate-200" alt="Protein gif" />
          </div>
        </div>
        
        <h2 className="text-2xl text-blue-800 font-bold mb-4 blink">NEW FORMULA JUST RELEASED!</h2>
        <p className="mb-8 bg-yellow-200 p-4 border border-black">
          "I used Hutchings Health for 3 weeks and gained 20lbs of pure muscle!" - Anonymous User
        </p>
        
        <Link href="/v31/products" className="inline-block bg-blue-600 text-white font-bold text-2xl py-2 px-8 border-4 border-outset border-blue-400 hover:bg-red-600 cursor-pointer">
          CLICK HERE TO ENTER THE STORE
        </Link>
      </div>
    </>
  );
}