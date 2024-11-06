//Funcão de saudação em TypeScript (Recebe um nome e retorna a concatenação (Olá + nome)
function saudacao (nome: string): string {
    try {
        return `Olá ${nome}`;
    }
    catch (error) {
        console.error('Error no nome', error);
        return '';
    }
}

console.log(saudacao('Caio'));