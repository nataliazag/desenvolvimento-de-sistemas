let alturas = [160, 172, 198, 180, 165]; /* let é pra criar uma variave, elas podem sempre mudar, são mudaveis*/

let maiorValor = alturas[0];

for (let i = 1; i < alturas.length; i++ ) { /*length percorre a lista */ 
    if (alturas[i] > maiorValor)    { 
        maiorValor = alturas[i];
    } 
} /* ++ serve pra icrementar, ele soma uma variavel*/

console.log("a maior altura é: ", maiorValor);
