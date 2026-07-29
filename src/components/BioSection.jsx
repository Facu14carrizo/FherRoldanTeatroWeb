import React from 'react';
import { fherBio } from '../data/fherData';
import { GraduationCap, HeartHandshake, Sparkles, BookOpen, Quote, CheckCircle2 } from 'lucide-react';

export default function BioSection() {
  return (
    <section id="perfil" className="py-24 bg-[#141210] relative">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <BookOpen className="w-4 h-4" /> Trayectoria y Filosofía
          </div>
          <h2 className="section-title">Un poco sobre mí</h2>
          <p className="section-subtitle">
            Actor, director, dramaturgo y profesor comprometido con el teatro comunitario y la expresión colectiva.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Bio Text Card */}
          <div className="lg:col-span-7 glass-card flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-3xl font-bold text-[#f59e0b] mb-6 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-[#f59e0b]" /> Biografía y Formación
              </h3>
              
              <div className="space-y-4 text-[#d6d3d1] text-base leading-relaxed">
                {fherBio.fullBio.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Education Badge List */}
            <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.08)]">
              <h4 className="text-xs uppercase tracking-widest text-[#a8a29e] mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#f59e0b]" /> Formación Destacada
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {fherBio.education.map((edu, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0a0908]/60 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0 mt-1" />
                    <div>
                      <span className="text-sm font-semibold text-[#f5f5f4] block leading-snug">{edu.title}</span>
                      <span className="text-xs text-[#a8a29e]">{edu.institution || edu.mentor || edu.context}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Philosophy Card */}
          <div className="lg:col-span-5 glass-card bg-gradient-to-b from-[#1e1b18] to-[#171412] border-[#991b1b]/30 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Quote className="w-32 h-32 text-[#f59e0b]" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-[#991b1b]/20 border border-[#991b1b]/40">
                  <HeartHandshake className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#f5f5f4]">Filosofía de Trabajo</h3>
                  <span className="text-xs uppercase tracking-wider text-[#a8a29e]">El teatro como herramienta</span>
                </div>
              </div>

              <div className="space-y-4 text-[#d6d3d1] text-base leading-relaxed italic relative z-10">
                {fherBio.philosophy.split('\n\n').map((para, idx) => (
                  <p key={idx} className="border-l-2 border-[#f59e0b] pl-4">
                    "{para}"
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-[#991b1b]/15 border border-[#991b1b]/30 text-center">
              <span className="text-xs uppercase tracking-widest text-[#f59e0b] font-bold block mb-1">
                Premisa Central
              </span>
              <p className="text-sm text-[#f5f5f4] font-serif italic">
                "Creatividad, palabra y emoción para fortalecer los vínculos humanos en la comunidad."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
