let livros = [];

function adicionarLivro() {
  const titulo = document.getElementById("titulo").value;
  const autor = document.getElementById("autor").value;
  const ano = document.getElementById("ano").value;

  if (titulo && autor && ano) {
    livros.push({ titulo, autor, ano });
    alert("✅ Livro adicionado com sucesso!");
    limparCampos();
  } else {
    alert("⚠️ Preencha todos os campos.");
  }
}

function listarLivros() {
  const div = document.getElementById("resultados");
  if (livros.length === 0) {
    div.innerHTML = "📭 Nenhum livro no estoque.";
  } else {
    div.innerHTML = "<h2>📘 Livros:</h2>" + livros.map((l, i) =>
      `<p>${i+1}. <strong>${l.titulo}</strong> - ${l.autor} (${l.ano})</p>`
    ).join("");
  }
}

function mostrarBuscar() {
  const termo = prompt("Digite o título ou parte do título:");
  const encontrados = livros.filter(l =>
    l.titulo.toLowerCase().includes(termo.toLowerCase())
  );
  const div = document.getElementById("resultados");
  if (encontrados.length > 0) {
    div.innerHTML = "<h2>🔍 Resultados:</h2>" + encontrados.map((l) =>
      `<p><strong>${l.titulo}</strong> - ${l.autor} (${l.ano})</p>`
    ).join("");
  } else {
    div.innerHTML = "❌ Nenhum livro encontrado.";
  }
}

function mostrarRemover() {
  const titulo = prompt("Digite o título do livro a remover:");
  const index = livros.findIndex(l => l.titulo.toLowerCase() === titulo.toLowerCase());
  if (index !== -1) {
    livros.splice(index, 1);
    alert("🗑️ Livro removido com sucesso.");
    listarLivros();
  } else {
    alert("❌ Livro não encontrado.");
  }
}

function mostrarAtualizar() {
  const titulo = prompt("Digite o título do livro a atualizar:");
  const livro = livros.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());
  if (livro) {
    livro.titulo = prompt("Novo título:", livro.titulo) || livro.titulo;
    livro.autor = prompt("Novo autor:", livro.autor) || livro.autor;
    livro.ano = prompt("Novo ano:", livro.ano) || livro.ano;
    alert("🔄 Livro atualizado com sucesso.");
    listarLivros();
  } else {
    alert("❌ Livro não encontrado.");
  }
}

function limparCampos() {
  document.getElementById("titulo").value = "";
  document.getElementById("autor").value = "";
  document.getElementById("ano").value = "";
}
