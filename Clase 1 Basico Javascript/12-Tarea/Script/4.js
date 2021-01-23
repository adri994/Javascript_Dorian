let numero = parseInt(prompt(`Dame un numero`));

let contador = 3;

for(contador ; contador < numero ; contador+=2){

    if(numero%contador==0){
        console.log(`${numero} no es un numero primo`);
        break;
    }
}

if(numero === contador){
    console.log(`${numero} es un numero primo`);
}