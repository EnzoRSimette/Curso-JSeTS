//Primitivos (imutáveis): String, number, boolean, undefined, null (bigint, symbol) - VALOR
let nome = "luiz";
nome[0] = "R"; // Não alterou o l para R
console.log(nome[0], nome);
console.log(nome);

// Referência (Mutável): Arrays, objetos e functions
let a = [1, 2, 3, 4, 5];
let b = a; // Se você alterar a ou b você altera todos que estão copiando o valor, exemplo: se a = 1 e b = 1 (cópia), se b agora for = 2, a = 2
console.log(a, b); // Apontam para o mesmo lugar na memória, ou seja, essa memória pode ser reescrita por outra variável
a.push(4);
// Se eu fizer isso aq
let d = [...a]; // D copia o valor para outro lugar na memória e fica independente
