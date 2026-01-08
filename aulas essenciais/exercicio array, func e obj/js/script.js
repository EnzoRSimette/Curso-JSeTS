const pessoas = []; // Nosso array
function nome() {
    const form = document.querySelector(".form"); // SEMPRE USA ISSO, É IGUAL CSS PARA CLASSE, PARA ID É #***
    const resultado = document.querySelector(".resultado");
    // form.onsubmit = function (event) {
    //     event.preventDefault();
    //     alert(1);
    // };   Jeito antigo
    // Jeito moderno
    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const altura = form.querySelector(".altura");
        const peso = form.querySelector(".peso");
        pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        };
        pessoas.push(pessoa);
        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value}<br>${sobrenome.value}<br>${altura.value}<br>${peso.value}</p>`;
    }
    form.addEventListener("submit", recebeEventoForm);
}
nome();
