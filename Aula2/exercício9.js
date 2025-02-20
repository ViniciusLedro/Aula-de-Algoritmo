peso = prompt("Entre com seu peso:");
peso = parseFloat(peso);
altura = prompt("Entre com sua altura");
altura = parseFloat(altura);
imc = peso / altura * altura;
imc = parseFloat(imc);

if (imc <= 18, 5) {
  console.log("abaixo do peso");
}
else if (imc >= 18, 6 && imc <= 24.9) {
  console.log("Peso ideal (parabéns)");

} else if (imc >= 25 && imc <= 29.9) {
  console.log("Levemente acima do peso");

} else if (imc >= 30 && imc <= 34.9) {
  console.log("Obesidade grau I");

} else if (imc >= 35 && imc <= 39.9) {
  console.log("Obesidade grau II (severa)");

} else if (imc >= 40) {
  console.log("Obesidade Morbida");
}
