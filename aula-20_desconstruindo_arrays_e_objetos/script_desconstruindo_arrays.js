let nomes = ["Matheus", "Lucas", "Henrique"];
console.log(nomes)

// Forma 01 - Pelo índice 
// 1. Pode ser dado o nome que preferir e não o valor do elemento como em terceiraPessoa
let { 0:matheus, 2:terceiraPessoa } = nomes;
console.log(matheus)
console.log(terceiraPessoa)

// Forma 02 - Pela posição
let [primeironome, segundonome] = nomes;

console.log(primeironome);
console.log(segundonome);