import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, MessageSquare, ChevronDown, Send, CheckCircle2, Navigation } from 'lucide-react';
import { SHOP_INFO, FAQS_DATA, BARBERS_DATA, SERVICES_DATA } from '../data/barbershopData';
import { OpenBadge } from '../components/OpenBadge';

export const ContactPage: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES_DATA[0].name,
    barber: 'Cualquier barbero disponible',
    date: '',
    time: '11:00',
    notes: '',
  });

  const [openFaq, setOpenFaq] = useState<string | null>(FAQS_DATA[0].id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola! Quiero reservar una cita en Iron %26 Fade Barbershop:%0A%0A` +
      `👤 *Nombre:* ${encodeURIComponent(formData.name)}%0A` +
      `📞 *Teléfono:* ${encodeURIComponent(formData.phone)}%0A` +
      `💈 *Servicio:* ${encodeURIComponent(formData.service)}%0A` +
      `✂️ *Barbero:* ${encodeURIComponent(formData.barber)}%0A` +
      `📅 *Fecha:* ${encodeURIComponent(formData.date || 'Lo antes posible')}%0A` +
      `⏰ *Hora:* ${encodeURIComponent(formData.time)}%0A` +
      (formData.notes ? `📝 *Notas:* ${encodeURIComponent(formData.notes)}` : '');

    window.open(`https://wa.me/593991952889?text=${text}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <OpenBadge />
        <h1 className="text-5xl sm:text-6xl font-black font-bebas text-white tracking-wide uppercase mt-2">
          Ubicación & Reservas
        </h1>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Ven a conocer nuestras instalaciones premium en Quito o agenda tu cita por WhatsApp completando el siguiente formulario expres.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Form (7 cols) */}
        <div className="lg:col-span-7 bg-[#111111] p-6 sm:p-10 rounded-3xl border border-gray-800 shadow-2xl space-y-6">
          <div className="space-y-1 border-b border-gray-800 pb-4">
            <h2 className="text-3xl font-black font-bebas text-white uppercase tracking-wide flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-[#DC143C]" />
              <span>Formulario de Reserva Rápida</span>
            </h2>
            <p className="text-xs text-gray-400">
              Al hacer clic en enviar, se abrirá tu aplicación de WhatsApp con todos los datos precargados para confirmar tu turno en 5 segundos.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-300 font-oswald">
                  Tu Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Mateo Guerrero"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#181818] border border-gray-800 focus:border-[#DC143C] focus:outline-none rounded-xl p-3 text-sm text-white placeholder-gray-500 transition"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-300 font-oswald">
                  Teléfono / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ej. 0991234567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#181818] border border-gray-800 focus:border-[#DC143C] focus:outline-none rounded-xl p-3 text-sm text-white placeholder-gray-500 transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Service */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-300 font-oswald">
                  Servicio Requerido *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#181818] border border-gray-800 focus:border-[#DC143C] focus:outline-none rounded-xl p-3 text-sm text-white transition"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={`${s.name} ($${s.price})`} className="bg-[#111] text-white">
                      {s.name} — ${s.price}
                    </option>
                  ))}
                </select>
              </div>

              {/* Barber */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-300 font-oswald">
                  Barbero de Preferencia
                </label>
                <select
                  value={formData.barber}
                  onChange={(e) => setFormData({ ...formData, barber: e.target.value })}
                  className="w-full bg-[#181818] border border-gray-800 focus:border-[#DC143C] focus:outline-none rounded-xl p-3 text-sm text-white transition"
                >
                  <option value="Cualquier barbero disponible">Cualquier barbero disponible</option>
                  {BARBERS_DATA.map((b) => (
                    <option key={b.id} value={b.name} className="bg-[#111] text-white">
                      {b.name} ({b.role})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Date */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-300 font-oswald">
                  Fecha Deseada
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#181818] border border-gray-800 focus:border-[#DC143C] focus:outline-none rounded-xl p-3 text-sm text-white transition"
                />
              </div>

              {/* Time */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-300 font-oswald">
                  Hora Aproximada
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-[#181818] border border-gray-800 focus:border-[#DC143C] focus:outline-none rounded-xl p-3 text-sm text-white transition"
                >
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="03:00 PM">03:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="05:00 PM">05:00 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                  <option value="07:00 PM">07:00 PM</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-300 font-oswald">
                Comentarios Adicionales (Opcional)
              </label>
              <textarea
                rows={3}
                placeholder="Ej. Tengo cabello rizado, quiero un degradado bajo..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-[#181818] border border-gray-800 focus:border-[#DC143C] focus:outline-none rounded-xl p-3 text-sm text-white placeholder-gray-500 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#DC143C] hover:bg-[#b01030] text-white py-4 rounded-xl font-extrabold uppercase tracking-wider text-sm shadow-[0_0_20px_rgba(220,20,60,0.5)] transition duration-300 transform active:scale-98"
            >
              <Send className="w-4 h-4" />
              <span>Enviar Reserva por WhatsApp</span>
            </button>
          </form>
        </div>

        {/* Right Column: Location & Info (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Info Card */}
          <div className="bg-[#111111] p-6 rounded-3xl border border-gray-800 space-y-6">
            <h3 className="text-2xl font-black font-bebas text-white uppercase tracking-wide">
              Información del Establecimiento
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#161616] border border-gray-800">
                <MapPin className="w-5 h-5 text-[#DC143C] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-gray-400 font-bold uppercase block font-oswald">Dirección:</span>
                  <span className="text-gray-200 font-medium">{SHOP_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#161616] border border-gray-800">
                <Phone className="w-5 h-5 text-[#DC143C] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-gray-400 font-bold uppercase block font-oswald">Llamadas & WhatsApp:</span>
                  <a href={`tel:${SHOP_INFO.phone}`} className="text-white font-mono hover:text-[#DC143C] font-semibold">
                    {SHOP_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#161616] border border-gray-800">
                <Clock className="w-5 h-5 text-[#DC143C] shrink-0 mt-0.5" />
                <div className="w-full space-y-1">
                  <span className="text-xs text-gray-400 font-bold uppercase block font-oswald">Horarios de Atención:</span>
                  <div className="flex justify-between text-xs text-gray-300">
                    <span>Lunes a Sábado:</span>
                    <span className="font-mono text-white">09:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-300">
                    <span>Domingos:</span>
                    <span className="font-mono text-white">10:00 - 16:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Direction Link */}
            <a
              href="https://maps.google.com/?q=República+del+Salvador+Quito"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#181818] hover:bg-[#222] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider border border-gray-700 hover:border-[#DC143C] transition"
            >
              <Navigation className="w-4 h-4 text-[#DC143C]" />
              <span>Abrir Mapa en Google Maps</span>
            </a>
          </div>

          {/* Styled Map Graphic Mockup */}
          <div className="bg-[#111111] rounded-3xl overflow-hidden border border-gray-800 h-64 relative group">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
              alt="Ubicación Iron & Fade Quito"
              className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#DC143C] text-white flex items-center justify-center shadow-[0_0_20px_rgba(220,20,60,0.8)] animate-bounce">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-white font-bebas text-xl tracking-wider uppercase mt-2">
                Iron & Fade Quito
              </span>
              <span className="text-xs text-gray-300">Av. República del Salvador E10-142</span>
            </div>
          </div>

        </div>

      </div>

      {/* FAQs Section */}
      <div className="space-y-6 pt-8 border-t border-gray-800/80">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-3xl font-black font-bebas text-white uppercase tracking-wide">
            Preguntas Frecuentes (FAQs)
          </h2>
          <p className="text-xs text-gray-400">Resuelve todas tus dudas antes de visitarnos.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS_DATA.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#111111] rounded-xl border border-gray-800 overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  className="w-full p-4 text-left flex justify-between items-center text-sm font-bold text-white hover:text-[#DC143C] transition"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-[#DC143C] transform transition duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-gray-300 leading-relaxed border-t border-gray-800/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
