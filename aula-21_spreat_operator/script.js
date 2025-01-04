// Spread operator com Arrays
let nums1 = [1, 2, 3, 4]
let nums2 = [5, 6, 7, 8]

let numbers = [nums1, 5, 6, 7, 8]
console.log(numbers)

let numbers_spread = [...nums1, 5, 6, 7, 8]
console.log(numbers_spread)
console.log(numbers_spread[4])

// spread operator com objetos
let pessoa = {
    nome: "Leonardo",
    idade: 53,
    altura: 1.73,
    cargo: "Programador FullStack"
}

let novaPessoa = {
    ...pessoa,
    status: "ATIVO",
    cidade: "Feira de Santana / BA",
    telefone: "(75) 98139-8451"
};

console.log(novaPessoa)

// spread operator com function de cadastro de usuário
function novoUsuario(info) {
    let dados = {
        ...info,
        status: "ATIVO",
        inicio: "20/03/2023",
        codigo: "123123"
    }

    console.log(dados)
}

novoUsuario({ nome: "Jose", sobrenome: "Silva", cargo: "DEV" })