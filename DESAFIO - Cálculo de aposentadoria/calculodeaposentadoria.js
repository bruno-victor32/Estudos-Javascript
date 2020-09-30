/*Cálculo de aposentadoria*/

const nome ="Bruno";
const sexo = "M";
const idade = 20;
const contribuicao = 35;

const calculocontribuicao = idade + contribuicao;

const homemaposentar = sexo =="M" && contribuicao >=35 && calculocontribuicao >= 95;

const mulheraposentar = sexo == "F" && contribuicao >=30 && calculocontribuicao >=85;

if( homemaposentar || mulheraposentar){
    console.log(`${nome},você pode se aposentar!`)
}else{
    console.log(`${nome},você ainda não pode se aposentar`)
}