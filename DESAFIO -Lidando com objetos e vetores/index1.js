//Programa com um objeto para armazenar dados de um programador

const programador = {
    Nome: "Bruno",
    Idade: 24,
tecnologias: [
        {
            nome: "C++",
            especialidade: "Desktop",   
        },
        {
            nome: "Python",
            especialidade: "Data Science",   
        },
        {
            nome: "JavaScript",
            especialidade: "Web/Mobile",   
        },
    ]
};

console.log( `O usuário ${programador.Nome} tem ${programador.Idade}anos e usa a tecnologia ${programador.tecnologias [0].nome} com especialidade em ${programador.tecnologias[0].nome}`)