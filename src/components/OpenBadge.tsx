import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { SHOP_INFO } from '../data/barbershopData';

export const OpenBadge: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentDay = now.getDay(); // 0 is Sunday

      if (currentDay === 0) { // Sunday 10am to 4pm
        setIsOpen(currentHour >= 10 && currentHour < 16);
      } else { // Mon-Sat 9am to 8pm
        setIsOpen(currentHour >= SHOP_INFO.openTimeHour && currentHour < SHOP_INFO.closeTimeHour);
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${
      isOpen
        ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/40'
        : 'bg-rose-950/80 text-rose-400 border-rose-500/40'
    }`}>
      <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-400 animate-ping' : 'bg-rose-400'}`}></span>
      <Clock className="w-3.5 h-3.5" />
      <span>{isOpen ? 'Abierto Ahora' : 'Cerrado Actualmente'}</span>
    </div>
  );
};
