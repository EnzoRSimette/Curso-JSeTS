const pessoa1 = { // Objetos são descritos por {} ao contrário de arrays que são por []
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
    // Da para fazer funções aqui dentro
    fala () {
        console.log(`${this.nome}`);
    }
};
pessoa1.fala();
console.log(pessoa1.nome);

// Podemos fazer uma função que crie um objeto
function criapessoa(nome, sobrenome, idade) {
    return { // chama essa função de factory
        nome,
        sobrenome,
        idade
    };
}
const pessoa2 = criapessoa('luiz', 'otávio', 25);
console.log(pessoa2)

// ----------------------------------------------------------- // ------------------------------------------------------------

// ==================
// = OBJETO LITERAL =
// ==================

const pessoa_obj_literal = {
    nome: 'LUIZ',
    sobrenome: 'OTÁVIO'
};

//todo $$$$$$$$$$$$$$$$$$$$$$$$$$
//todo $ ESTRUTURA DE DADOS MAP $
//todo $$$$$$$$$$$$$$$$$$$$$$$$$$

const pessoas = [
    {
        id: 3,
        nome: 'Luiz'
    },
    {
        id: 2,
        nome: 'Maria'
    },
    {
        id:1,
        nome: 'Luiz'
    }
]

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa }); // MANTEM A ORDEM IGUAL
}
