const fileInput = document.getElementById("file");

const dropZone = document.getElementById("drop-zone");

//Primero haremos que al momento que le demos un click a cuadro haga la funcion de input file para ello haremos lo siguiente

dropZone.addEventListener("click",(e)=>fileInput.click())

//Vamos hacer que cuando arrastremos un elemento pueda cambiar la animacion y podemas meterlo

//ESTE evento es el de poder colocar el archivo dentro

dropZone.addEventListener("dragover",(e)=>{
    e.preventDefault();
    
    dropZone.classList.add("drop-zone--active");
})

//este evento lo ponemos para que cuando salga del cuadro quitemos la clase y este como por defecto

dropZone.addEventListener("dragleave",(e)=>{
    e.preventDefault();
    dropZone.classList.remove("drop-zone--active");
})

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();

    //lo igualamos a datatransfer ya que drag drop tenemos que hacer por ese metodo
    fileInput.files = e.dataTransfer.files
    /* console.log(fileInput.files); */
    
})

fileInput.addEventListener('change', (e) => {
    /* console.log(fileInput.files); */
    console.log(e.target.files);
})