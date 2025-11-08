import React from 'react';
import { Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} x402ZK — Privacy-first Web3 payments.</p>
        <div className="flex items-center gap-3">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white border border-white/10">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white border border-white/10">
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
