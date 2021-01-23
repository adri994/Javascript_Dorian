/* 
    API File
        Esta API nos sirve para leer archivos que el usuario cargue en la web. Se pueden cargar archivos desde un input de tipo file o desde el objeto DataTransfer de la API Drag&Drop.
        La interfaz más utilizada para interactuar con ella es FileReader
        https://developer.mozilla.org/es/docs/Web/API/FileReader
 */

const fileInput = document.getElementById('file')
const img = document.getElementById('img')
const images = document.getElementById('images') 
const text = document.getElementById('text');

//Para saber cuando hemos cargado un archivo tenemos que usar el evento change

/* fileInput.addEventListener("change",(e)=>{

    //Para buscar la informacion del archivo se encuentra en target.files y pones el [0] porqeu esto es un array(por si acaso si tienes varios arichivos subidos)
    //console.log(e.target.files[0]);

    const file = e.target.files[0];

    //esto nos permite acceder a cada uno de los metodos para poder leer archivos
    const fileReader = new FileReader();

    //Utilizamos el readAsText porque sabemos que vamos a leer es un texto y lo que hacemos es cargar la informacion
    fileReader.readAsText(file);

    //para saber que ya termino de cargar el documento utilizaremos el LOAD para hacer este proceso

    fileReader.addEventListener("load",(e)=>{
        //aqui nos aparecera el evento y la informacion del docuemtno se encuentra en target.result

        //console.log(e.target.result);

        text.textContent=e.target.result;
    })
}) */

//-----------------------------------------CON UNA IMAGEN----------------------------------------------

/* fileInput.addEventListener("change",(e)=>{

    const file = e.target.files[0];

    const fileReader = new FileReader();

    //Lo usabamos para leer las imagenes
    fileReader.readAsDataURL(file);

    fileReader.addEventListener("load",(e)=>{
        img.setAttribute("src",e.target.result);
    })
}) */

//--------------------------------------CON VARIAS IMAGENES----------------------------------------------

fileInput.addEventListener("change",(e)=>{
    
    //Esto lo hacemos porque no sabemos cuantos nos van aagregar
    const files = e.target.files;
    //tenemos que recorrer con un bucle OJO TENEMOS QUE PONER EL FILEREADER DENTEO DEL BUCLE PORQEU CUANDO SE USA UNA VEZ EL READER (ESTO TAMBIEN PASA CON EL FRAGMENT)
    const fragment = document.createDocumentFragment();

    for(file of files){
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        const img = document.createElement("img");

        fileReader.addEventListener("load",(e)=>{
            img.setAttribute("src",e.target.result);

        })

        fragment.appendChild(img);
    }

    images.appendChild(fragment);



})