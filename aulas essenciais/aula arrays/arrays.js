const alunos = ['luiz', 'maria', 'joão', 1, true, false, null, undefined]; // Tenta deixar só com um tipo de dado
const pessoas = ['luiz', 'maria', 'joão'];
//                  0        1        2 -> indices
//"luiz"
//0123 -> indices
pessoas[0] = "tião"; // Troca o elemento por outro
console.log(pessoas.length); // Mostra quantos elementos tem
alunos.push('Otávio'); // Vai adicionar o elemento no final
alunos.unshift('Luiza'); // Vai adicionar o elemento no começo
const removido = alunos.pop(); // Deleta o ultimo elemento (Podemos atribuir o removido a uma variável)
alunos.shift(); // Deleta o primeiro elemento
console.log(pessoas);
pessoas.slice[0, 3]; // Sempre i, j-1 vai ser considerado
                     // Se j for negativo ele vai pegar de trás para frente

// ==========
// = SPLICE =
// ==========

pessoas.splice(4, 1, 'Junto'); //* Remove a partir do índice 4, 1 elemento, e adiciona 'JUNTO'

//! =======
//! = MAP =
//! =======

const numeros = [1,2,3,4,5,6,7,8,9];
const numeros_em_dobro = numeros.map(function (valor) {return valor*2;})
console.log(numeros_em_dobro);