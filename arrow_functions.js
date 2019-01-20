// notação tradicional
var dobroDoValor = function(numero) {
    return numero * 2;
}

console.log(dobroDoValor(7));

// notação arrow function
var triploDoValor = (numero) => {
    return numero * 3;
}

console.log(triploDoValor(5));

// ainda mais clean, unico parametro pode ser sem parenteses
var somaDoValor = numero => {
    return numero + numero;
}

console.log(somaDoValor(5));

// ainda mais clean, unico parametro pode ser sem parenteses e retorno direto
var proximoValor = numero => numero + 1;

console.log(proximoValor(5));
