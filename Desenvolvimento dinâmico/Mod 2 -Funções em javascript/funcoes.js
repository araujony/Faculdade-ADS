// Definindo outra função regular com dois parâmetros

function soma(a,b) {
    return a + b;
}

// Chamando a função soma e armazenando o resultado numa váriavel
let resultado  = soma(2,5);

// Exibindo o resultado da função soma
console.log ("O resultado da soma é: " + resultado)

// Definindo uma função regular usando a palavra-chave 'function'

function saudacao(nome) {
    console.log("Olá, " + nome + "!")
}

// Chamando a função saudacao e passando um argumento
saudacao("Nycolas araújo")

// Definindo uma função regular sem parâmetros e sem retorno

function mensagem() {
    console.log("Está é uma mensagem de boas-vindas!")
}
saudacao("Nycolas");
mensagem();