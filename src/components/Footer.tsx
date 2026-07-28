import React from 'react';
import { NavLink } from 'react-router-dom';
import { Scissors, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SHOP_INFO } from '../data/barbershopData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#090909] text-gray-400 border-t border-gray-800/80 relative overflow-hidden">
      {/* Decorative top red line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#DC143C] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <NavLink to="/" className="flex items-center gap-3 group inline-block">
              <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-[#DC143C]/50 flex items-center justify-center text-[#DC143C]">
                <Scissors className="w-5 h-5 transform -rotate-45" />
              </div>
              <div>
                <div className="text-2xl font-black tracking-wider uppercase font-bebas text-white flex items-center gap-1 leading-none">
                  IRON <span className="text-[#DC143C]">&</span> FADE
                </div>
                <div className="text-[10px] tracking-[0.2em] text-gray-400 font-semibold uppercase font-oswald mt-0.5">
                  Barbershop
                </div>
              </div>
            </NavLink>
            <p className="text-sm text-gray-400 leading-relaxed">
              Barbería urbana de alto nivel en Quito. Especialistas en degradados perfectos, cortes clásicos, afeitados con navaja y rituales de barba de máxima precisión.
            </p>
            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              {/* WhatsApp */}
              <a
                href={SHOP_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#141414] border border-gray-800 flex items-center justify-center text-gray-300 hover:text-[#25D366] hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition duration-300 shadow-md"
                title="WhatsApp Oficial"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.763.459 3.486 1.332 5.003l-1.416 5.17 5.292-1.388c1.464.798 3.11 1.218 4.78 1.219h.005c5.504 0 9.987-4.478 9.988-9.985 0-2.668-1.038-5.176-2.925-7.062a9.923 9.923 0 00-7.058-2.941zm5.82 14.394c-.244.688-1.42 1.314-1.956 1.396-.536.082-1.229.117-3.992-1.025-3.535-1.46-5.811-5.042-5.988-5.278-.177-.236-1.439-1.916-1.439-3.654 0-1.737.908-2.593 1.231-2.946.323-.353.708-.442.943-.442.235 0 .471.002.678.013.218.011.512-.083.801.613.295.71 1.002 2.449 1.089 2.626.088.177.147.383.029.619-.118.235-.177.382-.353.589-.177.206-.372.46-.53.618-.177.177-.362.368-.156.721.206.353.916 1.512 1.966 2.448 1.35 1.203 2.489 1.576 2.842 1.752.353.177.56.147.766-.088.206-.236.884-1.031 1.119-1.384.235-.353.471-.294.795-.177.324.118 2.062 0.972 2.415 1.149.353.177.589.265.678.412.088.147.088.853-.156 1.541z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={SHOP_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#141414] border border-gray-800 flex items-center justify-center text-gray-300 hover:text-[#E4405F] hover:border-[#E4405F]/50 hover:bg-[#E4405F]/10 transition duration-300 shadow-md"
                title="Instagram Oficial"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={SHOP_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#141414] border border-gray-800 flex items-center justify-center text-gray-300 hover:text-[#1877F2] hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 transition duration-300 shadow-md"
                title="Facebook Oficial"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold font-oswald tracking-wider uppercase border-b border-gray-800 pb-2">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <NavLink to="/" className="hover:text-[#DC143C] transition flex items-center gap-2">
                  <span className="text-[#DC143C]">›</span> Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="/servicios" className="hover:text-[#DC143C] transition flex items-center gap-2">
                  <span className="text-[#DC143C]">›</span> Menú de Servicios
                </NavLink>
              </li>
              <li>
                <NavLink to="/galeria" className="hover:text-[#DC143C] transition flex items-center gap-2">
                  <span className="text-[#DC143C]">›</span> Galería de Cortes
                </NavLink>
              </li>
              <li>
                <NavLink to="/equipo" className="hover:text-[#DC143C] transition flex items-center gap-2">
                  <span className="text-[#DC143C]">›</span> Nuestros Barberos
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacto" className="hover:text-[#DC143C] transition flex items-center gap-2">
                  <span className="text-[#DC143C]">›</span> Ubicación & Reservas
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Col 3: Horarios */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold font-oswald tracking-wider uppercase border-b border-gray-800 pb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#DC143C]" /> Horarios de Atención
            </h3>
            <div className="space-y-2.5 text-sm">
              <div className="flex justify-between items-center text-gray-300">
                <span>Lunes a Sábado:</span>
                <span className="font-semibold text-white font-mono">09:00 - 20:00</span>
              </div>
              <div className="flex justify-between items-center text-gray-300">
                <span>Domingos:</span>
                <span className="font-semibold text-white font-mono">10:00 - 16:00</span>
              </div>
              <div className="mt-3 p-3 rounded-lg bg-[#141414] border border-gray-800 text-xs text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Atención VIP previa reserva por WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Col 4: Direct Contact */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold font-oswald tracking-wider uppercase border-b border-gray-800 pb-2">
              Contacto Directo
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#DC143C] shrink-0 mt-0.5" />
                <span>{SHOP_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#DC143C] shrink-0" />
                <a href={`tel:${SHOP_INFO.phone}`} className="hover:text-white transition font-mono">
                  {SHOP_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#DC143C] shrink-0" />
                <span>contacto@ironfade.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p className="font-medium text-gray-400">
            © 2026 Todos los derechos reservados. Desarrollado por Kindev
          </p>
          <div className="flex items-center gap-6 text-gray-400 text-[11px]">
            <span>Términos y Condiciones</span>
            <span>•</span>
            <span>Política de Privacidad</span>
            <span>•</span>
            <span className="text-[#DC143C] font-semibold">Iron & Fade Barbershop</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
