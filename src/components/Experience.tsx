'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-dots-pattern">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Engineering internship and hands-on industrial workflows at leading global technology companies.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Glowing Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 shadow-[0_0_10px_rgba(56,189,248,0.5)] -translate-x-1/2 hidden md:block" />

          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mb-12"
            >
              {/* Timeline Center Node */}
              <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-cyan-400 items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.6)] z-20">
                <Briefcase className="w-4 h-4 text-cyan-400" />
              </div>

              {/* Card Container */}
              <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 relative z-10 shadow-2xl">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                        {exp.role}
                      </span>
                      <span className="text-xs font-mono text-purple-400 font-semibold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Verified Internship
                      </span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
                      <span>{exp.company}</span>
                    </h3>
                  </div>

                  <div className="flex flex-col items-start md:items-end text-xs text-slate-400 font-mono gap-1">
                    <span className="flex items-center gap-1.5 text-cyan-300 font-semibold bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Highlights list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                  {exp.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-[11px] font-semibold bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
