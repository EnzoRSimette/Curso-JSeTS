// 705.484.450-52
// sequencia = [10, 9, 8, 7, 6, 5, 4, 3, 2];
// O valor total da soma
// 11 - (total%11) = primeiro_digito depois da -
// if primeiro_digito > 9 {
//  primeiro_digito = 0
// }
// Para o segundo dígito, você concatena ele aos outros e faz a mesma conta
// sequencia2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
// Se no final, os dois dígitos forem iguais ao do cpf original, ele é válido

//* ========================
//* = TRANSFORMAR EM ARRAY =
//* ========================

let cpf_input = "131.329.779-85";
cpf_input = cpf_input.replaceAll("-", ".");
cpf_input = cpf_input.replaceAll(".", "");
cpf_input = cpf_input.split("");
cpf_input = cpf_input.map((number) => parseInt(number));
let ultimos_2 = cpf_input.splice(9, 2);

//? ====================
//? = CALCULAR DIGITOS =
//? ====================

function e_valido(cpf_array) {
    let resultado1 = [];
    let resultado2 = [];

    contador = 10;
    cpf_array.map((element) => {
        resultado1.push(element * contador);
        contador--;
    });

    let valor_total = resultado1.reduce((acumulador, valor_atual) => {
        acumulador += valor_atual;
        return acumulador;
    }, 0);

    let resultado_num1 = 11 - (valor_total % 11);

    if (resultado_num1 <= 10) {
        cpf_array.push(resultado_num1);
    } else cpf_array.push(0);

    contador2 = 11;
    cpf_array.map((element) => {
        resultado2.push(element * contador2);
        contador2--;
    });

    valor_total2 = resultado2.reduce((acumulador2, valoratual) => {
        acumulador2 += valoratual;
        return acumulador2;
    }, 0);

    if (11 - (valor_total2 % 11) <= 10) {
        resultado_num2 = 11 - (valor_total2 % 11);
    } else resultado_num2 = 0;


    if (resultado_num1 == ultimos_2[0] && resultado_num2 == ultimos_2[1]) {
        console.log("É valido");
    } else console.log("Não é válido");
}

e_valido(cpf_input);
