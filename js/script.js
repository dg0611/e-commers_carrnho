var quantidade = document.getElementById("quanti");
var total = document.getElementById("valorQuantidadeTotal");
var totalCompra = document.getElementById("totalcompra");
var valorTotal = [0, 0];
var valorProduto = [50.0, 45.0];
var qtd = [0, 0];

function adicionarItem(item) {
  qtd[item]++;
  valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
  quantidade.innerHTML = qtd[item];
  total.innerHTML = "R$" + valorTotal[item].toFixed(2);
  totalCompra.innerText = "R$" + valorTotal[item].toFixed(2);
  Resultado();
}

function diminuirItem(item) {
  if (qtd[item] < 1) {
    alert("Adicione pelo menos 1 item para compra");
  } else if (qtd[item] >= 1) {
    qtd[item]--;
  }

  valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];

  quantidade.innerHTML = qtd[item];
  total.innerHTML = "R$" + valorTotal[item].toFixed(2);
  totalCompra.innerText = "R$" + valorTotal[item].toFixed(2);
  Resultado();
}

function excluir(item) {
  quantidade.innerHTML = qtd[0] = 0;
  let totalResult = (valorTotal[0] = 0);
  total.innerHTML = "R$" + 0;
  let diminuir = valorTotal[1] - totalResult;
  totalCompra.innerText = "R$" + diminuir.toFixed(2);
}

// logica para o botao da segunda camisa

var total2 = document.getElementById("total2");
var quantidade2 = document.getElementById("quantidade2");

function adicionarItem2(item) {
  qtd[item]++;
  quantidade2.innerHTML = qtd[item];
  valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
  total2.innerHTML = "R$" + valorTotal[item].toFixed(2);
  totalCompra.innerText = "R$" + valorTotal[item].toFixed(2);
  Resultado();
}

function diminuirItem2(item) {
  if (qtd[item] < 1) {
    alert("Adicione pelo menos 1 item para compra ");
  } else if (qtd[item] >= 1) {
    qtd[item]--;
  }

  valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];

  quantidade2.innerHTML = qtd[item];
  total2.innerHTML = "R$" + valorTotal[item].toFixed(2);
  totalCompra.innerText = "R$" + valorTotal[item].toFixed(2);
  Resultado();
}

function excluirItem2(item) {
  var teste = document.getElementById("total");
  quantidade2.innerHTML = qtd[item] = 0;
  let totalResult = (valorTotal[item] = 0);
  let diminuir = valorTotal[0] - totalResult;
  total2.innerHTML = "R$" + 0;
  totalCompra.innerText = "R$" + diminuir.toFixed(2);
}

function Resultado() {
  let valorTotalFinal = document.getElementById("totalcompra");
  let valor = 0;

  for (i = 0; i < valorTotal.length; i++) {
    valor += valorTotal[i];
  }
  valorTotalFinal.innerHTML = "R$" + valor.toFixed(2);
}
