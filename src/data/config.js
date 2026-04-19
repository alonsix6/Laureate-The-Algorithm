// Configuración general de The Algorithm by Reset
// Textos, mensajes, secciones y configuración de UI

// ============================================================================
// BRAND CONFIGURATION - Universidad Privada del Norte (UPN) / Laureate
// ============================================================================
export const BRAND_CONFIG = {
  name: 'The Algorithm by Reset',
  tagline: 'Social Intelligence Platform',
  subtitle: 'Optimización automática de inversión digital en captación de estudiantes',
  product: 'Pregrado y Posgrado 2026',
  market: 'Lima Metropolitana y Norte del Perú (10 campus)',
  client: 'UPN - Universidad Privada del Norte',
  agency: 'Reset Agency',
  isTemplate: false,
  version: '1.0.0',
  slogan: 'Lleva tu talento más alto',
  founded: 1994,
};

// ============================================================================
// LAYER TITLES - Títulos y descripciones de las 4 capas
// ============================================================================
export const LAYER_CONFIG = {
  data: {
    id: 'data',
    name: 'Captura de Señales',
    subtitle: 'Monitoreo en tiempo real del ecosistema digital educativo',
    description: 'Búsqueda, Tendencia, Intención, Engagement',
    icon: 'Search',
    color: 'from-fitzone-orange to-fitzone-darkOrange',
  },
  decision: {
    id: 'decision',
    name: 'Inteligencia de Mercado',
    subtitle: 'Insights automáticos para optimizar inversión en captación de alumnos',
    description: 'Análisis y definición de estrategia',
    icon: 'Target',
    color: 'from-fitzone-darkOrange to-fitzone-electric',
  },
  execution: {
    id: 'execution',
    name: 'Activación Estratégica',
    subtitle: 'Distribución inteligente de presupuesto y contenidos',
    description: 'Implementación en tiempo real',
    icon: 'Zap',
    color: 'from-fitzone-electric to-fitzone-lime',
  },
  optimization: {
    id: 'optimization',
    name: 'Performance & Optimización',
    subtitle: 'Resultados en tiempo real y ajustes automáticos',
    description: 'Evaluación y redistribución',
    icon: 'TrendingUp',
    color: 'from-fitzone-lime to-fitzone-orange',
  },
};

// ============================================================================
// KEY MESSAGES - Mensajes clave de comunicación UPN
// ============================================================================
export const KEY_MESSAGES = {
  empleabilidad: {
    title: 'Empleabilidad Comprobada',
    message: '9 de cada 10 egresados consigue empleo en su primer año',
    description: '5 Estrellas QS en Empleabilidad, el mejor indicador del mercado',
  },
  acceso: {
    title: 'Calidad Accesible',
    message: 'Desde S/450/cuota - educación internacional sin costo internacional',
    description: 'Becas, financiamiento y planes de pago a tu medida',
  },
  acreditacion: {
    title: 'Acreditación Internacional',
    message: 'Licenciada por SUNEDU · IAC-CINDA 2024–2029 · QS 4 Estrellas',
    description: 'Una de las 4 universidades en Perú con acreditación IAC-CINDA',
  },
  red: {
    title: 'Red Laureate Global',
    message: 'Parte de Laureate International Universities - 25+ países',
    description: 'Intercambios internacionales y doble titulación disponibles',
  },
  flexibilidad: {
    title: 'Modalidades para tu Vida',
    message: 'Presencial, Gente que Trabaja (noches/fines) y 100% a Distancia',
    description: 'Más de 18 programas online · Posgrado 100% virtual disponible',
  },
};

// ============================================================================
// DATA SOURCES - Configuración de fuentes de datos
// ============================================================================
export const DATA_SOURCES_CONFIG = {
  googleTrends: {
    enabled: true,
    name: 'Google Trends',
    description: 'Tendencias de búsqueda educativa en tiempo real',
    icon: 'TrendingUp',
    color: 'text-fitzone-electric',
    bgColor: 'bg-fitzone-slate',
    region: 'PE',
    category: 'Education',
    interval: 'hourly',
    status: 'active',
    geo: ['Lima', 'Trujillo', 'Cajamarca'],
  },
  tiktok: {
    enabled: true,
    name: 'TikTok',
    description: 'Contenido viral educativo y hashtags trending',
    icon: 'Video',
    color: 'text-fitzone-lime',
    bgColor: 'bg-fitzone-slate',
    scraping: 'public',
    status: 'active',
  },
  meta: {
    enabled: true,
    name: 'Meta Platforms',
    description: 'Facebook e Instagram insights educación',
    icon: 'Share2',
    color: 'text-fitzone-electric',
    bgColor: 'bg-fitzone-slate',
    platforms: ['Facebook', 'Instagram'],
    status: 'active',
  },
  youtube: {
    enabled: true,
    name: 'YouTube',
    description: 'Videos de vida universitaria y testimoniales',
    icon: 'Youtube',
    color: 'text-fitzone-orange',
    bgColor: 'bg-fitzone-slate',
    status: 'active',
  },
  educacion: {
    enabled: true,
    name: 'Portales Educativos',
    description: 'SUNEDU, Gestión, El Comercio, portales especializados',
    icon: 'Globe',
    color: 'text-fitzone-lime',
    bgColor: 'bg-fitzone-slate',
    sources: ['SUNEDU', 'Gestión Educación', 'El Comercio'],
    status: 'active',
  },
  ga4: {
    enabled: false,
    name: 'Google Analytics 4',
    description: 'Tráfico web y conversiones upn.edu.pe',
    icon: 'BarChart3',
    color: 'text-fitzone-orange',
    bgColor: 'bg-fitzone-slate',
    mock_data: true,
    status: 'active',
  },
};

// ============================================================================
// CHANNELS - Canales de activación
// ============================================================================
export const CHANNELS_CONFIG = {
  meta_ads: {
    name: 'Meta Ads',
    icon: 'Share2',
    color: 'text-fitzone-electric',
    bgColor: 'bg-fitzone-slate',
    primary_kpi: 'Leads + Awareness',
    description: 'Instagram y Facebook Ads',
    subchannels: ['Lead Ads', 'Conversaciones WhatsApp', 'Visitas Landing'],
  },
  google_search: {
    name: 'Google Search',
    icon: 'Search',
    color: 'text-fitzone-lime',
    bgColor: 'bg-fitzone-slate',
    primary_kpi: 'Intención de matrícula',
    description: 'Campañas Brand, Genérico, Competidor',
  },
  google_display: {
    name: 'Google Display',
    icon: 'Monitor',
    color: 'text-fitzone-orange',
    bgColor: 'bg-fitzone-slate',
    primary_kpi: 'Remarketing + Awareness',
    description: 'Red de display de Google',
  },
  tiktok_ads: {
    name: 'TikTok Ads',
    icon: 'Video',
    color: 'text-fitzone-lime',
    bgColor: 'bg-fitzone-slate',
    primary_kpi: 'Jóvenes 17-22',
    description: 'In-Feed y TopView ads',
  },
  influencers: {
    name: 'Influencers',
    icon: 'Users',
    color: 'text-fitzone-orange',
    bgColor: 'bg-fitzone-slate',
    primary_kpi: 'UGC + Credibilidad',
    description: 'Micro-influencers estudiantes y egresados',
  },
};

// ============================================================================
// CAMPUS - Ubicaciones UPN
// ============================================================================
export const SEDES_CONFIG = [
  { id: 1, name: 'UPN Los Olivos', distrito: 'Los Olivos', nse: 'B/C', size: 'Campus Principal', type: 'Lima Norte' },
  { id: 2, name: 'UPN Breña', distrito: 'Breña / Cercado', nse: 'B/C', size: 'Campus Completo', type: 'Lima Centro' },
  { id: 3, name: 'UPN Chorrillos', distrito: 'Chorrillos', nse: 'B/C', size: 'Campus Completo', type: 'Lima Sur' },
  { id: 4, name: 'UPN Comas', distrito: 'Comas', nse: 'C', size: 'Campus Completo', type: 'Lima Norte' },
  { id: 5, name: 'UPN San Juan de Lurigancho', distrito: 'SJL', nse: 'C', size: 'Campus Completo', type: 'Lima Este' },
  { id: 6, name: 'UPN San Juan de Miraflores', distrito: 'SJM', nse: 'B/C', size: 'Campus Completo', type: 'Lima Sur' },
  { id: 7, name: 'UPN Ate', distrito: 'Ate', nse: 'C', size: 'Campus Nuevo', type: 'Lima Este - Inversión US$28M' },
  { id: 8, name: 'UPN Trujillo El Molino', distrito: 'Trujillo', nse: 'B/C', size: 'Campus Regional', type: 'Sede Fundacional 1994' },
  { id: 9, name: 'UPN Trujillo San Isidro', distrito: 'Trujillo Norte', nse: 'B/C', size: 'Campus Regional', type: 'Trujillo - La Libertad' },
  { id: 10, name: 'UPN Cajamarca', distrito: 'Cajamarca', nse: 'B/C', size: 'Campus Regional', type: 'Sierra Norte' },
];

// ============================================================================
// AUDIENCES - Audiencias objetivo UPN (2 perfiles principales)
// ============================================================================
export const TARGET_AUDIENCES = [
  {
    id: 'bachilleres_jovenes',
    name: 'Bachilleres / Jóvenes',
    description: '17-22 años, egresados de secundaria buscando universidad',
    size: '~115,000',
    age_range: '17-22',
    priority: 'high',
    segments: [
      {
        name: 'Recién egresados 5° secundaria',
        size: '~65,000',
        age: '17-18',
        characteristics: ['Alta influencia de pares', 'Sensibles al precio', 'TikTok como canal principal'],
      },
      {
        name: 'Jóvenes que trabajan y estudian',
        size: '~50,000',
        age: '19-22',
        characteristics: ['Buscan modalidad flexible', 'Empleabilidad prioritaria', 'Primeros ingresos propios'],
      },
    ],
    interests: ['Empleabilidad', 'Carrera con futuro', 'Precio accesible', 'Campus cercano'],
    message: 'Lleva tu talento más alto: 9 de cada 10 egresados consigue empleo',
    channels: {
      'TikTok Ads': 33,
      'Meta Ads': 28,
      'YouTube / Google Video': 17,
      'Google Search': 12,
      'WhatsApp': 10,
    },
    engagement_rate: 14.5,
    cpl_target: 7,
    conversion_funnel: {
      alcance: 1500000,
      visitas_landing: 22500,
      formularios: 1800,
      charlas_campus: 630,
      matriculados: 315,
    },
  },
  {
    id: 'padres_de_familia',
    name: 'Padres de Familia',
    description: '35-55 años, NSE B/C, buscan universidad para sus hijos',
    size: '~750,000',
    age_range: '35-55',
    priority: 'high',
    segments: [
      {
        name: 'Padres NSE B - Lima',
        size: '~280,000',
        age: '35-48',
        characteristics: ['Priorizan reputación', 'Buscan empleabilidad', 'Investigan en Google y Facebook'],
      },
      {
        name: 'Padres NSE C - Lima y Trujillo',
        size: '~470,000',
        age: '40-55',
        characteristics: ['Costo y financiamiento decisivo', 'SUNEDU es garantía de calidad', 'WhatsApp para consultas'],
      },
    ],
    interests: ['Empleabilidad del egresado', 'Costo y becas', 'Licencia SUNEDU', 'Seguridad del campus'],
    message: 'La mejor inversión para el futuro de tu hijo/a - desde S/450/cuota',
    channels: {
      'Facebook': 43,
      'Google Search': 22,
      'WhatsApp': 13,
      'YouTube': 12,
      'Instagram': 10,
    },
    engagement_rate: 9.2,
    cpl_target: 12,
    conversion_funnel: {
      alcance: 850000,
      visitas_landing: 12750,
      formularios: 765,
      charlas_campus: 268,
      matriculados: 134,
    },
  },
];

// ============================================================================
// TIMING - Mejores momentos para pauta universitaria
// ============================================================================
export const OPTIMAL_TIMING = {
  dayparts: [
    { name: 'Mañana', hours: '7:00 - 10:00', performance: 'high', multiplier: 1.4, audience: 'Padres de familia' },
    { name: 'Mediodía', hours: '12:00 - 14:00', performance: 'medium', multiplier: 1.1, audience: 'Estudiantes trabajadores' },
    { name: 'Tarde', hours: '16:00 - 20:00', performance: 'very_high', multiplier: 1.7, audience: 'Jóvenes y padres' },
    { name: 'Noche', hours: '20:00 - 23:00', performance: 'high', multiplier: 1.3, audience: 'Jóvenes 17-22' },
  ],
  weekdays: [
    { name: 'Lunes', performance: 'high', recommended: true, note: 'Inicio de semana - decisión activa' },
    { name: 'Martes', performance: 'very_high', recommended: true, note: 'Pico de búsquedas de carreras' },
    { name: 'Miércoles', performance: 'high', recommended: true, note: 'Comparación de opciones' },
    { name: 'Jueves', performance: 'high', recommended: true, note: 'Pre-fin de semana - visita campus' },
    { name: 'Viernes', performance: 'medium', recommended: true, note: 'Charlas de orientación' },
    { name: 'Sábado', performance: 'high', recommended: true, note: 'Ferias universitarias, visita campus' },
    { name: 'Domingo', performance: 'medium', recommended: false, note: 'Consultas familiares informales' },
  ],
  seasonality: [
    { month: 'Enero-Febrero', demand: 'very_high', note: 'Pico máximo - admisión Semestre I' },
    { month: 'Marzo', demand: 'high', note: 'Inicio de ciclo, inscripciones tardías' },
    { month: 'Abril-Mayo', demand: 'medium', note: 'Pre-admisión Semestre II' },
    { month: 'Junio', demand: 'high', note: 'Inicio admisión Semestre II' },
    { month: 'Julio-Agosto', demand: 'very_high', note: 'Pico secundario - admisión Semestre II' },
    { month: 'Sept-Oct', demand: 'medium', note: 'Pre-admisión ciclo siguiente' },
    { month: 'Nov-Dic', demand: 'high', note: 'Pre-inscripción anticipada Semestre I' },
  ],
};

// ============================================================================
// PROGRAMAS - Productos académicos UPN monitoreados
// ============================================================================
export const SERVICIOS_CONFIG = [
  { id: 1, nombre: 'Pregrado - Ingeniería', revenue_pct: 32, cpl_target: 7, conversion: 8 },
  { id: 2, nombre: 'Pregrado - Negocios', revenue_pct: 28, cpl_target: 7, conversion: 9 },
  { id: 3, nombre: 'Pregrado - Derecho y CC.SS.', revenue_pct: 18, cpl_target: 8, conversion: 7 },
  { id: 4, nombre: 'Pregrado - Ciencias de la Salud', revenue_pct: 12, cpl_target: 9, conversion: 6 },
  { id: 5, nombre: 'Posgrado - MBA Ejecutivo', revenue_pct: 6, cpl_target: 20, conversion: 5 },
  { id: 6, nombre: 'Educación Continua / Diplomas', revenue_pct: 4, cpl_target: 12, conversion: 8 },
];

// ============================================================================
// METRIC CARDS - Configuración de tarjetas métricas principales
// ============================================================================
export const METRIC_CARDS_CONFIG = [
  {
    id: 'nuevos_estudiantes',
    title: 'Nuevos Matriculados',
    description: 'Estudiantes captados y matriculados este ciclo',
    icon: 'Users',
    color: 'fitzone-orange',
    gradient: 'from-fitzone-orange to-fitzone-darkOrange',
  },
  {
    id: 'reach',
    title: 'Alcance Total',
    description: 'Usuarios únicos impactados en Lima y Trujillo',
    icon: 'Eye',
    color: 'fitzone-electric',
    gradient: 'from-fitzone-electric to-fitzone-cyan',
  },
  {
    id: 'engagement',
    title: 'Interacciones',
    description: 'Likes, shares, comentarios, saves',
    icon: 'Heart',
    color: 'fitzone-lime',
    gradient: 'from-fitzone-lime to-fitzone-green',
  },
  {
    id: 'opportunity',
    title: 'UPN Opportunity Score',
    description: 'Índice de oportunidad de captación universitaria',
    icon: 'Zap',
    color: 'fitzone-orange',
    gradient: 'from-fitzone-orange to-fitzone-lime',
  },
];

// ============================================================================
// CRM INTEGRATION - Configuracion de alertas CPL
// ============================================================================
export const CRM_CONFIG = {
  enabled: false,
  api_key: null,
  cpl_thresholds: {
    bachilleres_jovenes: {
      cpl_target: 7,
      cpl_alert: 10,
      cpl_pause: 15,
      max_cpl: 12,
    },
    padres_de_familia: {
      cpl_target: 12,
      cpl_alert: 16,
      cpl_pause: 22,
      max_cpl: 18,
    },
  },
  conversion_tracking: {
    lead_ads: true,
    whatsapp_conversations: true,
    landing_page_visits: true,
    charla_signups: true,
    enrollment_conversions: true,
  },
  alerts: {
    email: true,
    webhook: false,
    dashboard: true,
  },
};

// ============================================================================
// UI TEXT - Textos de interfaz
// ============================================================================
export const UI_TEXT = {
  loading: 'Cargando UPN Algorithm...',
  lastUpdate: 'Última actualización',
  systemActive: 'Sistema activo',
  noData: 'No hay datos disponibles',
  error: 'Error al cargar datos',
  retry: 'Reintentar',

  footer: {
    copyright: '2026 The Algorithm by Reset · UPN - Universidad Privada del Norte',
    version: 'v1.0.0',
  },

  buttons: {
    viewDetails: 'Ver detalles',
    export: 'Exportar',
    refresh: 'Actualizar',
    filter: 'Filtrar',
    expandAll: 'Mostrar todos los programas',
    collapseAll: 'Mostrar solo top 5',
  },
};

// ============================================================================
// EXPORT ALL
// ============================================================================
export default {
  BRAND_CONFIG,
  LAYER_CONFIG,
  KEY_MESSAGES,
  DATA_SOURCES_CONFIG,
  CHANNELS_CONFIG,
  SEDES_CONFIG,
  TARGET_AUDIENCES,
  OPTIMAL_TIMING,
  SERVICIOS_CONFIG,
  METRIC_CARDS_CONFIG,
  CRM_CONFIG,
  UI_TEXT,
};
