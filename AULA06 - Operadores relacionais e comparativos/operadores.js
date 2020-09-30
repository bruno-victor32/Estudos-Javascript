/**=========================================
OPERADORES DE COMPARAÇÃO

>       Maior
<       Menor
>=      Maior igual a
<=      Menor igual a
==      Igual a
===     Igual e do mesmo tipo
!=      Diferente de
!==     Diferente,inclusive do tipo

===========================================*/
/*console.log(5 > 4)     //true
console.log(5 < 4)     //false
console.log(5 >= 4)    //true
console.log(5 <= 4)    //false

console.log(4 == "4")     //true,ele esta olhando só valor mesmo que o primeiro ser do tipo Number e o segundo do tipo string ele só está vendo o valor

console.log(4 === "4")     //false ,agr nesse caso ele que saber si e igual e do mesmo tipo.O primeiro e do tipo Number e o seundo do tipo STRING ou seja são iguais mas não são do mesmo tipo

console.log(4 != "5")    //true 

console.log(4 !== "5")    //true*/

/*=========================================
    OPERADORES LÓGICOS

    && "E" As duas condições devem ser verdadeiras
        para que a condição final seja verdadeira.
    ||  "OU" Uma das condições deve ser verdadeira
        para que a condição final seja verdadeira.
    !   "NÃO" Nega uma condição
===========================================*/
console.log(5 == 5 && 6 == 6) //true
console.log(5 == 5 && 6 !== 6) //false

console.log(5 == 5 || 6 == 6) //true
console.log(5 == 5 || 6 !== 6) //true

console.log(!(5 > 6))//true Aqui eu estou tornando uma coisa falsa em verdadeira com o uso !
console.log(!(5 < 6))//false O que e verdadeiro eu transformo em falso com o !
/*=========================================
    OPERADORES DE ARITMÉTICOS

    *   Multiplicação
    /   Divisão
    %   Resto da Divisão
    +   Adição
    -   Subtração
============================================*/

console.log(2 * 2)      //4
console.log(2 / 2)      //1
console.log(2 % 1.5)    //0.5
console.log(2 + 2)      //4
console.log(2 - 2)      //0



//desafio 1

/*const idade = 17*/

//verificar se a pessoa é maior igual a 18 anos
//se sim,deixar entrar,se não bloquear a entrada

/*if (idade >= 18) {
    console.log(`Você tem ${idade} é e maior de idade.Pode entrar!`)
} else {
    console.log(`(Bloquear a entrada)Você e menor de idade.Volte quando fizer 18 anos`)
}*/

//se a pessoa tiver 17 anos
//avisar para voltar quando fizer 18 anos
/*if (idade === 17) {
    console.log(`Volte quando tiver 18 anos`)
}*/






//dar bonificação de 500 reais
//se vendedor possuir 100 ou menos pontos
//mas deve possuir mais de 50 pontos

