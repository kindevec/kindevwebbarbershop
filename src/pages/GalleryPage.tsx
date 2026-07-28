import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Image as ImageIcon, ZoomIn, Scissors, MessageSquare } from 'lucide-react';
import { GALLERY_DATA, GalleryItem, SHOP_INFO } from '../data/barbershopData';
import { LightboxModal } from '../components/LightboxModal';

export const GalleryPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('todos');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filters = [
    { id: 'todos', label: 'Todos los Cortes' },
    { id: 'degradado', label: 'Degradados / Fades' },
    { id: 'clasico', label: 'Cortes Clásicos' },
    { id: 'barba', label: 'Barba & Afeitado' },
    { id: 'diseno', label: 'Diseño Urbano' },
  ];

  const filteredItems = selectedFilter === 'todos'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((i) => i.category === selectedFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#1a1a1a] px-4 py-1.5 rounded-full border border-[#DC143C]/40 text-xs font-bold text-[#DC143C] uppercase tracking-widest font-oswald">
          <ImageIcon className="w-4 h-4" />
          <span>Portafolio de Resultados</span>
        </div>
        <h1 className="text-5xl sm:text-6xl font-black font-bebas text-white tracking-wide uppercase">
          Galería de Trabajos
        </h1>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Haz clic en cualquiera de las fotografías para ver los detalles del corte, el barbero a cargo y agendar un resultado idéntico por WhatsApp.
        </p>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-[#111111] p-2 rounded-2xl border border-gray-800 max-w-3xl mx-auto">
        {filters.map((f) => {
          const isActive = selectedFilter === f.id;
          return (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition ${
                isActive
                  ? 'bg-[#DC143C] text-white shadow-[0_0_15px_rgba(220,20,60,0.5)]'
                  : 'text-gray-400 hover:text-white hover:bg-[#1a1a1a]'
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            onClick={() => setActiveItem(item)}
            className="bg-[#111111] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#DC143C]/60 transition duration-300 cursor-pointer group shadow-xl relative"
          >
            <div className="h-80 overflow-hidden relative">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition" />

              {/* Zoom overlay Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="w-12 h-12 rounded-full bg-[#DC143C]/90 text-white flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition duration-300">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>

              {/* Bottom Tags */}
              <div className="absolute bottom-3 left-3 right-3 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-[#DC143C] text-white px-2 py-0.5 rounded shadow">
                  {item.category}
                </span>
                <h3 className="text-xl font-black font-bebas text-white uppercase leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300">Barbero: {item.barberName}</p>
              </div>
            </div>

            <div className="p-3 bg-[#141414] border-t border-gray-800 flex justify-between items-center text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <Scissors className="w-3.5 h-3.5 text-[#DC143C]" /> Ver Detalles
              </span>
              <span className="text-[#DC143C] font-bold group-hover:translate-x-1 transition">Ampliar →</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal item={activeItem} onClose={() => setActiveItem(null)} />
    </div>
  );
};
