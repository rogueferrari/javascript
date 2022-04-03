function fatorial (n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

/*Fatorial é quando existe a multiplicação de um numero inteiro
positivos, menores do que o número em questão.
*/