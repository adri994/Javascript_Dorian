let num = parseInt(prompt(`Dame un numero`));

let cont = 1;

for(cont ;cont<=num ; cont++){
    ( cont%2==0 ) ? console.log (`${cont}- es par`) : console.log (`${cont}- es impar`);
}