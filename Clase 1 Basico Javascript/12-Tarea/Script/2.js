let r,b,h;

let opcion =prompt(`1- Rectangulo\n
                    2- Triangulo\n
                    3- Circulo`); 

switch (opcion) {
    case 1:

        b=parseInt(prompt(`Dime la base`));
        h=parseInt(prompt(`Dime la altura`));

        alert(`El area del rectangulo ${(b*h)/2}`);
        break;
    case 2:

        b=parseInt(prompt(`Dime la base`));
        h=parseInt(prompt(`Dime la altura`));

        alert(`El area del rectangulo ${b*h}`);

        break;
    case 3:
        
        radius=prompt('Introduce el radio del círculo')
        console.log(`El área del círculo es ${Math.PI * Math.pow(radius,2)}`);
        
        break;

    default:
        break;
}