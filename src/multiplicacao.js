"use strict";
//Funcao de multiplicação em TypeScript (dois numeros recebendo a multiplicação deles)
function multiplicacao(altura, base) {
    try {
        return altura * base;
    }
    catch (error) {
        console.error('Error na multiplicacao', error);
        return 0;
    }
}
console.log(multiplicacao(2, 8));
