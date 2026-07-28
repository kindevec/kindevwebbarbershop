import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Scissors, Menu, X, MessageSquare, PhoneCall } from 'lucide-react';
import { SHOP_INFO } from '../data/barbershopData';
import { OpenBadge } from './OpenBadge';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Equipo', path: '/equipo' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0d0d0d]/95 backdrop-blur-md border-b border-gray-800/80 shadow-2xl">
      {/* Top micro bar for phone & open badge */}
      <div className="hidden sm:block bg-[#111111] border-b border-gray-900/90 py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-gray-400">
          <div className="flex items-center gap-4">
            <OpenBadge />
            <span className="hidden md:inline-block text-gray-400">📍 {SHOP_INFO.address}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${SHOP_INFO.phone}`} className="hover:text-white transition flex items-center gap-1">
              <PhoneCall className="w-3 h-3 text-[#DC143C]" />
              <span>{SHOP_INFO.phone}</span>
            </a>
            <span className="text-gray-600">|</span>
            <span className="text-gray-300 font-mono">Atención VIP de Lunes a Domingo</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with High Density Rotated Badge */}
          <NavLink to="/" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 bg-[#DC143C] flex items-center justify-center rounded-sm rotate-45 shadow-[0_0_15px_rgba(220,20,60,0.4)] group-hover:bg-white transition duration-300">
              <span className="-rotate-45 font-black text-black text-lg tracking-tighter">I&F</span>
            </div>
            <div>
              <div className="text-2xl font-black tracking-tighter uppercase italic text-white group-hover:text-gray-100 flex items-center gap-1.5 leading-none">
                Iron & <span className="text-[#DC143C]">Fade</span>
              </div>
              <div className="text-[10px] tracking-[0.25em] text-gray-400 font-bold uppercase leading-none mt-1 font-oswald">
                Barbershop
              </div>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`transition-colors py-2 relative ${
                    isActive
                      ? 'text-[#DC143C] border-b-2 border-[#DC143C] font-black'
                      : 'text-gray-300 hover:text-[#DC143C]'
                  }`}
                >
                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={SHOP_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#DC143C] hover:bg-[#B21031] text-white px-6 py-3 font-bold uppercase text-xs tracking-widest transition duration-300 shadow-[0_0_15px_rgba(220,20,60,0.3)] active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Reservar Cita</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#1a1a1a] text-gray-300 hover:text-white hover:bg-[#252525] focus:outline-none border border-gray-800"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#DC143C]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111111] border-b border-[#DC143C]/30 px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
          <div className="pb-2 border-b border-gray-800 flex justify-between items-center">
            <OpenBadge />
            <span className="text-xs text-gray-400">{SHOP_INFO.phone}</span>
          </div>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base font-bold uppercase tracking-wider transition ${
                  isActive
                    ? 'bg-[#DC143C]/20 text-[#DC143C] border-l-4 border-[#DC143C]'
                    : 'text-gray-300 hover:bg-[#1a1a1a] hover:text-white'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className="pt-2">
            <a
              href={SHOP_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#DC143C] text-white px-5 py-3 rounded-lg font-bold uppercase tracking-wider text-sm shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Reservar por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
