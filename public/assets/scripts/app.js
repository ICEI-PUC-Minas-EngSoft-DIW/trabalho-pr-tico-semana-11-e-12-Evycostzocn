/* DADOS (JSON)*/
const dados = {
  "itens": [
    //AÇÃO / AVENTURA
    {
  
      "id": 1,
      "tipo": "Jogo",
      "titulo": "The Last of Us Part II",
      "descricao": "Explore um mundo pós-apocalíptico cheio de desafios e emoções.",
      "conteudo": "Segunda parte do épico dramático que aprofunda personagens e escolhas morais.",
      "genero": "Ação/Aventura",
      "plataforma": "PS4 / PS5 / PC",
      "lancamento": "2020",
      "desenvolvedora": "Naughty Dog",
      "destaque": true,
      "imagem_principal": "img/tlou4.jpg",
      "imagens": [
        { "id": 1, "titulo": "", "imagem": "img/elliearco.jpeg" },
        { "id": 2, "titulo": "", "imagem": "img/tlou3.jpg" }
      ]
    },
    {
      "id": 2,
      "tipo": "Filme",
      "titulo": "Uncharted: Fora do Mapa",
      "descricao": "Um caçador de tesouros embarca em uma jornada épica.",
      "conteudo": "Baseado no jogo homônimo, Nathan Drake vive uma aventura cheia de ação e mistério.",
      "genero": "Ação/Aventura",
      "diretor": "Ruben Fleischer",
      "lancamento": "2022",
      "destaque": false,
      "imagem_principal": "img/uncharted.jpg"
    },
    {
      "id": 3,
      "tipo": "Livro",
      "titulo": "Percy Jackson e o Ladrão de Raios",
      "descricao": "Um garoto descobre ser filho de um deus e embarca em uma missão perigosa.",
      "conteudo": "Percy deve encontrar o raio de Zeus e evitar uma guerra entre os deuses.",
      "genero": "Ação/Aventura",
      "autor": "Rick Riordan",
      "publicacao": "2005",
      "destaque": false,
      "imagem_principal": "img/percyjackson.jpg"
    },
    {
      "id": 4,
      "tipo": "Série",
      "titulo": "The Witcher",
      "descricao": "Um caçador de monstros luta para encontrar seu lugar em um mundo turbulento.",
      "conteudo": "Baseada nos livros de Andrzej Sapkowski, mistura fantasia, ação e drama.",
      "genero": "Ação/Aventura",
      "temporadas": 3,
      "lancamento": "2019",
      "destaque": false,
      "imagem_principal": "img/witcher.jpg"
    },

    // TERROR 
    {
      "id": 5,
      "tipo": "Filme",
      "titulo": "Invocação do Mal",
      "descricao": "Baseado em fatos reais, um casal de investigadores enfrenta uma entidade demoníaca.",
      "conteudo": "Ed e Lorraine Warren ajudam uma família aterrorizada por forças sobrenaturais.",
      "genero": "Terror",
      "diretor": "James Wan",
      "lancamento": "2013",
      "destaque": true,
      "imagem_principal": "img/conjuring2.jpg"
    },
    {
      "id": 6,
      "tipo": "Série",
      "titulo": "A Maldição da Mansão Bly",
      "descricao": "Uma governanta descobre segredos sombrios na mansão em que trabalha.",
      "conteudo": "Terror psicológico e drama emocional em uma narrativa envolvente.",
      "genero": "Terror",
      "temporadas": 1,
      "lancamento": "2020",
      "destaque": false,
      "imagem_principal": "img/blymanor.jpg"
    },
    {
      "id": 7,
      "tipo": "Jogo",
      "titulo": "Outlast",
      "descricao": "Você é um jornalista investigando um asilo insano e cheio de horrores.",
      "conteudo": "Sem armas, o jogador deve sobreviver escondendo-se dos monstros e documentando o terror.",
      "genero": "Terror",
      "plataforma": "PC / PS4 / Xbox",
      "lancamento": "2013",
      "desenvolvedora": "Red Barrels",
      "imagem_principal": "img/outlast.jpg"
    },
    {
      "id": 8,
      "tipo": "Livro",
      "titulo": "Eu Sei o Que Vocês Fizeram no Verão Passado",
      "descricao": "Um suspense aterrorizante sobre culpa e vingança.",
      "conteudo": "Um grupo de jovens é perseguido após um terrível acidente.",
      "genero": "Terror",
      "autor": "Lois Duncan",
      "publicacao": "1973",
      "imagem_principal": "img/verao-passado.jpeg"
    },

    // FICÇÃO CIENTÍFICA 
    {
      "id": 9,
      "tipo": "Filme",
      "titulo": "Inception",
      "descricao": "Uma jornada através dos sonhos que desafia a realidade.",
      "conteudo": "Um thriller sobre invasão de sonhos e natureza da mente humana.",
      "genero": "Ficção Científica",
      "diretor": "Christopher Nolan",
      "lancamento": "2010",
      "imagem_principal": "img/inception.jpg"
    },
    {
      "id": 10,
      "tipo": "Série",
      "titulo": "Black Mirror",
      "descricao": "Cada episódio explora um aspecto sombrio da tecnologia.",
      "conteudo": "Uma antologia provocante sobre o impacto das inovações no comportamento humano.",
      "genero": "Ficção Científica",
      "temporadas": 6,
      "lancamento": "2011",
      "imagem_principal": "img/blackmirror.jpg"
    },
    {
      "id": 11,
      "tipo": "Livro",
      "titulo": "1984 - George Orwell",
      "descricao": "Uma distopia clássica que explora vigilância e liberdade.",
      "conteudo": "Um Estado totalitário que controla tudo e todos.",
      "genero": "Ficção Científica",
      "autor": "George Orwell",
      "publicacao": "1949",
      "imagem_principal": "img/1984.jpg"
    },
    {
      "id": 12,
      "tipo": "Jogo",
      "titulo": "Cyberpunk 2077",
      "descricao": "Mergulhe em uma cidade futurista repleta de conspirações.",
      "conteudo": "Um RPG de mundo aberto com temas de transumanismo e poder corporativo.",
      "genero": "Ficção Científica",
      "plataforma": "PC / PS5 / Xbox",
      "lancamento": "2020",
      "imagem_principal": "img/cyberpunk.jpg"
    },

    // SUSPENSE 
    {
      "id": 13,
      "tipo": "Filme",
      "titulo": "Ilha do Medo",
      "descricao": "Um detetive investiga um hospital psiquiátrico misterioso.",
      "conteudo": "Leonardo DiCaprio em um thriller psicológico intenso e perturbador.",
      "genero": "Suspense",
      "diretor": "Martin Scorsese",
      "lancamento": "2010",
      "imagem_principal": "img/ilhadoMedo.jpg"
    },
    {
      "id": 14,
      "tipo": "Livro",
      "titulo": "Garota Exemplar",
      "descricao": "O desaparecimento de uma mulher revela segredos sombrios.",
      "conteudo": "Um casamento aparentemente perfeito esconde uma teia de mentiras.",
      "genero": "Suspense",
      "autor": "Gillian Flynn",
      "publicacao": "2012",
      "imagem_principal": "img/garotaexemplar.jpg"
    },
    {
      "id": 15,
      "tipo": "Série",
      "titulo": "You",
      "descricao": "Um homem obcecado ultrapassa os limites do amor e da sanidade.",
      "conteudo": "Explora a mente de um stalker e o impacto das redes sociais.",
      "genero": "Suspense",
      "temporadas": 4,
      "lancamento": "2018",
      "imagem_principal": "img/you.jpeg"
    },
    {
      "id": 16,
      "tipo": "Jogo",
      "titulo": "Alan Wake",
      "descricao": "Um escritor preso em sua própria história de terror psicológico.",
      "conteudo": "A luta entre a luz e a escuridão em uma pequena cidade misteriosa.",
      "genero": "Suspense",
      "plataforma": "PC / Xbox / PS5",
      "lancamento": "2010",
      "imagem_principal": "img/alanwake.jpg"
    }
  ]
};
/*FIM DOS DADOS*/



/* ========== RENDER HOME (cards) ========== */
const homeContainer = document.querySelector(".destaques");
if (homeContainer) {
  homeContainer.innerHTML = "<h3>Destaques da Semana</h3>";

  dados.itens
    .filter(item => item.destaque)
    .forEach(item => {
      const article = document.createElement("article");
      article.innerHTML = `
        <a href="detalhes.html?id=${item.id}">
          <img src="${item.imagem_principal}" alt="${item.tipo}: ${item.titulo}">
          <h4>${item.tipo}: ${item.titulo}</h4>
          <p>${item.descricao}</p>
        </a>
      `;
      homeContainer.appendChild(article);
    });
}

/* ========== FILTRAR POR GÊNERO ========== */
const generoLinks = document.querySelectorAll("aside ul li a");

generoLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const generoEscolhido = e.target.textContent.trim(); // garante pegar o texto clicado

    const itensFiltrados = dados.itens.filter(
      item => item.genero.toLowerCase() === generoEscolhido.toLowerCase()
    );

    homeContainer.innerHTML = `<h3>${generoEscolhido}</h3>`;

    itensFiltrados.forEach(item => {
      const card = document.createElement("article");
      card.innerHTML = `
        <a href="detalhes.html?id=${item.id}">
          <img src="${item.imagem_principal}" alt="${item.tipo}: ${item.titulo}">
          <h4>${item.tipo}: ${item.titulo}</h4>
          <p>${item.descricao}</p>
        </a>
      `;
      homeContainer.appendChild(card);
    });
  });
});

/* ========== RENDER DETALHES ========== */
const detalhesContainer = document.querySelector(".detalhes-item");
if (detalhesContainer) {
  const params = new URLSearchParams(window.location.search);
  const idNum = Number(params.get("id"));

  if (!isNaN(idNum)) {
    const item = dados.itens.find(it => it.id === idNum);

    if (item) {
      // Conteúdo principal do item
      detalhesContainer.innerHTML = `
        <div class="card-detalhes">
          <h2>${item.tipo}: ${item.titulo}</h2>
          <img src="${item.imagem_principal}" alt="${item.tipo}: ${item.titulo}">
          <p>${item.descricao}</p>
          <ul class="detalhes-list">
            ${item.genero ? `<li><strong>Gênero:</strong> ${item.genero}</li>` : ''}
            ${item.autor ? `<li><strong>Autor:</strong> ${item.autor}</li>` : ''}
            ${item.diretor ? `<li><strong>Diretor:</strong> ${item.diretor}</li>` : ''}
            ${item.plataforma ? `<li><strong>Plataforma:</strong> ${item.plataforma}</li>` : ''}
            ${item.lancamento ? `<li><strong>Lançamento:</strong> ${item.lancamento}</li>` : ''}
            ${item.temporadas ? `<li><strong>Temporadas:</strong> ${item.temporadas}</li>` : ''}
            ${item.publicacao ? `<li><strong>Publicação:</strong> ${item.publicacao}</li>` : ''}
          </ul>
          <a class="btn-voltar" href="index.html">Voltar para a home</a>
        </div>
      `;

      // Galeria de imagens secundárias
      if (item.imagens && item.imagens.length > 0) {
        const galeria = document.createElement("div");
        galeria.classList.add("galeria-imagens");
        galeria.innerHTML = "<h3>Galeria</h3>";

        item.imagens.forEach(imgObj => {
          const imgCard = document.createElement("img");
          imgCard.src = imgObj.imagem;
          imgCard.alt = imgObj.titulo || item.titulo;

          // Clique troca a imagem principal
          imgCard.addEventListener("click", () => {
            const imgPrincipal = detalhesContainer.querySelector(".card-detalhes img");
            imgPrincipal.src = imgObj.imagem;
            imgPrincipal.alt = imgObj.titulo || item.titulo;
          });

          galeria.appendChild(imgCard);
        });

        detalhesContainer.appendChild(galeria);
      }

    } else {
      detalhesContainer.innerHTML = "<p>Item não encontrado.</p>";
    }
  }
}


/* CARROSSEL */
const carrosselInner = document.querySelector("#carrosselDestaques .carousel-inner");
if (carrosselInner) {
  const destaques = dados.itens.filter(item => item.destaque);

  destaques.forEach((item) => {
    const divItem = document.createElement("div");
    divItem.classList.add("carousel-item");

    divItem.innerHTML = `
      <a href="detalhes.html?id=${item.id}">
        <img src="${item.imagem_principal}" class="d-block w-100" alt="${item.titulo}">
        <div class="carousel-caption d-none d-md-block">
          <h5>${item.tipo}: ${item.titulo}</h5>
          <p>${item.descricao}</p>
        </div>
      </a>
    `;

    carrosselInner.appendChild(divItem);
  });
}