//Crie um programa para calcular a aposentadoria de uma pessoa.

//Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)

const nome = "Bruno";
const sexo = "M";
const idade = 60;
const contribuicao = 35;

const calculoContribuicao = idade + contribuicao;

//O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;

//Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;

const homemPodeAposentar = sexo == 'M' && contribuicao >=35 && calculoContribuicao >= 95;

const mulherPodeAposentar = sexo == 'F' && contribuicao >=30 && calculoContribuicao >= 85;

if(homemPodeAposentar || mulherPodeAposentar){
    console.log(`${nome}, você pode se aposentar!`)
}else{
    console.log (`${nome}, você não pode se aposentar!`)
}