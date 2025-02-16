// Imagine que você é um entregaodr de pizza em uma cidade com várias ruas numeradas de 1 a 10.
// Você tem que entregar uma pizza em cada rua, começando da rua 1 até a rua 10.

// Aqui, usaremos um loop for para simular esse processo: 

let quantidadeFlexoes = 0;
let cansaco = false;

while (!cansaco) {
    quantidadeFlexoes++;
    console.log("Eu fiz ", quantidadeFlexoes, "flexoes!")

    if (quantidadeFlexoes === 10) {
        cansaco = true;
    }
}