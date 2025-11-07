const API_URL = "http://localhost:3001/jogos";



// ======== ELEMENTOS E ESTADO ========
const formCadastro = document.getElementById("formCadastro");
const jogosList = document.getElementById("jogosList");

// Variável de estado para controlar se estamos editando ou cadastrando
let idParaEditar = null; 


// ======== 1. FUNÇÃO PARA LISTAR JOGOS (READ) ========
function listarJogos() {
    fetch(API_URL)
        .then(res => {
            if (!res.ok) {
                // Se o JSON Server não estiver rodando (status 404/500, etc.)
                throw new Error("Verifique se o JSON Server está rodando na porta 3000.");
            }
            return res.json();
        })
        .then(jogos => {
            jogosList.innerHTML = '';
            
            // Mensagem caso não haja jogos
            if (jogos.length === 0) {
                jogosList.innerHTML = '<p>Nenhum jogo cadastrado. Utilize o formulário acima para adicionar um novo.</p>';
                return;
            }

            // Renderiza os jogos
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
        .catch(err => {
            console.error("Erro ao carregar jogos:", err);
            // Exibe o erro de forma clara na tela
            jogosList.innerHTML = `<p style="color: red;">Erro: ${err.message || "Não foi possível carregar os jogos. Verifique o servidor."}</p>`;
        });
}

// ======== 2. FUNÇÃO PARA CADASTRAR JOGO (CREATE - POST) ========
async function cadastrarJogo(novoJogo) {
    try {
        // 1. Primeiro, buscar todos os jogos já cadastrados
        const resposta = await fetch(API_URL);
        const jogos = await resposta.json();

        // 2. Encontrar o maior ID existente (convertendo para número)
        const maiorId = jogos.length > 0
            ? Math.max(...jogos.map(j => Number(j.id) || 0)) // evita NaN se algum id for string inválida
            : 0;

        // 3. Definir o próximo ID sequencial
        novoJogo.id = (maiorId + 1).toString(); // mantém o formato string, igual no seu db.json

        // 4. Fazer o POST com o novo jogo e o ID definido
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(novoJogo)
        });

        if (!res.ok) throw new Error("Erro ao salvar o novo jogo.");

        const data = await res.json();

        alert("Jogo cadastrado com sucesso!");
        formCadastro.reset();
        listarJogos();
    } catch (err) {
        console.error("Erro ao cadastrar jogo:", err);
        alert("Ocorreu um erro ao cadastrar o jogo. Verifique o console para mais detalhes.");
    }
}


// ======== 3. FUNÇÃO PARA ATUALIZAR JOGO (UPDATE - PUT) ========
function atualizarJogo(id, jogoAtualizado) {
    fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jogoAtualizado)
    })
    .then(res => res.json())
    .then(data => {
        alert("Jogo atualizado com sucesso!");
        formCadastro.reset();
        
        // Volta para o modo de Cadastro
        idParaEditar = null; 
        const btn = formCadastro.querySelector('.btn-submit');
        btn.textContent = "Salvar Jogo"; 

        listarJogos();
    })
    .catch(err => console.error("Erro ao atualizar jogo:", err));
}

// ======== FUNÇÃO PARA PREENCHER FORMULÁRIO (PARA EDIÇÃO) ========
function editarJogo(id) {
    fetch(`${API_URL}/${id}`)
        .then(res => res.json())
        .then(jogo => {
             // 1. Preenche o formulário com os dados do jogo
             document.getElementById("nome").value = jogo.nome;
             document.getElementById("genero").value = jogo.genero;
             document.getElementById("ano").value = jogo.ano;
             document.getElementById("descricao").value = jogo.descricao;
             document.getElementById("avaliacao").value = jogo.avaliacao;

            // 2. Define o estado de edição
            idParaEditar = id; 

            // 3. Muda o texto do botão para indicar o modo de edição
            const btn = formCadastro.querySelector('.btn-submit');
            btn.textContent = "Salvar Alterações";
            
            // Opcional: Rola a página para o topo do formulário
            formCadastro.scrollIntoView({ behavior: 'smooth' });

        })
        .catch(err => console.error("Erro ao carregar jogo para edição:", err));
}


// ======== 4. FUNÇÃO PARA EXCLUIR JOGO (DELETE) ========
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

// ======== FUNÇÃO DE SUBMISSÃO UNIFICADA (Lógica Principal) ========
function submitFormularioUnificado(e) {
    e.preventDefault();

    // 1. Coleta os dados do formulário
    const jogoData = {
        nome: document.getElementById("nome").value,
        genero: document.getElementById("genero").value,
        // Garante que o ano e avaliação sejam números
        ano: Number(document.getElementById("ano").value),
        descricao: document.getElementById("descricao").value,
        avaliacao: Number(document.getElementById("avaliacao").value) || 0
    };

    // 2. Decide se é POST ou PUT
    if (idParaEditar) {
        // Se houver ID, é uma ATUALIZAÇÃO (PUT)
        atualizarJogo(idParaEditar, jogoData);
    } else {
        // Se não, é um NOVO CADASTRO (POST)
        cadastrarJogo(jogoData);
    }
}

// ======== EVENTO DE INICIALIZAÇÃO ========
if (formCadastro) {
    // Liga a função unificada ao evento de submit
    formCadastro.addEventListener("submit", submitFormularioUnificado);
}

// Carrega a lista de jogos quando a página carrega
listarJogos();




