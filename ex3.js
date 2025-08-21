let notas = [7.5, 8.0, 6.5, 9.0, 7.0];/* let é pra criar uma variave, elas podem sempre mudar, são mudaveis*/

let somaNotas = 0;
let media = 0;

for (let i = 1; i < notas.length; i++ ) { /*length percorre a lista */ 
    somaNotas = somaNotas + notas[i]; 
    media = somaNotas / 5;
} /* ++ serve pra icrementar, ele soma uma variavel*/

console.log("a soma é: ", media);
