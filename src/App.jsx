import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WalletConnect from './components/WalletConnect';
import ResponsiveShowcase from './components/ResponsiveShowcase';
import Footer from './components/Footer';

const useDevice = () => {
  const [device, setDevice] = useState('desktop');
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setDevice('desktop');
      else if (w >= 768) setDevice('tablet');
      else setDevice('mobile');
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return device;
};

const shorten = (addr) => (addr ? `${addr.slice(0, 4)}...${addr.slice(-4)}` : '');

function App() {
  const device = useDevice();
  const [walletModal, setWalletModal] = useState(false);
  const [publicKey, setPublicKey] = useState('');

  const shortAddress = useMemo(() => shorten(publicKey), [publicKey]);

  const handleConnectClick = () => setWalletModal(true);
  const handleCloseModal = () => setWalletModal(false);

  const handleConnectWallet = async (providerName) => {
    // Mock connect: In real app, integrate Phantom/Solana wallet adapters.
    const fake = `Gk${Math.random().toString(36).slice(2, 6)}...${Math.random().toString(36).slice(2, 6)}Z`;
    setPublicKey(fake.replace('...', '')); // store without dots for display util
  };

  return (
    <div className="min-h-screen bg-[#0B0C10] font-inter text-white">
      <Navbar
        onConnectClick={handleConnectClick}
        isConnected={!!publicKey}
        shortAddress={shortAddress}
        device={device}
      />

      <main>
        <Hero onPrimaryClick={handleConnectClick} device={device} />
        <ResponsiveShowcase device={device} />
      </main>

      <Footer />

      <WalletConnect
        open={walletModal}
        onClose={handleCloseModal}
        onConnect={handleConnectWallet}
        isConnected={!!publicKey}
        shortAddress={shortAddress}
        device={device}
      />
    </div>
  );
}

export default App;
