'use client';

import React from 'react';
import { Code2, Heart, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-slate-950 border-t border-slate-900 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px]">
            <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
              <Code2 className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
          <span className="text-sm font-bold text-white tracking-tight">
            Srikanth Kapugorla<span className="text-cyan-400">.</span>
          </span>
        </div>

        {/* Center Credits */}
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-xs text-slate-400 font-mono">
            © 2026 {PORTFOLIO_DATA.personalInfo.name}. All rights reserved.
          </p>
          <p className="text-[11px] text-slate-500 font-mono">
            Built with <span className="text-cyan-400 font-semibold">React</span> +{' '}
            <span className="text-purple-400 font-semibold">Tailwind CSS</span> +{' '}
            <span className="text-blue-400 font-semibold">Next.js</span>
          </p>
        </div>

        {/* Back to Top link */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg bg-slate-900 border border-slate-800"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
