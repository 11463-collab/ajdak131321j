// Theme
const html = document.documentElement;
const themeBtn = document.getElementById('themeBtn');

function setTheme(t) {
  html.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
}

setTheme(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

themeBtn.addEventListener('click', () => {
  setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Scroll reveal
const els = document.querySelectorAll('.rv');

function reveal() {
  const wh = window.innerHeight;
  els.forEach(el => {
    if (el.getBoundingClientRect().top < wh - 60) {
      el.classList.add('show');
    }
  });
}

reveal();
window.addEventListener('scroll', reveal, { passive: true });

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      window.scrollTo({ top: target.offsetTop - 64, behavior: 'smooth' });
    }
  });
});
