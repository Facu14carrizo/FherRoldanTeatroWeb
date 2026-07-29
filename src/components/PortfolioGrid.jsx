import React, { useState } from 'react';
import { works, categories } from '../data/fherData';
import { Drama, Award, User, Feather, Clapperboard, Layers, X, ExternalLink, Sparkles } from 'lucide-react';

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedWork, setSelectedWork] = useState(null);

  const filteredWorks = works.filter((work) => {
    if (activeCategory === 'all') return true;
    return work.roles.includes(activeCategory);
  });

  const getRoleBadge = (role) => {
    switch (role) {
      case 'dramaturgo':
        return (
          <span key={role} className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1">
            <Feather className="w-3 h-3" /> Dramaturgia
          </span>
        );
      case 'director':
        return (
          <span key={role} className="px-2.5 py-1 rounded-full text-xs font-semibold bg-red-600/20 text-red-300 border border-red-500/30 flex items-center gap-1">
            <Clapperboard className="w-3 h-3" /> Dirección
          </span>
        );
      case 'actor':
        return (
          <span key={role} className="px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/30 flex items-center gap-1">
            <User className="w-3 h-3" /> Actor
          </span>
        );
      case 'productor':
        return (
          <span key={role} className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/30 flex items-center gap-1">
            <Layers className="w-3 h-3" /> Producción
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="obras" className="py-20 sm:py-24 bg-[#141210] relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Drama className="w-4 h-4" /> Repertorio & Trayectoria
          </div>
          <h2 className="section-title">Obras y Roles Destacados</h2>
          <p className="section-subtitle">
            Explora las obras escritas, dirigidas, actuadas y producidas por Fher Roldán a lo largo de su carrera.
          </p>
        </div>

        {/* Filter Category Tabs - Touch Scrollable on Mobile */}
        <div className="flex overflow-x-auto no-scrollbar justify-start sm:justify-center gap-2.5 mb-8 sm:mb-12 pb-2 px-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shrink-0 whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-[#0a0908] shadow-lg shadow-amber-500/20 scale-105 font-bold'
                  : 'bg-[#1e1b18] text-[#a8a29e] hover:text-[#f5f5f4] border border-white/5 hover:border-amber-500/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              onClick={() => setSelectedWork(work)}
              className="glass-card group cursor-pointer flex flex-col justify-between hover:border-[#f59e0b]/50 relative overflow-hidden"
            >
              <div>
                {/* Play Poster / Banner Image */}
                {work.image && (
                  <div className="-mx-6 -mt-6 mb-4 h-48 sm:h-52 overflow-hidden bg-[#0a0908] relative">
                    <img
                      src={work.image}
                      alt={work.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-transparent opacity-90" />
                  </div>
                )}

                {/* Role badges */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {work.roles.map((r) => getRoleBadge(r))}
                  {work.seasons && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      {work.seasons}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#f5f5f4] group-hover:text-[#f59e0b] transition-colors mb-1.5">
                  {work.title}
                </h3>

                {/* Tagline / Frase */}
                {work.tagline && (
                  <p className="text-xs text-[#d6d3d1] italic font-serif mb-2">
                    {work.tagline}
                  </p>
                )}

                {/* Acted Character notice */}
                {work.actedCharacter && (
                  <p className="text-xs text-[#f59e0b] font-medium mb-3 italic">
                    Personaje: {work.actedCharacter}
                  </p>
                )}

                <p className="text-xs sm:text-sm text-[#a8a29e] line-clamp-3 mb-4 leading-relaxed">
                  {work.description}
                </p>
              </div>

              {/* Card Footer */}
              <div>
                {work.awards && work.awards.length > 0 && (
                  <div className="mb-3.5 p-2.5 rounded-lg bg-[#991b1b]/15 border border-[#991b1b]/30">
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#f59e0b] uppercase tracking-wider flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" /> Premiada
                    </span>
                    <p className="text-xs text-[#d6d3d1] truncate mt-0.5">
                      {work.awards[0]}
                    </p>
                  </div>
                )}

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#f59e0b] font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Ver Ficha Técnica</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Responsive Mobile Modal View */}
      {selectedWork && (
        <div className="modal-overlay" onClick={() => setSelectedWork(null)}>
          <div className="modal-content overflow-hidden max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedWork(null)}
              className="absolute top-4 right-4 z-20 text-[#a8a29e] hover:text-[#f5f5f4] p-2 focus:outline-none bg-[#141210]/80 rounded-full border border-white/10 backdrop-blur-md"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Banner */}
            {selectedWork.image && (
              <div className="-mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 h-56 sm:h-64 overflow-hidden relative bg-[#0a0908]">
                <img
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-transparent opacity-90" />
              </div>
            )}

            <div className="flex flex-wrap gap-1.5 mb-3 pr-8">
              {selectedWork.roles.map((r) => getRoleBadge(r))}
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#f5f5f4] mb-1 leading-snug">
              {selectedWork.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#f59e0b] font-serif italic mb-4 sm:mb-6">
              {selectedWork.type}
            </p>

            <div className="space-y-4 mb-6 text-xs sm:text-sm">
              <div>
                <h4 className="text-[11px] uppercase tracking-wider text-[#a8a29e] font-bold mb-1">Sinopsis</h4>
                <p className="text-[#d6d3d1] leading-relaxed">{selectedWork.description}</p>
              </div>

              {selectedWork.actedCharacter && (
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider text-[#a8a29e] font-bold mb-1">Rol Interpretado</h4>
                  <p className="text-[#f59e0b] font-semibold">{selectedWork.actedCharacter}</p>
                </div>
              )}

              {selectedWork.details && (
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider text-[#a8a29e] font-bold mb-1">Puesta en Escena</h4>
                  <p className="text-[#a8a29e] leading-relaxed">{selectedWork.details}</p>
                </div>
              )}

              {selectedWork.awards && selectedWork.awards.length > 0 && (
                <div className="p-3.5 rounded-xl bg-[#991b1b]/20 border border-[#991b1b]/40">
                  <h4 className="text-[11px] uppercase tracking-wider text-[#f59e0b] font-bold mb-2 flex items-center gap-1.5">
                    <Award className="w-4 h-4" /> Reconocimientos
                  </h4>
                  <ul className="space-y-1 text-xs text-[#f5f5f4]">
                    {selectedWork.awards.map((award, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shrink-0" /> {award}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedWork(null)}
                className="btn btn-secondary text-xs uppercase tracking-wider w-full sm:w-auto"
              >
                Cerrar Ficha
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
