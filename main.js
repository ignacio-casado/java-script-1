
/* inicio */

/* DOM */
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const pass = document.querySelector("#contrasenia");
const form = document.querySelector("#formulario");
const incompleto = document.querySelector("#warnings");
const tituloMain = document.querySelector("#titulo-principal");
const inicio = document.querySelector("#cambioDePagina");
const btnPlay = document.querySelector("#btn-jugar");
const nivelUnoDiv = document.querySelector("#nivelUno");
const gridUnoDiv = document.querySelector("#imagenes");
const puntajeUno = document.querySelector("#puntaje");
const user = document.querySelector("#user");
const enviarLevelUno = document.querySelector("#btnEnviarUno");

/* puntaje */

function puntajeJuego(){
    let puntajeInicial = 0;
    let respuesta = true;

    if (respuesta){
        puntajeInicial = puntajeInicial + 10;
    }
    if(respuesta = false){
        puntajeInicial = puntajeInicial;
    }
}
/* Sweet alert */
function alertComplete (){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
}
function alertCorrecto (){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Correcto!!!'
      })
}


/* logica de entrar */
form.addEventListener("submit", e =>{
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    incompleto.innerHTML = "";

    if(nombre.value.length <4){
        warnings += `El nombre tiene que tener al menos 5 caracteres <br> `;
        entrar = true;
    }
    if(apellido.value.length <2){
        warnings += `El apellido tiene que tener al menos 3 caracteres <br> `;
        entrar = true;
    }
    if(pass.value.length <7){
        warnings += `La contraseña debe tener al menos 8 caracteres <br>`;
        entrar = true;
    }
    if(entrar){
        incompleto.innerHTML = warnings;
    }
    if(nombre.value.length >4 && apellido.value.length >2 && pass.value.length >7 ){
        form.innerHTML = "";
        tituloMain.innerHTML = "";
        alertComplete();
        inicio.innerHTML = `Bienvenido a AdivinAR listo para jugar?`;  
       
    }


    
})


const enviar = document.getElementById('siguiente');
const edadMessi = 35;

/* funcion temporizador */

/* function temporizador(id, inicio, final){
    this.id = id;
    this.inicio = inicio;
    this.final = final;
    this.contador = this.inicio;

    this.conteoSegundos = function(){
        if (this.contador == this.final){
            this.conteoSegundos = null;
            return;
        }

        document.getElementById(this.id).innerHTML = this.contador--;
        setTimeout(this.conteoSegundos.bind(this), 1000)
    };
}
let temporizador = new temporizador('temporizador', 10, 0)
temporizador();
conteoSegundos();  */

//Donde responder con cambio de display
function mostrar (){
    
    document.getElementById('btnEnviarUno').style.display = "block"; 
}


/* NIVEL 1 */
    
inicio.addEventListener("click", e =>{
    
    e.preventDefault();
    inicio.innerHTML = "";
    nivelUnoDiv.innerHTML = `
    <p>Cuantos años tiene Messi?
        Nivel 1</p>
    <img src="./img/Messi.webp" id= "messiFoto">`;
    
    mostrar();
    const ganador = document.querySelector('#correcto').style.display = "block"; 
    user.addEventListener("submit", e =>{
        document.querySelector('#warningsDos');
    
       
        
        e.preventDefault();
        let paso = false;
        let warningsDos = ``;
       
    
        if(ganador.value >= 1 && ganador  < 20){
            paso = true;
            warningsDos += `Estas muy lejos....`;
        }
        if (ganador.value >= 20 && ganador < 30){
            paso = true;
            warningsDos += `Cerca pero no.....`;
        }
        if (ganador.value >= 30 && ganador < 35){
            paso = true;
            warningsDos += `Muy muy cerca pero no.....`;
        }
        if (ganador.value >= 36){
            paso = true;
            warningsDos += `Te pasaste`;
        }
        if (ganador.value != Number){
            paso = true;
            warningsDos += `Ni siquiera haz tipeado un numero ....`;
        }
        if(paso){
            warningsDos.innerHTML = warningsDos;
        }
        if(ganador.value == 35){
            alertCorrecto();
            nivelUnoDiv.innerHTML = ``;
        }
    })
    
    
})





function usuario (nombre, apellido, password){
    this.nombre = nombre;
    this.apellido = apellido;
    this.password = password;
}


let puntaje = 0;
//  Cada nivel contara con un minuto para realizarse
let reloj = 0; 
// NIVEL 1

// Cuantos años tiene lionel messi ? / INPUT
const divUno = document.querySelector("#nivelUno");
const respuestaUno = document.querySelector("#respuesta");

const nivelUno = [{resultado: 35,}];

const unoJson = JSON.stringify(nivelUno);
localStorage.setItem("nivelUno", "resultado" );

console.log(unoJson)

const functionUno = () =>{
    if(entradaUno = resultado){
        puntaje = puntaje + 10;
        divUno.innerHTML = "";
    }else {
        divUno.innerHTML = "";
        respuesta.innerHTML = `Segui participando`;
    }
}


// NIVEL 2

// Quien fue presidente de la republica Argentina?

const nivelDos = [{id: 1, nombre: "Luis Sáenz Peña", edad: "200",
                    id: 2, nombre: "Ricardo Darin", edad: " 65",
                    id: 3, nombre: "Javier Milei", edad: "51",
                    id: 4, nombre: "Gabriela Sabatini", edad: "52",}];

const dosJson = (nivelDos, opciones) => { localStorage.setItem(nivelDos, opciones )};

/* for (const nivelDos of nombre){
    dosJson(nombre.id, JSON.stringify(nombre));
} */

// NIVEL 3

// Cual de las siguientes no es una comida tipica de Argentina?
const nivelTres = [{id: 5, comida: "Asado",
                    id: 6, comida: "Empanadas",
                    id: 7, comida: "Ceviche",}]




let on = 8/6;


/* validar formulario */
/* let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario (e){
    e.preventDefault();
    let nombre = document.querySelector('#nombre').value;
    let apellido = document.querySelector('#apellido').value;
    let sexo = document.querySelector('#sexo').value;
   
}
/* respuesta */
/* Datos.innerHTML = validarFormulario;

let enviar = document.getElementById("enviar");

enviar.onclick = () =>{
    datos.innerText = `Bienvenido `;
}

let jugarBt = document.getElementById("jugadorAnotado");



let submitBtn = document.getElementById("enviar");

submitBtn.onclick = () =>{
    datos.innerHTML = `Hora de jugar`  */;
/* } */

/* Niveles storage*/

/* Edad */
/* const nivel1 = [{edad: 20,}];

let texto1 = `?`;

 */
/* Comida fav, 4 fotos*/
/* const nivel2 = [{comida: "pizza", id: 1,
                comida: "empanadas", id: 2,
                comida: "asado", id: 3,
                comida: "hamburguesa", id: 4,}]; */
// animal fav ahorcado, imagen ilustrativa
/* const nivel3 = [{animal: "aguila",}] */
/* cancion fav, fragmento  */
/* const nivel4 = [{cancion: "Bicho de ciudad", artista:"Los piojos", id:5,
                cancion: "Bohemia rapsody", artista: "Queen", id: 6,
                cancion: "Rezo por vos", artista: "Charly garcia", id: 7,
                cancion: "Pistola", artista: "L-Gante", id: 8}];

let texto4 = `TEMAZO`; */
/* River  o Boca, foto*/
/* const nivel5 = [{club: "River Plate", id: 9,
                club: "Boca Juniors", id: 10}];

let texto5 = `emoji`;
 */
/*  */
 /* Puntaje */ 