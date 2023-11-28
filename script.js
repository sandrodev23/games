// Criando um elemento para o título
let titulo = document.createElement("h1");

// Manipulando o elemento
titulo.id = "titulo";
titulo.innerText = "Loja de Games";

// Capturando o "elemento pai" dos elementos 'titulo' e 'produto'
let body = document.querySelector("body");

// Adicionando o elemento 'titulo' no DOM
body.appendChild(titulo);

// ------------------------------------------- //

// Criando um elemento para o produto
let produto = document.createElement("div");

// Manipulando o elemento
produto.innerHTML = `
  <div>
    <h2>Game</h2>
    <img src="https://media.cnn.com/api/v1/images/stellar/prod/i-stock-1287493837-1.jpg?c=16x9&q=h_720,w_1280,c_fill" alt="controle game">
    <p>Games de ultima geração.</p>
    <p id="preco-do-game">R$ 159.90</p>
  </div>
`;

// Adicionando o elemento no dom
body.appendChild(produto);
