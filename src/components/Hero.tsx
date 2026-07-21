'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Code2,
  FileText,
  Send,
  Sparkles,
  ArrowRight,
  Database,
  Terminal,
  Server,
  Layers,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Hero: React.FC = () => {
  const [typedIndex, setTypedIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect loop
  useEffect(() => {
    const titles = PORTFOLIO_DATA.personalInfo.typedTitles;
    const fullText = titles[typedIndex % titles.length];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setTypedIndex((prev) => prev + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 40 : 90);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typedIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern"
    >
      {/* Radial Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Bio & Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 mb-6 text-xs font-medium text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{PORTFOLIO_DATA.personalInfo.statusText}</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 inline-block">
              {PORTFOLIO_DATA.personalInfo.name}
            </span>
          </h1>

          {/* Typewriter Subheading */}
          <div className="h-12 flex items-center text-xl sm:text-2xl font-bold font-mono text-cyan-300 mb-6">
            <span className="text-slate-400 mr-2">&gt;</span>
            <span>{currentText}</span>
            <span className="animate-pulse text-cyan-400 ml-1">|</span>
          </div>

          {/* Detailed Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
            {PORTFOLIO_DATA.personalInfo.subtitle}
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
            <a
              href="#projects"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-[0_0_25px_rgba(79,70,229,0.4)] hover:shadow-[0_0_35px_rgba(79,70,229,0.7)] transition-all duration-300 text-sm group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={PORTFOLIO_DATA.personalInfo.resumePdfUrl}
              download="Srikanth_Kapugorlla_Resume.pdf"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-cyan-300 bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] transition-all duration-300 text-sm"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-300 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/60 transition-all duration-300 text-sm"
            >
              <Send className="w-4 h-4 text-purple-400" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-slate-800/80">
            {PORTFOLIO_DATA.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Interactive Profile Card with Tech Floaters */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex items-center justify-center relative"
        >
          {/* Glass Avatar Card Frame */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Ambient Animated Ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 blur-xl opacity-40 animate-pulse" />

            <div className="relative w-full h-full glass-panel rounded-3xl p-3 border border-white/20 shadow-2xl flex flex-col overflow-hidden group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900">
                <Image
                  src={PORTFOLIO_DATA.personalInfo.avatarUrl}
                  alt={PORTFOLIO_DATA.personalInfo.name}
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                {/* Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 glass-panel rounded-xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold text-white">
                      Srikanth Kapugorla
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-slate-900/80 px-2 py-0.5 rounded border border-cyan-500/30">
                    Java Stack
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Tech Badges around profile */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 glass-panel px-3.5 py-2 rounded-2xl border border-cyan-500/30 flex items-center gap-2 shadow-lg z-20"
            >
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold text-slate-100">Java</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-1/2 -right-6 glass-panel px-3.5 py-2 rounded-2xl border border-purple-500/30 flex items-center gap-2 shadow-lg z-20"
            >
              <Database className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold text-slate-100">MySQL</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 left-8 glass-panel px-3.5 py-2 rounded-2xl border border-blue-500/30 flex items-center gap-2 shadow-lg z-20"
            >
              <Server className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold text-slate-100">Servlets / JDBC</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
