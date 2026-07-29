import React from 'react';
import { Users, Award, ShieldCheck, Sparkles, Calendar, Heart } from 'lucide-react';

export default function LaColmenaSection() {
  return (
    <section id="lacolmena" className="py-20 sm:py-24 bg-[#0a0908] relative overflow-hidden spotlight-bg">
      <div className="container relative z-10">
        
        {/* Header Title Centered on Mobile, Left-aligned on Desktop */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-6 lg:mb-8">
          <div className="section-tag mb-3">
            <Users className="w-4 h-4" /> Compañía Teatral
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#f5f5f4] leading-tight">
            LA COLMENA <span className="text-[#f59e0b] block text-xl sm:text-3xl font-normal italic mt-1">Fundada y dirigida por Fher Roldán</span>
          </h2>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Image Side - Placed right below heading on Mobile */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative rounded-2xl overflow-hidden border border-[#f59e0b]/30 shadow-2xl group">
              <img
                src="/Fer/F (5).jpeg"
                alt="Compañía Teatral LA COLMENA"
                className="w-full h-[360px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/40 to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="bg-[#991b1b] text-white text-[11px] sm:text-xs uppercase font-bold tracking-widest px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 border border-white/10">
                  <Calendar className="w-3.5 h-3.5" /> Desde 2013
                </span>
              </div>

              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-4 rounded-xl bg-[#141210]/90 backdrop-blur-md border border-white/10 text-left">
                <h4 className="font-serif text-lg sm:text-xl font-bold text-[#f59e0b] mb-1">
                  Espacio Artístico & Comunitario
                </h4>
                <p className="text-xs text-[#a8a29e]">
                  Teatro independiente con fuerte identidad barrial y gestión de proyectos colectivos.
                </p>
              </div>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <p className="text-base sm:text-lg text-[#d6d3d1] mb-5 sm:mb-6 leading-relaxed">
              En 2013 fundé la <strong className="text-white">Compañía Teatral LA COLMENA</strong>, espacio independiente enfocado en acercar el arte dramático a la comunidad y dar lugar a producciones teatrales con una marcada sensibilidad social y comunitaria.
            </p>

            <p className="text-sm sm:text-base text-[#a8a29e] mb-6 sm:mb-8 leading-relaxed">
              Como <strong className="text-[#f5f5f4]">Director General y Productor Ejecutivo</strong>, coordino festivales, muestras y montajes escénicos integrales, ocupándome de la dirección artística, la gestión de recursos, la formación de elencos y la producción de espectáculos reconocidos a nivel provincial.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="p-4 rounded-xl bg-[#141210] border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#f59e0b]/10 text-[#f59e0b] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#f5f5f4] mb-1">Producción Integral</h4>
                  <p className="text-xs text-[#a8a29e]">Planificación artística, gestión de recursos y dirección de elenco.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#141210] border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#991b1b]/20 text-[#f59e0b] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#f5f5f4] mb-1">Proyectos Premiados</h4>
                  <p className="text-xs text-[#a8a29e]">Juegos Bonaerenses (2024, 2026), CPTI y Festival Norestada.</p>
                </div>
              </div>
            </div>

            <a href="#obras" className="btn btn-curtain w-full sm:w-auto">
              Ver Producciones de LA COLMENA
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
