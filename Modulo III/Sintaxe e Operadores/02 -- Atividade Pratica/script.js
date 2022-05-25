function recebeNumeros(n1, n2){
    if(!n1 || !n2) return 'Defina Dois Numeros Maiores que 0!';
    const primeiraFrase = criaPrimeiraFrase(n1, n2);
    const segundaFrase = criaSegundaFrase(n1, n2);

    return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(n1, n2){
    let numIguais = '';
    if(n1 !== n2){
        numIguais = 'não';
    }

    return `Os Numeros ${n1} e ${n2} ${numIguais} são iguais.`
};

function criaSegundaFrase(n1, n2){
    const soma = n1 + n2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        resultado10 = 'maior';
    }

    if(compara20){
        resultado20 = 'maior';
    }

    return `E Sua Soma é Igual a  ${soma}. Que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(recebeNumeros(15, 10))