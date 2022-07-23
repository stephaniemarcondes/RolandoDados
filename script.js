const body = document.querySelector("body");
const count = initCountArray();
const container = document.createElement("div");


function jogarDado() {

   return Math.floor(Math.random() * 6) + 1; 
}

function teste() {
  console.log("count", count.toString());
  let auxiliar = [];
  for (let i = 1; i <= 1000; i++) {

    let item = jogarDado() + jogarDado() ;
    count[item] = count[item] + 1;
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


let botao = document.getElementById("botao");
botao.addEventListener("click", () => {
  window.location.reload();
});


function main() {
  
  
  teste()
  criarGrafico()


}
main()



