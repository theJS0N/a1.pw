// 1. Calculadora de IMC

var peso = parseFloat(prompt("Digite seu peso em kg:"));
var altura = parseFloat(prompt("Digite sua altura em metros:"));
var imc = peso / (altura * altura);

console.log("Seu IMC é:", imc);

if (imc < 18.5) {
    console.log("Categoria: Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Categoria: Peso normal");
} else if (imc >= 25.0 && imc <= 29.9) {
    console.log("Categoria: Excesso de peso");
} else if (imc >= 30.0 && imc <= 34.9) {
    console.log("Categoria: Obesidade grau I");
} else if (imc >= 35.0 && imc <= 39.9) {
    console.log("Categoria: Obesidade grau II");
} else {
    console.log("Categoria: Obesidade grau III");
}

//2. Jogo de adivinhação

var numeroSecreto = Math.floor(Math.random() * 100) + 1;
while (true) {
    var palpite = parseInt(prompt("Adivinhe o número (entre 1 e 100):"));
    if (palpite === numeroSecreto) {
        console.log("Parabéns! Você acertou o número secreto.");
        break;
    } else if (palpite < numeroSecreto) {
        console.log("Tente novamente! O número secreto é maior.");
    } else {
        console.log("Tente novamente! O número secreto é menor.");
    }
}

//3. Verificador de maioridade

var dataNascimento = prompt("Digite sua data de nascimento (no formato DD/MM/AAAA):");
var anoNascimento = parseInt(dataNascimento.substring(6));
var anoAtual = new Date().getFullYear();
var idade = anoAtual - anoNascimento;
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

//4. Classificador de triângulos

var lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado do triângulo:"));
var lado2 = parseFloat(prompt("Digite o comprimento do segundo lado do triângulo:"));
var lado3 = parseFloat(prompt("Digite o comprimento do terceiro lado do triângulo:"));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("O triângulo é equilátero.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("O triângulo é isósceles.");
    } else {
        console.log("O triângulo é escaleno.");
    }
} else {
    console.log("Os lados fornecidos não formam um triângulo válido.");
}

//5. Simulador de caixa eletrônico

var valorSaque = parseInt(prompt("Digite o valor que deseja sacar (múltiplo de 10):"));

if (valorSaque % 10 === 0) {
    console.log("Saque realizado com sucesso.");
} else {
    console.log("Valor inválido. Digite um valor múltiplo de 10.");
}
