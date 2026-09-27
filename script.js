const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');

toggle.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? 'Close' : 'Menu';
});

document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => {
  header.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = 'Menu';
}));

document.getElementById('year').textContent = new Date().getFullYear();

const projects = [
  { kind: 'NETWORK AUTOMATION', title: 'NetAutoML', copy: 'Making network monitoring smarter with automation and machine learning.' },
  { kind: 'LARAVEL · WEB DEVELOPMENT', title: 'PhosRoom', copy: 'A practical reservation and resource-management platform for training centers.' },
  { kind: 'REACT · EDUCATION', title: 'FlagLearning', copy: 'A playful way to learn world flags through interactive challenges.' }
];

const spotlightDots = document.querySelectorAll('.spotlight-dot');
spotlightDots.forEach((dot) => dot.addEventListener('click', () => {
  const project = projects[Number(dot.dataset.project)];
  document.getElementById('spotlight-kind').textContent = project.kind;
  document.getElementById('spotlight-title').textContent = project.title;
  document.getElementById('spotlight-copy').textContent = project.copy;
  spotlightDots.forEach((item) => item.classList.toggle('active', item === dot));
}));

const themeToggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'dark') document.body.classList.add('dark-theme');

themeToggle.addEventListener('click', () => {
  const dark = document.body.classList.toggle('dark-theme');
  localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
});

const progress = document.querySelector('.scroll-progress span');
window.addEventListener('scroll', () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${total ? (window.scrollY / total) * 100 : 0}%`;
});
