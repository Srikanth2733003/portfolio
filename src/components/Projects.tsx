'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FolderGit2,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Database,
  Server,
  Layers,
  Code2,
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Real-world full-stack web applications and desktop management systems built with Java, Servlets, JSP, JDBC, and MySQL.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Projects Stack */}
        <div className="space-y-12">
          {PORTFOLIO_DATA.projects.map((project: Project, idx: number) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_16px_50px_rgba(56,189,248,0.15)] transition-all duration-500 group overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Text Details Side */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                        {project.id === 'employee-management-system' ? 'JAVA + JDBC APP' : 'FULL STACK WEB APP'}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">Project #0{idx + 1}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400/90 mb-4">{project.subtitle}</p>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      {project.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-900/90 text-cyan-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4">
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all duration-300 text-xs"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 transition-all duration-300 text-xs"
                      >
                        <FaGithub className="w-4 h-4 text-cyan-400" />
                        <span>GitHub Code</span>
                      </a>
                    </div>
                  </div>

                  {/* Visual Representation Card Side */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="glass-panel p-6 rounded-2xl border border-white/10 bg-slate-950/80 shadow-2xl relative overflow-hidden group-hover:border-cyan-500/30 transition-colors">
                      {/* Fake Browser Window Header */}
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/80" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                          <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 truncate max-w-[200px]">
                          {project.title.toLowerCase().replace(/\s+/g, '')}.app
                        </span>
                        <Code2 className="w-4 h-4 text-slate-600" />
                      </div>

                      {/* Mock App Controller Architecture View */}
                      <div className="space-y-3">
                        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                            <Server className="w-4 h-4 text-cyan-400" />
                            <span>MVC Controller / Servlet</span>
                          </div>
                          <span className="text-[10px] bg-cyan-500/10 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30">
                            Active
                          </span>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                            <Layers className="w-4 h-4 text-purple-400" />
                            <span>JDBC Connection Pool</span>
                          </div>
                          <span className="text-[10px] bg-purple-500/10 text-purple-300 px-2 py-0.5 rounded border border-purple-500/30">
                            Connected
                          </span>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                            <Database className="w-4 h-4 text-blue-400" />
                            <span>MySQL Database Schema</span>
                          </div>
                          <span className="text-[10px] bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
                            CRUD Engine
                          </span>
                        </div>
                      </div>

                      {/* Live Demo Banner overlay */}
                      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                        <span className="text-xs font-mono text-slate-400">Live Hosted Deployment:</span>
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono font-bold text-cyan-400 hover:underline flex items-center gap-1"
                        >
                          <span>Open App</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
