console.log("Digite dois números para calcular o MMC:");

let num1 = 0;
let num2 = 0;
const primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

process.stdin.on("data", function(data) {
  if (!num1) {
    num1 = Number(data.toString().trim());
    console.log("Primeiro número inserido: " + num1);
  } else if (!num2) {
    num2 = Number(data.toString().trim());
    console.log("Segundo número inserido: " + num2);
    
    // Inicializa o MMC como 1
    let mmc = 1;
    
    // Verifica a divisibilidade pelos números primos
    for (let i = 0; i < primos.length; i++) {
      if (num1 % primos[i] === 0 || num2 % primos[i] === 0) {
        mmc *= primos[i];
      }
    }
    
    console.log("O MMC de ", num1, "e", num2," é:", mmc);

    process.exit(); // Encerra o processo após calcular o MMC
  }
});
