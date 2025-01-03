// Criar um array - associa uma variável à colchetes.
// exemplo: array_x = []
var lista = ['Leonardo', 'Oliver', 'Lúcia', 'Ivonete', 'Aymê']
console.log(lista)

// Tamanho da lista
console.log(lista.length)

// Pegando um elemento pela posição.
// OBS: O array começa por 0
console.log(lista[1])

// Buscando a posição pelo elemento
console.log(lista.indexOf('Oliver'))

// Quando não encontrar o elememento da lista retorna -1
console.log(lista.indexOf('Oliver Pontes'))

// Alterar o valor de um elemento em uma posição
lista[1] = 'Oliver Pontes Tavares da Conceição'
console.log(lista)
console.log(lista[1])

// Adicionando elementos ao final da lista
lista.push('Gisele')
console.log(lista)

// Removendo o primeiro item de uma lista
lista.shift()
console.log(lista)

// Removendo o último item da lista
lista.pop()
console.log(lista)

// Devolver lista como string separadas por sinal
dados = lista.join(';')
console.log(dados)