import React from 'react';
import { workshopsInfo } from '../data/fherData';
import { GraduationCap, Users, Sparkles, BookOpen, Smile, UserCheck, Heart } from 'lucide-react';

export default function WorkshopsSection() {
  return (
    <section id="talleres" className="py-24 bg-[#141210] relative">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap className="w-4 h-4" /> Docencia & Formación
          </div>
          <h2 className="section-title">{workshopsInfo.title}</h2>
          <p className="section-subtitle">
            {workshopsInfo.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Pedagogical Description */}
          <div className="lg:col-span-4 glass-card bg-gradient-to-b from-[#1e1b18] to-[#0a0908] border-[#f59e0b]/30">
            <div className="p-3 rounded-xl bg-[#f59e0b]/10 text-[#f59e0b] w-fit mb-6">
              <BookOpen className="w-8 h-8" />
            </div>
            
            <h3 className="font-serif text-3xl font-bold text-white mb-4">
              Pedagogía Teatral
            </h3>
            
            <p className="text-sm text-[#d6d3d1] mb-6 leading-relaxed">
              {workshopsInfo.description}
            </p>

            <p className="text-xs text-[#a8a29e] border-t border-white/10 pt-4 leading-relaxed italic">
              "Promuevo espacios inclusivos donde la formación actoral se entrelaza con el crecimiento personal y la expresión genuina."
            </p>

            <a href="#contacto" className="btn btn-primary w-full mt-6 text-sm">
              Consultar Horarios y Cupos
            </a>
          </div>

          {/* Workshop Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {workshopsInfo.groups.map((group, index) => (
              <div key={index} className="glass-card hover:border-[#f59e0b] flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#991b1b]/20 border border-[#991b1b]/40 flex items-center justify-center text-[#f59e0b] mb-4 group-hover:scale-110 transition-transform">
                    {index === 0 && <Smile className="w-6 h-6" />}
                    {index === 1 && <Users className="w-6 h-6" />}
                    {index === 2 && <UserCheck className="w-6 h-6" />}
                  </div>

                  <h4 className="font-serif text-2xl font-bold text-white mb-2">
                    {group.age}
                  </h4>

                  <p className="text-xs text-[#a8a29e] leading-relaxed mb-4">
                    {group.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#f59e0b] flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Muestra Final en Sala
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
