var nome = "sujeito"

nome = "sujeito"

if(nome === "sujeito") {
    /**
     * O let limita a variável ao escopo do bloco
     * O var perpassa o escopo de bloco tornando insegura
     * determinadas informações.
     * */ 
    let curso = "Programador Frontend"
    console.log(curso)
}

// Não é possível ver ou manipular a variável fora do escopo
console.log(curso)

