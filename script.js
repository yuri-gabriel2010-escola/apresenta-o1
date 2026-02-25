const botao = document.getElementById("botao");
const texto = document.getElementById("texto");
const imagem = document.getElementById("imagem");

botao.addEventListener("click", ()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/3")
    .then(resposta => resposta.json())
    .then(dados => {
        texto.textContent = dados.name;
        imagem.src = dados.sprites.front_default;


    });
});