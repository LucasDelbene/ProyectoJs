// ARRAYS, FUNCIONES, DOM, METODOS

class Pistas{
    constructor(id, pais, posicion, equipo, datos){
        this.id = id;
        this.pais = pais;
        this.posicion = posicion;
        this.equipo = equipo;
        this.datos = datos;
    }
}

const pista1 = new Pistas(1, "Brasilero.", "Delantero.", "Jugó bastante tiempo en Zenit de Rusia.", "Tiene nombre de un personaje de Marvel.")
const pista2 = new Pistas(2, "Argentino.", "Delantero.", "Jugó en Juventus de Italia.", "Luego de Juventus, jugó en Argentina y despues se fue a China.")
const pista3 = new Pistas(3, "Argentino.", "Delantero.", "Jugó en un equipo de Argentina.", "Tiene de apodo el nombre de un arácnido y fue comprado por un equipo importante de la Premier League.")
const pista4 = new Pistas(4, "Colombiano.", "Delantero.", "Jugó en equipos de España, Inglaterra y Francia.", "Es uno de los mayores goleadores de su pais natal.")
const pista5 = new Pistas(5, "Argentino.", "Delantero.", "Jugó varios años en un mismo equipo desde juveniles.", "Tiene 3 hijos.")

const arrayPistas = [pista1, pista2, pista3, pista4, pista5]

const divAdivinanzas = document.getElementById("adivinanzas")

arrayPistas.forEach( arrayPistas => {
    divAdivinanzas.innerHTML += 
    `<div id="${arrayPistas.id}" class="pistas">
       <p class="parrafo">PAIS: ${arrayPistas.pais}</p>
       <p class="parrafo">POSICION: ${arrayPistas.posicion}</p>
       <p class="parrafo">EQUIPO: ${arrayPistas.equipo}</p>
       <p class="parrafo">DATOS: ${arrayPistas.datos}</p>
    </div>`
})

const botonHulk = document.getElementById("botonHulk")
botonHulk.addEventListener("click", () =>{
  console.log("EL JUGADOR ES HULK.")
})


const botonTevez = document.getElementById("botonTevez")
botonTevez.addEventListener("click", () =>{
    console.log("EL JUGADOR ES TEVEZ.")
})

const botonJulianAlvarez = document.getElementById("botonJulianAlvarez")
botonJulianAlvarez.addEventListener("click", () =>{
    console.log("EL JUGADOR ES JULIAN ALVAREZ.")
})

const botonFalcao = document.getElementById("botonFalcao")
botonFalcao.addEventListener("click", () =>{
    console.log("EL JUGADOR ES FALCAO.")    
})

const botonMessi = document.getElementById("botonMessi")
botonMessi.addEventListener("click", () =>{
    console.log("EL JUGADOR ES MESSI.") 
})

const inputColor = document.getElementById("inputColor")
inputColor.addEventListener("input", () => {
    document.body.style.background = inputColor.value
    console.log(inputColor.value)
})


// STORAGE & JSON
 
class Persona {
    constructor (nombre, apellido, edad, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
    }
}

const personas = [];

const idFormulario = document.getElementById('formulario');

idFormulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const email = document.getElementById('email').value;

    const persona = new Persona (nombre, apellido, edad, email);
    personas.push(persona); 

    localStorage.setItem('Persona', JSON.stringify(personas));
    idFormulario.reset();

    mostrarInfo(persona);
})


const resultado = document.getElementById('infoPersonas');


//MUESTRO EN localStorage.

const botonRegistro = document.getElementById('registrar');
const datosRegistro = document.getElementById('datosRegistro');

botonRegistro.addEventListener('click', () => {
    const personas = JSON.parse(localStorage.getItem('Persona'));
    let aux = '';
    personas.forEach(persona => {
        aux += `<p class="resultado"> Nombre: ${persona.nombre} </p>
                <p class="resultado"> Apellido: ${persona.apellido}</p>
                <p class="resultado"> Edad: ${persona.edad}</p>
                <p class="resultado"> Correo Electronico: ${persona.email}</p>`
    });
    datosRegistro.innerHTML = aux;
});


