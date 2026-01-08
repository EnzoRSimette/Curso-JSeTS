let a = 'A'
let b = 'B'  // Precisa ser B C A o output
let c = 'C'

console.log(a, b, c);

[a,b,c] = [b,c,a];

console.log(a,b,c)