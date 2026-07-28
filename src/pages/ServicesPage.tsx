import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Scissors, Check, MessageSquare, Clock, Sparkles, Filter } from 'lucide-react';
import { SERVICES_DATA, Service, SHOP_INFO } from '../data/barbershopData';

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', name: 'Todos los Servicios' },
    { id: 'cortes', name: 'Cortes & Estilos' },
    { id: 'barba', name: 'Barba & Afeitado' },
    { id: 'combos', name: 'Paquetes Combos' },
    { id: 'tratamientos', name: 'Tratamientos Faciales' },
  ];

  const filteredServices = selectedCategory === 'todos'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#1a1a1a] px-4 py-1.5 rounded-full border border-[#DC143C]/40 text-xs font-bold text-[#DC143C] uppercase tracking-widest font-oswald">
          <Scissors className="w-4 h-4" />
          <span>Menú Oficial de Tarifas</span>
        </div>
        <h1 className="text-5xl sm:text-6xl font-black font-bebas text-white tracking-wide uppercase">
          Servicios & Precios
        </h1>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Cada servicio incluye atención VIP, lavado capilar con productos de grado profesional y bebida de bienvenida de cortesía.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-[#111111] p-2 rounded-2xl border border-gray-800/90 max-w-4xl mx-auto">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition duration-200 flex items-center gap-2 ${
                isActive
                  ? 'bg-[#DC143C] text-white shadow-[0_0_15px_rgba(220,20,60,0.5)]'
                  : 'text-gray-400 hover:text-white hover:bg-[#1a1a1a]'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className={`bg-[#111111] rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition duration-300 relative group hover:-translate-y-1 ${
              service.popular
                ? 'border-[#DC143C]/60 shadow-[0_0_25px_rgba(220,20,60,0.2)] bg-gradient-to-b from-[#161113] to-[#111111]'
                : 'border-gray-800 hover:border-gray-700'
            }`}
          >
            {service.popular && (
              <div className="absolute -top-3 right-6 bg-[#DC143C] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3 fill-white" />
                <span>Más Popular</span>
              </div>
            )}

            <div className="space-y-4">
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-2xl font-black font-bebas text-white uppercase tracking-wide group-hover:text-[#DC143C] transition">
                  {service.name}
                </h3>
                <div className="text-3xl font-black font-bebas text-[#DC143C] bg-[#1a1a1a] px-3.5 py-1.5 rounded-xl border border-gray-800 shrink-0">
                  ${service.price}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                <Clock className="w-3.5 h-3.5 text-[#DC143C]" />
                <span>Tiempo estimado: {service.duration}</span>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2 pt-3 border-t border-gray-800/80">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block font-oswald">
                  Incluye:
                </span>
                <ul className="space-y-2">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-xs text-gray-300 flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#DC143C] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-800/60">
              <a
                href={`https://wa.me/593991952889?text=Hola,%20quisiera%20reservar%20el%20servicio%20"${encodeURIComponent(service.name)}"%20por%20$${service.price}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#1c1c1c] hover:bg-[#DC143C] text-white py-3 rounded-xl font-bold uppercase tracking-wider text-xs border border-gray-700 hover:border-[#DC143C] transition duration-300 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Reservar Servicio</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Info Notice Box */}
      <div className="bg-[#141414] border border-gray-800 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="space-y-1">
          <h4 className="text-lg font-bold text-white font-oswald uppercase">¿Tienes alguna solicitud o diseño especial?</h4>
          <p className="text-xs text-gray-400">Cuéntanos por WhatsApp y te cotizamos al instante cualquier diseño urbano o tratamiento personalizado.</p>
        </div>
        <a
          href={SHOP_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 bg-[#DC143C] text-white px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-xs shadow-lg hover:bg-[#b01030] transition"
        >
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  );
};
