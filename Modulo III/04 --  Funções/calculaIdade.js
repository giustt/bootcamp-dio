// Atividade This
function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} tera ${this.idade + anos} anos de idade`;
}
const pessoa1 = {
    nome: "Maria",
    idade: 30
};
const pessoa2 = {
    nome: "Carla",
    idade: 26
};
const animal = {
    nome: "Fiona",
    idade: 5,
    raca: "pug"
};
console.log(calculaIdade.call(animal, 7));
console.log(calculaIdade.apply(animal, [7]));
