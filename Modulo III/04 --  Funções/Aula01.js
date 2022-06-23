// Funçao AutoInvocavel (IIFE) 

const soma3 =(
function soma (a, b){
    return a + b;
    }
)(1, 2);

console.log(soma3);

// Callbacks

const calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const soma = function(num1, num2){
    return num1 + num2;
}

const sub = function(num1, num2){
    return num1 - num2;
}

const resultadoSoma = calc(soma, 1, 2);
const resultadoSub = calc(sub, 1, 2);

console.log(resultadoSub);
console.log(resultadoSoma);
