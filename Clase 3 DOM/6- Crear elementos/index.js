//DOM - Crear e insertar elementos

/* 
Crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = código HTML
Añadir un elemento al DOM: parent.appendChild(element)
Fragmentos de código: document.createDocumentFragment()
*/

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const title = document.getElementById("title");
const dayList = document.getElementById("daysList");
const daySelect = document.getElementById("daysSelect");

/* Crear elementos */

/* const itemList = document.createElement("LI");

itemList.textContent="Lunes";

dayList.appendChild(itemList); */


/* UTILIZAR INNERHTML */
/* title.innerHTML = `DOM - <span>Crear e insertar elementos I</span>` */

/* Crear un items y asi se deberia hacer la forma mas optima */
const fragment = document.createDocumentFragment();

/* for(day of days){
    const itemsList = document.createElement("LI");
    itemsList.textContent = day;
    fragment.appendChild(itemsList);

}

dayList.appendChild(fragment); */

/* Crear option */

for(day of days){
    const itemsOption = document.createElement("option");
    itemsOption.setAttribute("value",day);
    itemsOption.textContent=day;
    fragment.appendChild(itemsOption);
}

daySelect.appendChild(fragment);

