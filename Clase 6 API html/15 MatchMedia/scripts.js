
/*
    https://developer.mozilla.org/es/docs/Web/API/Window/matchMedia
    mql = window.matchMedia(mediaQueryString)
    mql viene de media query list, que es el objeto que se crea con el método matchMedia()
    mediaQueryString es cualquier media query válida en CSS
*/
//los paramtro es una media query de ccs normal y tiene que estar entre parentesis
/* const mql = window.matchMedia('(min-width:400px)');

console.log(mql)

const applyMatchMedia = mql =>{
    mql.matches ?
        document.body.style.backgroundColor='red'
        :
        document.body.style.backgroundColor='green'
} 
//Evento cuando se encoja la pantalla
window.addEventListener('resize',(e)=>applyMatchMedia(mql))

//cuando recarge toda la informacion
window.addEventListener('load',(e)=>applyMatchMedia(mql)) */

const title = document.getElementById('title')

const mql = matchMedia('(min-width:400px) and (orientation: landscape)')

const applyMatchMedia = mql => {
    mql.matches ?
        //NO HACER ESTO NUNCA
        document.body.style.backgroundColor = 'red'
        //ESTO SI
        // title.classList.add('clase que sea')
        :
        //NO HACER ESTO NUNCA
        document.body.style.backgroundColor = 'royalblue'
}

addEventListener('resize', () => applyMatchMedia(mql))
addEventListener('DOMContentLoaded', () => applyMatchMedia(mql))



