const botonPersonajeJugador = document.getElementById('boton-personaje')
const contenedorPersonajes = document.getElementById("contenedor-personajes")
const seleccionar = document.getElementById("boton-personaje");
const seccionLucha = document.getElementById("contenedor-lucha")
const imgJugadores = document.getElementById('img-jugador')
const imgEnemigo = document.getElementById('img-enemigo')
const botonAtaques= document.getElementById('botones-ataques')
let personajes=[]
let ataques=[];
let opcionPersonaje
let inputLion;
let inputJill;
let inputChris; 
let personajeJugador = document.getElementById('img-jugador');
let personajeEnemigo = document.getElementById('img-enemigo');;
let botonAgua= document.getElementById('boton-agua')
let botonFuego= document.getElementById('boton-fuego')
let botonGranada= document.getElementById('boton-granada')
let ataqueJugador;
let ataqueEnemigo;
let vidaJugador=100;
let vidaEnemigo=100;


class Personajes {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
       
       
    }
}

let lion = new Personajes('Lion','img/lion.png')
let jill = new Personajes('Jill' ,'img/jill.png')
let chris = new Personajes('Chris','img/cr.png')
let albert = new Personajes('albert' ,'./img/albert.png')
let nemesis = new Personajes('nemesis' , './img/nemesis.png')
let salazar= new Personajes('salazar' , './img/salazar.png')
personajes.push(lion,jill,chris)

ataques.push(botonAgua,botonFuego,botonGranada);

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

for (let i = 0; i < ataques.length; i++) {
    ataques[i].addEventListener("click",ataquesPersonajes)
}

function ataquesPersonajes(e){
    const target = e.target
    if(target.alt=="agua"){
        ataqueJugador = "agua"
    }else if (target.alt=="fuego"){
        ataqueJugador= "fuego"
    }else{
        ataqueJugador="granada"
    }
    ataqueEnemigo = ataqueAleatorio();
   
}
function luchaCondicion(ataqueJugador,ata){

    if(ataqueJugador=="agua" && ataqueEnemigo=="agua" || ataqueJugador=="fuego" && ataqueEnemigo=="fuego" || ataqueJugador=="granada" && ataqueEnemigo=="granada"){
        vidaEnemigo=-10
    }else if(ataqueJugador=="granada" && ataqueEnemigo=="agua" || ataqueJugador=="agua" && ataqueEnemigo=="fuego" || ataqueJugador=="fuego" && ataqueEnemigo=="granada"){
        vidaEnemigo=-20
    }else {
        vidaEnemigo=0
    }
   
}






function ataqueAleatorio(){
    let num = aleatorio(1,3)
    return (num==1)? "Agua":(num==2)?"Fuego":"Granada";
}

function mostrarImagen(direccion, nombre) {
  let imagen = `
    <img src="${direccion}" alt="${nombre}" id="${nombre}">
  `;
  return imagen;
}








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



// function ataqueAgua() {
//     ataqueJugador = "AGUA"

    
// }
// function ataqueFuego() {
//     ataqueJugador = "FUEGO"
   
// }
// function ataqueGranada() {
//     ataqueJugador = "GRANADA"
    
// }


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




