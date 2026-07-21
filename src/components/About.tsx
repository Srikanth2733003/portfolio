'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Code, CheckCircle2, Terminal, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Software & Full Stack Aspirations</h3>
                  <p className="text-xs text-slate-400 font-mono">B.Tech ECE Undergraduate (2022–2026)</p>
                </div>
              </div>

              <p className="text-slate-300 text-base leading-relaxed mb-6">
                "{PORTFOLIO_DATA.personalInfo.bio}"
              </p>

              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Through my academic coursework at BIHER and practical hands-on development, I've built a solid foundation in Object-Oriented System Architecture, relational databases with MySQL, and server-side web APIs using Java Servlets & JSP. My goal is to build secure, scalable backend applications and seamless user interfaces.
              </p>
            </div>

            {/* Key Traits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Problem Solver & Algorithmic Thinker</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Clean Code & MVC Architecture</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Database Optimization & SQL Queries</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Continuous Tech Learning</span>
              </div>
            </div>
          </motion.div>

          {/* Core Tech Highlights Badge Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Code className="w-5 h-5 text-cyan-400" />
                  <span>Core Skill Highlights</span>
                </h3>
                <Sparkles className="w-4 h-4 text-purple-400" />
              </div>

              <p className="text-xs text-slate-400 mb-6">
                Technologies and tools I work with daily:
              </p>

              <div className="flex flex-wrap gap-2.5">
                {PORTFOLIO_DATA.aboutHighlights.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-cyan-300 bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 shadow-md transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Quick Education & Internship Summary Box */}
            <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-400 block mb-1">
                  Education & Internship
                </span>
                <span className="text-sm font-bold text-white block">
                  B.Tech ECE @ BIHER | Intern @ Bosch
                </span>
              </div>
              <Award className="w-8 h-8 text-cyan-400 opacity-80" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
