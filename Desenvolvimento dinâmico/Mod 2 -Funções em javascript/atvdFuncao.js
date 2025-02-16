// Título da Prática: Criação e execução de funções em JavaScript

function saudacao() {
    console.log("Olá, mundo");
};
saudacao();

//Passando parâmetros para funções:

function novaSaudacao(nome) {
    console.log("Olá, "+ nome + " Seja bem-vindo!")
};

novaSaudacao("Nycolas Araújo")

// Crie uma função chamada soma.

function soma(a,b,) {
    return a + b;
};
let resultado = soma(10,7);
console.log("O resultado da soma é " + resultado);
