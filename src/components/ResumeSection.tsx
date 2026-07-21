'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, ExternalLink, CheckCircle2, Sparkles, UserCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>CURRICULUM VITAE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Resume</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Download my verified software developer resume detailing my Java Full Stack qualifications, technical projects, and internship work.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 hover:border-cyan-500/40 shadow-2xl max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Resume Summary */}
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">Srikanth Kapugorlla</h3>
                  <p className="text-xs font-mono text-cyan-400">Java Full Stack Developer Resume PDF</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                My resume provides a complete overview of my engineering background, core Java competencies, database schemas, full-stack MVC projects, and Bosch internship experience.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>B.Tech Electronics & Communication Engineering (2022–2026)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Tap Academy Full Stack Java Development Training</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Employee & Student Management System Projects</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Bosch Vehicle Testing Internship Certificate</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={PORTFOLIO_DATA.personalInfo.resumePdfUrl}
                  download="Srikanth_Kapugorlla_Resume.pdf"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-[0_0_25px_rgba(79,70,229,0.4)] hover:shadow-[0_0_35px_rgba(79,70,229,0.7)] transition-all duration-300 text-xs group"
                >
                  <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                  <span>Download Resume PDF</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.personalInfo.resumePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-cyan-300 bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 hover:border-cyan-400 transition-all duration-300 text-xs"
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>Preview PDF</span>
                </a>
              </div>
            </div>

            {/* Resume Preview Mock Graphic */}
            <div className="md:col-span-5 flex justify-center">
              <div className="w-full max-w-[280px] h-[360px] glass-panel rounded-2xl border border-white/10 p-4 bg-slate-950 flex flex-col justify-between shadow-2xl relative group">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-cyan-400" />
                    <span className="text-[11px] font-mono font-bold text-slate-300">Resume.pdf</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    PDF Document
                  </span>
                </div>

                <div className="space-y-3 my-4">
                  <div className="h-4 bg-slate-800 rounded w-3/4 animate-pulse" />
                  <div className="h-3 bg-slate-800/60 rounded w-full" />
                  <div className="h-3 bg-slate-800/60 rounded w-5/6" />
                  <div className="h-3 bg-slate-800/60 rounded w-2/3" />
                  <div className="h-12 bg-cyan-950/30 rounded border border-cyan-500/20 p-2 text-[10px] font-mono text-cyan-300 flex items-center justify-between">
                    <span>Java, Servlets, JSP, MySQL</span>
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                </div>

                <a
                  href={PORTFOLIO_DATA.personalInfo.resumePdfUrl}
                  download="Srikanth_Kapugorlla_Resume.pdf"
                  className="w-full py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Click to Download</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
