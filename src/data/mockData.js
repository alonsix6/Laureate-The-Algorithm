// Mock Data - UPN (Universidad Privada del Norte) · The Algorithm by Reset
// Datos simulados realistas para campaña de admisión universitaria - Perú 2026

// ============================================================================
// MOCK GA4 DATA - Google Analytics 4 simulado (benchmark SimilarWeb upn.edu.pe)
// ============================================================================
export const MOCK_GA4_DATA = {
  sessions: {
    total: 74200,
    new_users: 48500,
    returning: 25700,
    avg_session_duration: '4:29',
    pages_per_session: 5.97,
    bounce_rate: 25.4,
  },

  top_pages: [
    {
      page: '/admision',
      title: 'Admisión UPN 2026',
      views: 22400,
      bounce_rate: 18,
      avg_time: '5:12',
    },
    {
      page: '/carreras',
      title: 'Carreras Universitarias',
      views: 18600,
      bounce_rate: 22,
      avg_time: '4:48',
    },
    {
      page: '/becas',
      title: 'Becas y Financiamiento',
      views: 14800,
      bounce_rate: 28,
      avg_time: '3:55',
    },
    {
      page: '/carreras/ingenieria',
      title: 'Ingeniería UPN',
      views: 11200,
      bounce_rate: 24,
      avg_time: '4:22',
    },
    {
      page: '/carreras/negocios',
      title: 'Negocios y Administración',
      views: 9500,
      bounce_rate: 26,
      avg_time: '4:05',
    },
  ],

  conversions: {
    charla_orientacion: 1240,
    formulario_admision: 980,
    whatsapp_clicks: 5200,
    solicitud_informacion: 2850,
    descarga_brochure: 1680,
    newsletter_signups: 890,
  },

  traffic_sources: {
    organic_search: { percentage: 32, sessions: 23744, label: 'Búsqueda Orgánica' },
    paid_search: { percentage: 28, sessions: 20776, label: 'Google Ads' },
    social_media: { percentage: 30, sessions: 22260, label: 'Meta Ads' },
    direct: { percentage: 6, sessions: 4452, label: 'Directo' },
    referral: { percentage: 4, sessions: 2968, label: 'Referencias' },
  },

  devices: {
    mobile: { percentage: 74, sessions: 54908, label: 'Mobile' },
    desktop: { percentage: 22, sessions: 16324, label: 'Desktop' },
    tablet: { percentage: 4, sessions: 2968, label: 'Tablet' },
  },

  locations: [
    { distrito: 'Los Olivos', sessions: 14840, conversions: 148, percentage: 20 },
    { distrito: 'Comas', sessions: 10388, conversions: 112, percentage: 14 },
    { distrito: 'San Juan de Lurigancho', sessions: 8904, conversions: 98, percentage: 12 },
    { distrito: 'Chorrillos', sessions: 7420, conversions: 82, percentage: 10 },
    { distrito: 'Trujillo', sessions: 6678, conversions: 74, percentage: 9 },
    { distrito: 'Breña / Lima Centro', sessions: 5194, conversions: 55, percentage: 7 },
    { distrito: 'San Juan de Miraflores', sessions: 4452, conversions: 48, percentage: 6 },
    { distrito: 'Otros', sessions: 16324, conversions: 165, percentage: 22 },
  ],
};

// ============================================================================
// PERFORMANCE KPIs - Métricas principales del dashboard
// ============================================================================
export const PERFORMANCE_KPIS = {
  nuevos_miembros: {
    current: 1950,
    previous: 1615,
    change: '+20.7',
    trend: 'up',
    label: 'Nuevos Matriculados',
    description: 'Alumnos captados e inscritos este ciclo',
  },

  leads: {
    qualified: 8200,
    total: 11400,
    qualification_rate: 71.9,
    cost_per_lead: 7.20,
    trend: '+18.6%',
    trend_value: 18.6,
  },

  alcance: {
    current: 10400000,
    previous: 8060000,
    change: '+29.1',
    trend: 'up',
    label: 'Alcance Total',
    description: 'Prospectos únicos impactados',
  },

  reach: {
    unique_reach: 10400000,
    impressions: 41000000,
    frequency: 3.9,
    trend: '+29.1%',
    trend_value: 29.1,
  },

  engagement: {
    total_interactions: 1380000,
    engagement_rate: 13.3,
    shares: 188000,
    trend: '+21.8%',
    trend_value: 21.8,
  },

  budget: {
    total_budget: 100000,
    total_spent: 93500,
    spent_percentage: 93.5,
    cost_per_click: 0.41,
    trend: 'on-track',
  },

  cpl: {
    current: 7.20,
    previous: 8.80,
    change: '-18.2',
    trend: 'down',
    label: 'Costo por Lead',
    description: 'Costo promedio por lead calificado',
    currency: '$',
  },

  trials: {
    current: 5500,
    previous: 4370,
    change: '+25.9',
    trend: 'up',
    label: 'Charlas de Orientación',
    description: 'Prospectos que asistieron a charla informativa',
  },

  whatsapp: {
    current: 23000,
    previous: 16800,
    change: '+36.9',
    trend: 'up',
    label: 'Conversaciones WhatsApp',
    description: 'Consultas iniciadas via Meta Ads y web',
  },

  retention: {
    current: 82.4,
    previous: 79.8,
    change: '+2.6',
    trend: 'up',
    label: 'Retención de Alumnos',
    description: 'Porcentaje de alumnos que continúan al siguiente ciclo',
  },
};

// ============================================================================
// UPN OPPORTUNITY SCORE - Índice de oportunidad admisión universitaria
// ============================================================================
export const OPPORTUNITY_SCORE = {
  current_score: 84,
  trend: '+6.2%',
  components: {
    search_interest: {
      score: 91,
      weight: 0.25,
      contribution: 22.8,
      insight: 'Búsquedas "admisión UPN 2026" +38% vs mes anterior, pico estacional activo',
    },
    social_engagement: {
      score: 82,
      weight: 0.20,
      contribution: 16.4,
      insight: '#VidaUPN y #AdmisiónUPN trending en TikTok PE con +120K interacciones/semana',
    },
    competitor_gap: {
      score: 88,
      weight: 0.20,
      contribution: 17.6,
      insight: 'UTP con campaña saturada en Meta, oportunidad para capturar demanda insatisfecha',
    },
    seasonal_index: {
      score: 95,
      weight: 0.15,
      contribution: 14.3,
      insight: 'Enero-Febrero = pico máximo admisión pregrado; ventana de 6 semanas crítica',
    },
    conversion_efficiency: {
      score: 79,
      weight: 0.20,
      contribution: 15.8,
      insight: 'CPL actual $7,80 - 8,2% por debajo del target $8,50 para el segmento bachilleres',
    },
  },
  recommendation: {
    message: 'Ventana favorable para incrementar la inversión en TikTok y Meta. La audiencia de bachilleres muestra alta intención de búsqueda. Se sugiere activar una campaña de becas orientada al segmento sensible al precio.',
    confidence: '94%',
    priority: 'high',
    actions: [
      'TikTok Ads consolidado como canal principal con $32.000/mes - mantener creativos actualizados con testimoniales reales',
      'Lanzar campaña "Tu Futuro Empieza Aquí" con testimoniales de egresados durante la ventana enero-febrero',
      'Activar lead magnets: charla virtual gratuita y brochure de carreras por carrera',
      'Reforzar campaña de becas en Meta dirigida a padres NSE C (Facebook 35-55 años)',
    ],
  },
};

// ============================================================================
// SERVICIOS PERFORMANCE - Rendimiento por programa académico
// ============================================================================
export const SERVICIOS_PERFORMANCE = [
  {
    id: 1,
    nombre: 'Ingeniería y Tecnología',
    demanda: 'Muy Alta',
    leads: 680,
    conversiones: 112,
    conversion_rate: '16.5%',
    cpl: 6.20,
    revenue: 2016000,
    trend: '+22%',
    precio: 'S/650-850/mes',
    leadAds: { formularios: 890, conversion_rate: 38, cpl: 4.80 },
    whatsapp: { conversaciones: 372, respondidas: 316, tasa_respuesta: 85 },
  },
  {
    id: 2,
    nombre: 'Negocios y Administración',
    demanda: 'Alta',
    leads: 520,
    conversiones: 88,
    conversion_rate: '16.9%',
    cpl: 7.40,
    revenue: 1584000,
    trend: '+15%',
    precio: 'S/600-780/mes',
    leadAds: { formularios: 680, conversion_rate: 35, cpl: 5.90 },
    whatsapp: { conversaciones: 285, respondidas: 228, tasa_respuesta: 80 },
  },
  {
    id: 3,
    nombre: 'Derecho y Ciencias Políticas',
    demanda: 'Alta',
    leads: 340,
    conversiones: 55,
    conversion_rate: '16.2%',
    cpl: 8.10,
    revenue: 990000,
    trend: '+10%',
    precio: 'S/620-800/mes',
    leadAds: { formularios: 445, conversion_rate: 32, cpl: 6.50 },
    whatsapp: { conversaciones: 186, respondidas: 142, tasa_respuesta: 76 },
  },
  {
    id: 4,
    nombre: 'Ciencias de la Salud',
    demanda: 'Muy Alta',
    leads: 420,
    conversiones: 72,
    conversion_rate: '17.1%',
    cpl: 7.90,
    revenue: 1296000,
    trend: '+28%',
    precio: 'S/700-920/mes',
    leadAds: { formularios: 550, conversion_rate: 40, cpl: 6.10 },
    whatsapp: { conversaciones: 230, respondidas: 196, tasa_respuesta: 85 },
  },
  {
    id: 5,
    nombre: 'MBA y Posgrado',
    demanda: 'Media-Alta',
    leads: 185,
    conversiones: 28,
    conversion_rate: '15.1%',
    cpl: 18.50,
    revenue: 1008000,
    trend: '+8%',
    precio: 'S/1.200-1.800/mes',
    leadAds: { formularios: 242, conversion_rate: 28, cpl: 14.20 },
    whatsapp: { conversaciones: 102, respondidas: 82, tasa_respuesta: 80 },
  },
  {
    id: 6,
    nombre: 'Educación Continua',
    demanda: 'Media',
    leads: 240,
    conversiones: 35,
    conversion_rate: '14.6%',
    cpl: 5.80,
    revenue: 262500,
    trend: '+18%',
    precio: 'S/380-650/programa',
    leadAds: { formularios: 314, conversion_rate: 33, cpl: 4.50 },
    whatsapp: { conversaciones: 132, respondidas: 112, tasa_respuesta: 85 },
  },
];

// ============================================================================
// SEDES PERFORMANCE - Rendimiento por campus UPN
// ============================================================================
export const SEDES_PERFORMANCE = [
  { id: 1, nombre: 'UPN Los Olivos', miembros: 12500, nuevos: 98, ocupacion: 88, revenue: 7500000, trend: 'up' },
  { id: 2, nombre: 'UPN Breña', miembros: 9800, nuevos: 76, ocupacion: 84, revenue: 5880000, trend: 'up' },
  { id: 3, nombre: 'UPN Chorrillos', miembros: 8200, nuevos: 62, ocupacion: 80, revenue: 4920000, trend: 'stable' },
  { id: 4, nombre: 'UPN Comas', miembros: 7400, nuevos: 58, ocupacion: 82, revenue: 4440000, trend: 'up' },
  { id: 5, nombre: 'UPN San Juan de Lurigancho', miembros: 6900, nuevos: 52, ocupacion: 78, revenue: 4140000, trend: 'up' },
  { id: 6, nombre: 'UPN San Juan de Miraflores', miembros: 5800, nuevos: 44, ocupacion: 76, revenue: 3480000, trend: 'stable' },
  { id: 7, nombre: 'UPN Ate', miembros: 5200, nuevos: 40, ocupacion: 74, revenue: 3120000, trend: 'up' },
  { id: 8, nombre: 'UPN Trujillo El Molino', miembros: 8600, nuevos: 68, ocupacion: 86, revenue: 5160000, trend: 'up' },
  { id: 9, nombre: 'UPN Trujillo San Isidro', miembros: 7100, nuevos: 54, ocupacion: 83, revenue: 4260000, trend: 'stable' },
  { id: 10, nombre: 'UPN Cajamarca', miembros: 3800, nuevos: 32, ocupacion: 72, revenue: 2280000, trend: 'up' },
];

// ============================================================================
// COMPETENCIA - Universidades competidoras
// ============================================================================
export const COMPETENCIA = [
  {
    name: 'UTP',
    full_name: 'Universidad Tecnológica del Perú',
    market_share: 28,
    sedes: 12,
    rank: 1,
    type: 'Value / Masivo',
    precio: 'S/450-700/mes',
    fortalezas: ['Mayor volumen', 'Precio competitivo', 'Cobertura nacional'],
    debilidades: ['Menor diferenciación académica percibida', 'Alta densidad de estudiantes', 'Atención personalizada limitada'],
  },
  {
    name: 'César Vallejo',
    full_name: 'Universidad César Vallejo',
    market_share: 22,
    sedes: 18,
    rank: 2,
    type: 'Budget / Nacional',
    precio: 'S/350-550/mes',
    fortalezas: ['Precio muy accesible', 'Presencia nacional', 'Fácil admisión'],
    debilidades: ['Licenciamiento SUNEDU en revisión para algunas sedes', 'Empleabilidad percibida por debajo del promedio del segmento'],
  },
  {
    name: 'San Martín',
    full_name: 'Universidad San Martín de Porres',
    market_share: 12,
    sedes: 4,
    rank: 3,
    type: 'Tradicional / Mid',
    precio: 'S/700-1,100/mes',
    fortalezas: ['Trayectoria reconocida', 'Acreditaciones', 'Medicina y Derecho sólidos'],
    debilidades: ['Precio elevado para NSE C', 'Menor presencia en canales digitales'],
  },
  {
    name: 'USIL',
    full_name: 'Universidad San Ignacio de Loyola',
    market_share: 8,
    sedes: 3,
    rank: 4,
    type: 'Premium Nicho',
    precio: 'S/1,000-1,500/mes',
    fortalezas: ['Gastronomía y Turismo', 'Empleabilidad alta', 'Infraestructura moderna'],
    debilidades: ['Precio muy alto', 'Oferta académica limitada'],
  },
  {
    name: 'UPC',
    full_name: 'Universidad Peruana de Ciencias Aplicadas',
    market_share: 15,
    sedes: 5,
    rank: 5,
    type: 'Premium Laureate',
    precio: 'S/1.200-1.800/mes',
    fortalezas: ['Misma red Laureate', 'Alta empleabilidad', 'Tecnología e innovación'],
    debilidades: ['Precio inasequible NSE C/D', 'Solo Lima'],
  },
  {
    name: 'UPN',
    full_name: 'Universidad Privada del Norte',
    market_share: 18,
    sedes: 10,
    rank: 3,
    type: 'Value Premium / Laureate',
    precio: 'S/600-920/mes',
    fortalezas: ['Red Laureate', 'Empleabilidad comprobada', 'Tecnología + trato personalizado'],
    debilidades: ['Menor awareness que UTP en provincias', 'En expansión regional'],
  },
];

// ============================================================================
// CRM MOCKUP - Datos simulados de campañas de admisión
// ============================================================================
export const CRM_MOCKUP = {
  campaigns: [
    {
      id: 'camp_001',
      name: 'Admisión 2026-I - Bachilleres Lima',
      status: 'active',
      budget: 18000,
      spent: 16500,
      leads: 4200,
      cpl: 8.62,
      alert_status: 'normal',
      platform: 'Meta Ads',
      audience: 'Bachilleres Jóvenes 17-22',
    },
    {
      id: 'camp_002',
      name: 'Google Search - Carreras UPN',
      status: 'active',
      budget: 22000,
      spent: 20200,
      leads: 1850,
      cpl: 14.57,
      alert_status: 'normal',
      platform: 'Google Ads',
      audience: 'Alta Intención Búsqueda',
    },
    {
      id: 'camp_003',
      name: 'TikTok Vida Universitaria UPN',
      status: 'active',
      budget: 32000,
      spent: 29800,
      leads: 4390,
      cpl: 7.29,
      alert_status: 'normal',
      platform: 'TikTok Ads',
      audience: 'Jóvenes 16-24',
    },
    {
      id: 'camp_004',
      name: 'Becas UPN - Padres de Familia',
      status: 'active',
      budget: 10000,
      spent: 9200,
      leads: 850,
      cpl: 10.82,
      alert_status: 'warning',
      platform: 'Meta Ads',
      audience: 'Padres 35-55',
    },
  ],
  alerts: [
    {
      type: 'success',
      message: 'Campaña TikTok "Vida Universitaria" superando objetivos: CPL $7,29 vs target $8,50 con 4.390 leads generados',
      campaign_id: 'camp_003',
      timestamp: '2026-01-20T14:30:00',
    },
    {
      type: 'warning',
      message: 'Campaña "Becas - Padres" con CPL $10,82, se recomienda revisar la segmentación 40-50 años',
      campaign_id: 'camp_004',
      timestamp: '2026-01-20T13:15:00',
    },
  ],
  lead_quality: {
    avg_score: 78,
    distribution: {
      hot: 38,
      warm: 42,
      cold: 20,
    },
  },
};

// ============================================================================
// BUDGET ALLOCATION - Distribución de presupuesto por canal
// ============================================================================
export const BUDGET_ALLOCATION = {
  total_budget: 100000,
  currency: 'USD',
  period: 'monthly',
  distribution: {
    tiktok_ads: {
      amount: 32000,
      percentage: 32,
      status: 'overperforming',
      kpi: 'CPL Jóvenes',
      target: '$9 o menos',
      current_performance: '$7.29',
    },
    meta_ads: {
      amount: 28000,
      percentage: 28,
      status: 'overperforming',
      kpi: 'CPL (Costo por Lead)',
      target: '$8.50 o menos',
      current_performance: '$7.80',
      platforms: ['Instagram', 'Facebook'],
    },
    google_search: {
      amount: 22000,
      percentage: 22,
      status: 'performing',
      kpi: 'CPL (Costo por Lead)',
      target: '$16 o menos',
      current_performance: '$14.57',
    },
    google_display: {
      amount: 10000,
      percentage: 10,
      status: 'ontrack',
      kpi: 'CPM (Costo por Mil)',
      target: '$3.50 o menos',
      current_performance: '$3.20',
    },
    influencers: {
      amount: 8000,
      percentage: 8,
      status: 'performing',
      kpi: 'Engagement Rate',
      target: '10% o más',
      current_performance: '14.8%',
    },
  },
  recommendations: [
    {
      type: 'maintain',
      channel: 'tiktok_ads',
      reason: 'Canal principal consolidado con CPL 19% por debajo del target y mayor volumen de leads del portfolio',
      impact: 'Mantener y actualizar creativos de vida universitaria y testimoniales de egresados',
    },
    {
      type: 'maintain',
      channel: 'meta_ads',
      reason: 'Meta Ads con excelente performance en Lead Ads para ambos segmentos (jóvenes y padres)',
      impact: 'Sostener el volumen y la calidad actual de leads en ambas audiencias',
    },
    {
      type: 'optimize',
      channel: 'google_display',
      from: 10,
      to: 10,
      reason: 'Display cumple función de remarketing y awareness; se sugiere optimizar las audiencias de retargeting',
      impact: 'Mejorar la tasa de retorno de prospectos que visitaron la landing pero no convirtieron',
    },
  ],
};

// ============================================================================
// CONTENT PILLARS - Pilares de contenido UPN
// ============================================================================
export const CONTENT_PILLARS = [
  {
    id: 1,
    title: 'Empleabilidad y Éxito Profesional',
    description: 'Testimoniales de egresados, primeros sueldos, empresas empleadoras UPN',
    status: 'overperforming',
    performance: {
      engagement_rate: 22.4,
      reach: 680000,
      conversions: 385,
    },
    recommended_budget: 0.30,
    formats: ['Reels', 'TikTok', 'Testimoniales', 'Before/After carrera'],
  },
  {
    id: 2,
    title: 'Vida Universitaria UPN',
    description: 'Campus, eventos, clubs, amigos, experiencia universitaria real',
    status: 'overperforming',
    performance: {
      engagement_rate: 18.6,
      reach: 520000,
      conversions: 265,
    },
    recommended_budget: 0.25,
    formats: ['TikTok UGC', 'Stories', 'Campus tours', 'Behind scenes'],
  },
  {
    id: 3,
    title: 'Admisión y Proceso de Ingreso',
    description: 'Fechas clave, cómo postular, modalidades de admisión, documentos',
    status: 'performing',
    performance: {
      engagement_rate: 14.8,
      reach: 390000,
      conversions: 420,
    },
    recommended_budget: 0.20,
    formats: ['Carruseles', 'Infografías', 'Videos explicativos', 'FAQs'],
  },
  {
    id: 4,
    title: 'Becas y Financiamiento',
    description: 'Becas disponibles, crédito educativo, costos reales, facilidades de pago',
    status: 'performing',
    performance: {
      engagement_rate: 16.2,
      reach: 480000,
      conversions: 285,
    },
    recommended_budget: 0.15,
    formats: ['Ads directos', 'Landing pages', 'Videos de becados', 'Email'],
  },
  {
    id: 5,
    title: 'Docentes e Innovación Académica',
    description: 'Metodología UPN, tecnología en aulas, docentes con experiencia empresarial',
    status: 'performing',
    performance: {
      engagement_rate: 11.5,
      reach: 240000,
      conversions: 128,
    },
    recommended_budget: 0.10,
    formats: ['Entrevistas docentes', 'Tours de laboratorios', 'Demos tecnología'],
  },
];

// ============================================================================
// ALERTS - Alertas automáticas del sistema
// ============================================================================
export const ALERTS = [
  {
    id: 1,
    severity: 'high',
    title: 'Pico de admisión detectado',
    message: 'Búsquedas "admisión UPN 2026" y "carreras universitarias Lima" aumentaron 92% esta semana. Ventana crítica de 3 semanas.',
    action: 'Se recomienda reforzar los creativos de TikTok Ads con contenido de vida universitaria y testimoniales de egresados durante las 3 semanas pico',
    timestamp: '2026-01-20T09:00:00',
  },
  {
    id: 2,
    severity: 'medium',
    title: 'UTP lanzó campaña agresiva de becas',
    message: 'UTP activó "100% de descuento en matrícula" en Meta Ads. Detectado en Ad Library con alto presupuesto estimado.',
    action: 'Se sugiere destacar los diferenciadores de UPN en creativos: red Laureate, empleabilidad y trato personalizado',
    timestamp: '2026-01-19T15:30:00',
  },
  {
    id: 3,
    severity: 'low',
    title: 'Oportunidad en Lima Norte',
    message: 'El tráfico desde Los Olivos y Comas creció +42% esta semana con un CPL de $6,10, el más bajo de todos los distritos.',
    action: 'Se sugiere ampliar la segmentación geográfica en Lima Norte y evaluar un evento presencial en el campus Los Olivos',
    timestamp: '2026-01-19T11:45:00',
  },
  {
    id: 4,
    severity: 'high',
    title: 'Contenido viral de egresado UPN',
    message: 'TikTok orgánico de egresada de Administración compartiendo primer sueldo alcanzó 840K views en 48h.',
    action: 'Se recomienda explorar una colaboración con la egresada y amplificar el contenido mediante TikTok Spark Ads',
    timestamp: '2026-01-18T18:00:00',
  },
];

// ============================================================================
// COMPETITOR INSIGHTS - Análisis de competencia universitaria
// ============================================================================
export const COMPETITOR_INSIGHTS = [
  {
    brand: 'UTP',
    full_name: 'Universidad Tecnológica del Perú',
    location: 'Lima + 11 regiones',
    share_of_voice: 38,
    sentiment: 62,
    threat_level: 'high',
    trending_topics: ['precio accesible', 'muchos campus', 'fácil ingreso', 'clases llenas'],
    description: 'Mayor volumen del segmento value con amplia presencia en canales digitales',
    opportunity: 'Destacar el trato personalizado de UPN frente a la alta densidad de alumnos del competidor',
  },
  {
    brand: 'César Vallejo',
    full_name: 'Universidad César Vallejo',
    location: 'Lima + 17 regiones',
    share_of_voice: 25,
    sentiment: 54,
    threat_level: 'high',
    trending_topics: ['muy barato', 'fácil de entrar', 'muchas sedes', 'calidad variable'],
    description: 'Competidor de precio accesible con amplia penetración nacional',
    opportunity: 'Conectar con el segmento que valora la calidad académica y la empleabilidad, además del precio',
  },
  {
    brand: 'San Martín',
    full_name: 'Universidad San Martín de Porres',
    location: 'Lima (4 campus)',
    share_of_voice: 14,
    sentiment: 71,
    threat_level: 'medium',
    trending_topics: ['trayectoria', 'derecho', 'medicina', 'caro', 'tradicional'],
    description: 'Competidor tradicional con buena reputación pero precio alto para NSE C',
    opportunity: 'Posicionarse como alternativa de calidad similar a precio más accesible',
  },
  {
    brand: 'USIL',
    full_name: 'Universidad San Ignacio de Loyola',
    location: 'Lima',
    share_of_voice: 9,
    sentiment: 76,
    threat_level: 'medium',
    trending_topics: ['gastronomía', 'turismo', 'caro', 'empresarial', 'empleabilidad'],
    description: 'Nicho premium en gastronomía, turismo y negocios; muy alto precio',
    opportunity: 'Diferenciarse en programas de negocios y emprendimiento con mejor costo-beneficio',
  },
  {
    brand: 'UPC',
    full_name: 'Universidad Peruana de Ciencias Aplicadas',
    location: 'Lima (5 campus)',
    share_of_voice: 18,
    sentiment: 82,
    threat_level: 'low',
    trending_topics: ['premium', 'red Laureate', 'tecnología', 'caro', 'empleabilidad alta'],
    description: 'Hermana premium en Laureate; misma red pero doble precio - sirve de referencia aspiracional',
    opportunity: 'Comunicar los mismos beneficios de red Laureate a mitad de precio de UPC',
  },
  {
    brand: 'UPN',
    full_name: 'Universidad Privada del Norte',
    location: 'Lima (7 campus) + Trujillo + Cajamarca',
    share_of_voice: 20,
    sentiment: 79,
    threat_level: null,
    trending_topics: ['empleabilidad', 'red Laureate', 'tecnología', 'becas', 'campus modernos'],
    description: 'Mejor relación calidad-precio del segmento value premium; red Laureate como diferenciador clave',
    opportunity: 'Fortalecer el share of voice destacando la empleabilidad comprobada y el acceso a la red global Laureate',
  },
];

// ============================================================================
// TRENDING SOUNDS - Sonidos trending para contenido universitario TikTok
// ============================================================================
export const TRENDING_SOUNDS = [
  { name: 'Bad Bunny - Un Verano Sin Ti', type: 'Reggaeton', usage: 'Vida universitaria / campus', popularity: 96 },
  { name: 'Bizarrap - Shakira BZRP #53', type: 'Latin Pop', usage: 'Empoderamiento / logros académicos', popularity: 92 },
  { name: 'Lo-fi Study Beats - Chillhop', type: 'Lo-fi', usage: 'Época de exámenes / estudio', popularity: 88 },
  { name: 'Grupo 5 - A Ritmo de Cumbia', type: 'Cumbia', usage: 'Contenido gracioso / campus relatable', popularity: 82 },
  { name: 'Feid - Pantone', type: 'Urbano', usage: 'GRWM primer día de clases', popularity: 90 },
  { name: 'Junior H - El Azul', type: 'Corridos Tumbados', usage: 'Historias de esfuerzo y éxito', popularity: 78 },
];

// ============================================================================
// EXPORTS
// ============================================================================
export default {
  MOCK_GA4_DATA,
  PERFORMANCE_KPIS,
  OPPORTUNITY_SCORE,
  SERVICIOS_PERFORMANCE,
  SEDES_PERFORMANCE,
  COMPETENCIA,
  CRM_MOCKUP,
  BUDGET_ALLOCATION,
  CONTENT_PILLARS,
  ALERTS,
  COMPETITOR_INSIGHTS,
  TRENDING_SOUNDS,
};
