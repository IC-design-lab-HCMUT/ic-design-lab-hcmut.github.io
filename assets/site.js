const navLinks = document.querySelectorAll('[data-nav]');
const menu = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? '✕' : '☰';
});
navLinks.forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
}));
function syncNav() {
  const active = (location.hash || '#home').slice(1);
  navLinks.forEach(link => link.classList.toggle('active', link.dataset.nav === active));
}
window.addEventListener('hashchange', syncNav);
syncNav();
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(b => b.classList.toggle('active', b === button));
  const filter = button.dataset.filter;
  document.querySelectorAll('.project').forEach(p => { p.hidden = filter !== 'all' && !p.dataset.category.split(' ').includes(filter); });
}));
document.getElementById('year').textContent = new Date().getFullYear();
