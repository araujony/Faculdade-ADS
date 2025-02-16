// Exemplo de uso de var, let e const em Jvascript

const externo = "Olá, eu sou uma constate global!";

// Declaração de uma variável usando var

function exemploVar() {
        if(true) {
            var mensagem = "Olá, Faculdade Descomplica! Eu sou uma var..."
        }
        console.log(mensagem);
}

// Chamando  a função exemploVar
exemploVar();
            
// Exemplo de erro e correção
var mensagem = "Olá, Faculdade Descomplica! Eu sou um escopo externo..."
console.log(mensagem)

// Declaração de váriavel usando let
function exemploLet() {
    if(true) {
        let mensagem = "Olá, Faculdade Descomplica! Eu sou uma Let..."
        console.log(mensagem)
    }
    //console.log(mensagem)
}
//CHamando a função exemploLet
exemploLet();

//Declarando uma constante usando const
function exemploConstante() {
    const mensagem = "Olá, faculdade Descomplica! Eu sou uma constate...";
    console.log(mensagem)
}
//  Chamando a função exemploConstante
exemploConstante();

// Exemplo externo de const
console.log(externo);