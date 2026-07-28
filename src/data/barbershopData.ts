export interface Service {
  id: string;
  name: string;
  category: 'cortes' | 'barba' | 'tratamientos' | 'combos';
  price: number;
  duration: string;
  description: string;
  popular?: boolean;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'degradado' | 'clasico' | 'barba' | 'diseno';
  imageUrl: string;
  barberName: string;
  description: string;
}

export interface Barber {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  photo: string;
  bio: string;
  instagram: string;
  schedule: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  date: string;
  cutType: string;
  avatar: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const SHOP_INFO = {
  name: "Iron & Fade Barbershop",
  slogan: "Donde el Estilo se Forja",
  address: "Av. República del Salvador E10-142 y Moscú, Quito, Ecuador",
  phone: "+593 99 195 2889",
  whatsappUrl: "https://wa.me/593991952889?text=Hola,%20quiero%20reservar%20una%20cita%20en%20la%20barber%C3%ADa",
  facebookUrl: "https://www.facebook.com/kindevec/",
  instagramUrl: "https://www.instagram.com/kindevx/",
  hours: {
    weekdays: "Lunes a Sábado: 09:00 AM - 08:00 PM",
    sunday: "Domingo: 10:00 AM - 04:00 PM",
  },
  openTimeHour: 9,
  closeTimeHour: 20,
};

export const SERVICES_DATA: Service[] = [
  {
    id: "cut-fade-skin",
    name: "Skin Fade / Degradado al Cero",
    category: "cortes",
    price: 18,
    duration: "45 min",
    description: "Transición perfecta desde cero absoluto (razor o shaver) con textura personalizada en la parte superior.",
    popular: true,
    features: ["Afeitado de precisión con navaja", "Lavado capilar relajante", "Peinado con pomada premium"]
  },
  {
    id: "cut-classic",
    name: "Corte Clásico & Ejecutivo",
    category: "cortes",
    price: 15,
    duration: "40 min",
    description: "Tijera fina y máquina para acabados elegantes, limpios y atemporales ideal para profesionales.",
    features: ["Perfilado de contornos", "Toalla caliente limpia-cuello", "Styling final con cera mate"]
  },
  {
    id: "cut-urban-freestyle",
    name: "Corte Urbano + Hair Tattoo",
    category: "cortes",
    price: 22,
    duration: "60 min",
    description: "Degradado personalizado con líneas o diseños de freestyle geométrico labrados con navaja.",
    features: ["Diseño exclusivo hecho a mano", "Navaja de barbero profesional", "Producto fijador de alto brillo"]
  },
  {
    id: "beard-sculpt",
    name: "Perfilado & Esculpido de Barba",
    category: "barba",
    price: 12,
    duration: "30 min",
    description: "Líneas definidas, rebajado de volumen proporcional y tratamiento con aceite hidratante esencial.",
    features: ["Recorte milimétrico con tijera/máquina", "Contorneado con navaja", "Aplicación de bálsamo y aceite"]
  },
  {
    id: "beard-hot-towel",
    name: "Ritual Barba Real (Toalla Caliente)",
    category: "barba",
    price: 16,
    duration: "40 min",
    description: "Experiencia tradicional de afeitado con toallas al vapor impregnadas con eucalipto, masaje y navaja libre.",
    popular: true,
    features: ["3 Toallas calientes aromatizadas", "Espuma de afeitar artesanal", "Afeitado a navaja clásico", "Bálsamo aftershave frío"]
  },
  {
    id: "combo-iron-fade",
    name: "Paquete Combo 'Iron & Fade' VIP",
    category: "combos",
    price: 28,
    duration: "75 min",
    description: "Nuestro servicio insignia: Corte completo a elección + Ritual de Barba con toalla caliente + Masaje capilar.",
    popular: true,
    features: ["Corte de cabello a elección", "Ritual completo de barba", "Lavado con champú de menta", "Bebida de cortesía (Cerveza artesanal o Whisky)"]
  },
  {
    id: "combo-father-son",
    name: "Paquete Dúo 'Padre e Hijo'",
    category: "combos",
    price: 32,
    duration: "75 min",
    description: "Servicio simultáneo para 2 personas con la misma atención de primera clase y bebidas de bienvenida.",
    features: ["2 Cortes completos", "Perfilado de contornos", "Cera de peinado para ambos"]
  },
  {
    id: "treatment-exfoliation",
    name: "Mascarilla Negra & Exfoliación Facial",
    category: "tratamientos",
    price: 14,
    duration: "25 min",
    description: "Limpieza profunda de poros, extracción de impurezas y mascarilla purificante de carbón activado.",
    features: ["Exfoliante de gránulos orgánicos", "Mascarilla Peel-off carbón", "Tónico facial matificante"]
  },
  {
    id: "treatment-gray-blend",
    name: "Matización de Canas (Camuflaje)",
    category: "tratamientos",
    price: 15,
    duration: "30 min",
    description: "Tinte discreto de efecto natural que disimula las canas sin cambiar agresivamente el tono original.",
    features: ["Tinte libre de amoníaco", "Resultados hipernaturales", "Duración de 3 a 4 semanas"]
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Mid Fade con Textura Spiky",
    category: "degradado",
    imageUrl: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800",
    barberName: "Mateo 'The Blade' Silva",
    description: "Degradado medio nítido con desconexión superior y pomada mate."
  },
  {
    id: "gal-2",
    title: "Low Skin Fade & Barba Alineada",
    category: "degradado",
    imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800",
    barberName: "Santi 'Razor' Guerrero",
    description: "Transición desde la piel cerca de la oreja con barba escultural simétrica."
  },
  {
    id: "gal-3",
    title: "Corte Clásico Pompadour",
    category: "clasico",
    imageUrl: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800",
    barberName: "Carlos 'Master' Mendoza",
    description: "Peinado alto tradicional sostenido con pomada brillante clásica."
  },
  {
    id: "gal-4",
    title: "Ritual de Barba & Navaja",
    category: "barba",
    imageUrl: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800",
    barberName: "Santi 'Razor' Guerrero",
    description: "Alineación de mejilla y cuello con toalla de eucalipto al vapor."
  },
  {
    id: "gal-5",
    title: "High Fade con Crop Top",
    category: "degradado",
    imageUrl: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&q=80&w=800",
    barberName: "Mateo 'The Blade' Silva",
    description: "Degradado alto agresivo con flequillo recto texturizado estilo francés."
  },
  {
    id: "gal-6",
    title: "Freestyle Line Design",
    category: "diseno",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    barberName: "David 'Viper' Ramos",
    description: "Corte urbano con doble raya lateral limpia realizada a pulso con navaja."
  },
  {
    id: "gal-7",
    title: "Barba Larga Esculpida & Bigote",
    category: "barba",
    imageUrl: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800",
    barberName: "Carlos 'Master' Mendoza",
    description: "Grooming integral de barba tupida con cera fijadora en el bigote."
  },
  {
    id: "gal-8",
    title: "Slick Back con Taper Fade",
    category: "clasico",
    imageUrl: "https://images.unsplash.com/photo-1520338661084-680395057c93?auto=format&fit=crop&q=80&w=800",
    barberName: "David 'Viper' Ramos",
    description: "Peinado hacia atrás impecable manteniendo bordes limpios en patillas y nuca."
  }
];

export const BARBERS_DATA: Barber[] = [
  {
    id: "carlos-mendoza",
    name: "Carlos Mendoza",
    role: "Master Barber & Fundador",
    experience: "12 años de experiencia",
    specialty: "Cortes Clásicos, Navaja Tradicional & Ritual de Barba",
    photo: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800",
    bio: "Formado en escuelas tradicionales de barbería europea. Apasionado por la precisión del afeitado clásico y la hospitalidad de la vieja escuela.",
    instagram: "https://www.instagram.com/kindevx/",
    schedule: "Lun - Vie (09:00 - 18:00)"
  },
  {
    id: "mateo-silva",
    name: "Mateo 'The Blade' Silva",
    role: "Especialista en Fades & Textura",
    experience: "7 años de experiencia",
    specialty: "Skin Fade, Taper, Burst Fade & Styling Moderno",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    bio: "Obsesionado con las transiciones milimétricas y los acabados en sombras perfectas. Referente en tendencias urbanas de corte.",
    instagram: "https://www.instagram.com/kindevx/",
    schedule: "Mar - Sáb (10:00 - 19:00)"
  },
  {
    id: "santi-guerrero",
    name: "Santi 'Razor' Guerrero",
    role: "Barber & Beard Stylist",
    experience: "6 años de experiencia",
    specialty: "Esculpido de Barba, Afeitado al Vapor & Perfilado",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    bio: "Especialista en estructuración facial masculina y manejo experto de aceites esenciales y tratamieto para barba.",
    instagram: "https://www.instagram.com/kindevx/",
    schedule: "Mié - Dom (09:00 - 18:00)"
  },
  {
    id: "david-ramos",
    name: "David 'Viper' Ramos",
    role: "Urban Creative Barber",
    experience: "5 años de experiencia",
    specialty: "Freestyle Hair Art, Mullets & Cortes Alternativos",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
    bio: "Artista del cabello que convierte cada cabeza en un lienzo. Innovador constante con técnicas de tijera y diseño a mano alzada.",
    instagram: "https://www.instagram.com/kindevx/",
    schedule: "Lun - Sáb (11:00 - 20:00)"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Andrés Benítez",
    role: "Cliente Frecuente",
    comment: "El combo Iron & Fade es una locura. La atención con la toalla caliente y la cerveza fría mientras te perfilan la barba no tiene comparación en la ciudad.",
    rating: 5,
    date: "Hace 3 días",
    cutType: "Combo Iron & Fade VIP",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-2",
    name: "Gabriel Morales",
    role: "Empresario",
    comment: "Carlos es un maestro. Tengo años cortándome el cabello con él y el degradado al cero siempre queda simétrico e impecable. Puntualidad 10/10.",
    rating: 5,
    date: "Hace 1 semana",
    cutType: "Skin Fade & Corte Clásico",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-3",
    name: "Sebastián Torres",
    role: "Diseñador",
    comment: "La vibra del local es increíble: música excelente, sillones de cuero super cómodos y los barberos dominan las últimas tendencias urbanas.",
    rating: 5,
    date: "Hace 2 semanas",
    cutType: "Urban Freestyle + Beard Sculpt",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"
  }
];

export const FAQS_DATA: FAQ[] = [
  {
    id: "faq-1",
    question: "¿Es necesario reservar cita previa o puedo ir sin reserva?",
    answer: "Recomendamos firmemente agendar por WhatsApp para garantizar tu turno sin tiempos de espera. Sin embargo, también atendemos por orden de llegada sujeto a disponibilidad."
  },
  {
    id: "faq-2",
    question: "¿Qué formas de pago aceptan en el local?",
    answer: "Aceptamos efectivo, transferencias bancarias directas, tarjetas de débito y crédito (Visa, Mastercard, Diners)."
  },
  {
    id: "faq-3",
    question: "¿En qué consiste el ritual de barba con toalla caliente?",
    answer: "Es un tratamiento clásico que utiliza toallas de algodón humectadas con vapor y aceites esenciales de eucalipto para abrir los poros, ablandar el vello facial, evitar irritaciones y proporcionar un afeitado extremadamente suave."
  },
  {
    id: "faq-4",
    question: "¿Qué incluye la atención de bienvenida?",
    answer: "Todos nuestros servicios incluyen bebida de cortesía a elección (cerveza artesanal, café espresso recién molido, whisky o agua mineral) y servicio de lavado capilar."
  },
  {
    id: "faq-5",
    question: "¿Tienen estacionamiento para clientes?",
    answer: "Sí, contamos con parqueadero privado vigilado para clientes justo frente a nuestro local sin costo adicional."
  }
];
