import React from 'react';
import { awards } from '../data/fherData';
import { Trophy, Award, Medal, Star, Sparkles } from 'lucide-react';

export default function AwardsSection() {
  return (
    <section id="premios" className="py-24 bg-[#0a0908] relative spotlight-bg">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Trophy className="w-4 h-4" /> Distinciones
          </div>
          <h2 className="section-title">Reconocimientos Obtenidos</h2>
          <p className="section-subtitle">
            Logros competitivos y selecciones oficiales de las producciones dirigidas por Fher Roldán junto a LA COLMENA.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {awards.map((item, index) => (
            <div
              key={index}
              className="glass-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#f59e0b] group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#991b1b]/30 to-[#f59e0b]/20 border border-[#f59e0b]/30 text-[#f59e0b] group-hover:scale-110 transition-transform">
                  <Trophy className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#f59e0b] bg-[#f59e0b]/10 px-2.5 py-0.5 rounded-full border border-[#f59e0b]/20">
                      {item.year}
                    </span>
                    <span className="text-xs text-[#a8a29e]">{item.competition}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#f5f5f4] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#d6d3d1] italic">
                    Obra: <strong className="text-white font-not-italic">{item.play}</strong>
                  </p>
                </div>
              </div>

              <div className="md:text-right w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-white/5">
                <span className="text-xs uppercase tracking-wider text-[#a8a29e] block mb-1">Rol en la Producción</span>
                <span className="text-sm font-semibold text-[#f59e0b] bg-[#141210] px-3 py-1.5 rounded-lg border border-white/5 inline-block">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Special mention highlight */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-[#991b1b]/20 via-[#141210] to-[#f59e0b]/10 border border-[#f59e0b]/30">
          <Sparkles className="w-8 h-8 text-[#f59e0b] mx-auto mb-3" />
          <h4 className="font-serif text-xl font-bold text-white mb-2">
            Compromiso con el Teatro Independiente
          </h4>
          <p className="text-sm text-[#a8a29e]">
            Estos reconocimientos avalan la excelencia artística y el trabajo colectivo sostenido en el tiempo por el elenco y la producción de LA COLMENA.
          </p>
        </div>

      </div>
    </section>
  );
}
