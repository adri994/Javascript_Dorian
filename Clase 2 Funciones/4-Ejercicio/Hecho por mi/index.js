 let libros=[];

class Libro{

    constructor(titulo,autor,año,genero){
        this.titulo = titulo,
        this.autor=autor,
        this.año=año,
        this.genero=genero
    }

    dameInformacion(){
        return alert( `titulo:${this.titulo}\n autor:${this.autor} \n año:${this.año}\n genero:${this.genero}
         `)
    }
}

const validarLibro = (titulo,autor,anio,gender)=>{

    let genero = gender;
    let año = anio.toString();

    if(titulo=="" || autor=="" || año=="" || genero=="" ){


        alert("los campos tienen que rellenar todos\nVuelve a intentarlo");
        return false;

    }else if(año.length!=4){

        alert("te falta\nVuelve a intentarlo");
        return false;

    }else if(genero ==="aventuras" || genero ==="terror" || genero ==="fantasia"){


        return true;
    }
    alert("no es el genero indicado\nVuelve a intentarlo");
    return false;

    
}

const ordenarLibro=()=>{
    libros.sort(function(a, b){
        var x = a.titulo;
        var y = b.titulo;
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
}

const mostrarLibros = () =>{
    for(libro of libros){
        alert(`titulo:${libro.titulo}\n autor:${libro.autor} \n año:${libro.año}\n genero:${libro.  genero}`)
    }
        
}

const agregarLibro = () =>{

     for(;libros.length<3;){  

        let aggTitulo = prompt("Dame un titulo").toLowerCase();
        let aggAutor = prompt("Dame un autor").toLowerCase();
        let aggAnio =parseInt(prompt("Dame un año"));
        let aggGenero = prompt("Dame un genero").toLowerCase();

    
        let comprobacion = validarLibro(aggTitulo,aggAutor,aggAnio,aggGenero);

    
        if (comprobacion){
            let Agglibros = new Libro(aggTitulo,aggAutor,aggAnio,aggGenero);
            Agglibros.dameInformacion()
            libros.push(Agglibros);
            ordenarLibro();

        }
      } 
      mostrarLibros();
}

agregarLibro(); 



