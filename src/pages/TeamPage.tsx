import React from 'react';
import { motion } from 'motion/react';
import { Users, Award, Clock, MessageSquare, Instagram, Scissors } from 'lucide-react';
import { BARBERS_DATA, SHOP_INFO } from '../data/barbershopData';

export const TeamPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#1a1a1a] px-4 py-1.5 rounded-full border border-[#DC143C]/40 text-xs font-bold text-[#DC143C] uppercase tracking-widest font-oswald">
          <Users className="w-4 h-4" />
          <span>Talento & Precisión</span>
        </div>
        <h1 className="text-5xl sm:text-6xl font-black font-bebas text-white tracking-wide uppercase">
          Nuestros Master Barberos
        </h1>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Cada uno de nuestros estilistas cuenta con años de especialización en visagismo facial masculino, técnicas de degradado perfecto y protocolo de afeitado tradicional.
        </p>
      </div>

      {/* Barbers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BARBERS_DATA.map((barber, idx) => (
          <motion.div
            key={barber.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-[#111111] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#DC143C]/60 transition duration-300 flex flex-col lg:flex-row group shadow-2xl"
          >
            {/* Barber Image Box */}
            <div className="lg:w-2/5 h-80 lg:h-auto overflow-hidden relative shrink-0">
              <img
                src={barber.photo}
                alt={barber.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 lg:hidden" />
              <div className="absolute top-4 left-4 bg-[#DC143C] text-white px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest shadow">
                {barber.experience}
              </div>
            </div>

            {/* Barber Info Box */}
            <div className="lg:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-black font-bebas text-white uppercase tracking-wide group-hover:text-[#DC143C] transition">
                      {barber.name}
                    </h3>
                    <a
                      href={barber.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#1a1a1a] text-gray-400 hover:text-[#E4405F] hover:bg-[#1f1a1d] transition"
                      title="Ver Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-xs font-bold text-[#DC143C] uppercase tracking-wider font-oswald mt-0.5">
                    {barber.role}
                  </p>
                </div>

                <div className="p-3 bg-[#161616] rounded-xl border border-gray-800 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 font-oswald block">
                    Especialidad Principal:
                  </span>
                  <p className="text-xs font-semibold text-gray-200">{barber.specialty}</p>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {barber.bio}
                </p>

                <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                  <Clock className="w-3.5 h-3.5 text-[#DC143C]" />
                  <span>Horario: {barber.schedule}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-800/80">
                <a
                  href={`https://wa.me/593991952889?text=Hola,%20quisiera%20reservar%20mi%20cita%20con%20el%20barbero%20${encodeURIComponent(barber.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#DC143C] hover:bg-[#b01030] text-white py-3 rounded-xl font-bold uppercase tracking-wider text-xs shadow-lg hover:shadow-[0_0_20px_rgba(220,20,60,0.5)] transition duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Reservar Turno con {barber.name.split(' ')[0]}</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Join the Team / Guarantee banner */}
      <div className="bg-[#141414] border border-gray-800 p-8 rounded-2xl text-center space-y-3">
        <div className="flex items-center justify-center gap-2 text-amber-400">
          <Award className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-widest font-oswald">Garantía de Satisfacción 100%</span>
        </div>
        <h3 className="text-2xl font-black font-bebas text-white uppercase">¿No quedaste satisfecho con el resultado?</h3>
        <p className="text-xs text-gray-400 max-w-xl mx-auto">
          En Iron & Fade la perfección no es negociable. Si no estás completamente conforme con tu corte o perfilado, te ajustamos el estilo sin costo alguno.
        </p>
      </div>
    </div>
  );
};
