with open("v8_blocks.txt", "r") as f:
    blocks = f.read()

content = f"""import Link from 'next/link';

export default function Products() {{
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-mono font-bold text-white mb-4 uppercase">/// <span className="text-cyan-400">CATALOG</span></h1>
      <p className="text-zinc-500 font-mono mb-12">AVAILABLE UPGRADES IN THE MAINFRAME.</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
{blocks}
      </div>
    </div>
  );
}}
"""

with open("src/app/v8/products/page.tsx", "w") as f:
    f.write(content)
