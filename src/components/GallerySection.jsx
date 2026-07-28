import React, { useState } from 'react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, Sparkles, Filter } from 'lucide-react';

export default function GallerySection() {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [activeFilter, setActiveFilter] = useState('Todos');

  const galleryItems = [
    { id: 1, src: '/Fer/F (4).jpeg', title: 'Fher Roldán - Director Teatral', category: 'Retrato' },
    { id: 2, src: '/Fer/F (1).jpeg', title: 'Formación y Dirección de Elenco', category: 'Dirección' },
    { id: 3, src: '/Fer/F (3).jpeg', title: 'Compañía Teatral LA COLMENA', category: 'Compañía' },
    { id: 4, src: '/Fer/F (2).jpeg', title: 'Ensayos y Proceso Creativo', category: 'Ensayos' },
    { id: 5, src: '/Fer/F (5).jpeg', title: 'Puesta en Escena e Iluminación', category: 'Producción' },
    { id: 6, src: '/Fer/F (6).jpeg', title: 'Muestras Teatrales y Talleres', category: 'Docencia' },
    { id: 7, src: '/Fer/F (7).jpeg', title: 'Actuación y Expresión Dramática', category: 'Actuación' },
    { id: 8, src: '/Fer/F (8).jpeg', title: 'Montaje de Espectáculos', category: 'Producción' },
    { id: 9, src: '/Fer/F (9).jpeg', title: 'Encuentros y Festivales Teatrales', category: 'Reconocimientos' },
    { id: 10, src: '/Fer/F (10).jpeg', title: 'Trabajo Comunitario e Independiente', category: 'Comunidad' },
    { id: 11, src: '/Fer/F (11).jpeg', title: 'Taller de Teatro para Jóvenes y Adultos', category: 'Docencia' },
    { id: 12, src: '/Fer/F (12).jpeg', title: 'Proyectos Barriales y Muestras', category: 'Compañía' },
    { id: 13, src: '/Fer/F (13).jpeg', title: 'Dirección General de Espectáculos', category: 'Dirección' }
  ];

  const filterCategories = ['Todos', 'Retrato', 'Dirección', 'Compañía', 'Ensayos', 'Docencia', 'Actuación', 'Producción'];

  const filteredItems = galleryItems.filter(item => {
    if (activeFilter === 'Todos') return true;
    return item.category === activeFilter;
  });

  const handleNext = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const currentItem = selectedIdx !== null ? filteredItems[selectedIdx] : null;

  return (
    <section id="galeria" className="py-24 bg-[#0a0908] relative spotlight-bg">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Camera className="w-4 h-4" /> Fotografía & Vida Teatral
          </div>
          <h2 className="section-title">Galería Escénica en Vivo</h2>
          <p className="section-subtitle">
            Recorrido visual por funciones, ensayos, dirección de elenco y vida comunitaria de Fher Roldán.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#991b1b] text-white shadow-md shadow-red-900/30'
                  : 'bg-[#141210] text-[#a8a29e] hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedIdx(idx)}
              className="glass-card p-2 group cursor-pointer overflow-hidden relative rounded-2xl hover:border-[#f59e0b] hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64 w-full rounded-xl overflow-hidden bg-[#141210]">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                {/* Badge Category */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#991b1b]/80 text-white backdrop-blur-sm border border-white/10">
                    {item.category}
                  </span>
                </div>

                {/* Expand Icon & Caption */}
                <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-white">
                  <span className="font-serif text-sm font-semibold truncate group-hover:text-[#f59e0b] transition-colors">
                    {item.title}
                  </span>
                  <Maximize2 className="w-4 h-4 text-[#f59e0b] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal Carousel */}
      {currentItem && (
        <div className="modal-overlay" onClick={() => setSelectedIdx(null)}>
          <div className="relative max-w-4xl w-full p-4" onClick={(e) => e.stopPropagation()}>
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute -top-12 right-2 text-white hover:text-[#f59e0b] p-2 focus:outline-none transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#0a0908]/80 text-white hover:text-[#f59e0b] border border-white/20 hover:border-[#f59e0b] transition-all backdrop-blur-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#0a0908]/80 text-white hover:text-[#f59e0b] border border-white/20 hover:border-[#f59e0b] transition-all backdrop-blur-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="bg-[#141210] border border-[#f59e0b]/40 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative flex items-center justify-center bg-black min-h-[400px]">
                <img
                  src={currentItem.src}
                  alt={currentItem.title}
                  className="w-full max-h-[75vh] object-contain"
                />
              </div>

              <div className="p-6 bg-[#1a1714] border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs uppercase font-bold tracking-widest text-[#f59e0b]">
                      {currentItem.category}
                    </span>
                    <span className="text-xs text-[#a8a29e]">· Imagen {selectedIdx + 1} de {filteredItems.length}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {currentItem.title}
                  </h3>
                </div>
                <span className="text-xs text-[#a8a29e] italic font-serif hidden sm:inline-block">Fher Roldán · Teatro</span>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
