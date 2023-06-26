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
let personajeJugador;
let personajeEnemigo;

class Personajes {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
       
    }
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

if(inputLion.checked){
    personajeJugador =  lion.nombre;
    imgJugadores.innerHTML= mostrarImagen(lion.foto,lion.nombre);
}else if(inputJill.checked){
    personajeJugador =  jill.nombre;
    imgJugadores.innerHTML= mostrarImagen(jill.foto,jill.nombre);
    inputLion.addEventListener('click', function(){
        lion.style.display="none";
        jill.style.display="block";
    });
}else{
    personajeJugador =  chris.nombre;
    imgJugadores.innerHTML= mostrarImagen(chris.foto,chris.nombre);
}

inputLion.addEventListener('click', function(){
    lion.style.display="none";
    jill.style.display="block";
});
inputJill.addEventListener('click', );
inputChris.addEventListener('click', );


// function seccionLucha(){
//     imgJugadores.innerHTML=
// }
function mostrarImagen(direccion,nombre){
    let imagen = `
    <img src=${direccion} alt=${nombre} id=${nombre}>
    `
    return imagen;
}
function personajeLion(){
    contenedorPersonajes.style.display = 'flex'
    seccionLucha.style.display = 'none' 

    personajeJudador = lion.nombre;
     imgJugadores.innerHTML=`<img src="img/lion.png"></img>`
    enemigoAleatorio();
    console.log(personajeJudador)
    console.log(personajeEnemigo)

}
function personajeChris(){
    contenedorPersonajes.style.display = 'flex'
    seccionLucha.style.display = 'none' 
    personajeJudador = chris.nombre;
    imgJugadores.innerHTML=`<img src="img/cr.png"></img>`
    enemigoAleatorio();

    
}
function personajeJill(){
    contenedorPersonajes.style.display = 'flex'
    seccionLucha.style.display = 'none' 
    personajeJudador = jill.nombre;
    imgJugadores.innerHTML=`<img src="img/jill.png"></img>`
    enemigoAleatorio();
    
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
        personajeEnemigo=albert.nombre
    }else if(num==2){
        personajeEnemigo=nemesis.nombre
    }else{
        personajeEnemigo=salazar.nombre
    }  
}


function reiniciarJuego() {
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}




