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
  alert("EL JUGADOR ES HULK.")
})


const botonTevez = document.getElementById("botonTevez")
botonTevez.addEventListener("click", () =>{
    alert("EL JUGADOR ES TEVEZ.")
})

const botonJulianAlvarez = document.getElementById("botonJulianAlvarez")
botonJulianAlvarez.addEventListener("click", () =>{
    alert("EL JUGADOR ES JULIAN ALVAREZ.")
})

const botonFalcao = document.getElementById("botonFalcao")
botonFalcao.addEventListener("click", () =>{
    alert("EL JUGADOR ES FALCAO.")    
})

const botonMessi = document.getElementById("botonMessi")
botonMessi.addEventListener("click", () =>{
    alert("EL JUGADOR ES MESSI.") 
})

const inputColor = document.getElementById("inputColor")
inputColor.addEventListener("input", () => {
    document.body.style.background = inputColor.value
    console.log(inputColor.value)
})


