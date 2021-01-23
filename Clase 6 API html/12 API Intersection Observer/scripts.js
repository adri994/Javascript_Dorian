const boxes = document.querySelectorAll('.box');

const callback = (entries) =>{
    //utilizaremos mucho el valor que nos aparecera en consola que se llama isIntersecting que es false y true y dependera si esta en el rango de vision o no para saber utilizaremos un forEach
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            console.log(entry.target.id,'esta en rango');
        }
    })
    
}

//Primero creacion el Intersection observer esto recibe 2 parametro el primero es obligatorio
//el primero paremetro es la funcion que va hacer cuando entra en el rango de mision
//el segundo es un obejto que tiene 3 propiedades

const options ={
    //root: es el elemento padre que estaremos vigilando
   // root
   //rootMargin: funcion como el de css y tiene un margen
   //rootMargin:'50px'
   //threshold: permite valores en 0 y 1 y quiere decir que si se ve 25% (0.25) de la caja saltara la opcion
   threshold:0.25
}

const observer = new IntersectionObserver(callback,options);

boxes.forEach(element=>observer.observe(element))



