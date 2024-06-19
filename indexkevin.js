let soma = 0;
let a;
let b;

console.log("Digite dois números para calcular o MMC.");

// Lê a entrada do usuário
process.stdin.on('data', function(data) {
    let entrada_usuario = data.toString().trim();

    if (soma === 0) {
        a = entrada_usuario;
        console.log("Segundo número:");
        soma++;
    } else if (soma === 1) {
        b = entrada_usuario;

        // Armazena os valores originais
        let originalA = a;
        let originalB = b;

        // Algoritmo de Euclides para calcular o MDC (máximo divisor comum)
        for (let temp; b !== 0; temp = b, b = a % b, a = temp) {
            // O loop continuará até que b seja zero
            // As atualizações de 'temp', 'b', e 'a' ocorrem na expressão do 'for'
        }

        let mdc = a;

        // Calcular o MMC (mínimo múltiplo comum) usando o MDC
        let mmc = (originalA * originalB) / mdc;

        console.log(`O MMC de ${originalA} e ${originalB} é ${mmc}`);

        // Encerra o processo
        process.exit();
    }
});
