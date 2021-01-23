//Especificación oficial: https://developer.mozilla.org/es/docs/IndexedDB-840092-dup


//Esto lo tenemos que hace si pones como nombre de la const indexedDB
const indexedDB = window.indexedDB;

const form = document.getElementById('form');

const tasks = document.getElementById('tasks');

//sino lo podemos poner asi

//const db = indexedDB;

if(indexedDB && form){
    let db;

    //Metodo que nos permite acceder a la base de datos y recibe 2 parametro: 1 el nombre de la base de datos que queremos acceder y el 2 la version de la base de datos 
    const request = indexedDB.open('taskList',1);

    //para indicar que todo ha ido bien
    request.onsuccess=()=>{
        db = request.result;
        console.log('Open',db)

        //muy bien para que nosostros podemos llmar a la base de datos para leerla lo tenemos que poner aqui
        readData()
    }
    //Para verificar si necesita actualizacion
    request.onupgradeneeded=()=>{
        db = request.result;
        console.log('Create',db);
        //lo que es la elimiacion, lectura y creacion de obejto lo haremos aqui

        //dentro de parentesis se creara el obejto que estara dentro y almacenara los datos

        //el segundo parametro es para ponerle un key hay 4, pero utilizaremos el mas sencillo que es autoIncrement y el keypath lo utilizaremos para indicarle que unos de los valores que se le ponen en el formulario es la key
        const objectStore = db.createObjectStore('tasks',{
            /* autoIncrement:true */
            keyPath:'taskTitle'
        });
    }
    //para verificar si se produjo un error
    request.onerror=(error)=>{
        console.log('Error',error)
    }


    //Aqui pondemos la escucha al formulario

    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        //donde estara la informacion
        const data = {
            taskTitle:e.target.task.value,
            taskPriority:e.target.priority.value
        }

        addDAta(data);
    })

        //Para agregar nuestra data en la base de datos

        const addDAta = (data)=>{
            //primero tenemso que hacer una transaccion, permite 2 parametro el primero el alcmacen de base de datos y la otra es el modo de la transaccion y son 2 readwrite y onlyread

            const transaction = db.transaction(['tasks'],'readwrite');

            //Despues necesitamos es abrir el almacen de datos aqui hace la transaction de los datos realemnte

            const objectStore = transaction.objectStore('tasks');

            //Y por ultimo añadir los datos

            const request = objectStore.add(data);
            readData();
        }

        const readData = ()=>{
            //primero tenemso que hacer una transaccion, permite 2 parametro el primero el alcmacen de base de datos y la otra es el modo de la transaccion y son 2 readwrite y readonly en este caso ya que queremos verlo sera readonLy es su valor por defecto

            const transaction = db.transaction(['tasks']);

            //Despues necesitamos es abrir el almacen de datos aqui hace la transaction de los datos realemnte

            const objectStore = transaction.objectStore('tasks');

            //Y por ultimo elerr la infomracion

            const request = objectStore.openCursor();

            //Despues de abrir el curso tenemos que ver si todo a ido bien para ello haemos lo siguiente

            const fragment = document.createDocumentFragment();

            //Tenemos que crear el fragment aqui y no dentro de la onsuccess porque el continue o uq ehace es un bucle y se va a ejecutar el Onsuccess y va a aparecer el frament vacio

            request.onsuccess = (e) =>{
                const cursor = e.target.result;
                //ponemos este if porque en siempre va entregar un valor y cuando ya alla recorreido y no vea mas valor dara null
                if(cursor){
                    //entrega un valor
                   // console.log(cursor.value);
                   const taskTitle =document.createElement('P');

                   taskTitle.textContent = cursor.value.taskTitle

                   fragment.appendChild(taskTitle);
                   
                   const taskPriority =document.createElement('P');

                   taskPriority.textContent = cursor.value.taskPriority;

                   fragment.appendChild(taskPriority);
                    //esto permite que siga mostrando y volvera preguntar al if
                    cursor.continue();  
                }else{
                    tasks.textContent ='';
                    tasks.appendChild(fragment);

                    //para que cuando creemos una nueva aparezca automatica tenemos que llamar la funcion en la linea 77
                }

                //ver linea 27
            }
        }

}