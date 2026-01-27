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