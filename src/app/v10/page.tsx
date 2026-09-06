import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Cpu, ActivitySquare, Binary } from 'lucide-react';

export default function Version10() {
  return (
    <div className="min-h-screen bg-[#030712] text-cyan-400 font-mono relative overflow-hidden selection:bg-cyan-900 selection:text-cyan-100">
      
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0891b222_1px,transparent_1px),linear-gradient(to_bottom,#0891b222_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      {/* Scanning Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400/50 shadow-[0_0_20px_#22d3ee] animate-[scan_4s_ease-in-out_infinite]"></div>

      {/* Navigation */}
      <nav className="relative z-50 w-full border-b border-cyan-900/50 bg-[#030712]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center text-cyan-700 hover:text-cyan-400 transition-colors uppercase tracking-[0.3em] text-xs">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Terminate_Sequence</span>
          </Link>
          <div className="font-bold text-xl tracking-[0.5em] uppercase text-cyan-100">
            Hutchings<span className="text-cyan-600 font-light">Health</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-xs text-cyan-600 tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              System_Online
            </div>
            <button className="bg-cyan-950 border border-cyan-500 text-cyan-400 hover:bg-cyan-900 px-6 py-2 uppercase tracking-[0.2em] text-xs transition-colors shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]">
              Initialize
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center min-h-[75vh]">
          
          <div>
            <div className="inline-flex items-center space-x-2 border border-cyan-800 bg-cyan-950/50 px-3 py-1 text-xs tracking-[0.3em] uppercase mb-8 text-cyan-500">
              <Cpu className="w-4 h-4" />
              <span>V.2.0_Upgraded</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light uppercase tracking-widest leading-tight mb-6 text-cyan-50">
              Synthesize<br/>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                Excellence.
              </span>
            </h1>
            
            <div className="w-16 h-1 bg-cyan-600 mb-8 shadow-[0_0_10px_#0891b2]"></div>
            
            <p className="text-cyan-700 text-lg mb-12 max-w-lg leading-relaxed">
              &gt; EXECUTING RECOVERY PROTOCOL... <br/>
              &gt; LOADING 25G WHEY ISOLATE... <br/>
              &gt; OPTIMIZING MUSCLE REPAIR SUBROUTINES... <br/>
              The ultimate bio-hack for physical supremacy.
            </p>
            
            <div className="flex gap-4">
              <button className="bg-cyan-500 hover:bg-cyan-400 text-[#030712] font-bold px-8 py-4 uppercase tracking-[0.2em] transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                Inject_Now
              </button>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center">
            {/* Hologram Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent rounded-full blur-2xl"></div>
            
            {/* Cyber Container */}
            <div className="relative w-72 h-[450px] border border-cyan-500/50 bg-[#030712]/80 backdrop-blur-sm shadow-[inset_0_0_50px_rgba(6,182,212,0.1),0_0_30px_rgba(6,182,212,0.2)] flex flex-col items-center justify-center p-8 z-10 clip-cyber">
              
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400"></div>
              
              <ActivitySquare className="w-12 h-12 text-cyan-400 mb-8 animate-pulse shadow-[0_0_15px_#22d3ee] rounded-full" />
              
              <div className="text-center w-full">
                <div className="text-cyan-600 text-xs tracking-[0.4em] uppercase mb-2">Subject:</div>
                <div className="text-3xl font-bold text-cyan-50 tracking-widest uppercase mb-6 drop-shadow-[0_0_8px_#22d3ee]">PRO_ISO</div>
                
                <div className="grid grid-cols-2 gap-4 border-t border-cyan-900 pt-6">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">25</div>
                    <div className="text-[10px] text-cyan-700 tracking-widest uppercase">G_PROT</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">00</div>
                    <div className="text-[10px] text-cyan-700 tracking-widest uppercase">G_SUGR</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .clip-cyber {
          clip-path: polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%);
        }
      `}} />
    </div>
  );
}
