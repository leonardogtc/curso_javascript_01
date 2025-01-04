let pessoa = {
    nome: "Leonardo",
    idade: 53,
    altura: 1.73,
    cargo: "Programador FullStack"
}


// Acessando a propriedade
console.log(pessoa.nome)
console.log(pessoa.cargo)


/**
* Desconstruindo o objeto - Convertendo propriedade em variável.
* -----------------------------------------------------------------
* Nessa mesma desconstrução é possível renomear a propriedade para
* que a variável responda a um nome diferente. No caso de já existir
* uma variável declarada com o mesmo nome da propriedade do objeto
*  */
const { nome: nomePessoa, cargo } = pessoa


// Usando como variável
console.log(nomePessoa)
console.log(cargo)