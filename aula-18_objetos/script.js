/**
 * Objetos - Os objetos são criados com chaves e as propriedades 
 * são separadas do conteúdo por ":".
 *  */

let pessoa = {
    nome: "Leonardo",
    idade: 53,
    altura: 1.73,
    cargo: "Programador FullStack"
}

// Mostrando objeto pessoa
console.log(pessoa)

// Fazendo chamadas às propriedades
console.log(pessoa.nome)

// Objeto Carro
let carro = { nome: "Golf 1.6", cor: "Branco", potencia: "140cv" }
console.log(carro.nome)

// Array com lista de objetos
let usuarios = [
    { nome: "Matheus", cargo: "Programador", status: "ATIVO" },
    { nome: "Maria", cargo: "Backend", status: "ATIVO" },
    { nome: "Jose", cargo: "RH", status: "ATIVO" }
];

console.log(usuarios[1])
console.log(usuarios[1].nome)

