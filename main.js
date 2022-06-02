
/* Juego adivina mi edad */

const edad = 20;

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
