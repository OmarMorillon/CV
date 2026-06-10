/* ============================================================
   Omar Morillon — Portfolio · interactions
   ============================================================ */

/* ---------- i18n ---------- */
const translations = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'hero.available': 'Disponible para nuevos proyectos',
    'hero.desc': 'Ingeniero en Sistemas especializado en Business Intelligence, ingeniería de datos y automatización de procesos. Construyo pipelines ETL, plataformas web de automatización y dashboards ejecutivos que conectan a los equipos técnicos y operativos.',
    'hero.stat.tech': 'Tecnologías',
    'hero.stat.projects': 'Proyectos',
    'hero.stat.companies': 'Empresas',
    'hero.cta.cv': 'Descargar CV',
    'hero.cta.work': 'Ver experiencia',
    'about.tag': '// sobre mí',
    'about.title': 'Quién soy',
    'about.greeting': 'Hola, soy Omar',
    'about.subtitle': 'Ingeniero en Sistemas · Data, BI & Full-Stack',
    'about.p1': 'Soy ingeniero en sistemas y me dedico a convertir datos en decisiones. Lo que más disfruto es agarrar procesos manuales y caóticos y volverlos automáticos, claros y útiles para la gente que los usa.',
    'about.p2': 'He tenido la suerte de hacerlo en entornos exigentes como CEMEX, integrando sistemas con SQL Server, Python y APIs. Pero más allá del stack, lo que me mueve es aprender algo nuevo cada semana y construir cosas que de verdad le sirvan a alguien.',
    'about.fact1': 'Ing. en Sistemas Computacionales',
    'about.fact2': 'San Pedro de las Colonias, México',
    'about.fact3': 'Data Analyst @ CEMEX (Soltek)',
    'about.fact4': 'BI · ETL · Automatización',
    'exp.tag': '// experiencia',
    'exp.title': 'Trayectoria profesional',
    'exp.subtitle': 'Roles donde combino datos, BI y desarrollo para automatizar y crear valor.',
    'exp.job1.role': 'Analista de Sistemas y Proyectos (Data Analyst)',
    'exp.job1.company': 'Soltek — asignado a CEMEX',
    'exp.assignedTo': 'asignado a',
    'exp.job1.date': '2026 – Actualidad',
    'exp.job1.d1': 'Plataforma de automatización web: diseñé y construí una aplicación (JavaScript, Python, HTML/CSS) que reemplaza el cruce manual de fuentes de datos para monitorear la flota Petradyne en sitios a nivel nacional, eliminando varias horas de trabajo operativo cada semana.',
    'exp.job1.d2': 'Pipeline de normalización de datos: construí un motor que unifica convenciones de nombres inconsistentes entre los sistemas internos de CEMEX, garantizando la integridad de los datos al cruzar múltiples fuentes.',
    'exp.job1.d3': 'Integración de REST APIs: diseño la conexión entre sistemas operativos separados para crear una estructura de datos propietaria, eliminando exportaciones manuales a Excel y habilitando el cruce de datos en tiempo real.',
    'exp.job1.d4': 'Optimización de rendimiento: implementé procesamiento asíncrono (Web Workers) para procesar archivos grandes sin bloquear la interfaz, mejorando la experiencia del usuario final.',
    'exp.job2.role': 'Analista de Datos Comercial',
    'exp.job2.date': '2025 – 2026',
    'exp.job2.d1': 'Business Intelligence & Logística: lideré la evolución del ecosistema de BI en Power BI (DAX, Power Query) con mapas de calor, análisis de presupuesto vs. ventas y modelos predictivos; integré trazabilidad logística completa (seguimiento de remolques y tractocamiones por viaje) y validé datos críticos con el equipo de Sistemas.',
    'exp.job2.d2': 'Automatización de facturación (Python): desarrollé un script que lee tickets XML, extrae información clave a Excel, empaqueta el reporte como PDF y lo distribuye automáticamente por correo.',
    'exp.job2.d3': 'Desarrollo full-stack de CRM: rediseñé toda la arquitectura del CRM web corporativo, con backend en Node.js y Python que maneja la lógica de servidor y la conexión entre sistemas, y frontend en JavaScript, HTML y CSS; construí un pipeline de datos que vincula los registros de usuario con su historial de ventas, corrigiendo pérdidas de datos previas.',
    'exp.job2.d4': 'Automatización de procesos (RPA): implementé flujos en Power Automate para digitalizar tareas operativas repetitivas del equipo comercial.',
    'exp.job2.d5': 'Reportería ejecutiva: automaticé reportes mensuales y trimestrales en Excel avanzado para apoyar las revisiones de KPIs de la dirección.',
    'exp.edu.title': 'Educación',
    'exp.edu.degree': 'Ing. en Sistemas Computacionales',
    'exp.edu.school': 'Instituto Tecnológico Superior de San Pedro de las Colonias',
    'exp.lang.title': 'Idiomas',
    'exp.lang.es': 'Español',
    'exp.lang.native': 'Nativo',
    'exp.lang.en': 'Inglés',
    'exp.lang.inter': 'Intermedio',
    'exp.cert.title': 'Certificaciones & participación',
    'exp.cert.1': 'Google Cloud Computing Foundations Certificate',
    'exp.cert.2': 'Professional Docker Course',
    'exp.cert.3': 'HackMTY 2023 & 2024 — participante',
    'skills.tag': '// habilidades',
    'skills.title': 'Stack técnico',
    'skills.subtitle': 'Tecnologías y herramientas que utilizo, medidas por nivel de dominio.',
    'skills.cat.data': 'Data & BI',
    'skills.cat.dev': 'Desarrollo',
    'skills.cat.auto': 'Automatización & Tools',
    'skills.top': 'Top skills',
    'projects.tag': '// proyectos',
    'projects.title': 'Trabajos destacados',
    'projects.subtitle': 'Una selección de proyectos donde combino código, datos y diseño.',
    'proj.forms.title': 'Sistema de Formularios Digitales',
    'proj.forms.desc': 'Solución digital para formularios electrónicos con procesamiento automatizado de datos, integración con base de datos SQL y exportación de reportes en múltiples formatos.',
    'proj.crypto.title': 'Cotizador de Criptomonedas',
    'proj.crypto.desc': 'Aplicación web para cotizar criptomonedas en tiempo real mediante el consumo de una API externa.',
    'proj.recipes.title': 'Buscador de Recetas',
    'proj.recipes.desc': 'Aplicación web para encontrar recetas de comida con consumo de API y una interfaz limpia y responsiva.',
    'proj.code': 'Código',
    'proj.demo': 'Ver demo',
    'contact.tag': '// contacto',
    'contact.title': 'Trabajemos juntos',
    'contact.subtitle': '¿Tienes un proyecto o una oportunidad? Hablemos.',
    'contact.linkedin': 'Ver mi perfil profesional',
    'footer.text': 'Diseñado y construido por Omar Morillon'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.available': 'Available for new projects',
    'hero.desc': 'Computer Systems Engineer specializing in Business Intelligence, data engineering and process automation. I build ETL pipelines, web automation platforms and executive dashboards that bridge technical and operational teams.',
    'hero.stat.tech': 'Technologies',
    'hero.stat.projects': 'Projects',
    'hero.stat.companies': 'Companies',
    'hero.cta.cv': 'Download CV',
    'hero.cta.work': 'View experience',
    'about.tag': '// about me',
    'about.title': 'Who I am',
    'about.greeting': "Hi, I'm Omar",
    'about.subtitle': 'Computer Systems Engineer · Data, BI & Full-Stack',
    'about.p1': 'I’m a systems engineer and I turn data into decisions. What I enjoy most is taking messy, manual processes and making them automatic, clear and genuinely useful for the people who rely on them.',
    'about.p2': 'I’ve been lucky to do it in demanding environments like CEMEX, wiring systems together with SQL Server, Python and APIs. But beyond the stack, what drives me is learning something new every week and building things that actually help someone.',
    'about.fact1': 'Computer Systems Engineer',
    'about.fact2': 'San Pedro de las Colonias, Mexico',
    'about.fact3': 'Data Analyst @ CEMEX (Soltek)',
    'about.fact4': 'BI · ETL · Automation',
    'exp.tag': '// experience',
    'exp.title': 'Professional journey',
    'exp.subtitle': 'Roles where I combine data, BI and development to automate and create value.',
    'exp.job1.role': 'Systems & Projects Analyst (Data Analyst)',
    'exp.job1.company': 'Soltek — assigned to CEMEX',
    'exp.assignedTo': 'assigned to',
    'exp.job1.date': '2026 – Present',
    'exp.job1.d1': 'Web automation platform: designed and built an application (JavaScript, Python, HTML/CSS) that replaces the manual cross-referencing of data sources used to monitor the Petradyne fleet across sites nationwide, removing several hours of operational work each week.',
    'exp.job1.d2': "Data normalization pipeline: built an engine that unifies inconsistent naming conventions across CEMEX's internal systems, ensuring data integrity when matching multiple sources.",
    'exp.job1.d3': 'REST API integration: designing the connection between separate operational systems to create a proprietary data structure, eliminating manual Excel exports and enabling real-time data matching.',
    'exp.job1.d4': 'Performance optimization: implemented asynchronous processing (Web Workers) to parse large files without blocking the interface, improving the end-user experience.',
    'exp.job2.role': 'Commercial Data Analyst',
    'exp.job2.date': '2025 – 2026',
    'exp.job2.d1': 'Business Intelligence & Logistics: led the evolution of the BI ecosystem in Power BI (DAX, Power Query) with heatmaps, budget-vs-sales analysis and predictive models; integrated full logistics traceability (tracking trailers and tractor units per trip) and validated critical data with the Systems team.',
    'exp.job2.d2': 'Invoicing automation (Python): developed a script that reads XML tickets, extracts key information into Excel, packages the report as a PDF and distributes it automatically by email.',
    'exp.job2.d3': 'Full-stack CRM development: redesigned the entire architecture of the corporate web CRM, with a Node.js and Python backend handling server logic and cross-system connections, and a JavaScript, HTML and CSS frontend; built a data pipeline linking user records to their sales history, fixing prior data loss.',
    'exp.job2.d4': 'Process automation (RPA): implemented Power Automate flows to digitize repetitive operational tasks for the commercial team.',
    'exp.job2.d5': 'Executive reporting: automated monthly and quarterly reports in advanced Excel to support leadership KPI reviews.',
    'exp.edu.title': 'Education',
    'exp.edu.degree': 'B.Eng in Computer Systems Engineering',
    'exp.edu.school': 'Instituto Tecnológico Superior de San Pedro de las Colonias',
    'exp.lang.title': 'Languages',
    'exp.lang.es': 'Spanish',
    'exp.lang.native': 'Native',
    'exp.lang.en': 'English',
    'exp.lang.inter': 'Intermediate',
    'exp.cert.title': 'Certifications & involvement',
    'exp.cert.1': 'Google Cloud Computing Foundations Certificate',
    'exp.cert.2': 'Professional Docker Course',
    'exp.cert.3': 'HackMTY 2023 & 2024 — participant',
    'skills.tag': '// skills',
    'skills.title': 'Technical stack',
    'skills.subtitle': 'Technologies and tools I use, measured by proficiency level.',
    'skills.cat.data': 'Data & BI',
    'skills.cat.dev': 'Development',
    'skills.cat.auto': 'Automation & Tools',
    'skills.top': 'Top skills',
    'projects.tag': '// projects',
    'projects.title': 'Featured work',
    'projects.subtitle': 'A selection of projects where I combine code, data and design.',
    'proj.forms.title': 'Digital Forms System',
    'proj.forms.desc': 'Digital solution for electronic forms with automated data processing, SQL database integration and report export in multiple formats.',
    'proj.crypto.title': 'Cryptocurrency Quoter',
    'proj.crypto.desc': 'Web application for real-time cryptocurrency quotes powered by an external API.',
    'proj.recipes.title': 'Recipe Finder',
    'proj.recipes.desc': 'Web application to find food recipes using API consumption with a clean, responsive interface.',
    'proj.code': 'Code',
    'proj.demo': 'Live demo',
    'contact.tag': '// contact',
    'contact.title': "Let's work together",
    'contact.subtitle': 'Have a project or an opportunity? Let’s talk.',
    'contact.linkedin': 'View my professional profile',
    'footer.text': 'Designed & built by Omar Morillon'
  }
};

const typedPhrases = {
  es: ['Analista de Datos', 'Desarrollador BI', 'Full-Stack Developer', 'Ingeniero de Datos'],
  en: ['Data Analyst', 'BI Developer', 'Full-Stack Developer', 'Data Engineer']
};

let currentLang = localStorage.getItem('lang') || 'es';
let typeTimer = null;

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) el.textContent = translations[lang][key];
  });

  const label = document.querySelector('.lang-current');
  if (label) label.textContent = lang.toUpperCase();

  // restart typing with the new language phrases
  startTyping();
}

/* ---------- Theme ---------- */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const icon = document.querySelector('#theme-toggle i');
  if (icon) icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

/* ---------- Typing effect ---------- */
function startTyping() {
  const el = document.getElementById('typed-text');
  if (!el) return;
  if (typeTimer) clearTimeout(typeTimer);

  const phrases = typedPhrases[currentLang];
  let p = 0, c = 0, deleting = false;

  function tick() {
    const word = phrases[p];
    el.textContent = deleting ? word.substring(0, c--) : word.substring(0, c++);

    let delay = deleting ? 45 : 95;
    if (!deleting && c === word.length + 1) { delay = 1600; deleting = true; c = word.length; }
    else if (deleting && c < 0) { deleting = false; c = 0; p = (p + 1) % phrases.length; delay = 350; }

    typeTimer = setTimeout(tick, delay);
  }
  tick();
}

/* ---------- Animated counters ---------- */
function animateCounter(el) {
  const target = +el.getAttribute('data-count');
  const dur = 1500;
  const start = performance.now();
  function step(now) {
    const t = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(eased * target);
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ---------- Skill bars & donuts ---------- */
function animateBars(scope) {
  scope.querySelectorAll('.bar-row').forEach(row => {
    const level = +row.getAttribute('data-level');
    const fill = row.querySelector('.bar-fill');
    const pct = row.querySelector('.bar-pct');
    fill.style.width = level + '%';
    let cur = 0;
    const iv = setInterval(() => {
      cur += 2;
      if (cur >= level) { cur = level; clearInterval(iv); }
      pct.textContent = cur + '%';
    }, 28);
  });
}

function animateDonuts(scope) {
  scope.querySelectorAll('.donut').forEach(d => {
    const val = +d.getAttribute('data-value');
    const fg = d.querySelector('.donut-fg');
    const num = d.querySelector('.donut-pct');
    const circ = 2 * Math.PI * 52; // r = 52
    fg.style.strokeDasharray = circ;
    fg.style.strokeDashoffset = circ - (val / 100) * circ;
    let cur = 0;
    const iv = setInterval(() => {
      cur += 2;
      if (cur >= val) { cur = val; clearInterval(iv); }
      num.textContent = cur + '%';
    }, 28);
  });
}

/* ---------- Scroll reveal + section-bound animations ---------- */
function setupReveal() {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');

      if (entry.target.id === 'hero-stats')
        entry.target.querySelectorAll('.stat-num').forEach(animateCounter);
      if (entry.target.classList.contains('skills-bars')) animateBars(entry.target);
      if (entry.target.classList.contains('skills-donuts')) animateDonuts(entry.target);

      obs.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  const stats = document.getElementById('hero-stats');
  if (stats) observer.observe(stats);
  document.querySelectorAll('.skills-bars, .skills-donuts').forEach(el => observer.observe(el));
}

/* ---------- Active nav + header + progress + back-to-top ---------- */
function setupScrollUI() {
  const header = document.getElementById('header');
  const progress = document.getElementById('scroll-progress');
  const backTop = document.getElementById('back-to-top');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 30);
    backTop.classList.toggle('show', y > 500);

    const docH = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (docH > 0 ? (y / docH) * 100 : 0) + '%';

    let current = '';
    sections.forEach(sec => { if (y >= sec.offsetTop - 120) current = sec.id; });
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------- Mobile menu ---------- */
function setupMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (!hamburger || !navLinks) return;
  const toggle = () => { navLinks.classList.toggle('active'); hamburger.classList.toggle('active'); };
  hamburger.addEventListener('click', toggle);
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) toggle();
  }));
}

/* ---------- Animated data-network background ---------- */
function setupBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const ctx = canvas.getContext('2d');
  let w, h, nodes = [];

  const getColor = () =>
    getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#22d3ee';
  let color = getColor();

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = Math.min(70, Math.floor(w / 22));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const n of nodes) {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    }
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < 130) {
          ctx.strokeStyle = color;
          ctx.globalAlpha = (1 - dist / 130) * 0.18;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 0.6;
    ctx.fillStyle = color;
    for (const n of nodes) { ctx.beginPath(); ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2); ctx.fill(); }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  new MutationObserver(() => { color = getColor(); })
    .observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  resize();
  draw();
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(localStorage.getItem('theme') || 'dark');
  applyLang(currentLang);

  document.getElementById('theme-toggle').addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });
  document.getElementById('lang-toggle').addEventListener('click', () => {
    applyLang(currentLang === 'es' ? 'en' : 'es');
  });
  document.getElementById('back-to-top').addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' }));

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  setupMobileMenu();
  setupScrollUI();
  setupReveal();
  setupBackground();
});
