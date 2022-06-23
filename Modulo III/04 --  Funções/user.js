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

