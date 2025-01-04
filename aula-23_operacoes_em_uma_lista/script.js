
// MAP = PERCORRER TODO UM ARRAY
let lista = ["Leonardo", "Oliver", "Lúcia", "Giovanna"]

lista.map((item, index) => {
    console.log(`PASSANDO: ${item} - Está na posição: ${index}`)
})

// Reduce = O reduce buscsa reduzir um array.

let numeros = [5, 3, 2, 8];

let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`${acumulador} - total até o momento`)
    console.log(`${numero} - Valor atual`)
    console.log(`${indice} - Posição atual`)
    console.log(`${original} - array original`)
    console.log("===============================")

    return acumulador += numero;
})

console.log("Total do reduce = " + total)