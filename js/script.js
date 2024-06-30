//Captura os elementos que vão ser manupulados
let inputDoUsuario = document.querySelector("#input");
let botaoCodificar = document.querySelector(".botao__criptografar");
let botaoDecodificar = document.querySelector(".botao__descriptografar");
let textoCodificado = document.querySelector(".texto__codificado");
let saidaDadosCopiar = document.querySelector(".saida__dados__copiar");

//Função pra criptografar o texto
botaoCodificar.addEventListener("click", () => {
  let textoInformado = inputDoUsuario.value;
  let arrayDoTextoInformado = textoInformado.split("");
  if (textoInformado == "") {
    alert("Digite algo a ser criptografado!!");
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
  if (textoInformado != "") {
    textoCodificado.innerHTML = arrayDoTextoInformado.join("");
    recarregarCodificador();
    saidaDadosCopiar.classList.add("active");
    inputDoUsuario.value = "";
  }
});

function recarregarCodificador() {
  let saidaDadosImagem = document
    .querySelector(".saida__dados__imagem")
    .remove();
  let saidaDadosInfo = document.querySelector(".saida__dados__info").remove();
}

//Função pra decodificar o texto
botaoDecodificar.addEventListener("click", () => {
  let textoInformado = inputDoUsuario.value;
  if (textoInformado == "") {
    alert("Nada a ser descriptografado!!");
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

saidaDadosCopiar.addEventListener("click", () => {
  navigator.clipboard.writeText(textoCodificado.innerHTML);
  console.log("copied!");
});

//RECARREGAR A PÁGINA
let aluraLogoImagem = document
  .querySelector(".alura__logo__imagem")
  .addEventListener("click", () => {
    window.location.reload();
  });

//funções para modificar o tema do site
let iconeTsunami = document
  .querySelector(".tsunami")
  .addEventListener("click", () => {
    document.body.classList.remove("active__cafe");
    document.body.classList.remove("active__forest");
    let iconeAlura = document
      .querySelector(".alura__logo__imagem")
      .setAttribute("src", "./assets/alura-logo.svg");

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
