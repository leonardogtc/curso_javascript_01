var nome = "sujeito"

nome = "sujeito"

if(nome === "sujeito") {
    /**
     * O let limita a variável ao escopo do bloco
     * O var perpassa o escopo de bloco tornando insegura
     * determinadas informações.
     * */ 
    var curso = "Programador Frontend"
    console.log(curso)
}

console.log(curso)

// Torna possível alterar o valor da variável se estiver fora do escopo
curso = "Java"

console.log(curso)