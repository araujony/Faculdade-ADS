// Arrow functions

// Exemplo básico de uma arrow function que soma dois números
// let=Váriavel
// Somar= function
let somar =  (a,b) => {
    return a+b; 
};

// Chamando a função e exibindo o resultado no console
console.log(somar(5,3));

// Exemplo de arrow function com um único parâmetro (Não precisa de parêntese)
let dobrar = n => n*2;

// Chamando a função e exibindo o resultado no console 
console.log(dobrar(5));

// Exemplo de uma arrow function usada como callback
let numerosDobrados = numeros.map( n => n*2 );

// Exibindo o array resultante no console
console.log(numerosDobrados);

// Arrow function com corpo de uma função mais complexo
let saudacao = () => {
    let mensagem = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`
    return mensagem;
};

// Chamando a função e exibindo o resultado no console
console.log(saudacao("Nycolas", 19));