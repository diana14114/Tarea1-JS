class Publicacion {
    constructor(titulo, anio) {
        this.titulo = titulo;
        this.anio = anio;
    }
}

class Libro extends Publicacion {
    constructor(titulo, anio, autor, genero) {
        super(titulo, anio)
        this.autor = autor
        this.genero = genero
    }
}

const libros = [];

function aniadirLibro(){
    const titulo = prompt("Ingrese el titulo del libro:")
    const anio = prompt("Ingrese el año:")
    const autor = prompt("Ingrese el autor del libro:")
    const genero = prompt("Ingrese el género del libro:")
    const nuevoLibro = new Libro(titulo, anio, autor, genero)
    libros.push(nuevoLibro)
}

function buscaPorGenero() {
    const genero = prompt("Diga el género a buscar:");
    if (libros.length === 0) {
        console.log("No hay libros disponibles.");
        console.log("\n");
        return;
    }
    let encontrado = false;
    for (let i = 0; i < libros.length; i++) {
        if (libros[i].genero === genero) {
            console.log(`Título: ${libros[i].titulo}`);
            console.log(`Año: ${libros[i].anio}`);
            console.log(`Autor: ${libros[i].autor}`);
            console.log(`Género: ${libros[i].genero}`);
            console.log("\n");
            encontrado = true;
        }
    }
    if (!encontrado) {
        console.log("No hay libros con el género deseado");
        console.log("\n");
    }
}

function listarLibros(){
    if (libros.length === 0) {
        console.log("No hay libros disponibles.");
        console.log("\n");
        return;
    }
    else{
        for (let i = 0; i < libros.length; i++) {
            console.log(`Título: ${libros[i].titulo}`);
            console.log(`Año: ${libros[i].anio}`);
            console.log(`Autor: ${libros[i].autor}`);
            console.log(`Género: ${libros[i].genero}`);
            console.log("\n");
        } 
    }
}

function menu(){
    let seleccion;
    do {
        seleccion = prompt("Seleccione una opción:\n 1. Añadir nuevo libro.\n 2. Buscar libros por género.\n 3. Listado de libros.\n 4. Salir.\n")
        switch (seleccion) {
            case '1':
                aniadirLibro();
                break;
            case '2':
                buscaPorGenero();
                break;
            case '3':
                listarLibros();
                break;
            case '4':
                break;
            default:
                console.log("Seleccione una opción válida.")
                break;
        }
    } while (seleccion !== '4');
}

menu();