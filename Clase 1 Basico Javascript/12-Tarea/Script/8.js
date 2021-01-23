let dni = prompt(`Dame tu cedula`);

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];



if(dni.length===8 && parseInt(dni)){
    let letra = dni%23;

        console.log(`Tu nuevo DNI es el siguiente: ${dni}${letras[letra]}`);
}
