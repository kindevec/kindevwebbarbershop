import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Scissors,
  Star,
  Clock,
  Award,
  ChevronRight,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  MapPin,
  Flame,
  ArrowUpRight
} from 'lucide-react';
import {
  SERVICES_DATA,
  GALLERY_DATA,
  BARBERS_DATA,
  TESTIMONIALS_DATA,
  SHOP_INFO,
  GalleryItem
} from '../data/barbershopData';
import { OpenBadge } from '../components/OpenBadge';
import { LightboxModal } from '../components/LightboxModal';

export const HomePage: React.FC = () => {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  const featuredServices = SERVICES_DATA.filter((s) => s.popular || s.category === 'combos').slice(0, 4);

  return (
    <div className="space-y-20 pb-12">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-black razor-border">
        {/* Background Image with Dark Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1920"
            alt="Iron & Fade Barbershop Interior"
            className="w-full h-full object-cover object-center opacity-30 transform scale-105 hover:scale-100 transition duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent" />
        </div>

        {/* Ambient Red Glow Lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#DC143C]/20 rounded-full blur-[130px] pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-6"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#1a1a1a]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#DC143C]/40 shadow-xl text-xs font-bold text-gray-200 uppercase tracking-widest font-oswald">
              <Flame className="w-4 h-4 text-[#DC143C] animate-pulse" />
              <span>Barbería Urbana de Alto Nivel • Quito</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-bebas text-white tracking-tight uppercase leading-[0.9] text-shadow-lg">
              Donde El Estilo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#DC143C]">
                Se Forja
              </span>
            </h1>

            {/* Tagline / Subtitle */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
              Cortes clásicos, degradados modernos y rituales de barba con navaja caliente. Diseñado para el hombre que exige precisión artesanal e higiene absoluta.
            </p>

            {/* Hero CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a
                href={SHOP_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#DC143C] hover:bg-[#b01030] text-white px-8 py-4 rounded-xl text-base font-extrabold uppercase tracking-wider shadow-[0_0_25px_rgba(220,20,60,0.5)] hover:shadow-[0_0_35px_rgba(220,20,60,0.8)] transition duration-300 transform hover:-translate-y-1 active:translate-y-0"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Reservar Cita por WhatsApp</span>
              </a>

              <NavLink
                to="/servicios"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#141414] hover:bg-[#1a1a1a] text-gray-200 hover:text-white border border-gray-700 hover:border-[#DC143C]/50 px-7 py-4 rounded-xl text-base font-bold uppercase tracking-wider transition duration-300"
              >
                <span>Ver Servicios & Precios</span>
                <ChevronRight className="w-4 h-4 text-[#DC143C]" />
              </NavLink>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-gray-800/80 flex flex-wrap items-center justify-center md:justify-start gap-6 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#DC143C]" />
                <span>Atención VIP Personalizada</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Cerveza / Whisky de Cortesía</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#DC143C]" />
                <span>Puntualidad Sin Demoras</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Side Card Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-96 bg-[#111111]/90 backdrop-blur-md p-6 rounded-2xl border border-gray-800 shadow-[0_10px_40px_rgba(0,0,0,0.9)] relative group"
          >
            <div className="absolute -top-3 -right-3 bg-[#DC143C] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md">
              Top Recomendado
            </div>
            
            <div className="space-y-4">
              <div className="h-48 rounded-xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=600"
                  alt="Ritual de Barba Iron & Fade"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-3 text-white font-bebas text-xl tracking-wider uppercase">
                  Paquete Combo 'Iron & Fade' VIP
                </span>
              </div>

              <div className="flex justify-between items-center text-sm border-b border-gray-800 pb-3">
                <span className="text-gray-400">Corte Completo + Barba + Toalla</span>
                <span className="text-2xl font-black text-[#DC143C] font-bebas">$28</span>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-300">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <span className="font-mono text-gray-400">Duración: 75 min</span>
              </div>

              <a
                href={SHOP_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#1c1c1c] hover:bg-[#DC143C] text-white py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition border border-gray-700 hover:border-[#DC143C]"
              >
                <span>Agendar Este Combo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. STATS BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#111111] p-6 sm:p-8 rounded-2xl border border-gray-800/80 shadow-2xl">
          <div className="text-center p-4 border-r border-gray-800/60 last:border-0">
            <div className="text-4xl sm:text-5xl font-black font-bebas text-[#DC143C]">12+</div>
            <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold font-oswald mt-1">Años de Experiencia</div>
          </div>
          <div className="text-center p-4 border-r border-gray-800/60 last:border-0">
            <div className="text-4xl sm:text-5xl font-black font-bebas text-white">15K+</div>
            <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold font-oswald mt-1">Cortes Realizados</div>
          </div>
          <div className="text-center p-4 border-r border-gray-800/60 last:border-0">
            <div className="text-4xl sm:text-5xl font-black font-bebas text-[#DC143C]">4</div>
            <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold font-oswald mt-1">Master Barberos</div>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl sm:text-5xl font-black font-bebas text-white flex items-center justify-center gap-1">
              4.9 <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
            </div>
            <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold font-oswald mt-1">Satisfacción Clientes</div>
          </div>
        </div>
      </div>

      {/* 3. FEATURED SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-800 pb-6">
          <div>
            <div className="text-[#DC143C] font-bold text-xs uppercase tracking-widest font-oswald flex items-center gap-2">
              <Scissors className="w-4 h-4" />
              <span>Corte & Grooming de Precisión</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black font-bebas text-white tracking-wide uppercase mt-1">
              Servicios Destacados
            </h2>
          </div>
          <NavLink
            to="/servicios"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-[#DC143C] uppercase tracking-wider transition group"
          >
            <span>Ver Menú Completo de Precios</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </NavLink>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-gray-800 hover:border-[#DC143C]/60 hover:shadow-[0_0_25px_rgba(220,20,60,0.25)] transition duration-300 flex flex-col justify-between group relative"
            >
              {service.popular && (
                <div className="absolute top-4 right-4 bg-[#DC143C] text-white px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest">
                  Popular
                </div>
              )}

              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-2xl font-black font-bebas text-white tracking-wide uppercase group-hover:text-[#DC143C] transition">
                      {service.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-mono mt-0.5">⏱️ Duración: {service.duration}</p>
                  </div>
                  <div className="text-3xl font-black font-bebas text-[#DC143C] bg-[#1a1a1a] px-4 py-2 rounded-xl border border-gray-800">
                    ${service.price}
                  </div>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 pt-2 border-t border-gray-800/80">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-xs text-gray-400 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DC143C] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-800/60">
                <a
                  href={`https://wa.me/593991952889?text=Hola,%20quisiera%20reservar%20el%20servicio%20"${encodeURIComponent(service.name)}"%20($${service.price})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-[#DC143C] text-white py-3 rounded-xl font-bold uppercase tracking-wider text-xs border border-gray-700 hover:border-[#DC143C] transition duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Reservar Este Servicio</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. HORIZONTAL GALLERY CAROUSEL SHOWCASE */}
      <section className="bg-[#0a0a0a] py-16 border-y border-gray-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <div className="text-[#DC143C] font-bold text-xs uppercase tracking-widest font-oswald">
                Portafolio Reciente
              </div>
              <h2 className="text-4xl sm:text-5xl font-black font-bebas text-white tracking-wide uppercase mt-1">
                Galería de Cortes & Degradados
              </h2>
            </div>
            <NavLink
              to="/galeria"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-[#DC143C] hover:underline uppercase tracking-wider"
            >
              <span>Ver Galería Completa</span>
              <ChevronRight className="w-4 h-4" />
            </NavLink>
          </div>

          {/* Carousel */}
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin snap-x snap-mandatory">
            {GALLERY_DATA.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedGalleryItem(item)}
                className="w-72 sm:w-80 shrink-0 bg-[#111111] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#DC143C]/60 transition duration-300 snap-start cursor-pointer group"
              >
                <div className="h-80 overflow-hidden relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-[#DC143C] text-white px-2 py-0.5 rounded">
                        {item.category}
                      </span>
                      <h4 className="text-lg font-black font-bebas text-white mt-1 uppercase tracking-wide">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-[#141414] flex items-center justify-between text-xs text-gray-400">
                  <span>Barbero: <strong className="text-gray-200">{item.barberName}</strong></span>
                  <span className="text-[#DC143C] font-bold group-hover:translate-x-1 transition">Ver +</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MASTER BARBERS SNEAK PEEK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-[#DC143C] font-bold text-xs uppercase tracking-widest font-oswald">
            Artesanos del Estilo
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-bebas text-white tracking-wide uppercase">
            Nuestros Master Barberos
          </h2>
          <p className="text-sm text-gray-400">
            Profesionales altamente capacitados en las mejores técnicas europeas e internacionales de corte y perfilado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BARBERS_DATA.map((barber, idx) => (
            <motion.div
              key={barber.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111111] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#DC143C]/50 transition duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={barber.photo}
                    alt={barber.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] font-mono font-semibold text-gray-300 bg-black/60 px-2 py-1 rounded border border-gray-700">
                      {barber.experience}
                    </span>
                    <h3 className="text-2xl font-black font-bebas text-white uppercase mt-1">
                      {barber.name}
                    </h3>
                    <p className="text-xs text-[#DC143C] font-semibold">{barber.role}</p>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="text-xs text-gray-300 font-medium bg-[#161616] p-2.5 rounded-lg border border-gray-800">
                    <span className="text-gray-400 block text-[10px] uppercase tracking-wider">Especialidad:</span>
                    {barber.specialty}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={`https://wa.me/593991952889?text=Hola,%20quisiera%20reservar%20un%20turno%20directamente%20con%20el%20barbero%20${encodeURIComponent(barber.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-[#DC143C] text-white py-2.5 rounded-xl font-bold uppercase tracking-wider text-xs border border-gray-800 hover:border-[#DC143C] transition"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Reservar con {barber.name.split(' ')[0]}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. TESTIMONIALS REVIEWS */}
      <section className="bg-[#0b0b0b] py-16 border-t border-gray-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="text-[#DC143C] font-bold text-xs uppercase tracking-widest font-oswald flex items-center justify-center gap-2">
              <Award className="w-4 h-4" />
              <span>Reseñas Reales</span>
            </div>
            <h2 className="text-4xl font-black font-bebas text-white tracking-wide uppercase">
              Lo Que Dicen Nuestros Clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((test) => (
              <div
                key={test.id}
                className="bg-[#121212] p-6 rounded-2xl border border-gray-800 space-y-4 relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300 italic leading-relaxed">
                    "{test.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={test.avatar}
                      alt={test.name}
                      className="w-10 h-10 rounded-full object-cover border border-[#DC143C]/40"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white">{test.name}</h4>
                      <p className="text-xs text-gray-400">{test.cutType}</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-gray-400">{test.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LOCATION & HOURS CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#141414] via-[#1a1a1a] to-[#141414] p-8 sm:p-12 rounded-3xl border border-[#DC143C]/30 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-xl">
            <OpenBadge />
            <h3 className="text-3xl sm:text-4xl font-black font-bebas text-white uppercase tracking-wide">
              ¿Listo para tu cambio de look?
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Nos encontramos ubicados en {SHOP_INFO.address}. Disfruta de un ambiente cómodo, bebidas de cortesía y atención de primera.
            </p>
            <div className="flex items-center gap-3 text-xs text-gray-300">
              <MapPin className="w-4 h-4 text-[#DC143C]" />
              <span>Parqueadero exclusivo gratuito para clientes</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <a
              href={SHOP_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#DC143C] hover:bg-[#b01030] text-white px-8 py-4 rounded-xl text-sm font-extrabold uppercase tracking-wider shadow-[0_0_20px_rgba(220,20,60,0.5)] transition"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Agendar por WhatsApp</span>
            </a>
            <NavLink
              to="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-[#222] hover:bg-[#2a2a2a] text-white px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-wider border border-gray-700 transition"
            >
              <span>Ver Ubicación & Horarios</span>
            </NavLink>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal item={selectedGalleryItem} onClose={() => setSelectedGalleryItem(null)} />
    </div>
  );
};
