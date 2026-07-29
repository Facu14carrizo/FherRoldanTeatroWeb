import React, { useState } from 'react';
import { Mail, Phone, MapPin, Drama, Globe, ArrowUp, Sparkles, Award, BookOpen, MessageCircle } from 'lucide-react';

const InstagramIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: '',
    subject: 'Inscripción a Talleres de Teatro'
  });

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const phone = "5491165622872";
    const nameText = formData.name.trim() ? `Soy ${formData.name.trim()}` : "te escribo desde tu sitio web";
    const message = `¡Hola Fher! ${nameText} y me pongo en contacto con vos por: ${formData.subject}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contacto" className="bg-[#070605] pt-24 pb-12 border-t border-white/10 relative spotlight-bg overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#991b1b]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#f59e0b]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="section-header mb-16">
          <div className="section-tag">
            <MessageCircle className="w-4 h-4 text-emerald-400" /> Contacto Directo por WhatsApp
          </div>
          <h2 className="section-title">Ponete en Contacto</h2>
          <p className="section-subtitle">
            Consultas sobre inscripciones a talleres teatrales, contrataciones para funciones, proyectos de dramaturgia o producciones de LA COLMENA.
          </p>
        </div>

        {/* Top Grid: Contact Form + Direct Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Direct Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="glass-card bg-gradient-to-b from-[#141210] to-[#1e1b18] border-[#f59e0b]/30 p-8">
              
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#991b1b] to-[#f59e0b] p-0.5 shadow-xl flex items-center justify-center">
                  <div className="w-full h-full bg-[#0a0908] rounded-[14px] flex items-center justify-center">
                    <Drama className="w-7 h-7 text-[#f59e0b]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-3xl font-bold text-white leading-none">Fher Roldán</h3>
                  <p className="text-xs text-[#f59e0b] uppercase tracking-wider font-semibold mt-1">
                    Compañía Teatral LA COLMENA
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#d6d3d1] mb-6 leading-relaxed">
                Espacio de formación actoral, dirección general y producción independiente. Sumate a nuestros talleres o llevá nuestras producciones a tu sala o festival.
              </p>

              {/* Direct Contact Cards */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#0a0908]/80 border border-white/10 hover:border-[#f59e0b]/40 transition-colors">
                  <div className="p-2.5 rounded-lg bg-[#f59e0b]/10 text-[#f59e0b]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#a8a29e] block font-semibold uppercase tracking-wider">Correo Electrónico</span>
                    <a href="mailto:fher09roldan@gmail.com" className="text-white hover:text-[#f59e0b] font-semibold text-sm text-decoration-none transition-colors">
                      fher09roldan@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#0a0908]/80 border border-white/10 hover:border-emerald-500/40 transition-colors">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#a8a29e] block font-semibold uppercase tracking-wider">WhatsApp / Teléfono Directo</span>
                    <a href="https://wa.me/5491165622872" target="_blank" rel="noreferrer" className="text-white hover:text-emerald-400 font-semibold text-sm text-decoration-none transition-colors">
                      +54 9 11 6562-2872
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#0a0908]/80 border border-white/10 hover:border-[#f59e0b]/40 transition-colors">
                  <div className="p-2.5 rounded-lg bg-[#f59e0b]/10 text-[#f59e0b]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#a8a29e] block font-semibold uppercase tracking-wider">Ubicación & Muestras</span>
                    <span className="text-white font-semibold text-sm">Provincia de Buenos Aires, Argentina</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#a8a29e] font-bold mb-3">Seguinos en Instagram</h4>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://instagram.com/fher_actua"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#1e1b18] hover:bg-[#991b1b] text-white transition-all border border-white/10 flex items-center gap-2 text-xs font-semibold"
                  >
                    <InstagramIcon className="w-4 h-4 text-[#f59e0b]" /> @fher_actua
                  </a>
                  <a
                    href="https://instagram.com/la_colmena_teatro"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#1e1b18] hover:bg-[#991b1b] text-white transition-all border border-white/10 flex items-center gap-2 text-xs font-semibold"
                  >
                    <InstagramIcon className="w-4 h-4 text-[#f59e0b]" /> @la_colmena_teatro
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* WhatsApp Contact Panel Column */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 relative border-emerald-500/30">
              <form onSubmit={handleWhatsAppSend} className="space-y-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                    <MessageCircle className="w-6 h-6 text-emerald-400" /> Contactar por WhatsApp
                  </h3>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Chat Directo
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#a8a29e] leading-relaxed">
                  Ingresá tu nombre y el motivo de tu consulta para iniciar una conversación directa por WhatsApp con Fher Roldán.
                </p>

                <div className="space-y-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a8a29e] font-bold mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Tu nombre y apellido"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0a0908] border border-white/10 text-white placeholder-[#57534e] focus:outline-none focus:border-emerald-400 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a8a29e] font-bold mb-2">
                      Motivo de Consulta *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0a0908] border border-white/10 text-white focus:outline-none focus:border-emerald-400 transition-colors text-sm"
                    >
                      <option value="Inscripción a Talleres de Teatro">Inscripción a Talleres de Teatro</option>
                      <option value="Contratación de Obras / Funciones">Contratación de Obras / Funciones</option>
                      <option value="Consultas de Dramaturgia / Textos">Consultas de Dramaturgia / Textos</option>
                      <option value="Compañía Teatral LA COLMENA">Compañía Teatral LA COLMENA</option>
                      <option value="Prensa y Entrevistas">Prensa y Entrevistas</option>
                      <option value="Otro Asunto">Otro Asunto</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-bold text-base flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/40 hover:shadow-emerald-900/60 transition-all cursor-pointer active:scale-[0.99]"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" /> Contactar por WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

        {/* Multi-Column Sitemap & Details Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-t border-b border-white/10 text-sm">
          
          {/* Column 1: Fher Roldán & LA COLMENA */}
          <div>
            <h4 className="font-serif text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Drama className="w-5 h-5 text-[#f59e0b]" /> Fher Roldán
            </h4>
            <p className="text-xs text-[#a8a29e] leading-relaxed mb-4">
              Actor, director teatral, dramaturgo, profesor en Lengua y Literatura y productor general de la Compañía Teatral LA COLMENA (dirigida desde 2013).
            </p>
            <span className="text-xs text-[#f59e0b] font-semibold italic">
              "El teatro es un camino de aprendizaje constante."
            </span>
          </div>

          {/* Column 2: Navegación Rápida */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4 uppercase tracking-wider text-xs">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs text-[#d6d3d1]">
              <li><a href="#inicio" className="hover:text-[#f59e0b] transition-colors text-decoration-none">› Inicio</a></li>
              <li><a href="#perfil" className="hover:text-[#f59e0b] transition-colors text-decoration-none">› Biografía & Filosofía</a></li>
              <li><a href="#lacolmena" className="hover:text-[#f59e0b] transition-colors text-decoration-none">› Compañía LA COLMENA</a></li>
              <li><a href="#obras" className="hover:text-[#f59e0b] transition-colors text-decoration-none">› Repertorio de Obras & Roles</a></li>
              <li><a href="#galeria" className="hover:text-[#f59e0b] transition-colors text-decoration-none">› Galería Escénica</a></li>
              <li><a href="#premios" className="hover:text-[#f59e0b] transition-colors text-decoration-none">› Reconocimientos</a></li>
              <li><a href="#talleres" className="hover:text-[#f59e0b] transition-colors text-decoration-none">› Talleres Teatrales</a></li>
            </ul>
          </div>

          {/* Column 3: Talleres Teatrales */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4 uppercase tracking-wider text-xs flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#f59e0b]" /> Talleres & Formación
            </h4>
            <ul className="space-y-2.5 text-xs text-[#a8a29e]">
              <li className="text-white font-semibold">Taller para Niños y Niñas</li>
              <li>Juego dramático, creatividad y expresión corporal.</li>
              <li className="text-white font-semibold mt-2">Taller para Adolescentes</li>
              <li>Construcción de personaje e improvisación.</li>
              <li className="text-white font-semibold mt-2">Taller de Adultos & Dramaturgia</li>
              <li>Entrenamiento actoral y montaje final en sala.</li>
            </ul>
          </div>

          {/* Column 4: Reconocimientos Destacados */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4 uppercase tracking-wider text-xs flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#f59e0b]" /> Distinciones
            </h4>
            <div className="space-y-3 text-xs text-[#a8a29e]">
              <div className="p-2.5 rounded-lg bg-[#141210] border border-white/5">
                <span className="text-[#f59e0b] font-bold block mb-0.5">Juegos Bonaerenses (2024 / 2026)</span>
                <span>1.º Puesto Municipal · 2.º Puesto Regional</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#141210] border border-white/5">
                <span className="text-[#f59e0b] font-bold block mb-0.5">Festival Regional CPTI (2025)</span>
                <span>Selección Oficial Prov. de Buenos Aires</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright + Credits + Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a8a29e]">
          <div className="space-y-1 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Fher Roldán · Compañía Teatral LA COLMENA. Todos los derechos reservados.</p>
            <p className="text-[11px] text-[#78716c]">
              Sitio desarrollado por{' '}
              <a
                href="https://waveframe.com.ar"
                target="_blank"
                rel="noreferrer"
                className="text-[#f59e0b] hover:underline font-semibold"
              >
                Waveframe Studio
              </a>
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white hover:text-[#f59e0b] transition-colors p-2 rounded-lg bg-[#141210] border border-white/10 hover:border-[#f59e0b]/40 cursor-pointer"
          >
            <span>Volver Arriba</span>
            <ArrowUp className="w-4 h-4 text-[#f59e0b]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
