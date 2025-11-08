import React from 'react';
import { Shield, Wallet } from 'lucide-react';

const Navbar = ({ onConnectClick, isConnected, shortAddress, device }) => {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur bg-[#0B0C10]/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[#00E5FF] to-[#9D00FF] grid place-items-center shadow-[0_0_30px_rgba(0,229,255,0.6)]">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <span className="text-white font-semibold tracking-tight">x402ZK</span>
        </div>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#sellers" className="hover:text-white transition-colors">For Sellers</a>
          <a href="#docs" className="hover:text-white transition-colors">Docs</a>
        </nav>

        <div className="flex items-center gap-3">
          {isConnected ? (
            <div className="px-3 py-1.5 rounded-md bg-white/5 text-xs text-white border border-white/10">
              {shortAddress}
            </div>
          ) : null}
          <button
            onClick={onConnectClick}
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md bg-[#00E5FF] text-[#0B0C10] hover:brightness-110 transition-all shadow-[0_0_25px_rgba(0,229,255,0.55)]"
          >
            <Wallet className="h-4 w-4" />
            {isConnected ? 'Switch Wallet' : device === 'mobile' ? 'Connect' : 'Connect Wallet'}
          </button>
        </div>
      </div>

      {/* Tablet/Mobile compact menu hint (non-functional placeholder link rendering) */}
      <div className="md:hidden px-4 pb-3 text-xs text-gray-400">
        <div className="flex gap-4">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#sellers" className="hover:text-white">Sellers</a>
          <a href="#docs" className="hover:text-white">Docs</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
