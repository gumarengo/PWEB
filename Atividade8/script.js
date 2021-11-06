const pessoas = 3;
var idade = 0;
var somaIdade = 0;
var sexo = 0;
var opiniao = 0;
var mediaIdade = 0;
var maisVelha = 0;
var maisNova = 100;
var pessimo = 0;
var otimoBom = 0;
var feminino = 0;
var masculino = 0;
var porcentagemOtimoBom = 0;

for(let i = 0; i < pessoas; i++){

    let idade = parseInt(prompt("Digite sua idade:"));
    somaIdade += idade;
    maisVelha = idade;

    if (idade > maisVelha){
        maisVelha = idade;
    }
    if (idade < maisNova){
        maisNova = idade;
    }

    let opiniao = parseInt(prompt("Digite sua opinião: \n" +
        "4 - Ótimo\n "+
        "3 - Bom\n "+
        "2 - Regular\n "+
        "1 - Péssimo "
    ));

    if (opiniao === 1){
        pessimo += 1;
    }

    if (opiniao === 4 || opiniao === 3){
        otimoBom += 1;
    }

    let sexo = parseInt(prompt("Digite seu sexo: \n" +
        "1 - Feminino \n" +
        "2 - Masculino"
    ));

    if (sexo === 1){
        feminino += 1;
    }
    else{
        masculino += 1;
    }
    
}
mediaIdade = somaIdade/pessoas;
porcentagemOtimoBom = (otimoBom/pessoas)*100;


alert(
    `Média de idade: ${mediaIdade}\n` +
    `Idade da pessoa mais velha: ${maisVelha}\n` +
    `Idade da pessoa mais nova: ${maisNova}\n` +
    `Pessoas que responderam péssimo: ${pessimo}\n` +
    `Porcentagem ótimo e bom: ${porcentagemOtimoBom.toFixed(2)}%\n` +
    `Número de mulheres: ${feminino}\n` +
    `Número de homens: ${masculino}\n`
);