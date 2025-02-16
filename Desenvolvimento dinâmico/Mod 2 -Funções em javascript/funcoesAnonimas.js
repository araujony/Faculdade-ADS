// Declaração de uma váriavel chamada resultado e atribuição de uma função anônima a ela

let somarParametros = function(parametro1, parametro2) {
    console.log("Parâmetro1: " + parametro1);
    console.log("Parâmetro2: " + parametro2);

    let resultado = parametro1 + parametro2;
    console.log("O resultado da soma é " + resultado);

    return resultado;
}

// Chamada da função anônima através de váriavel

let resultado = somarParametros(15,1)

// Definindo uma função que aceita outra função como argumento

function executarFuncao(funcao, valor1, valor2) {
    console.log("\nExecutando a função  passada como argumento: ");
    return  funcao(valor1, valor2);
}

// Passando a função anônima como argumento para outra função
let resultadoExecucao = executarFuncao(somarParametros, 7, 4);
    console.log("Resultado da execução da função passada  como argumento: " + resultadoExecucao);

// Definindo e chamando uma função anônima imediatamente
let resultadoImediato = (function(a,b){
    console.log("\nFunção de chamada imediata: ");
    return a*b;
})(4,6);
console.log("Resultado da função anonima imediatadamente: " + resultadoImediato)
