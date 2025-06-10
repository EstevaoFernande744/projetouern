window.onload = function() {
  // Referencia a imagem pelo ID
  const imagem = document.getElementById('imagem');
   // Troca a imagem ao clicar
  imagem.addEventListener('dblclick', () => { 
    if (imagem.src.includes('imagem1.png')) {
      imagem.src = 'imagem2.png';
  } else {
      imagem.src = 'imagem1.png';
  }})
}
document.addEventListener("DOMContentLoaded", () => {
  const subtitulos = document.querySelectorAll("h1, h2");

  
  subtitulos.forEach(subtitulo => {
    const elementoSeguinte = subtitulo.nextElementSibling;
    // Salva o display original para restaurar depois
    if (elementoSeguinte) {
      proximo.dataset.originalDisplay = getComputedStyle(elementoSeguinte).display;
    }
    subtitulo.addEventListener("click", () => {
      const el = subtitulo.nextElementSibling;
      if (el) {
        el.style.display = "none";
      }
    });
    subtitulo.addEventListener("dblclick", () => {
      const el = subtitulo.nextElementSibling;
      if (el) {
        el.style.display = el.dataset.originalDisplay || "block";
      }
    });
  });
});