import React from 'react';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ParticlesBg } from '@/components/ParticlesBg';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Certifications } from '@/components/Certifications';
import { GithubSection } from '@/components/GithubSection';
import { ResumeSection } from '@/components/ResumeSection';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { DeveloperTerminal } from '@/components/DeveloperTerminal';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Reading Scroll Bar */}
      <ScrollProgress />

      {/* Interactive Background Canvas */}
      <ParticlesBg />

      {/* Navigation Header */}
      <Navbar />

      {/* Page Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <GithubSection />
      <ResumeSection />
      <Contact />
      <Footer />

      {/* Interactive Developer CLI Terminal */}
      <DeveloperTerminal />

      {/* Floating Action Button */}
      <BackToTop />
    </main>
  );
}
