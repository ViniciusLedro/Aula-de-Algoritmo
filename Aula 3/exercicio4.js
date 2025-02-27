num1 = prompt("Entre com o menor valor");
num1 = parseInt(num1);
num2 = prompt("Entre com o maior valor");
num2 = parseInt(num2);
soma = 0;

if (num1 > num2) {
    i = num1;
    num1 = num2;
    num2 = i;
}

while (num1 <= num2) {
    soma += num1;
    num1++;
    
}
console.log("Somatório:",soma);