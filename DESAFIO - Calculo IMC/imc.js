//CÁLCULO DE IMC
//Criando um programa para calcular o IMC e nível de obesidade de uma pessoa

const nome = "Carlos";
const peso = 110;
const altura = 1.88;

const imc = peso / (altura * altura); // a constante imc armazena o valor do calculo do índice de massa corporal

if(imc >= 30){ //Se o imc for maior ou igual a 30
    console.log(`${nome} você está acima do peso`); //mostre na tela
    }else{ //Senão
        console.log(`${nome} você não está acima do peso`); //imprima na tela
    }
