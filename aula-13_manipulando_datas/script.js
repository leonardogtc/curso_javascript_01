// Criando a data de hoje
var data = new Date()
console.log(data)

// Desmembrando a data (Horas)
console.log(data.getHours())

// Minutos
console.log(data.getMinutes())

// Segundos
console.log(data.getSeconds())

// Milesegundos
console.log(data.getMilliseconds())

// Criar uma data específica
data_especifica = new Date("May 25, 1971")
console.log(data_especifica)

// Converter data em milesegundos
console.log(Date.parse(data_especifica))

// 43988400000
var data_especifica_1 = new Date(43988400000)
console.log(data_especifica_1)

// Data Especifica
// Retorna o dia da data específica
console.log(data_especifica_1.getDate())

/**
 * Os meses correspondem a um array na memória e por conseguinte começa com 0
 * Para se ter o mês correto numericamente tem que se somar 1 ao resultado
 */
console.log(data_especifica_1.getMonth() + 1)

// Retorna o número do dia da semana
console.log(data.getDay())

// Retorna o ano inteiro com 4 digitos
console.log(data.getFullYear())
console.log(data_especifica_1.getFullYear())

// Formatar saida da data
console.log(data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear())

// Alterando o valor da data - acrescentando dias
data.setDate(data.getDate() + 50)
console.log(data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear())

// Somando horas no data_especifica_1 (minha data de nascimento)
console.log(data_especifica)
data_especifica.setHours(data_especifica.getHours() + 3)
console.log(data_especifica)

// Define a data de hoje
data_hoje = new Date()

// dia da semana
var dias = [
    'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'
]
console.log(dias[data_hoje.getDay()])
console.log(data_hoje.getDay())
