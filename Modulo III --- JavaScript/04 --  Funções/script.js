const alunos = [
    {
        nome: 'Giustt',
        nota: 5,
        turma: '3J',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '3J',
    },
    {
        nome: 'May',
        nota: 6,
        turma: '3J',
    },

    {
        nome: 'Miguel',
        nota: 3,
        turma: '2C',
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];


    for (let i = 0; arr.length; i++) {
        const { nota, nome } = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));


