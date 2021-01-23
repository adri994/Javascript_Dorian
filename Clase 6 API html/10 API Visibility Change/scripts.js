//Esto que para pausar el video cuando cambie de pagina y cuando volvamos se reproduce

const video = document.getElementById('video');

/* window.addEventListener('visibilitychange',(e)=>{
    
    if(document.visibilityState==='visible'){
        console.log('PLAY');
        video.play();
    }else if(document.visibilityState==='hidden'){
        console.log('PAUSE');
        video.pause();
    }

 


}) */

   //Tambien podemos hacer en un ternario

   window.addEventListener('visibilitychange',(e)=> document.visibilityState==='visible' ? video.play() : video.pause())