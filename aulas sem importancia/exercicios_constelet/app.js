const nome = "João Saliba"
const sobrenome = "Miranda"
const idade = 30
const peso = 84
const altura = 1.8
let imc = peso/altura**2
let anonasc = 2026-idade
console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "kg", "\ntem", altura, "de altura e seu IMC é de", imc) // Versão ruim
console.log("-----------------------------------------------------------------------------------------------------------------")
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg\ntem ${altura} de altura e seu IMC é de ${imc}`) // Versão daora