
/* Juego adivina mi edad */



let numeroDeUsuario = 1;
let menu = "menu" ;
let puntaje = 0;
let contadorDeUsuario = 0;
const edad = 20;

/* definimos funciones */

/* const nombreDeUsuario = () =>{
    alert("Bienvenido a juega con Ignacio");
    let ingreseNombre = prompt("Ingrese su nombre");
    let ingreseApellido = prompt("Ingrese su apellido");
    mensajeAlert(`Bienvenido ${ingreseNombre} ${ingreseApellido} sos el jugador numero ${contadorDeUsuario}`);
    
} */

/* const contador = () =>{
    if(ingreseNombre == true && ingreseApellido == true){
        contadorDeUsuario = contadorDeUsuario + 1;
    }
    else{
        alert(`Se cometio un error en los datos por favor reingresar nombre y apellido`);
    }
}
 
/* alert(`Ahora si ${ingreseNombre} ${ingreseApellido} hora de jugar`); */

/* const juego = () => {
   

    for (let i = 14; i >= 0; i--){

        let adivinar = Number(prompt("Hola soy Ignacio Casado si adivinas mi edad te ganas una hamburguesa tienes 15 intentos"));

        if(adivinar === edad){
            alert("Felicitaciones te has ganado una hamburguesa");
            break;
        }
        else if (adivinar !== edad) {
            alert(`Edad equivocada te quedan ${i} intentos`);
            continue;
        }
        else if (!Number(adivinar)){
            alert("Por favor ingrese un numero");
            continue;
        }
}
} */ 

/* const puntuacion = () =>{
    if (adivinar = true){
        puntaje = puntaje + 10;
        alert(`Tu puntaje es de ${puntaje} puntos`);
    }
}

function mensajeAlert(mensaje){
    alert(mensaje);
}
 */

/* menu del juego */
/* do{
    menu = Number(prompt(`
    Bienvenidos al juego de adivinar mi edad

    1 - Registrar nombre de usuario.
    2 - Juego.
    3 - puntuacion.
    4 - Salir.
    `))


    switch (menu){
        case 1: {
            nombreDeUsuario();
            break;
        }
        case 2: {
            juego();
            break;
        }
        case 3: {
            puntuacion();
            break;
        }
         case 4: {
            alert("Hasta pronto");
            break;
        }
       
        default: {
            alert("Dato no valido");
        }

    }
}while(menu !== 4 );

/* array */
/* let maximosGanadores = [{id:  4, nombre: "Cristiano Ronaldo", puntaje: 25000, fecha: "23/02/2002", sexo: "M"},
                        {id: 2, nombre: "Gloria Martinez", puntaje: 45000, fecha: "26/08/2007", sexo: "F" },
                        {id: 1, nombre: "Luis Gutierrez", puntaje: 4000, fecha: "05/03/2020", sexo: "M"},
                        {id: 5, nombre: "Chris Evans", puntaje: 10900, fecha: "02/08/2010", sexo: "M"  },
                        {id: 8, nombre: "Fernanda Carolina", puntaje: 7800, fecha: "13/09/2009", sexo: "Otro" },
                        {id: 9, nombre: "Juan Quintero", puntaje: 67000, fecha: "09/12/2018", sexo: "M" },
                        {id: 10, nombre: "Michael Ruiz", puntaje: 23300, fecha: "12/10/2013", sexo: "Otro"  },
                        {id: 3, nombre: "Igncaio Casad", puntaje: 12000, fecha: "20/08/2021", sexo: "M" },
                        {id: 6, nombre: "Martina Rodriguez", puntaje: 19000, fecha: "08/06/2006", sexo: "F" },
                        {id: 7, nombre: "Martina Rodriguez", puntaje: 19000, fecha: "24/03/2021", sexo: "F" }];

 */

/* let navegar = Number(prompt(
    `Desea ver los maximos ganadores del juego?
    1 - Si
    2 - No
                            `)) */
/* do{
    if(navegar == 1){
        console.log( maximosGanadores);
        break;
    }
    else if(navegar == 2){
        break;
    }
    else{
        break;
    }
}while(navegar = true);
 
 */
/* let busqueda = Number(prompt(
    `
     1 - filtrar por puntaje
     2 - filtrar pos sexo`))

switch(busqueda){
    case 1: {
        const buscadorPuntaje = maximosGanadores.filter((el) = el.puntaje < 67000);
        console.log(buscadorPuntaje);
        break;
       
    }
    case 2: {
        const buscadorSexo = maximosGanadores.find((el) = el.sexo )
        console.log(buscadorSexo);
        break;
    }
}
 */




/* 
const edadI = 20;

const juego = () => {

    e.preventDefault();
   

    for (let i = 14; i >= 0; i--){

        let adivinar = document.getElementById("numberIgnacio");

        if(adivinar === edadI){
            respuesta.innerText = "Adivinaste felicitaciones";
            break;
        }
        else if (adivinar !== edadI) {
            respuesta.innerText =`Edad equivocada te quedan ${i} intentos`;
            continue;
        }
        else if (!Number(adivinar)){
            respuesta.innerText = `Ni siquiera ES UN NUMERO!!!!`;
            continue;
        }
}
}

const contador = () =>{
    
}
/* datos es p en div#contenedor-anotado */
/* let datos = document.getElementById("datos"); */ 

/* inputs */
const nombre = document.querySelectorById("nombre");
const apellido = document.querySelectorById("apellido");
const pass = document.querySelectorById("contrasenia");
const form = document.querySelectorById("formulario");
const incompleto = document.querySelectorById("warnings");


form.addEventListener("submit", e =>{
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    incompleto.innerHTML = "";

    if(nombre.value.lenght <4){
        warnings += `El nombre tiene que tener al menos 5 caracteres <br>`;
        entrar = true;
    }
    if(apellido.value.lenght <2){
        warnings += `El apellido tiene que tener al menos 3 caracteres <br>`;
        entrar = true;
    }
    if(pass.value.lenght <7){
        warnings += `La contraseña debe tener al menos 8 caracteres <br>`;
        entrar = true;
    }
    if(entrar){
        incompleto.innerHTML = warnings;
    }
})

console.log(form);

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