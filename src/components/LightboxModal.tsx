import React from 'react';
import { X, MessageSquare, Scissors, User } from 'lucide-react';
import { GalleryItem, SHOP_INFO } from '../data/barbershopData';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const bookingUrl = `https://wa.me/593991952889?text=Hola,%20vi%20el%20corte%20"${encodeURIComponent(item.title)}"%20de%20su%20galer%C3%ADa%20y%20quisiera%20reservar%20un%20turno%20similar.`;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#121212] border border-[#DC143C]/40 rounded-2xl max-w-4xl w-full overflow-hidden shadow-[0_0_50px_rgba(220,20,60,0.3)] relative flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 text-gray-300 hover:text-white hover:bg-[#DC143C] flex items-center justify-center transition"
          aria-label="Cerrar modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Box */}
        <div className="md:w-3/5 bg-black flex items-center justify-center relative overflow-hidden group">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-72 md:h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          <span className="absolute bottom-4 left-4 text-xs font-bold font-oswald uppercase tracking-widest bg-[#DC143C] text-white px-3 py-1 rounded-md shadow-md">
            Estilo: {item.category}
          </span>
        </div>

        {/* Content Box */}
        <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#DC143C] text-xs font-bold uppercase tracking-widest font-oswald">
              <Scissors className="w-4 h-4" />
              <span>Corte de Precisión</span>
            </div>

            <h3 className="text-2xl font-black font-bebas text-white uppercase tracking-wide leading-tight">
              {item.title}
            </h3>

            <div className="flex items-center gap-2 text-xs text-gray-300 bg-[#1a1a1a] p-2.5 rounded-lg border border-gray-800">
              <User className="w-4 h-4 text-[#DC143C]" />
              <span>Realizado por: <strong className="text-white">{item.barberName}</strong></span>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              {item.description}
            </p>

            <div className="p-3 bg-red-950/20 border border-red-900/30 rounded-xl text-xs text-gray-300 space-y-1">
              <span className="text-[#DC143C] font-bold">💡 Tip de Mantenimiento:</span>
              <p>Recomendamos retocar los degradados cada 12 a 15 días para mantener el contraste de corte perfecto.</p>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-800/80 space-y-3">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#DC143C] hover:bg-[#b01030] text-white py-3 px-5 rounded-xl font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-[0_0_20px_rgba(220,20,60,0.5)] transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Pedir Este Corte por WhatsApp</span>
            </a>
            <p className="text-[11px] text-center text-gray-400">
              Cita directa con atención prioritaria
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
