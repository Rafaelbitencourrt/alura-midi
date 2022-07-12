function tocarSomPom() {
  document.querySelector("#som_tecla_pom").play();
}

function tocarSomClap() {
  document.querySelector("#som_tecla_clap").play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;

while (contador < listaDeTeclas.length) {
  listaDeTeclas[contador].onclick = tocarSomPom;

  contador = contador + 1;

  console.log(contador);
}
