const pendingTasks = document.getElementById("pending-tasks");
const finishedTasks = document.getElementById("finished-tasks");
//dataTransfer solo para firefox
//setData: Establece la información que queremos compartir
//getData: Establece la información que queremos obtener

// Agregar el evento de escucha para comenzar usar el drag
pendingTasks.addEventListener("dragstart",(e)=>{

    //primero parametro es el formato que seria texto plano y la otra es donde lo vamos a guardar
    e.dataTransfer.setData("text/plain",e.target.id);
    //Aqui es donde se ve el contenido de lo que estas arrastando
    //console.log(e.dataTransfer.getData("text"));

})
// se dispara este evento cuando comenzamos a arrastrar el elemento
pendingTasks.addEventListener("drag",(e)=>{
    e.target.classList.add("active");
})

//Cuando terminamos de arrastar el contenido

pendingTasks.addEventListener("dragend",(e)=>{
    e.target.classList.remove("active");
})

//Para que funcione hay que usar emeter este evento

finishedTasks.addEventListener("dragover",(e)=>{
    e.preventDefault();

})
//evento cuando soltamos 
finishedTasks.addEventListener("drop",(e)=>{
    e.preventDefault();
    const element= document.getElementById(e.dataTransfer.getData("text"));
    element.classList.remove("active");
    finishedTasks.appendChild(pendingTasks.removeChild(element));
})


//------------------------------------------------Parte mia--------------------------------------

finishedTasks.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData("text/plain",e.target.id); 


    console.log(e.dataTransfer.getData("text"));
})

 finishedTasks.addEventListener("drag",(e)=>{
    e.target.classList.add("active");
})

finishedTasks.addEventListener("dragend",(e)=>{
    e.target.classList.remove("active");
})

pendingTasks.addEventListener("dragover",(e)=>{
    e.preventDefault();
})

pendingTasks.addEventListener("drop",(e)=>{
    e.preventDefault();

    const element = document.getElementById(e.dataTransfer.getData("text"));

    element.classList.remove("active");
    pendingTasks.appendChild(finishedTasks.removeChild(element));
}) 