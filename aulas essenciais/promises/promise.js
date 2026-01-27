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

//TODO: $$$$$$$$$$$$$$$$$
//TODO: $ ASYNC E AWAIT $
//TODO: $$$$$$$$$$$$$$$$$


//! ===================
//! = █▀▄ █ █ █ █▄ ▄█ =
//! = █▀▄ ▀▄█ █ █ ▀ █ =
//! ===================

esperai('fase1', rand(0, 3))
.then(valor => {console.log(valor)
    return esperai('fase2', rand(0, 3));
})
.then(fase => {console.log(fase); return esperai('fase3', rand(0, 3))})
.then(fase => console.log(fase))
.catch(e => console.log(e))

//* =================
//* = ██▄ ▄▀▄ █▄ ▄█ =
//* = █▄█ ▀▄▀ █ ▀ █ =
//* =================

async function executa () { // para usar await, precisa colocar async
    try {
    let fase1 = await esperai('Fase 1', rand(1, 3)); //* Cria uma variável fase1 que guarda o valor retornado por esperai
    console.log(fase1);
    //? Await significa esperar até o anterior terminar, nesse caso, ele não vai esperar pois é a primeira ocorrência
    let fase2 = await esperai('Fase 2', rand(1, 3));
    console.log(fase2);
    let fase3 = await esperai('fase 3', rand(1, 3));
    console.log(fase3);
    console.log("Terminamos na fase:", fase3); //* Para lidar com erros, usamos blocos try catch
    } catch (e) {console.log(e)};
    //! Ele vai executar até encontrar o ERRO!
}
