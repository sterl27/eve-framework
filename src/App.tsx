import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-[#121414] text-[#e3e2e2] flex flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#121414] border-b border-[#414754] flex items-center justify-between px-6 h-16">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-[#0070f3] to-[#6600b7] flex items-center justify-center">
            <span className="text-white font-bold text-lg">E</span>
          </div>
          <div>
            <span className="font-bold text-2xl tracking-[-0.02em]">Eve</span>
            <span className="ml-2 text-xs text-[#8b90a0] font-mono">FRAMEWORK v1.0</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-sm border border-[#414754] rounded hover:bg-[#1f2020] transition">Docs</button>
          <button className="px-4 py-2 text-sm bg-white text-black font-bold rounded hover:bg-[#e3e2e2]">Deploy to Vercel</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16 px-6 py-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-[#1f2020] text-xs font-mono tracking-[0.1em] mb-4 border border-[#414754]">
              DURABLE AGENCY
            </div>
            <h1 className="font-bold text-6xl tracking-[-0.04em] mb-4">High-Fidelity Minimalist<br />Design System</h1>
            <p className="text-xl text-[#c1c6d7] max-w-md mx-auto">Engineered for engineers and AI researchers. Precision meets presence.</p>
          </div>

          {/* Design Tokens Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Colors", desc: "True black foundations. Vercel Blue + Eve Violet accents. Precise neutral scale." },
              { title: "Typography", desc: "Geist for headlines. Inter for body. JetBrains Mono for code and metadata." },
              { title: "Components", desc: "Code blocks, agent cards, file trees, ghost buttons — filesystem-first mental model." }
            ].map((item, i) => (
              <div key={i} className="bg-[#1f2020] border border-[#414754] p-8 rounded-xl">
                <div className="text-[#aec6ff] font-mono text-sm mb-3 tracking-widest">{String(i+1).padStart(2, '0')}</div>
                <h3 className="font-bold text-2xl tracking-tight mb-4">{item.title}</h3>
                <p className="text-[#c1c6d7] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Implementation Note */}
          <div className="bg-[#0d0e0f] border-l-4 border-[#6600b7] p-8 rounded-r-xl">
            <div className="font-mono text-xs text-[#6600b7] mb-2">IMPLEMENTATION</div>
            <div className="font-bold text-xl mb-3">Ready for Vercel Deploy + Stitch Generation</div>
            <div className="text-[#c1c6d7]">This design system is fully extracted from DESIGN.md. Run <code className="bg-black px-2 py-0.5 rounded">vercel</code> to deploy instantly, or import into Stitch for screen generation.</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#414754] py-8 text-center text-xs text-[#8b90a0] font-mono tracking-[0.05em]">
        BUILT FOR VERCEL • POWERED BY EVE • {new Date().getFullYear()}
      </footer>
    </div>
  )
}
