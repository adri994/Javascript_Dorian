const fileInput = document.getElementById("file");

const progress = document.getElementById("progress");

/* file.addEventListener("change",(e)=>{
    const file = e.target.files[0];

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    //este evento nos permite ver el proceso de descar de un archivo mientra se sube

    fileReader.addEventListener("progress",(e)=>{
        // en loaded te indica lo que ha cargado
        //console.log(e.loaded);
        //total es cuanto pesa
        //console.log(e.total);

        
        //para calcular la linea de proceso tenemos que hacer lo siguiente una regla de 3 usando el 100% solo llegara a 98 no llegar al final

        progress.style.width = Number.parseInt(e.loaded *100 / e.total) + "%";


        //en caso de que no llega al 100% tenemos otro evento

        fileReader.addEventListener("loadend",()=>{
            progress.style.width = "100%";
        })
    })
}) */

//---------------------------------------- Segunda forma de hacerlo -------------------------------------

// Esta forma utilizaremos variable globales de css para no integrar el css en linea sino por la variable de css

//para llamar a las variables globales en un documento css tenemos que hacer lo siguiente

const root = document.documentElement;

fileInput.addEventListener("change",(e)=>{

    const file =  e.target.files[0];

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.addEventListener("progress",(e)=>{

        //para señalar la propiedad del documento tenemos que usr el set property que tenemos que poner la variable mas el valor

        root.style.setProperty("--bar-width",Number.parseInt(e.loaded * 100 / e.total)+"%")
    })
})