//Criar um programa que calcula a média
//das turmas de alunos e envia
//mensagem do cálculo da média

//agrupando os objetos em uma unica variavel

const alunosDaTurmaA = [ //nome que damos a essa estrutura de alguns valores agrupados de um array ou vetores
    {//Inicio da Posição 0
        nome: "Mayk",
        nota: 0
    },//final da Posição 0
    {//Inicio da Posição 1
        nome: "Diego",
        nota: 10
    },//final da Posição 1
    {//Inicio da Posição 2
        nome: "Fulano",
        nota: 2
    }//final da Posição 2
]

const alunosDaTurmaB = [ //nome que damos a essa estrutura de alguns valores agrupados de um array ou vetores
    {//Inicio da Posição 0
        nome: "Cleiton",
        nota: 10
    },//final da Posição 0
    {//Inicio da Posição 1
        nome: "Robson",
        nota: 10
    },//final da Posição 1
    {//Inicio da Posição 2
        nome: "Siclano",
        nota: 0
    }//final da Posição 2
]

//Criando uma função que calcula as médias

function calculaMedia(alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)


function enviaMensagem(media,turma) {
    if (media > 5) {
        console.log(`A media da turma ${turma} foi de ${media}.Parabéns`)
    } else {
        console.log(`A media da turma ${turma} é menor que 5`)
    }
}

enviaMensagem(media1, "turmaA")
enviaMensagem(media2, "turmaB")