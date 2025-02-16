// Imagine que você é um entregaodr de pizza em uma cidade com várias ruas numeradas de 1 a 10.
// Você tem que entregar uma pizza em cada rua, começando da rua 1 até a rua 10.

// Aqui, usaremos um loop for para simular esse processo: 

let tempoDeAndar = 0;
let caiu = false;

do {
    tempoDeAndar++;
    console.log("Andei de bicicleta por ", tempoDeAndar, "minutos...");

    if (tempoDeAndar === 10) {
        caiu = true;
    }
} while (!caiu  && tempoDeAndar < 10);