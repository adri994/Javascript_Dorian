/*
    Fetch API
    Proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, como peticiones y respuestas.
    TambiÃ©n provee un mÃ©todo global fetch() que proporciona una forma fÃ¡cil y lÃ³gica de obtener recursos de forma asÃ­ncrona por la red.
    EstÃ¡ basado en promesas, por lo cual tiene un response y un reject internos
        Response tiene varios mÃ©todos
        arrayâ€‹Buffer(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando se necesita manipular el contenido del archivo.
        blob(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando no se necesita manipular el contenido y se va a trabajar con el archivo directamente
        clone(): crea un clon de un objeto de respuesta, idÃ©ntico en todos los sentidos, pero almacenado en una variable diferente.
        formâ€‹Data(): Se utiliza para leer los objetos formData
        json(): Convierte los archivos json en un objeto de JavaScript
        text(): Se utiliza cuando queremos leer un archivo de texto. Siempre se codifica en UTF-8
        //ComprobaciÃ³n de soporte FETCH
            if (window.fetch != undefined) console.log('FETCH OK')
            else console.log('FETCH NOT WORKS!')
*/

const button = document.getElementById('button');

button.addEventListener("click",()=>{
    fetch("https://jsonplaceholder.typicode.com/user")
    //Esta aprte indica si la promesa a funcionado o no (si hay respuesta)
    .then(res=>res.ok ? Promise.resolve(res) : Promise.reject("No se pudo encontrar error"))
    .then(res=>res.json())
    .then(res=>{
        const lista = document.getElementById("list");

        const fragment = document.createDocumentFragment()

        for(item of res){
            const Li = document.createElement("li");
            Li.textContent = `${item.id} - ${item.name}`
            fragment.appendChild(Li)
        }
        lista.appendChild(fragment)
    })
    .catch(error=>{
        console.log(error);
    })

})
