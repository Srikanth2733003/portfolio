'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink, GitBranch, Star, Code2, Sparkles, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const GithubSection: React.FC = () => {
  const stats = PORTFOLIO_DATA.githubStats;

  // Fake contribution grid mock with active commit heat color cells
  const contributionWeeks = Array.from({ length: 30 }, (_, w) =>
    Array.from({ length: 7 }, (_, d) => {
      const active = Math.random() > 0.45;
      const intensity = active ? Math.floor(Math.random() * 4) + 1 : 0;
      return intensity;
    })
  );

  const getCellBg = (intensity: number) => {
    switch (intensity) {
      case 1:
        return 'bg-cyan-950/60 border-cyan-800/40';
      case 2:
        return 'bg-cyan-700/70 border-cyan-600/50 shadow-[0_0_6px_rgba(56,189,248,0.3)]';
      case 3:
        return 'bg-cyan-500 border-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.6)]';
      case 4:
        return 'bg-purple-500 border-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.8)]';
      default:
        return 'bg-slate-900/50 border-slate-800/60';
    }
  };

  return (
    <section id="github" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-dots-pattern">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-3">
            <FaGithub className="w-3.5 h-3.5 text-cyan-400" />
            <span>OPEN SOURCE & CODE ACTIVITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            GitHub <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Contributions</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Continuous development activity, open source repositories, and version control metrics.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-4" />
        </div>

        {/* GitHub Overview Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 shadow-2xl max-w-5xl mx-auto overflow-hidden relative"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400 shadow-inner">
                <FaGithub className="w-10 h-10" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white">@{stats.username}</h3>
                  <span className="text-[10px] font-mono bg-cyan-500/10 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30">
                    Active Committer
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  Primary Language: <span className="text-cyan-400 font-bold">{stats.topLanguage}</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full lg:w-auto">
              <div className="glass-panel p-4 rounded-2xl border border-slate-800 text-center">
                <span className="text-2xl font-black text-cyan-400 block">{stats.publicRepos}</span>
                <span className="text-[11px] font-mono text-slate-400">Repositories</span>
              </div>
              <div className="glass-panel p-4 rounded-2xl border border-slate-800 text-center">
                <span className="text-2xl font-black text-purple-400 block">{stats.totalCommits}</span>
                <span className="text-[11px] font-mono text-slate-400">Commits</span>
              </div>
              <div className="glass-panel p-4 rounded-2xl border border-slate-800 text-center col-span-2 sm:col-span-1">
                <span className="text-2xl font-black text-blue-400 block">{stats.contributionsThisYear}</span>
                <span className="text-[11px] font-mono text-slate-400">Contributions</span>
              </div>
            </div>
          </div>

          {/* Interactive Heatmap Matrix */}
          <div className="pt-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-slate-300 font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>2026 Commit Activity Heatmap</span>
              </span>
              <a
                href={PORTFOLIO_DATA.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
              >
                <span>View Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Matrix grid */}
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-1.5 min-w-[640px] justify-between">
                {contributionWeeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1.5">
                    {week.map((intensity, dIdx) => (
                      <div
                        key={dIdx}
                        className={`w-3 h-3 rounded-[3px] border ${getCellBg(intensity)} transition-all duration-300 hover:scale-125 cursor-pointer`}
                        title={`Day ${dIdx + 1}, Week ${wIdx + 1}: ${intensity > 0 ? `${intensity * 3} commits` : 'No commits'}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-end gap-2 text-[10px] font-mono text-slate-500 mt-4">
              <span>Less</span>
              <div className="w-2.5 h-2.5 rounded-[2px] bg-slate-900 border border-slate-800" />
              <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-950/60 border border-cyan-800/40" />
              <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-700/70 border border-cyan-600/50" />
              <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-500 border border-cyan-400" />
              <div className="w-2.5 h-2.5 rounded-[2px] bg-purple-500 border border-purple-400" />
              <span>More</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
