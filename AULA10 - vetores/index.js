//Criar um programa que calcula a média
//das notas entre os alunos e envia
//mensagem do cálculo da média

//agrupando os objetos em uma unica variavel

const alunos = [ //nome que damos a essa estrutura de alguns valores agrupados de um array ou vetores
    {//Inicio da Posição 0
        nome: "Mayk",
        nota: 9.8
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

const nomesDeAlunos = ["Mayk" , "Diego" , "Fulano"]

console.log(nomesDeAlunos)

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3 //Para acessar os valores eu coloco a posição que eu quero,só que essa posição ela e contada a partir do 0
//Se a média for maior que 5,parabenize a turma

if (media > 5) {
    console.log("A media foi de ${media}.Parabéns")
}else {
    console.log("A media é menor que 5")
}