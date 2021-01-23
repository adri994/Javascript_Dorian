/* 
    https://developer.mozilla.org/es/docs/Web/API/NavigatorGeolocation/geolocation
*/

/* 
const button = document.getElementById('button')

button.addEventListener('click', () => {
    //Guardamos la geolocation

    const geolocation = navigator.geolocation;

    //esto tiene 3 metodos solo veremos uno para mayor informacion arriba esta la web

    //este metodo recibe 3 parametro el primero es obligatorio
    //el primero la funcion que obtiene la opsicion
    //el segundo un error
    //el tercerto opciones que podemos poner

    geolocation.getCurrentPosition(getPosition,error,options);



})
const options = {
    //esto permite si hay mas opciones se geolocalizacion por ejemplo gps etc lo va a utilizar
    enableHightAccuracy: true,
    //determina el tiempo para pedir la informacion
    timeout: 10000,
    //El tiempo que le permitimos que este en cache
    maximunAge: 0
}
//se le pasa un parametro
const getPosition = (position) =>{
    console.log(position);
}

const error = (error) =>{
    console.log(error);
} */

  
/* 
    https://developer.mozilla.org/es/docs/Web/API/NavigatorGeolocation/geolocation
*/


const button = document.getElementById('button')

button.addEventListener('click', () => {
    const geolocation = navigator.geolocation

    geolocation.getCurrentPosition(getPosition, error, options)
})

const options = {
    enableHightAccuracy: true,
    timeout: 5000,
    maximunAge: 0
}

const getPosition = (position) => {
    console.log(position)

}

const error = (error) => console.log(error)



