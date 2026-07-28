import React from 'react';
import { testimonials } from '../data/fherData';
import { Quote, Sparkles, Heart, Users } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#141210] relative">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <Heart className="w-4 h-4 text-[#991b1b]" /> Comunidad & Público
          </div>
          <h2 className="section-title">Voces de LA COLMENA</h2>
          <p className="section-subtitle">
            El impacto del teatro comunitario y la formación actoral contada por sus alumnos, actores y espectadores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="glass-card flex flex-col justify-between relative hover:border-[#f59e0b] group"
            >
              <Quote className="w-10 h-10 text-[#f59e0b]/30 mb-4 group-hover:text-[#f59e0b]/60 transition-colors" />

              <p className="text-sm sm:text-base text-[#d6d3d1] italic mb-6 leading-relaxed">
                "{item.quote}"
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#f59e0b] transition-colors">
                    {item.author}
                  </h4>
                  <span className="text-xs text-[#a8a29e]">{item.role}</span>
                </div>
                <div className="p-2 rounded-full bg-[#991b1b]/20 border border-[#991b1b]/30 text-[#f59e0b]">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
