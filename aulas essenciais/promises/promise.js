function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperai(msg, tempo) {
    return new Promise((resolve, reject) => {
        //todo: Pode
        setTimeout(() => {
            resolve(msg); // Quando timeout acontece, ele manda a mensagem
        }, tempo);
    });
}

esperai('Frase1', rand(1, 3))
.then((response) => // then vai ser chamado SEMPRE que a promise RETORNAR
{console.log(response)}) //! Response é o que foi retornado ao executar a ação/função MUITO IMPORTANTE
.catch((e) => {console.log('Erro:', e)}) //* Catch serve para lidar com os possíveis erros que podem acontecer
//? Importante: Catch representa o reject lá de cima da promisse


