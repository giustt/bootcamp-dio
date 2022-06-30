interface ICachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type cachorroSomenteLeitura = {
    +readonly [K in keyof ICachorro]-?: ICachorro[K];
}


class MeuCachorro implements cachorroSomenteLeitura{
    idade;
    nome;
    parqueFavorito;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Apolo', 14);
