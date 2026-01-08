function funcao1(nome) {  // em (pode vir os inputs de dados)
    console.log(`Hello ${nome}`);  // Por padrão, qualquer função criada retorna undefined se não for especificado o que ela deve retornar
}
const variavel = funcao1("Luiz");
console.log(variavel)
function correta(nome) {
    return `Hello ${nome}`;
}
variavel2 = correta('luiza');
console.log(variavel2);

function soma (x, y) {
    const resultado = x + y  // Tudo dentro da função FICA NA FUNÇÃO
    return resultado
}
console.log(soma(1, 3));

// Arrow function
const raiz = n => n**1/2;
console.log(raiz(4));