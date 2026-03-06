// Burger-Menü Toggle – wird auf allen Seiten geladen
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('nav-burger');
  const links = document.getElementById('nav-links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      links.classList.toggle('offen');
    });
  }

  // Aktiven Link markieren
  const aktuelleSeite = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    if (link.getAttribute('href') === aktuelleSeite) {
      link.classList.add('aktiv');
    }
  });
});
