// Hoisting		-> Atribuir o valor a uma variavel antes de declarar ela (somente para var)
// let e const  -> escopo de bloco
// Constantes sao declaradas em SNAKE_UPPER_CASE  Escopo de Bloco

numberOne = 1;
console.log(numberOne + 2)
var numberOne



var firstName = 'Gustavo';
var lastName = 'Perez';

if(firstName === 'Gustavo'){
    let lastName = 'Rodrigues'
    var firstName = 'Giustt';
    lastName = 'Souza';

    console.log(lastName);
}

console.log(firstName, lastName);

