const API_URL = "http://localhost:3000/jogos";

// ======== ELEMENTOS ========
const formCadastro = document.getElementById("formCadastro");
const jogosList = document.getElementById("jogosList");

// ======== FUNÇÃO PARA LISTAR JOGOS ========
function listarJogos() {
  fetch(API_URL)
    .then(res => res.json())
    .then(jogos => {
      jogosList.innerHTML = '';
      jogos.forEach(jogo => {
        const div = document.createElement('div');
        div.classList.add('jogo-card');
        div.innerHTML = `
          <h4>${jogo.nome}</h4>
          <p><strong>Gênero:</strong> ${jogo.genero}</p>
          <p><strong>Ano:</strong> ${jogo.ano}</p>
          <p><strong>Avaliação:</strong> ${jogo.avaliacao}</p>
          <p>${jogo.descricao}</p>
          <div class="btn-actions">
            <button onclick="editarJogo(${jogo.id})">Editar</button>
            <button onclick="excluirJogo(${jogo.id})">Excluir</button>
          </div>
        `;
        jogosList.appendChild(div);
      });
    })
    .catch(err => console.error("Erro ao carregar jogos:", err));
}

// ======== FUNÇÃO PARA CADASTRAR JOGO ========
function cadastrarJogo(novoJogo) {
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(novoJogo)
  })
  .then(res => res.json())
  .then(data => {
    alert("Jogo cadastrado com sucesso!");
    formCadastro.reset();
    listarJogos();
  })
  .catch(err => console.error("Erro ao cadastrar jogo:", err));
}

// ======== FUNÇÃO PARA EDITAR JOGO ========
function editarJogo(id) {
  fetch(`${API_URL}/${id}`)
    .then(res => res.json())
    .then(jogo => {
      // Preenche o formulário com os dados do jogo
      document.getElementById("nome").value = jogo.nome;
      document.getElementById("genero").value = jogo.genero;
      document.getElementById("ano").value = jogo.ano;
      document.getElementById("descricao").value = jogo.descricao;
      document.getElementById("avaliacao").value = jogo.avaliacao;

      // Muda o botão para salvar alterações
      const btn = formCadastro.querySelector('button');
      btn.textContent = "Salvar Alterações";

      // Remove listener antigo e adiciona novo
      formCadastro.onsubmit = function(e) {
        e.preventDefault();
        const jogoAtualizado = {
          nome: document.getElementById("nome").value,
          genero: document.getElementById("genero").value,
          ano: Number(document.getElementById("ano").value),
          descricao: document.getElementById("descricao").value,
          avaliacao: Number(document.getElementById("avaliacao").value) || 0
        };
        fetch(`${API_URL}/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(jogoAtualizado)
        })
        .then(res => res.json())
        .then(data => {
          alert("Jogo atualizado com sucesso!");
          formCadastro.reset();
          btn.textContent = "Cadastrar Jogo";
          formCadastro.onsubmit = submitCadastroOriginal;
          listarJogos();
        })
        .catch(err => console.error("Erro ao atualizar jogo:", err));
      }
    });
}

// ======== FUNÇÃO PARA EXCLUIR JOGO ========
function excluirJogo(id) {
  if (!confirm("Tem certeza que deseja excluir este jogo?")) return;
  fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  })
  .then(() => {
    alert("Jogo excluído com sucesso!");
    listarJogos();
  })
  .catch(err => console.error("Erro ao excluir jogo:", err));
}

// ======== FUNÇÃO ORIGINAL DE CADASTRO ========
function submitCadastroOriginal(e) {
  e.preventDefault();
  const novoJogo = {
    nome: document.getElementById("nome").value,
    genero: document.getElementById("genero").value,
    ano: Number(document.getElementById("ano").value),
    descricao: document.getElementById("descricao").value,
    avaliacao: Number(document.getElementById("avaliacao").value) || 0
  };
  cadastrarJogo(novoJogo);
}

// ======== EVENTO DO FORMULÁRIO ========
if (formCadastro) {
  formCadastro.addEventListener("submit", submitCadastroOriginal);
}

// ======== CARREGAR JOGOS AO INICIAR ========
listarJogos();




