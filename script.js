const count = initCountArray();
function teste() {
  console.log("count", count.toString());
  let auxiliar = [];
  for (let i = 2; i <= 1000; i++) {
    let item = Math.floor(Math.random() * 7);
    let item2 = Math.floor(Math.random() * 7);
    let item3 = item + item2;
    count[item3] = count[item3] + 1;
  }
  return count;
}

function initCountArray() {
  let count = [];
  for (let i = 2; i <= 12; i++) {
    count[i] = 0;
  }
  return count;
}

console.log(teste());

function grafico2() {
  const body = document.querySelector("body");
  console.log(body);
  let container = document.createElement("div");
  body.appendChild(container);
  container.classList.add("container");
  for (let i = 2; i < count.length; i++) {
    let minhaBarra = document.createElement("div");
    let descricao = document.createElement("h4");
    container.appendChild(descricao);
    minhaBarra.classList.add("minhaBarra");

    descricao.innerHTML = `Nº ${i} do dado, Quantidade de vezes rodada : ${count[i]}`;

    minhaBarra.style.width = `${count[i]}px`;
    minhaBarra.style.height = "auto";
    minhaBarra.style.border = "solid black 2px";
    minhaBarra.style.backgroundColor = coraleatoria();
    container.appendChild(minhaBarra);
  }
}
grafico2();

function coraleatoria() {
  function c() {
    var hex = Math.floor(Math.random() * 256).toString(16);
    return ("0" + String(hex)).substr(-2);
  }
  return "#" + c() + c() + c();
}

let botao = document.getElementById("botao");
botao.addEventListener("click", () => {
  window.location.reload();
});
