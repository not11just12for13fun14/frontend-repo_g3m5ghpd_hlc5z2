import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = ({ onPrimaryClick, device }) => {
  return (
    <section className="relative overflow-hidden">
      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-40" style={{ background: 'radial-gradient(circle at 30% 30%, #00E5FF, transparent 60%)' }} />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle at 70% 70%, #9D00FF, transparent 60%)' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            ZK-Powered Payment Links for Web3 Sellers
          </h1>
          <p className="mt-5 text-base sm:text-lg text-gray-300 max-w-xl">
            Sell digital products privately. On-chain, instant, non-custodial. Built on Solana with Zero-Knowledge verification.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onPrimaryClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#00E5FF] text-[#0B0C10] font-medium hover:brightness-110 transition-all shadow-[0_0_40px_rgba(0,229,255,0.6)]"
            >
              Start Selling Securely
              <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#features" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all">
              Explore Features
            </a>
          </div>

          {/* 3 step cards */}
          <div id="features" className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Create Product', desc: 'Set price, upload, choose delivery.' },
              { title: 'Share Link', desc: 'Instant checkout via Solana Pay.' },
              { title: 'Auto-Deliver', desc: 'Unlock after ZK-verified payment.' },
            ].map((c, i) => (
              <div key={i} className="rounded-xl p-4 bg-white/5 border border-white/10">
                <p className="text-white font-medium">{c.title}</p>
                <p className="text-xs text-gray-400 mt-1">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Spline scene */}
        <div className="relative h-[360px] sm:h-[420px] lg:h-[520px] w-full">
          <Spline
            scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0C10] to-transparent" />
          </div>
        </div>
      </div>

      {/* ZK Privacy ribbon */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        <div className="rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-4 flex items-center justify-between">
          <p className="text-sm text-gray-300">Built with Zero-Knowledge Verification</p>
          <span className="text-[10px] px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">Privacy-First</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
