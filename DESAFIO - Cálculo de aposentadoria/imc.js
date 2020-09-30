/*Cálculo de IMC*/
const nome = "Bruno";
const peso = 114;
const altura = 1.88;

const imc = peso / (altura * altura );

if(imc >= 30){
    console.log(`${nome} você está acima do peso`)
}if(imc < 29.9){
    console.log(`${nome} você não está acima do peso`)
}