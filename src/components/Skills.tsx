'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Cpu,
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

// Icon map helper
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Programming: <Code2 className="w-5 h-5 text-cyan-400" />,
  Frontend: <Layout className="w-5 h-5 text-blue-400" />,
  Backend: <Server className="w-5 h-5 text-indigo-400" />,
  Database: <Database className="w-5 h-5 text-purple-400" />,
  'Tools & Workflow': <Wrench className="w-5 h-5 text-emerald-400" />,
  'Core Java Concepts': <Cpu className="w-5 h-5 text-pink-400" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-dots-pattern">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MY TECHNICAL TOOLKIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Proficiencies</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Comprehensive skill set across Java Full Stack ecosystem, database architectures, and engineering tools.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_12px_40px_rgba(56,189,248,0.15)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                    {CATEGORY_ICONS[cat.category] || <Code2 className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-slate-400">{cat.description}</p>
                  </div>
                </div>

                <div className="w-full h-px bg-slate-800 my-4" />

                {/* Skill List */}
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                          {skill.name}
                        </span>
                        <span className="font-mono text-cyan-400">{skill.level}%</span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full h-2 rounded-full bg-slate-900 border border-slate-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.6)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>VERIFIED SKILL</span>
                <span className="text-cyan-400/80">HANDS-ON</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
