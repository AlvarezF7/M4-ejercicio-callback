// Funcion 1  validar , muestra un prompt que solicite al usuario ingresar un numeo
let dato = prompt("Ingrese un Número:");


function validar_numero(callback) {
   let resultado;
   if( /^\d+$/.test(dato) ){

       resultado = `${dato} valor ingresado exitosamente`;
   }
    else{
        { /^[a-zA-Z]+$/.test(dato)}
        resultado = `Error el valor ${dato}  no es un número`
    }

    setTimeout(() => {
     callback(resultado);
  }, 3000);
}
 validar_numero((mensaje) => {
    console.log(mensaje);

 })


// FUNCION 2 */
 function calcular_avisar(numero,callback);
    let sumar;
    if(/^\d*[13579]$/.test(sumar)){
        sumar
    }

/* 1-calcular sumatoria de numeros impares entre 1 y numero
2- esperar 5 segundos y luego ejecutar callback
3- callback debe mostrar el mensaje " el valor dela sumatoria es N, este resultado 
se obtuvo hace 5 segundos"*/

/*FUNCION 3  calcualr_y_avisar_dependiendo(numero,callback, callbackError)*/