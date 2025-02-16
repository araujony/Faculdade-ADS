// Variável que representa previsão do tempo
// Pode ser "rainy" (chuvoso), "sunny" (ensolarado) ou "cloudy" (nublado)
let weatherForecast = "cloudy";

// Analogia com vida real: Decidindo se devemos levar um guarda-chuva
if (weatherForecast === "rainy") {
    console.log("devemos levar um guarda-chuva")
}  else if (weatherForecast === "cloudy") { // se não se 
    console.log("devemos levar um guarda-chuva, só por segurança")

} else { // se não
    console.log("NÃO devemos levar um guarda-chuva")
};