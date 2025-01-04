// includes, startsWith, endsWith

let nomes = ["Matheus", "Lucas", "Jose"];

// Verifica se o valor existe no array nomes (retorna boolean)
console.log(nomes.includes('Leonardo'))

if(nomes.includes("Matheus")) {
  console.log("Nome está na listas!")
} else {
  console.log("Nome não está na lista")
}

// startsWith
let nome = "Matheus";
console.log(nome.startsWith("Mat"))

// endsWith
console.log(nome.endsWith("eus"))