let numeros = [1 , 2 , 3 , 4 , 5];

let par =[];

let impar=[];

let multi;

for(numero of numeros){
    
    nume = Math.round(Math.random() * (10 -1)+1);
    multi = numero * nume;

    if(multi%2==0){
        par.push(multi);
        console.log(`${nume} X ${numero}:${multi}`);
    }else{
        impar.push(multi);
        console.log(`${nume} X ${numero}:${multi}`);
    }


}


console.log(par)
console.log(impar)