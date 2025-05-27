// Alternar visibilidade dos elementos seguintes a h1/h2
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("h1, h2").forEach(titulo => {
    titulo.addEventListener("click", () => {
      const proximo = titulo.nextElementSibling;
      if (proximo.style.display === "none") {
        proximo.style.display = "block";
      } else {
        proximo.style.display = "none";
      }
    });
  });

  // Alternar imagem ao clicar
  const imagem = document.getElementById("imagem");
  let imagemOriginal = true;

  imagem.addEventListener("click", () => {
    imagem.src = imagemOriginal ? "imagens/imagem1.png" : "imagens/imagem2.png";
    imagemOriginal = !imagemOriginal;
  });
});
