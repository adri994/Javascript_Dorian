/* 
Crea una clase Libro
La clase libro tendr� t�tulo, autor, a�o y g�nero.
Crea un m�todo que devuelva toda la informaci�n del libro
Pide 3 libros y gu�rdalos en un array
Los libros se introducir�n al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduzcan vac�os
Validar que el a�o sea un n�mero y que tenga 4 d�gitos
Validar que el g�nero sea: aventuras, terror o fantas�a
Crea una funci�n que muestre todos los libros
Crea una funci�n que muestre los autores ordenados alfab�ticamente
Crea una funci�n que pida un g�nero y muestre la informaci�n de los libros que pertenezcan a ese g�nero usando un el m�todo que devuelve la informaci�n
*/

class Book {
    constructor(title, author, year, gender) {
        this.title = title
        this.author = author
        this.year = year
        this.gender = gender
    }

    getAuthor() {
        return this.author
    }

    getGender() {
        return this.gender
    }

    bookInfo() {
        return `${this.title} es un libro de ${this.gender} escrito por ${this.author} en el a�o ${this.year}`
    }
}

let books = []

while (books.length < 3) {
    let title = prompt('Introduce el t�tulo del libro')
    let author = prompt('Introduce el autor del libro')
    let year = prompt('Introduce el a�o del libro')
    let gender = prompt('Introduce el g�nero del libro').toLowerCase()

    if (title != '' &&
        author != '' &&
        !isNaN(year) &&
        year.length == 4 &&
        (gender == 'aventura' || gender == 'terror' || gender == 'fantas�a')) {

        books.push(new Book(title, author, year, gender))

    }
}

const showAllBooks = () => {
    console.log(books);
}

const showAuthors = () => {
    let authors = []

    for (const book of books) {
        authors.push(book.getAuthor());
    }

    console.log(authors.sort());
}

const showGender = () => {
    const gender = prompt('Introduce el g�nero a buscar')

    for (const book of books) {
        if (book.getGender() == gender) {
            console.log(book.bookInfo())
        }
    }

}

//showAllBooks()
//showAuthors()
showGender()