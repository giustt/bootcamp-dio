
// Valores Padroes
function exponencial(array, num = 1){
    const result = [];

    for(let i = 0; i < array.length; i++){
        result.push(array[i] ** num);
    }

    return result
}

exponencial([1, 2, 3, 4])
exponencial([1, 2, 3, 4], 4)

// Arguments  -- Um array com todos os parametros passados quando a funcao foi invocada

function findMax(){
    let max = -Infinity;

    for(let i = 0; arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }

    return max;
}

findMax(1, 2, 3, 6, 90, 1) // 90

// Arrays 
// Spread lida separadamente com os elementos 
function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));

// Rest combina os argumentos em um array
function confereTamanho(...args) {
    console.log(args.length);
}
confereTamanho(); // 0

confereTamanho(1, 2); // 2

confereTamanho(3, 4, 5); // 3

//Objetos --  Entre {} podemos filtrar apenas os dados que nos interessam
const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'Jhon',
        lastName: 'Doe'
    }
};
function userId({ id }) {
    return id;
}
function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}


console.log(userId(user)); //42
console.log(getFullName(user)); //Jhon Doe
