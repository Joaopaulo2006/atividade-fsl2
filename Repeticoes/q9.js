alert("9) Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em P.G. contendo 10 valores.");


 const qntTermo = 10;

 var A = parseInt(prompt("Digite o valor inicial: "));

 var R = parseInt(prompt("Digite a Razão: "));

 console.log("Sequência em P.G.:");

 for(let i = 0; i < qntTermo; i++) {
     console.log(A)
     A *= R;
 }

 setTimeout(() => {
    location.reload();
}, 5000);