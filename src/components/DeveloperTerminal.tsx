'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Minimize2, Maximize2, CornerDownLeft } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const DeveloperTerminal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'welcome',
      output: (
        <div className="text-cyan-300 font-mono text-xs">
          <p className="font-bold text-cyan-400">Srikanth Kapugorlla Interactive Developer Shell v1.0.0</p>
          <p className="text-slate-400 mt-1">Type <span className="text-yellow-400">help</span> to view available commands.</p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let outputNode: React.ReactNode;

    switch (cmd) {
      case 'help':
        outputNode = (
          <div className="text-xs font-mono text-slate-300 space-y-1 my-1">
            <p className="text-cyan-400 font-bold">Available Commands:</p>
            <p><span className="text-yellow-400 w-24 inline-block">about</span> : Display Srikanth's background bio</p>
            <p><span className="text-yellow-400 w-24 inline-block">skills</span> : List technical stack & core Java skills</p>
            <p><span className="text-yellow-400 w-24 inline-block">projects</span> : View Employee & Student Management Systems</p>
            <p><span className="text-yellow-400 w-24 inline-block">contact</span> : Get phone, email, and social handles</p>
            <p><span className="text-yellow-400 w-24 inline-block">resume</span> : Get resume download link</p>
            <p><span className="text-yellow-400 w-24 inline-block">clear</span> : Clear terminal buffer</p>
            <p><span className="text-yellow-400 w-24 inline-block">hire</span> : Direct prompt for recruiter inquiries</p>
          </div>
        );
        break;

      case 'about':
        outputNode = (
          <p className="text-xs font-mono text-slate-300 my-1">
            {PORTFOLIO_DATA.personalInfo.bio}
          </p>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="text-xs font-mono text-slate-300 space-y-1 my-1">
            <p className="text-cyan-400 font-bold">Skills Summary:</p>
            <p>• Java (Core, OOP, Collections, Multithreading)</p>
            <p>• Advanced Java (JDBC, Servlets, JSP)</p>
            <p>• Databases (MySQL, SQL Queries)</p>
            <p>• Web Tech (HTML5, CSS3, JavaScript)</p>
            <p>• Version Control (Git, GitHub)</p>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="text-xs font-mono text-slate-300 space-y-2 my-1">
            <div>
              <p className="text-cyan-300 font-bold">1. Employee Management System</p>
              <p className="text-slate-400">Java + JDBC + MySQL CRUD application.</p>
            </div>
            <div>
              <p className="text-cyan-300 font-bold">2. Student Management System</p>
              <p className="text-slate-400">Full-Stack Java Servlets + JSP + MySQL Web Application.</p>
            </div>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="text-xs font-mono text-slate-300 space-y-1 my-1">
            <p>Email: <span className="text-cyan-400">{PORTFOLIO_DATA.personalInfo.email}</span></p>
            <p>Phone: <span className="text-cyan-400">{PORTFOLIO_DATA.personalInfo.phone}</span></p>
            <p>LinkedIn: <span className="text-purple-400">{PORTFOLIO_DATA.personalInfo.linkedin}</span></p>
            <p>GitHub: <span className="text-purple-400">{PORTFOLIO_DATA.personalInfo.github}</span></p>
          </div>
        );
        break;

      case 'resume':
        outputNode = (
          <p className="text-xs font-mono text-cyan-300 my-1">
            Resume PDF available at: <a href={PORTFOLIO_DATA.personalInfo.resumePdfUrl} download className="underline font-bold text-cyan-400">Srikanth_Kapugorlla_Resume.pdf</a>
          </p>
        );
        break;

      case 'hire':
        outputNode = (
          <div className="text-xs font-mono text-emerald-400 font-bold my-1">
            🚀 Srikanth is currently open for full-time Java Full Stack Developer and Software Engineer roles! Contact via email: {PORTFOLIO_DATA.personalInfo.email}
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        outputNode = (
          <p className="text-xs font-mono text-rose-400 my-1">
            Command not recognized: '{cmd}'. Type <span className="text-yellow-400">help</span> for command list.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: inputVal, output: outputNode }]);
    setInputVal('');
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-40 px-4 py-3 rounded-full glass-panel border border-cyan-500/40 text-cyan-400 hover:text-white hover:bg-cyan-500/20 shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all flex items-center gap-2 text-xs font-mono font-bold focus:outline-none"
        title="Open Developer Shell"
      >
        <TerminalIcon className="w-4 h-4 text-cyan-400" />
        <span className="hidden sm:inline">CLI Shell</span>
      </button>

      {/* Terminal Drawer Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 left-4 sm:left-6 z-50 w-[92vw] sm:w-[500px] h-[380px] glass-panel rounded-2xl border border-white/20 shadow-2xl flex flex-col overflow-hidden bg-slate-950/95 backdrop-blur-2xl"
          >
            {/* Title Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={() => setIsOpen(false)} />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs font-mono font-bold text-slate-300 ml-2">
                  srikanth@fullstack-cli ~
                </span>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white focus:outline-none"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-3">
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  {item.command !== 'welcome' && (
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="text-cyan-400 font-bold">$</span>
                      <span className="text-slate-200">{item.command}</span>
                    </div>
                  )}
                  <div>{item.output}</div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleCommandSubmit} className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2">
              <span className="text-cyan-400 font-mono font-bold text-xs">$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'help', 'skills', 'projects'..."
                className="flex-1 bg-transparent text-slate-100 font-mono text-xs focus:outline-none placeholder-slate-600"
                autoFocus
              />
              <button type="submit" className="text-cyan-400 hover:text-white">
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
