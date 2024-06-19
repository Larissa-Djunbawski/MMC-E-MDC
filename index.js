console.log("Digite dois números para calcular o MMC:");

let num1 = 0;
let num2 = 0;
let numeros = []

process.stdin.on("data", function(data) {
  let numero = Number(data.toString().trim())
  if (isNaN(numero)){
    console.log("Digite um número válido ")

  } else {
    numeros.push(numero)
    if (numeros.lenght === 2){
      let a = numeros[0]
      let b = numeros[1]
      let originalB = b
      //aqui vai o mdc
      const mmc = Math.abs(numeros[0]*numeros[1])/mdc 
      console.log("MMC: " + mmc)
      process.exit()

    } else {
      console.log("Digite o segundo  número ")
    }
  }
  
});
