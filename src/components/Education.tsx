'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, BookOpen } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Qualifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-4" />
        </div>

        <div className="max-w-4xl mx-auto">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Icon & Degree Column */}
                <div className="md:col-span-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/30 inline-block mb-1">
                        {edu.degree} Degree
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                        {edu.field}
                      </h3>
                    </div>
                  </div>

                  <p className="text-lg font-semibold text-cyan-300 mb-2">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono mb-6">
                    <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {edu.year}
                    </span>
                    <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" />
                      {edu.location}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {edu.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CGPA Badge Column */}
                <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950/80 border border-slate-800 text-center shadow-inner">
                  <Award className="w-10 h-10 text-amber-400 mb-2 animate-bounce" />
                  <span className="text-xs uppercase font-mono tracking-widest text-slate-400 mb-1">
                    Cumulative CGPA
                  </span>
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-cyan-400 to-blue-400">
                    {edu.cgpa}
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400/80 mt-2 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
                    Scale 10.0
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
