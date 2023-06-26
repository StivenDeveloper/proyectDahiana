const botonPersonajeJugador = document.getElementById('boton-personaje')
const contenedorPersonajes = document.getElementById("contenedor-personajes")
const seleccionar = document.getElementById("boton-personaje");
const seccionLucha = document.getElementById("contenedor-lucha")
const imgJugadores = document.getElementById('img-jugador')
const imgEnemigo = document.getElementById('img-enemigo')
let personajes=[]
let opcionPersonaje
let inputLion;
let inputJill;
let inputChris;
let personajeJugador = document.getElementById('img-jugador');
let personajeEnemigo = document.getElementById('img-enemigo');;

class Personajes {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
       
    }
}
contenedorPersonajes.addEventListener("click", function(event) {
    const target = event.target;
    if (target.tagName === "IMG") {
      const imagenes = contenedorPersonajes.getElementsByTagName("img");
      for (let i = 0; i < imagenes.length; i++) {
        const imagen = imagenes[i];
        imagen.style.display = "none";
        imagen.classList.remove("move-left"); 
      }
      enemigoAleatorio();
      personajeJugador.innerHTML = mostrarImagen(target.src, target.alt);
      target.classList.add("move-left"); 
    }
  });




function mostrarImagen(direccion, nombre) {
  let imagen = `
    <img src="${direccion}" alt="${nombre}" id="${nombre}">
  `;
  return imagen;
}


let lion = new Personajes('Lion', 'img/lion.png', 100)
let jill = new Personajes('Jill' , 'img/jill.png', 100)
let chris = new Personajes('Chris' , 'img/cr.png',100)
let albert = new Personajes('albert' , './img/Albert.png', 100)
let nemesis = new Personajes('nemesis' , './img/nemesis.png',100 )
let salazar= new Personajes('salazar' , './img/salazar.png', 100)


personajes.push(lion,jill,chris)



personajes.forEach((Personajes)=>{
    opcionPersonaje=`<input type="radio" name="personaje" id=${Personajes.nombre}/>
    <label id=${Personajes.nombre} class="personajes" for=${Personajes.nombre}
        <p>${Personajes.nombre}</p>
        <img src=${Personajes.foto} id=${Personajes.nombre} alt=${Personajes.nombre}
    </label> `

    contenedorPersonajes.innerHTML += opcionPersonaje;    
})



inputLion = document.getElementById('Lion');
inputJill= document.getElementById('Jill');
inputChris =document.getElementById('Chris');




// function seccionLucha(){
//     imgJugadores.innerHTML=
// }
function mostrarImagen(direccion,nombre){
    let imagen = `
    <img src=${direccion} alt=${nombre} id=${nombre}>
    `
    return imagen;
}

function ataqueAgua() {
    ataqueJugador = "AGUA"
    
}
function ataqueFuego() {
    ataqueJugador = "FUEGO"
   
}
function ataqueGranada() {
    ataqueJugador = "GRANADA"
    
}



function enemigoAleatorio(){
    let num = aleatorio(1,3);
    if(num==1){
        personajeEnemigo.innerHTML= mostrarImagen("./img/albert.png", "Albert");
    }else if(num==2){
        personajeEnemigo.innerHTML= mostrarImagen("./img/nemesis.png", "Nemesis");
    }else{
        personajeEnemigo.innerHTML= mostrarImagen("./img/salazar.png", "salazar");
    }  
}


function reiniciarJuego() {
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}




