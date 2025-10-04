// ./js/loadHeaderFooter.js
document.addEventListener('DOMContentLoaded', () => {
  loadHTML('./partials/header.html', 'site-header');
  loadHTML('./partials/footer.html', 'site-footer');
});

function loadHTML(file, targetId) {
  fetch(file)
    .then(response => response.text())
    .then(html => {
      document.getElementById(targetId).innerHTML = html;
    })
    .catch(err => console.error(`Erro ao carregar ${file}:`, err));
}
