menorValor = 1000;
i = 0;
while (i < 5) {
  entrada = prompt("Entre com o menor valor:");
  nro = parseInt(entrada);
  if (nro < menorValor){
    menorValor = nro;
  } 
  i = i + 1;
}
console.log("Menor:", menorValor);


