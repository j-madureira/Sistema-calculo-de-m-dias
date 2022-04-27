var nomes = ["Henrique Carvalho","José Mafalda"];
var nota1 = [4,7];
var nota2 = [5,9];

function media(n1,n2){
    return (n1 + n2)/2
}

for(var index in nomes){
    console.log(`${nomes[index]} primeira nota: ${nota1[index]} segunda nota: ${nota2[index]} média final: ${media(nota1[index], nota2[index])}`);

}