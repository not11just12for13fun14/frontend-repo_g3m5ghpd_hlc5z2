import React from 'react';
import { Home, Package, ShoppingCart, Settings } from 'lucide-react';

const StatCard = ({ label, value }) => (
  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
    <p className="text-gray-400 text-xs">{label}</p>
    <p className="text-white text-2xl font-semibold mt-1">{value}</p>
  </div>
);

const RecentRow = ({ hash, status }) => (
  <div className="grid grid-cols-3 text-xs sm:text-sm text-gray-300 py-2 border-b border-white/5">
    <span className="font-mono truncate">{hash}</span>
    <span>0.25 SOL</span>
    <span className={status === 'Verified' ? 'text-emerald-400' : status === 'Pending' ? 'text-amber-400' : 'text-cyan-300'}>{status}</span>
  </div>
);

const ResponsiveShowcase = ({ device }) => {
  return (
    <section id="sellers" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-white text-2xl sm:text-3xl font-semibold">Designed for every device</h2>
      <p className="text-gray-300 mt-2 max-w-2xl">x402ZK adapts to desktop dashboards, tablet hybrids, and mobile-native flows with bottom navigation and large CTAs.</p>

      {/* Desktop mock */}
      <div className="mt-8 grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-white font-medium mb-3">Desktop Dashboard</p>
          <div className="grid grid-cols-3 gap-3">
            <StatCard label="Revenue" value="$12,340" />
            <StatCard label="Orders" value="128" />
            <StatCard label="Products" value="12" />
          </div>
          <div className="mt-4 rounded-xl border border-white/10 bg-black/30 p-3">
            <div className="grid grid-cols-3 text-xs text-gray-400 pb-2 border-b border-white/10">
              <span>TX</span><span>Amount</span><span>Status</span>
            </div>
            <div>
              <RecentRow hash="9x0f...a2c4" status="Verified" />
              <RecentRow hash="1b90...ff21" status="Pending" />
              <RecentRow hash="77ae...1309" status="Confirmed" />
            </div>
          </div>
        </div>

        {/* Mobile mock */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-white font-medium mb-3">Mobile Native</p>
          <div className="rounded-xl border border-white/10 overflow-hidden">
            <div className="p-4 bg-black/40">
              <div className="rounded-lg bg-white/5 p-4">
                <p className="text-white">Product Checkout</p>
                <p className="text-xs text-gray-400">0.25 SOL • Seller: zk.store</p>
                <button className="mt-3 w-full py-3 rounded-md bg-[#00E5FF] text-[#0B0C10] font-medium shadow-[0_0_30px_rgba(0,229,255,0.5)]">Pay Now</button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-1 p-2 bg-black/60 border-t border-white/10">
              {[Home, Package, ShoppingCart, Settings].map((Icon, i) => (
                <button key={i} className={`flex flex-col items-center gap-1 py-2 rounded-md ${i===0 ? 'text-white bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveShowcase;
