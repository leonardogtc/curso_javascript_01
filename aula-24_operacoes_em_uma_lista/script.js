// FIND - Localiza e devolve a primeira ocorrência
let listagem = [5, 3, "Jose", 2, "Matheus", "Jose"]

let busca = listagem.find((item) => {
    if(item == "Jose") {
        return console.log("Item encontrado!")
    }
    return item === "Jose";
})


// FILTER - Filtra todas as ocorrências independente de serem informações iguais
let palavras = ["Matheus", "Ana", "Jose", "Ricardo Silva", "Sujeito Programador", "Jose"];

// Realiza o filtro por item no array buscando aqueles com tamanho menores ou iguais a 4.
let resultado = palavras.filter((item) => {
    return item.length <= 4
})

console.log(resultado)