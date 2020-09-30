//Criar um programa que calcula a média
//das notas entre os alunos e envia mensagem do cálculo da média


const aluno01 = "Bruno Victor"//Quando coloco "" ou '' estou criando uma variavel do tipo string que e do tipo texto
const notaAluno01 = 9.8 //variavel do tipo number não precisa "",'',`

const aluno02 = 'Matheus'
const notaAluno02 = 10
//console.log(typeof notaAluno01) //quando eu coloco typeof vai me dizer qual tipo de variavel é


const aluno03 = 'Fulano'
const notaAluno03 = 2

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3//calculo de media

//Si a média for maior que 5,parabenizar a turma
if(media > 5){ //Se
    console.log (` A média foi de de ${media}.Parabéns`) //faz alguma coisa
}else{ //Senão
    console.log('Amédoa é menor que 5') //faz outra coisa
}


