function criarGrafico() {
  
    
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
  
  function coraleatoria() {
    function c() {
      var hex = Math.floor(Math.random() * 256).toString(16);
      return ("0" + String(hex)).substr(-2);
    }
    return "#" + c() + c() + c();
  }