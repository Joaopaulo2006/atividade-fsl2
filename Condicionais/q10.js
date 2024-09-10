alert("10) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )2. Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo com a tabela abaixo. IMC em adultos Condição. Abaixo de 18,5 Abaixo do peso. Entre 18,5 e 25 Peso normal. Entre 25 e 30 Acima do peso. Acima de 30 obeso");


let h = parseFloat(prompt("Digite sua altura: "));
let k = parseFloat(prompt("Digite seu peso: "));

let imc = k / (h ** 2);
let condicao = "";
if (imc < 18.5) {
    condicao = "Abaixo do peso";
} else if (imc >= 18.5 && imc <= 25) {
    condicao = "Peso ideal";
} else if (imc > 25 && imc <= 30) {
    condicao = "Acima do peso";
} else if (imc > 30) {
    condicao = "Obeso";
}
console.log("Seu IMC é: " + imc.toFixed(2));
console.log("Condição: " + condicao);



