//Funcao de multiplicação em TypeScript (dois numeros recebendo a multiplicação deles)
function multiplicacao (altura: number, base: number): number {
    try {
        return altura * base;
    }
    catch (error){
        console.error('Error na multiplicacao', error)
        return 0;
    }
}
console.log(multiplicacao(2, 8));