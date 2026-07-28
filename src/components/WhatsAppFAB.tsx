import React from 'react';
import { SHOP_INFO } from '../data/barbershopData';

export const WhatsAppFAB: React.FC = () => {
  return (
    <div className="fixed bottom-20 md:bottom-6 right-6 z-50 flex items-center gap-3 group">
      {/* Tooltip Badge */}
      <div className="hidden sm:flex items-center gap-2 bg-[#141414] text-white text-xs font-bold py-2 px-3.5 rounded-xl border border-emerald-500/30 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span>¡Reserva tu cita al instante!</span>
      </div>

      {/* FAB Button */}
      <a
        href={SHOP_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:shadow-[0_0_35px_rgba(37,211,102,0.8)] transition-all duration-300 transform hover:scale-110 active:scale-95 animate-whatsapp-pulse relative"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.763.459 3.486 1.332 5.003l-1.416 5.17 5.292-1.388c1.464.798 3.11 1.218 4.78 1.219h.005c5.504 0 9.987-4.478 9.988-9.985 0-2.668-1.038-5.176-2.925-7.062a9.923 9.923 0 00-7.058-2.941zm5.82 14.394c-.244.688-1.42 1.314-1.956 1.396-.536.082-1.229.117-3.992-1.025-3.535-1.46-5.811-5.042-5.988-5.278-.177-.236-1.439-1.916-1.439-3.654 0-1.737.908-2.593 1.231-2.946.323-.353.708-.442.943-.442.235 0 .471.002.678.013.218.011.512-.083.801.613.295.71 1.002 2.449 1.089 2.626.088.177.147.383.029.619-.118.235-.177.382-.353.589-.177.206-.372.46-.53.618-.177.177-.362.368-.156.721.206.353.916 1.512 1.966 2.448 1.35 1.203 2.489 1.576 2.842 1.752.353.177.56.147.766-.088.206-.236.884-1.031 1.119-1.384.235-.353.471-.294.795-.177.324.118 2.062 0.972 2.415 1.149.353.177.589.265.678.412.088.147.088.853-.156 1.541z"/>
        </svg>

        {/* Online Indicator */}
        <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-white border-2 border-[#111] flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
        </span>
      </a>
    </div>
  );
};
