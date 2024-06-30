//Captura os elementos que vão ser manupulados
let inputDoUsuario = document.querySelector("#input");
let botaoCodificar = document.querySelector(".botao__criptografar");
let botaoDecodificar = document.querySelector(".botao__descriptografar");
let textoCodificado = document.querySelector(".texto__codificado");
let saidaDadosCopiar = document.querySelector(".saida__dados__copiar");

//Função pra criptografar o texto
botaoCodificar.addEventListener("click", () => {
  //Armazena o input do usuario na variavel textoInformado
  let textoInformado = inputDoUsuario.value;
  //Transforma o input do usuario em um array de caracteres, para que assim possamos passar por todo o array, verificando cada letra e a substituindo, caso seja a letra correta
  let arrayDoTextoInformado = textoInformado.split("");
  //Condicional verificando se existe algo no input, caso sim, ele faz a codificação, caso não, mostra um alerta na tela.
  //Se o input estiver vazio
  if (textoInformado == "") {
    alert("Digite algo a ser criptografado!!");
    //Se não
  } else {
    for (let i = 0; i < arrayDoTextoInformado.length; i++) {
      if (arrayDoTextoInformado[i] == "a") {
        arrayDoTextoInformado[i] = "ai";
      } else if (arrayDoTextoInformado[i] == "e") {
        arrayDoTextoInformado[i] = "enter";
      } else if (arrayDoTextoInformado[i] == "i") {
        arrayDoTextoInformado[i] = "imes";
      } else if (arrayDoTextoInformado[i] == "o") {
        arrayDoTextoInformado[i] = "ober";
      } else if (arrayDoTextoInformado[i] == "u") {
        arrayDoTextoInformado[i] = "ufat";
      }
    }
  }
  //Se tiver algo no input, faz tudo isso que tá embaixo, caso contrário, não faz nada
  if (textoInformado != "") {
    textoCodificado.innerHTML = arrayDoTextoInformado.join("");
    limparSaidaDeDados();
    saidaDadosCopiar.classList.add("active");
    inputDoUsuario.value = "";
  }
});

//Essa função retira parte dos elementos no container de saída de dados, pra ficar um output mais limpo
function limparSaidaDeDados() {
  let saidaDadosImagem = document
    .querySelector(".saida__dados__imagem")
    .remove();
  let saidaDadosInfo = document.querySelector(".saida__dados__info").remove();
}

//Função pra decodificar o texto
botaoDecodificar.addEventListener("click", () => {
  //A variavel textoInformado vai armazenar o input do usuario
  let textoInformado = inputDoUsuario.value;
  //Se o input estiver vazio
  if (textoInformado == "") {
    alert("Nada a ser descriptografado!!");
    //Se não, faz todo o procedimento de substituição
  } else {
    let textoDecodificado = textoInformado
      .replaceAll("ai", "a")
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");
    textoCodificado.innerHTML = textoDecodificado;
  }
});

//Essa função utiliza-se da API do clipboard pra conseguir copiar o texto que vai aparecer codificado no output
saidaDadosCopiar.addEventListener("click", () => {
  navigator.clipboard.writeText(textoCodificado.innerHTML);
  //Mostra copied! no console
  console.log("copied!");
});

//Recarrega a página
let aluraLogoImagem = document
  .querySelector(".alura__logo__imagem")
  .addEventListener("click", () => {
    window.location.reload();
  });

//funções para modificar o tema do site
let iconeTsunami = document
  .querySelector(".tsunami")
  .addEventListener("click", () => {
    //remove os outros temas, pois o tema tsunami já é o padrão
    document.body.classList.remove("active__cafe");
    document.body.classList.remove("active__forest");
    //Mesmo esquema da explicação da imagem abaixo
    let iconeAlura = document
      .querySelector(".alura__logo__imagem")
      .setAttribute("src", "./assets/alura-logo.svg");
    //seta a imagem do personagem no tema azul novamente, pois ao mudar de tema e clicar pra remover o tema, a imagem continua sendo a do outro tema que foi adicionado antes, nesse caso, estou trabalhando com três imagens, uma para cada tema, modificando só as cores de destaque.
    let personagemComLupa = document
      .querySelector(".saida__dados__imagem")
      .setAttribute("src", "./assets/personagem-com-lupa.svg");
    // document.body.classList.add("active__tsunami");
  });

let iconeCafe = document
  .querySelector(".local__cafe")
  .addEventListener("click", () => {
    document.body.classList.remove("active__forest");

    let iconeAlura = document
      .querySelector(".alura__logo__imagem")
      .setAttribute("src", "./assets/alura-logo-cafe.svg");
    document.body.classList.add("active__cafe");

    let personagemComLupa = document
      .querySelector(".saida__dados__imagem")
      .setAttribute("src", "./assets/personagem-com-lupa-cafe.svg");
  });

let iconeFloresta = document
  .querySelector(".forest")
  .addEventListener("click", () => {
    document.body.classList.remove("active__cafe");

    let iconeAlura = document
      .querySelector(".alura__logo__imagem")
      .setAttribute("src", "./assets/alura-logo-forest.svg");
    document.body.classList.add("active__cafe");

    let personagemComLupa = document
      .querySelector(".saida__dados__imagem")
      .setAttribute("src", "./assets/personagem-com-lupa-forest.svg");

    document.body.classList.add("active__forest");
  });

//Função de codicicação, primeiro fiz ela da forma que está abaixo, depois adaptei aos botões do site
// function codificarTexto(texto) {
//   let mensagem = texto.split("");
//   for (let i = 0; i < mensagem.length; i++) {
//     if (mensagem[i] == "a") {
//       mensagem[i] = "ai";
//     } else if (mensagem[i] == "e") {
//       mensagem[i] = "enter";
//     } else if (mensagem[i] == "i") {
//       mensagem[i] = "imes";
//     } else if (mensagem[i] == "o") {
//       mensagem[i] = "ober";
//     } else if (mensagem[i] == "u") {
//       mensagem[i] = "ufat";
//     }
//   }
//   console.log(mensagem.join(""));
// }

//Função de decodicicação, primeiro fiz ela da forma que está abaixo, depois adaptei aos botões do site
// function decodificarTexto(texto) {
//   console.log(
//     texto
//       .replaceAll("ai", "a")
//       .replaceAll("enter", "e")
//       .replaceAll("imes", "i")
//       .replaceAll("ober", "o")
//       .replaceAll("ufat", "u")
//   );
// }
