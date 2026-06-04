/* ============================================================
   Omar Morillon — Portfolio · interactions
   ============================================================ */

/* ---------- i18n ---------- */
const translations = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'hero.available': 'Disponible para nuevos proyectos',
    'hero.desc': 'Ingeniero en Sistemas en formación y desarrollador web, apasionado por convertir datos en soluciones reales. Construyo interfaces modernas y exploro el mundo de la tecnología con aprendizaje constante.',
    'hero.stat.projects': 'Proyectos',
    'hero.stat.tech': 'Tecnologías',
    'hero.stat.passion': 'Dedicación',
    'hero.cta.cv': 'Descargar CV',
    'hero.cta.work': 'Ver proyectos',
    'about.tag': '// sobre mí',
    'about.title': 'Quién soy',
    'about.subtitle': 'Desarrollador Web & entusiasta de los datos',
    'about.p1': 'Estudiante de Ingeniería en Sistemas Computacionales en el Instituto Tecnológico Superior de San Pedro de las Colonias. He participado en proyectos de desarrollo web con experiencia en tecnologías frontend y backend.',
    'about.p2': 'Me especializo en crear aplicaciones web modernas, responsivas y centradas en el usuario. Me apasiona la innovación tecnológica, el análisis de datos y el autoaprendizaje continuo.',
    'about.fact1': 'Ing. en Sistemas Computacionales',
    'about.fact2': 'San Pedro de las Colonias, México',
    'about.fact3': 'Frontend & Backend',
    'about.fact4': 'Enfoque en datos y tecnología',
    'skills.tag': '// habilidades',
    'skills.title': 'Stack & dominio',
    'skills.subtitle': 'Tecnologías y herramientas que utilizo, medidas por nivel de dominio.',
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
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.available': 'Available for new projects',
    'hero.desc': 'Computer Systems Engineering student and web developer, passionate about turning data into real solutions. I build modern interfaces and explore the world of technology through continuous learning.',
    'hero.stat.projects': 'Projects',
    'hero.stat.tech': 'Technologies',
    'hero.stat.passion': 'Dedication',
    'hero.cta.cv': 'Download CV',
    'hero.cta.work': 'View projects',
    'about.tag': '// about me',
    'about.title': 'Who I am',
    'about.subtitle': 'Web Developer & data enthusiast',
    'about.p1': 'Computer Systems Engineering student at the Higher Technological Institute of San Pedro de las Colonias. I have taken part in web development projects with experience in both frontend and backend technologies.',
    'about.p2': 'I specialize in building modern, responsive and user-centered web applications. I am passionate about technological innovation, data analysis and continuous self-learning.',
    'about.fact1': 'Computer Systems Engineering',
    'about.fact2': 'San Pedro de las Colonias, Mexico',
    'about.fact3': 'Frontend & Backend',
    'about.fact4': 'Focused on data & technology',
    'skills.tag': '// skills',
    'skills.title': 'Stack & proficiency',
    'skills.subtitle': 'Technologies and tools I use, measured by proficiency level.',
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
  es: ['Desarrollador Web', 'Estudiante de Ingeniería', 'Entusiasta de los datos', 'Apasionado por la tecnología'],
  en: ['Web Developer', 'Engineering Student', 'Data Enthusiast', 'Tech Passionate']
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
    const num = d.querySelector('.donut-label b');
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
