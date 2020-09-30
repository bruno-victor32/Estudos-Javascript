//Criar um programa que calcula a média
//das notas entre os alunos e envia
//mensagem do cálculo da média

//Percebemos que um objeto e uma coleção de propriedades que recebem valores ou funcionalidades
const aluno01 = {//iniciando o objeto
    nome: "Mayk",
    nota :9.8
}//finalizando um objeto

const aluno02 = {//iniciando o objeto
    nome: "Diego",
    nota :10
}//finalizando um objeto

const aluno03 = {//iniciando o objeto
    nome: "Fulano",
    nota :2
}//finalizando um objeto

console.log(aluno01)
//console e um objeto pois estamos colocando um ponto e tendo acesso a diversas funcionalidades e propriedades desse console.Sempre que falamos de funcionalidades em um objeto chamamos de metodo

const media = ( aluno01.nota + aluno02.nota + aluno03.nota) / 3 //Sempre que eu colocar um ponto eem um objeto eu tenho acesso as propriedades desse objeto.nesse caso vai ser nome e nota

//Se a média for maior que 5,parabenize a turma

if( media>5){
    console.log("A media foi de ${media}.Parabéns"
}else{
    console.log("A media é menor que 5")
}