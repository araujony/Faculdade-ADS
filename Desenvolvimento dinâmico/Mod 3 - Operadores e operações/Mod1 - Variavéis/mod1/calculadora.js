// calculadora.js

// Função que simula a operação de uma caucladora
function calculadora(num1, num2) {

    // Operações aritméticas básicas
    let adicao = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num1/num2;
    let modulo = num1 % num2;
    let exponecial = num1 ** num2;

    // Incremento e Decremento
    // Vamos incrementar num1
    let incrementar = num1;
    incrementar++;
    

    // Vamos decrementar num2
    let decrementar = num2;
    decrementar--;;


     // Exibindo os resultados no console
     console.log(`Adição (${num1} + ${num2}) = ${adicao}`);
     console.log(`Subtração (${num1} - ${num2}) = ${subtracao}`);
     console.log(`Multiplicação (${num1} * ${num2}) = ${multiplicacao}`);
     console.log(`Divisão (${num1} / ${num2}) = ${divisao}`);
     console.log(`Módulo (${num1} % ${num2}) = ${modulo}`);
     console.log(`Exponencial (${num1} ** ${num2}) = ${exponecial}`);
     console.log(`Incrementar (${num1})++ = ${incrementar}`);
     console.log(`Exponencial (${num2})-- = ${decrementar}`);
     


    }

// Exibindo a função calculadora
calculadora();

calculadora(220, 66);
        