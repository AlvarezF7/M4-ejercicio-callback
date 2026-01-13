//FUNCION 1
// fx validar , muestra un prompt ( alerta con metodo promt) que solicite al usuario ingresar un numeo
let dato = prompt("ingrese un Número:");


//2- una vez ingresado validar si efectivamente es un numero , yo creo que con un if-else
    if (!isNaN(dato)){
        //si es numero
    }else {
        error
    //3  llamar al call back para mostrar el mensaje
    //para temporizar la ejecucion del callback
    setTimeout(() => {
        callback(resultado);
    },5000); // creo que esos 5000 significan 5 segundos
    }
//  msj A  correcto si el dato es valido, B error si ingresaron cualquier cosa menos numero


// FUNCION 2 function calcular_y_avisar_despues(numero,callback);

/* 1-calcular sumatoria de numeros impares entre 1 y numero
2- esperar 5 segundos y luego ejecutar callback
3- callback debe mostrar el mensaje " el valor dela sumatoria es N, este resultado 
se obtuvo hace 5 segundos"*/

/*FUNCION 3  calcualr_y_avisar_dependiendo(numero,callback, callbackError)*/