// Keywords y hashtags para UPN - Universidad Privada del Norte
// Configuración completa para búsquedas y monitoreo social - Admisión 2026

export const KEYWORDS_UPN = {
  // Marca UPN
  marca: [
    'UPN universidad',
    'universidad privada del norte',
    'upn peru admision',
    'upn carreras',
    'upn becas',
    'upn los olivos',
    'upn trujillo',
    'upn matricula 2026',
    'upn horarios',
    'upn virtual',
  ],

  // Keywords de categoría
  categoria: [
    'universidad lima peru',
    'mejor universidad peru',
    'universidad privada lima precio',
    'carreras universitarias peru',
    'admision universidad 2026',
    'universidad lima norte',
    'universidad value peru',
    'estudiar en lima',
    'universidad con becas peru',
    'universidad acreditada peru',
  ],

  // Intención de inscripción alta
  intencion: [
    'inscripcion universidad 2026',
    'postular upn 2026',
    'examen admision upn',
    'requisitos ingreso universidad',
    'costo mensualidad upn',
    'beca universidad peru 2026',
    'charla informativa universidad',
    'universidad sin examen lima',
    'admision directa universidad',
    'como inscribirse en upn',
  ],

  // Keywords por carrera
  carreras: [
    'ingenieria industrial lima',
    'ingenieria sistemas lima',
    'administracion empresas lima',
    'marketing lima universidad',
    'derecho lima universidad',
    'psicologia lima universidad',
    'enfermeria lima universidad',
    'medicina veterinaria lima',
    'contabilidad lima universidad',
    'arquitectura lima universidad',
  ],

  // Competencia
  competidores: [
    'universidad tecnologica peru',
    'utp admision',
    'cesar vallejo lima',
    'san martin de porres precio',
    'usil admision',
    'upc precio mensualidad',
    'alternativa utp',
    'mejor que utp',
    'universidad barata lima',
    'universidad calidad precio lima',
  ],

  // Financiamiento y becas
  becas: [
    'beca universidad peru',
    'beca 18 universidad',
    'pronabec universidad',
    'financiamiento universitario peru',
    'credito educativo peru',
    'universidad con beca completa',
    'descuento matricula universidad',
    'universidad pago mensual',
    'cuotas universidad peru',
    'beca talento upn',
  ],

  // Posgrado y MBA
  posgrado: [
    'mba peru precio',
    'maestria administracion lima',
    'posgrado lima peru',
    'mba ejecutivo peru',
    'maestria upn',
    'diplomado lima universidad',
    'especializacion profesional lima',
    'posgrado online peru',
    'mba laureate peru',
    'segunda especialidad lima',
  ],

  // Geografías Lima y regiones
  geografias: [
    'universidad los olivos',
    'universidad comas',
    'universidad san juan de lurigancho',
    'universidad chorrillos',
    'universidad san juan de miraflores',
    'universidad breña',
    'universidad ate lima',
    'universidad trujillo privada',
    'universidad cajamarca privada',
    'universidad lima norte',
  ],
};

export const HASHTAGS_UPN = {
  // Core (usar siempre)
  core: [
    '#UPN',
    '#UniversidadPrivadaDelNorte',
    '#VidaUPN',
    '#AdmisiónUPN',
    '#UPNPeru',
    '#LlevatuTalentoMásAlto',
    '#Laureate',
  ],

  // Engagement (rotar)
  engagement: [
    '#fyp',
    '#parati',
    '#viral',
    '#trending',
    '#fypシ',
    '#xyzbca',
  ],

  // Vida universitaria
  vidaUniversitaria: [
    '#VidaUniversitaria',
    '#UniversitariosPeru',
    '#PrimerDíaDeClases',
    '#CampusLife',
    '#Universitario',
    '#EstudiantePeru',
    '#ColoresUPN',
    '#GradosUPN',
    '#ComunidadUPN',
    '#AlumnoUPN',
  ],

  // Local Perú
  local: [
    '#Lima',
    '#Peru',
    '#LimaNorte',
    '#LosOlivos',
    '#Trujillo',
    '#Cajamarca',
    '#Peruanos',
    '#UniversidadPeru',
  ],

  // Carreras
  carreras: [
    '#Ingeniería',
    '#Administración',
    '#Derecho',
    '#Marketing',
    '#Psicología',
    '#Enfermería',
    '#Arquitectura',
    '#Contabilidad',
    '#SistemasInformaticos',
    '#NegociosInternacionales',
  ],

  // Empleabilidad
  empleabilidad: [
    '#EmpleoJoven',
    '#PrimerEmpleo',
    '#PrimerSueldo',
    '#CarreraProfesional',
    '#ÉxitoProfesional',
    '#TrabajoEnLima',
    '#EgresadoUPN',
    '#GraduadoPeru',
  ],

  // Admisión
  admision: [
    '#Admisión2026',
    '#PostularUniversidad',
    '#BecasUniversitarias',
    '#BecaPeru',
    '#FinanciamientoEstudios',
    '#ExamenAdmision',
    '#IngresoUniversidad',
    '#Bachiller',
  ],

  // Motivación académica
  motivacion: [
    '#SíSePuede',
    '#Esfuerzo',
    '#Disciplina',
    '#Constancia',
    '#Superación',
    '#SueñosReales',
    '#FuturoUPN',
    '#InversiónEnTiMismo',
  ],

  // Competencia (monitoreo)
  competencia: [
    '#UTP',
    '#CésarVallejo',
    '#USIL',
    '#UPC',
    '#SanMartín',
    '#Universitarios',
  ],
};

// Combinar todos los hashtags
export const ALL_HASHTAGS = [
  ...HASHTAGS_UPN.core,
  ...HASHTAGS_UPN.vidaUniversitaria,
  ...HASHTAGS_UPN.local,
  ...HASHTAGS_UPN.carreras,
  ...HASHTAGS_UPN.empleabilidad,
];

// Combinar keywords para Google Trends
export const ALL_KEYWORDS = [
  ...KEYWORDS_UPN.marca,
  ...KEYWORDS_UPN.categoria,
  ...KEYWORDS_UPN.intencion,
  ...KEYWORDS_UPN.carreras,
];

// Keywords de alta intención (conversión)
export const HIGH_INTENT_KEYWORDS = [
  ...KEYWORDS_UPN.intencion,
  'inscripcion universidad 2026',
  'postular upn',
  'costo mensualidad upn',
  'beca upn 2026',
  'admision directa universidad lima',
  'charla informativa upn',
];

// Configuración para Google Trends
export const GOOGLE_TRENDS_CONFIG = {
  keywords: ALL_KEYWORDS.slice(0, 15),
  region: 'PE',
  geo: {
    lima: 'PE-LIM',
    trujillo: 'PE-LAL',
    cajamarca: 'PE-CAJ',
  },
  category: 74, // Education
  timeframe: 'now 7-d',
  refreshInterval: 3600000,
};

// Configuración para TikTok
export const TIKTOK_CONFIG = {
  hashtags: [
    ...HASHTAGS_UPN.core,
    ...HASHTAGS_UPN.vidaUniversitaria.slice(0, 5),
    ...HASHTAGS_UPN.local.slice(0, 3),
  ],
  region: 'PE',
  metrics: ['views', 'likes', 'shares', 'comments'],
  trending_threshold: 10000,
  sounds: [
    { name: 'Bad Bunny - Un Verano Sin Ti', category: 'Vida universitaria / campus' },
    { name: 'Bizarrap - Shakira #53', category: 'Empoderamiento / logros' },
    { name: 'Lo-fi Study Beats - Chillhop', category: 'Época de exámenes' },
    { name: 'Feid - Pantone', category: 'GRWM primer día de clases' },
    { name: 'Grupo 5 - Cumbia Mix', category: 'Contenido relatable peruano' },
  ],
};

// Configuración para Meta (Facebook/Instagram)
export const META_CONFIG = {
  hashtags: [
    ...HASHTAGS_UPN.core,
    ...HASHTAGS_UPN.admision,
    ...HASHTAGS_UPN.local,
  ],
  pages: [
    'UPN Universidad Privada del Norte',
    'UPN Oficial',
    'UTP Peru',
    'Universidad César Vallejo',
  ],
  groups: [
    'Universitarios Peru',
    'Admisión Universidades Lima',
    'Becas Peru 2026',
    'Estudiantes Lima Norte',
  ],
  interests: [
    'Educación superior',
    'Universidad',
    'Admisión universitaria',
    'Becas universitarias',
    'Carreras profesionales',
  ],
};

// Fuentes de información educación superior Perú
export const EDUCATION_SOURCES = [
  {
    name: 'SUNEDU',
    url: 'https://www.sunedu.gob.pe',
    type: 'regulatory',
    scraping: false,
  },
  {
    name: 'El Comercio - Educación',
    url: 'https://elcomercio.pe/respuestas/educacion',
    type: 'news',
    scraping: true,
  },
  {
    name: 'Gestión - Educación',
    url: 'https://gestion.pe/tendencias/educacion',
    type: 'business',
    scraping: true,
  },
  {
    name: 'UPN Oficial',
    url: 'https://www.upn.edu.pe',
    type: 'brand',
    scraping: true,
  },
];

// Campus UPN (para monitoreo individual)
export const CAMPUS_UPN = [
  {
    id: 1,
    nombre: 'UPN Los Olivos',
    slug: 'los-olivos',
    distrito: 'Los Olivos',
    ciudad: 'Lima',
    keywords: ['upn los olivos', 'universidad los olivos', 'upn lima norte'],
    hashtags: ['#LosOlivos', '#UPNLosOlivos', '#LimaNorte'],
  },
  {
    id: 2,
    nombre: 'UPN Breña',
    slug: 'brena',
    distrito: 'Breña',
    ciudad: 'Lima',
    keywords: ['upn breña', 'universidad breña lima', 'upn lima centro'],
    hashtags: ['#Breña', '#UPNBreña', '#LimaCentro'],
  },
  {
    id: 3,
    nombre: 'UPN Chorrillos',
    slug: 'chorrillos',
    distrito: 'Chorrillos',
    ciudad: 'Lima',
    keywords: ['upn chorrillos', 'universidad chorrillos', 'upn lima sur'],
    hashtags: ['#Chorrillos', '#UPNChorrillos', '#LimaSur'],
  },
  {
    id: 4,
    nombre: 'UPN Comas',
    slug: 'comas',
    distrito: 'Comas',
    ciudad: 'Lima',
    keywords: ['upn comas', 'universidad comas lima', 'upn lima norte comas'],
    hashtags: ['#Comas', '#UPNComas'],
  },
  {
    id: 5,
    nombre: 'UPN San Juan de Lurigancho',
    slug: 'sjl',
    distrito: 'San Juan de Lurigancho',
    ciudad: 'Lima',
    keywords: ['upn sjl', 'universidad san juan de lurigancho', 'upn lima este'],
    hashtags: ['#SJL', '#SanJuanDeLurigancho', '#UPNLimaEste'],
  },
  {
    id: 6,
    nombre: 'UPN San Juan de Miraflores',
    slug: 'sjm',
    distrito: 'San Juan de Miraflores',
    ciudad: 'Lima',
    keywords: ['upn sjm', 'universidad san juan de miraflores', 'upn lima sur'],
    hashtags: ['#SJM', '#UPNSurLima'],
  },
  {
    id: 7,
    nombre: 'UPN Ate',
    slug: 'ate',
    distrito: 'Ate',
    ciudad: 'Lima',
    keywords: ['upn ate', 'universidad ate lima', 'upn vitarte'],
    hashtags: ['#Ate', '#Vitarte', '#UPNAte'],
  },
  {
    id: 8,
    nombre: 'UPN Trujillo Norte',
    slug: 'trujillo-norte',
    distrito: 'Trujillo Norte',
    ciudad: 'Trujillo',
    keywords: ['upn trujillo', 'universidad privada trujillo', 'upn trujillo norte'],
    hashtags: ['#Trujillo', '#UPNTrujillo', '#LaLibertad'],
  },
  {
    id: 9,
    nombre: 'UPN Trujillo Centro',
    slug: 'trujillo-centro',
    distrito: 'Trujillo Centro',
    ciudad: 'Trujillo',
    keywords: ['upn trujillo centro', 'universidad trujillo centro', 'estudiar trujillo'],
    hashtags: ['#TrujilloPeru', '#UPNTrujilloCentro'],
  },
  {
    id: 10,
    nombre: 'UPN Cajamarca',
    slug: 'cajamarca',
    distrito: 'Cajamarca',
    ciudad: 'Cajamarca',
    keywords: ['upn cajamarca', 'universidad privada cajamarca', 'estudiar cajamarca'],
    hashtags: ['#Cajamarca', '#UPNCajamarca'],
  },
];

// Alias para compatibilidad (renombrado de KEYWORDS_FITZONE → KEYWORDS_UPN)
export const KEYWORDS_FITZONE = KEYWORDS_UPN;
export const HASHTAGS_FITZONE = HASHTAGS_UPN;
export const SEDES_FITZONE = CAMPUS_UPN;
export const FITNESS_SOURCES = EDUCATION_SOURCES;

export default {
  KEYWORDS_UPN,
  HASHTAGS_UPN,
  ALL_HASHTAGS,
  ALL_KEYWORDS,
  HIGH_INTENT_KEYWORDS,
  GOOGLE_TRENDS_CONFIG,
  TIKTOK_CONFIG,
  META_CONFIG,
  EDUCATION_SOURCES,
  CAMPUS_UPN,
  KEYWORDS_FITZONE,
  HASHTAGS_FITZONE,
  SEDES_FITZONE,
  FITNESS_SOURCES,
};
