import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Scissors, Image as ImageIcon, Users, MapPin } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const location = useLocation();

  const navs = [
    { name: 'Inicio', path: '/', icon: Home },
    { name: 'Servicios', path: '/servicios', icon: Scissors },
    { name: 'Galería', path: '/galeria', icon: ImageIcon },
    { name: 'Equipo', path: '/equipo', icon: Users },
    { name: 'Contacto', path: '/contacto', icon: MapPin },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0d0d0d]/95 backdrop-blur-lg border-t border-gray-800/90 py-2 px-2 shadow-[0_-5px_20px_rgba(0,0,0,0.8)]">
      <div className="flex justify-around items-center">
        {navs.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center w-14 py-1 rounded-xl transition duration-200 ${
                isActive
                  ? 'text-[#DC143C] font-bold'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <div className={`p-1.5 rounded-lg transition ${
                isActive ? 'bg-[#DC143C]/15 text-[#DC143C] shadow-[0_0_10px_rgba(220,20,60,0.4)]' : ''
              }`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-semibold tracking-wider mt-0.5 uppercase">
                {item.name}
              </span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
