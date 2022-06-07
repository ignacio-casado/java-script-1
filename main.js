
/* Juego adivina mi edad */



let numeroDeUsuario = 1;
let = menu;
let puntaje = 0;
let contadorDeUsuario = 0;

/* definimos funciones */

const nombreDeUsuario = () =>{
    alert("Bienvenido a juega con Ignacio");
    let ingreseNombre = prompt("Ingrese su nombre");
    let ingreseApellido = prompt("Ingrese su apellido");
    mensajeAlert(`Bienvenido ${ingreseNombre} ${ingreseApellido} sos el jugador numero ${contadorDeUsuario}`);
}

const contador = () =>{
    if(ingreseNombre == true && ingreseApellido == true){
        contadorDeUsuario = contadorDeUsuario + 1;
    }
}
const juego = () => {
    const edad = 20;
    alert(`Ahora si ${ingreseNombre} ${ingreseApellido} hora de jugar`);

    for (let i = 15; i >= 0; i--){

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
}

const puntuacion = () =>{
    if (adivinar = true){
        puntaje = puntaje + 10;
        alert(`Tu puntaje es de ${puntaje} puntos`);
    }
}

function mensajeAlert(mensaje){
    alert(mensaje);
}

/* menu del juego */
do{
    let menu = Number(prompt(`
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



