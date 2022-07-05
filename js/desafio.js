//ADIVINA EL JUGADOR DE FÚTBOL. 

//NOMBRES DE LOS JUGADORES.
let nombre1 = "hulk"
let nombre2 = "tevez"
let nombre3 = "julian alvarez"
let nombre4 = "falcao"
let nombre5 = "messi"

//PISTAS PARA ADIVINAR EL JUGADOR.
let pista1 = "ADIVINANZA NÚMERO 1: Brasilero. Tiene nombre de un personaje de Marvel. Jugo bastante tiempo en Zenit de Rusia. Actualmente juega en un equipo de China."
let pista2 = "ADIVINANZA NÚMERO 2: Argentino. Delantero. Jugó en Juventus de Italia. Luego de Juventus, jugó en Argentina y despues se fue a China."
let pista3 = "ADIVINANZA NÚMERO 3: Argentino. Delantero. Tiene de apodo el nombre de un arácnido. Fue comprado por un equipo importante de la Premier League."
let pista4 = "ADIVINANZA NÚMERO 4: Colombiano. Delantero. Ha jugado en España, Inglaterra y Francia. Es uno de los mayores goleadores de su pais natal."
let pista5 = "ADIVINANZA NÚMERO 5: Argentino. Delantero. Ha jugado durante varios años en un mismo equipo desde juveniles. Tiene 3 hijos."

//VIDAS.
let vidas = 5

//UTILICE FUNCIONES, CONDICIONALES Y BUCLES.
let pistas = "x"
let nombres = "y"

function pedirPalabra(definicion, nombres){
    while ((vidas >= 1) && (pistas != nombres)){
        
        pistas = prompt(`${definicion}`).toLowerCase()
        if(pistas != nombres){
            vidas = vidas - 1
            
            if (vidas >= 1){
            alert (` ❌ INCORRECTO. ${vidas} VIDAS RESTANTES ❌`)
            }else{
                alert (" 💔 VUELVE A INTENTARLO. TE QUEDASTE SIN VIDAS 💔")
            }
        }
    }
    
}

pedirPalabra (pista1, nombre1)
pedirPalabra (pista2, nombre2)
pedirPalabra (pista3, nombre3)
pedirPalabra (pista4, nombre4)
pedirPalabra (pista5, nombre5)


//RESPONDIDAS TODAS LAS ADIVINANZAS, DEJO ESTE MENSAJE FELICITANDO.
if (vidas >= 1){
    alert (" 🏆 GANASTE, FELICITACIONES! 🏆")
}