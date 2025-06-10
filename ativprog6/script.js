let corridas = [];

function adicionarCorrida() {
  const nome = document.getElementById("nome").value.trim();
  const data = document.getElementById("data").value;
  const coordenacao = document.getElementById("coordenacao").value.trim();
  const imagemInput = document.getElementById("imagem");

  if (!nome || !data || !coordenacao || !imagemInput.files[0]) {
    alert("⚠️ Preencha todos os campos e selecione uma imagem.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (event) {
    const imagemBase64 = event.target.result;
    corridas.push({ nome, data, coordenacao, imagem: imagemBase64 });
    limparCampos();
    renderizarCorridas();
  };

  reader.readAsDataURL(imagemInput.files[0]);
}

function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("data").value = "";
  document.getElementById("coordenacao").value = "";
  document.getElementById("imagem").value = "";
}

function renderizarCorridas() {
  const lista = document.getElementById("listaCorridas");
  lista.innerHTML = "";

  corridas.forEach((corrida, index) => {
    const section = document.createElement("section");
    section.className = "corrida";
    section.innerHTML = `
      <strong>${corrida.nome}</strong>
      <p>📅 ${corrida.data} &nbsp; | &nbsp; 🏃 Coordenação: ${corrida.coordenacao}</p>
      <img src="${corrida.imagem}" alt="Imagem da corrida ${corrida.nome}">
      <div class="acoes">
        <button onclick="editarCorrida(${index})">✏️ Editar</button>
        <button onclick="removerCorrida(${index})">❌ Remover</button>
      </div>
    `;
    lista.appendChild(section);
  });
}

function editarCorrida(index) {
  const corrida = corridas[index];

  const novoNome = prompt("Novo nome da corrida:", corrida.nome);
  const novaData = prompt("Nova data:", corrida.data);
  const novaCoord = prompt("Nova coordenação:", corrida.coordenacao);

  if (novoNome && novaData && novaCoord) {
    // Perguntar se quer manter a imagem atual
    if (confirm("Deseja alterar a imagem?")) {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.onchange = function () {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
          corridas[index] = {
            nome: novoNome,
            data: novaData,
            coordenacao: novaCoord,
            imagem: e.target.result
          };
          renderizarCorridas();
        };
        reader.readAsDataURL(file);
      };
      input.click();
    } else {
      corridas[index] = {
        nome: novoNome,
        data: novaData,
        coordenacao: novaCoord,
        imagem: corrida.imagem
      };
      renderizarCorridas();
    }
  } else {
    alert("⚠️ Todos os campos devem ser preenchidos.");
  }
}

function removerCorrida(index) {
  if (confirm("Tem certeza que deseja remover esta corrida?")) {
    corridas.splice(index, 1);
    renderizarCorridas();
  }
}
