const button = document.getElementById("button");

button.addEventListener("click",()=>{
    let xhr;

    //Esto indica si soporta sino agarra el otro

    //si quiere preguntar directamente por console "XMLHttpRequest" in window

    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsft.XMLHTTP");
    }

    //Despues tiene un metodo llamado open y recibe 2 parametro primero la manera ("get,post etc") y la segunda a la pi o el servidor

    xhr.open("GET","https://jsonplaceholder.typicode.com/users");

/*     DEspues de llegar la informacion al objjeto tenemos que hacer lo siguiente:
   Usamos addEventListener("load") para recargar y esa informacion la guardamos en una variable */

    xhr.addEventListener("load",(data)=>{
        //Y buscamos la informacion del target response donde nos mandara la informacion OJO te lo va entregar string hya que ponerlo como un obejto y para ellos utilizaremos JSON.parse
    
        if(data.target.status==200 && data.target.readyState==4){

            const dataJSON = JSON.parse(data.target.response);

            const list = document.getElementById("list");

            const contenedorList = document.createDocumentFragment();
    
            for(user of dataJSON){
                const listItem = document.createElement("li");
                listItem.textContent = `${user.id} - ${user.name}`;
                contenedorList.appendChild(listItem);
            }
            list.appendChild(contenedorList);
        }else{
            alert("error");
        }

    });



    xhr.send()

})