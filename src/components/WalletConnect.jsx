import React from 'react';
import { Wallet, CheckCircle2 } from 'lucide-react';

const WalletConnect = ({ open, onClose, onConnect, isConnected, shortAddress, device }) => {
  if (!open) return null;

  const Wrapper = ({ children }) => (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className={`relative w-full ${device === 'mobile' ? 'h-[80%] rounded-t-2xl' : 'max-w-md rounded-2xl'} bg-[#0B0C10] border border-white/10 p-6 shadow-2xl`}
        style={{ boxShadow: '0 0 40px rgba(0,229,255,0.25)' }}>
        {children}
      </div>
    </div>
  );

  return (
    <Wrapper>
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[#00E5FF] to-[#9D00FF] grid place-items-center">
          <Wallet className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="text-white font-medium">Connect your wallet</p>
          <p className="text-xs text-gray-400">We never store your private key. Your public key is your private identity.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        {['Phantom', 'Solflare', 'Backpack'].map((w) => (
          <button
            key={w}
            onClick={() => onConnect(w)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white transition"
          >
            <span>{w}</span>
            <Wallet className="h-4 w-4 opacity-70" />
          </button>
        ))}
      </div>

      {isConnected && (
        <div className="mt-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4" />
          <div>
            <p className="text-sm">ZK ID: <span className="font-mono">#A402-{shortAddress?.slice(-4)}</span></p>
            <p className="text-xs opacity-80">Status: Verified</p>
          </div>
        </div>
      )}

      <div className="mt-6 flex justify-end">
        <button onClick={onClose} className="px-4 py-2 text-sm rounded-md bg-white/5 text-white border border-white/10 hover:bg-white/10">Close</button>
      </div>
    </Wrapper>
  );
};

export default WalletConnect;
