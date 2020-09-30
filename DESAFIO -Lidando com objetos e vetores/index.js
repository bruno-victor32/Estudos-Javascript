//programa que armazena dados da empresa Rocketseat
const usuario = {
nome: "Bruno",
    empresa: {
    Nome: "Rocketseat",
        Cor: "Roxo",
            Foco: "Programação",
                endereco: {
        Rua: "Rua Guilherme Gembala",
            Número: 260
    }
}
}

console.log(`A empresa ${usuario.empresa.Nome} está localizada em ${usuario.empresa.endereco.Rua}, ${usuario.empresa.endereco.Número}`)