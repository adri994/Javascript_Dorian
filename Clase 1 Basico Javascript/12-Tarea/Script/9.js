let vocales = 0;

let consonantes = 0;

let nombre = prompt("dime tu nombre");

for(letra of nombre){
    if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') vocales++

    else{
        consonantes++;
    } 
}

console.log(`Las vocales son:${vocales} y consonantes ${consonantes}`);

