
/* inicio */
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const pass = document.querySelector("#contrasenia");
const form = document.querySelector("#formulario");
const incompleto = document.querySelector("#warnings");
const tituloMain = document.querySelector("#titulo-principal");
const inicio = document.querySelector("#cambioDePagina");
const btnPlay = document.querySelector("#btn-jugar");


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
    if(etrar = true){
        form.innerHTML = "";
        tituloMain.innerHTML = "";
        inicio.innerHTML = `Bienvenido a AdivinAR listo para jugar?
        Nosotros tambien, pero actualmente nos encontramos en remodelacion :(`;

    }
})

// En preparacion

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

for (const nivelDos of nombre){
    dosJson(nombre.id, JSON.stringify(nombre));
}

// NIVEL 3

// Cual de las siguientes no es una comida tipica de Argentina?
const nivelTres = [{id: 5, comida: "Asado",
                    id: 6, comida: "Empanadas",
                    id: 7, comida: "Ceviche",
                    id: 8, comida: ""}]






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