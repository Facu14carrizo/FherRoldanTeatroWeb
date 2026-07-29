import React, { useState } from 'react';
import { Sparkles, Award, ArrowRight, Play, BookOpen, UserCheck, Drama, Bell, Flame, Heart } from 'lucide-react';
import { fherBio } from '../data/fherData';

export default function Hero() {
  const [curtainCall, setCurtainCall] = useState(false);
  const [applauseCount, setApplauseCount] = useState(148);

  const handleCurtainCall = () => {
    setCurtainCall(true);
    setApplauseCount(prev => prev + 1);
    setTimeout(() => setCurtainCall(false), 3000);
  };

  return (
    <section id="inicio" className="relative min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 flex items-center overflow-hidden spotlight-bg">
      {/* Background Lighting Effects */}
      <div className="absolute top-1/4 left-10 w-60 sm:w-80 h-60 sm:h-80 bg-[#991b1b]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 sm:w-[30rem] h-72 sm:h-[30rem] bg-[#f59e0b]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Exciting Curtain Call Flash Effect */}
      {curtainCall && (
        <div className="fixed inset-0 z-50 pointer-events-none bg-gradient-to-r from-[#991b1b]/40 via-[#f59e0b]/30 to-[#991b1b]/40 animate-pulse flex items-center justify-center p-4">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0a0908]/95 border border-[#f59e0b] text-center shadow-2xl backdrop-blur-xl animate-bounce max-w-sm w-full">
            <Bell className="w-10 h-10 sm:w-12 sm:h-12 text-[#f59e0b] mx-auto mb-2 animate-spin" />
            <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">¡3.ª LLAMADA DE TEATRO!</span>
            <span className="text-xs sm:text-sm font-sans text-[#f59e0b] uppercase tracking-widest block mt-1 font-semibold">«¡Mucha Mierda para la función!»</span>
          </div>
        </div>
      )}

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Text Content - Centered on Mobile, Left-aligned on Desktop */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
            
            {/* Top Interactive Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-4 sm:mb-6">
              <div className="section-tag flex items-center gap-2 m-0 text-[11px] sm:text-xs">
                <Flame className="w-3.5 h-3.5 text-[#f59e0b] animate-bounce" />
                <span>Teatro Comunitario & Independiente</span>
              </div>

              <button
                onClick={handleCurtainCall}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-[#991b1b]/30 text-amber-300 border border-[#991b1b]/50 hover:bg-[#991b1b] transition-all flex items-center gap-1.5 cursor-pointer shadow-lg active:scale-95"
              >
                <Bell className="w-3.5 h-3.5" /> 3.ª Llamada ({applauseCount} 👏)
              </button>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#f5f5f4] leading-[1.08] mb-3 sm:mb-4">
              Fher Roldán
            </h1>

            {/* Sub-heading / Roles */}
            <p className="text-lg sm:text-2xl text-[#f59e0b] font-serif italic mb-4 sm:mb-6 leading-snug sm:leading-relaxed font-semibold">
              Actor · Director Teatral · Dramaturgo · Profesor de Lengua y Literatura · Productor
            </p>

            {/* Bio excerpt */}
            <p className="text-sm sm:text-lg text-[#a8a29e] mb-6 sm:mb-8 max-w-2xl leading-relaxed">
              Más de dos décadas de pasión escénica y pedagógica. Director General de la <strong className="text-[#f5f5f4]">Compañía Teatral LA COLMENA</strong>, impulsando la transformación social a través del arte colectivo.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-8 sm:mb-12">
              <a href="#obras" className="btn btn-primary text-sm sm:text-base w-full sm:w-auto py-3.5">
                Explorar Obras y Roles <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#galeria" className="btn btn-curtain text-sm sm:text-base w-full sm:w-auto py-3.5">
                Ver Galería Escénica
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 w-full pt-6 sm:pt-8 border-t border-[rgba(255,255,255,0.08)]">
              <div className="p-3 rounded-xl bg-[#141210]/60 border border-white/5 text-center lg:text-left">
                <span className="font-serif text-2xl sm:text-4xl font-bold text-[#f5f5f4] block">20+</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#a8a29e]">Años de Trayectoria</span>
              </div>
              <div className="p-3 rounded-xl bg-[#141210]/60 border border-white/5 text-center lg:text-left">
                <span className="font-serif text-2xl sm:text-4xl font-bold text-[#f59e0b] block">2013</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#a8a29e]">Director LA COLMENA</span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-[#141210]/60 border border-white/5 text-center lg:text-left">
                <span className="font-serif text-2xl sm:text-4xl font-bold text-[#f5f5f4] block">Premiado</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#a8a29e]">Juegos Bonaerenses / CPTI</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Decorative Stage Curtain Framing */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#991b1b] via-[#f59e0b] to-[#991b1b] rounded-2xl sm:rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>

              <div className="relative rounded-2xl overflow-hidden bg-[#141210] border border-[rgba(255,255,255,0.15)] shadow-2xl">
                <img
                  src="/fher_hero.png"
                  alt="Fher Roldán - Director Teatral y Dramaturgo"
                  className="w-full h-[380px] sm:h-[500px] object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Curtain Tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-transparent to-transparent opacity-90" />

                {/* Card Caption Footer */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 text-left">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1.5">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#f59e0b] animate-ping" />
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#f59e0b]">
                      Director General & Productor
                    </span>
                  </div>
                  <p className="font-serif text-base sm:text-lg font-bold text-white leading-snug">
                    "El teatro es una herramienta de transformación social y encuentro humano."
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
