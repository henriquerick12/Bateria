// pegar teclas apertadas mo teclado
document.body.addEventListener("keyup", (e) => {
  tocarSom(e.code.toLowerCase());
});

// Elemento para tocar a composição
const btnTocar = document
  .querySelector(".composer button")
  .addEventListener("click", () => {
    const inputValue = document.querySelector("#input").value;

    if (inputValue != "") {
      let composicao = inputValue.split("");
      playComposition(composicao);
    }
});

// Função para tocar a musica
function tocarSom(letra) {
  const audio = document.querySelector(`#s_${letra}`);

  const tag = document.querySelector(`div[data-key="${letra}"]`);

  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }

  if (tag) {
    tag.classList.add("active");
    setTimeout(() => {
      tag.classList.remove("active");
    }, 300);
  }
}

// Função composição
function playComposition(array) {
  let wait = 0;

  for (let key of array) {
    setTimeout(() => {
      tocarSom(`key${key}`);
    }, wait);
    wait += 250;
  }
}
